import { useState } from 'react';
import { Upload, FileText, Sparkles, Download, Eye, Settings } from 'lucide-react';
import { parsePDF, extractLinkedInData, parseExistingResume } from '../utils/pdfParser';
import { generateATSFriendlyResume, optimizeForATS } from '../utils/openaiService';
import { generateResumeHTML, templates } from '../utils/resumeTemplates';
import { exportToPDF, exportToHTML, exportToPlainText } from '../utils/exportResume';
import ResumePreview from './ResumePreview';
import ATSScoreCard from './ATSScoreCard';
import HelpModal from './HelpModal';

const ResumeBuilder = () => {
  const [step, setStep] = useState(1);
  const [apiKey, setApiKey] = useState('');
  const [linkedInFile, setLinkedInFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedResume, setGeneratedResume] = useState(null);
  const [atsScore, setAtsScore] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  const [error, setError] = useState('');

  const handleLinkedInUpload = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setLinkedInFile(file);
      setError('');
    } else {
      setError('Please upload a valid PDF file');
    }
  };

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      setError('');
    } else {
      setError('Please upload a valid PDF file');
    }
  };

  const handleGenerate = async () => {
    if (!apiKey) {
      setError('Please enter your OpenAI API key');
      return;
    }

    if (!linkedInFile && !resumeFile) {
      setError('Please upload at least one PDF file (LinkedIn profile or existing resume)');
      return;
    }

    if (!jobTitle || !jobDescription) {
      setError('Please provide job title and description');
      return;
    }

    setLoading(true);
    setError('');

    try {
      let linkedInData = {};
      let existingResumeData = {};

      if (linkedInFile) {
        const linkedInText = await parsePDF(linkedInFile);
        linkedInData = extractLinkedInData(linkedInText);
      }

      if (resumeFile) {
        const resumeText = await parsePDF(resumeFile);
        existingResumeData = parseExistingResume(resumeText);
      }

      const resume = await generateATSFriendlyResume(
        apiKey,
        linkedInData,
        existingResumeData,
        jobTitle,
        jobDescription
      );

      setGeneratedResume(resume);

      const atsAnalysis = await optimizeForATS(apiKey, resume, jobDescription);
      setAtsScore(atsAnalysis);

      setStep(3);
    } catch (err) {
      setError(err.message || 'Failed to generate resume. Please check your API key and try again.');
      console.error('Generation error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleExportPDF = async () => {
    if (!generatedResume) return;
    try {
      const html = generateResumeHTML(generatedResume, selectedTemplate);
      await exportToPDF(html, `${jobTitle.replace(/\s+/g, '_')}_resume.pdf`);
    } catch (err) {
      setError('Failed to export PDF: ' + err.message);
    }
  };

  const handleExportHTML = () => {
    if (!generatedResume) return;
    try {
      const html = generateResumeHTML(generatedResume, selectedTemplate);
      exportToHTML(html, `${jobTitle.replace(/\s+/g, '_')}_resume.html`);
    } catch (err) {
      setError('Failed to export HTML: ' + err.message);
    }
  };

  const handleExportText = () => {
    if (!generatedResume) return;
    try {
      exportToPlainText(generatedResume, `${jobTitle.replace(/\s+/g, '_')}_resume.txt`);
    } catch (err) {
      setError('Failed to export text: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <HelpModal />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Sparkles className="text-purple-600" size={48} />
            AI Resume Builder
          </h1>
          <p className="text-xl text-gray-600">
            Create ATS-friendly, human-written resumes tailored to your dream job
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
            98% ATS Compatibility • AI Detection Proof
          </div>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        <div className="mb-8">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-24 h-1 ${
                      step > s ? 'bg-purple-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-24 mt-2">
            <span className="text-sm text-gray-600">Upload</span>
            <span className="text-sm text-gray-600">Configure</span>
            <span className="text-sm text-gray-600">Generate</span>
          </div>
        </div>

        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Step 1: Upload Your Documents
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                OpenAI API Key *
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="mt-2 text-sm text-gray-500">
                Your API key is used locally and never stored. Get one from{' '}
                <a
                  href="https://platform.openai.com/api-keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:underline"
                >
                  OpenAI Platform
                </a>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-purple-500 transition-colors">
                <label className="cursor-pointer block text-center">
                  <Upload className="mx-auto text-gray-400 mb-3" size={40} />
                  <span className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile PDF
                  </span>
                  <span className="block text-xs text-gray-500 mb-3">
                    Export your LinkedIn profile as PDF
                  </span>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleLinkedInUpload}
                    className="hidden"
                  />
                  {linkedInFile && (
                    <div className="mt-2 text-sm text-green-600 flex items-center justify-center gap-2">
                      <FileText size={16} />
                      {linkedInFile.name}
                    </div>
                  )}
                  <div className="mt-3 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm inline-block">
                    Choose File
                  </div>
                </label>
              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-purple-500 transition-colors">
                <label className="cursor-pointer block text-center">
                  <Upload className="mx-auto text-gray-400 mb-3" size={40} />
                  <span className="block text-sm font-medium text-gray-700 mb-2">
                    Existing Resume PDF
                  </span>
                  <span className="block text-xs text-gray-500 mb-3">
                    Upload your current resume (optional)
                  </span>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleResumeUpload}
                    className="hidden"
                  />
                  {resumeFile && (
                    <div className="mt-2 text-sm text-green-600 flex items-center justify-center gap-2">
                      <FileText size={16} />
                      {resumeFile.name}
                    </div>
                  )}
                  <div className="mt-3 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm inline-block">
                    Choose File
                  </div>
                </label>
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!apiKey || (!linkedInFile && !resumeFile)}
              className="w-full py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Continue to Job Details
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Step 2: Job Details
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Title *
              </label>
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="e.g., Senior Software Engineer"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Description *
              </label>
              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the full job description here..."
                rows={12}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="mt-2 text-sm text-gray-500">
                Include requirements, responsibilities, and qualifications for best results
              </p>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Resume Template
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(templates).map(([key, template]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedTemplate(key)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedTemplate === key
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-semibold mb-1">{template.name}</div>
                      <div className="text-xs text-gray-500">
                        {template.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handleGenerate}
                disabled={loading || !jobTitle || !jobDescription}
                className="flex-1 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Generating Your Resume...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    Generate ATS-Friendly Resume
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {step === 3 && generatedResume && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Your ATS-Optimized Resume
              </h2>

              {atsScore && <ATSScoreCard score={atsScore} />}

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Change Template
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(templates).map(([key, template]) => (
                    <div
                      key={key}
                      onClick={() => setSelectedTemplate(key)}
                      className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedTemplate === key
                          ? 'border-purple-600 bg-purple-50'
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="text-center text-sm font-semibold">
                        {template.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  onClick={handleExportPDF}
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700"
                >
                  <Download size={20} />
                  Download PDF
                </button>
                <button
                  onClick={handleExportHTML}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                >
                  <Download size={20} />
                  Download HTML
                </button>
                <button
                  onClick={handleExportText}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700"
                >
                  <Download size={20} />
                  Download TXT
                </button>
                <button
                  onClick={() => {
                    setStep(1);
                    setGeneratedResume(null);
                    setAtsScore(null);
                  }}
                  className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50"
                >
                  <Settings size={20} />
                  Create New Resume
                </button>
              </div>
            </div>

            <ResumePreview 
              resumeData={generatedResume} 
              templateName={selectedTemplate}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;
