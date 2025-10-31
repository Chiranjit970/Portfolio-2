import { X, HelpCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

const HelpModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-50"
        aria-label="Help"
      >
        <HelpCircle size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Resume Builder Guide</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <section>
                <h3 className="text-xl font-bold text-purple-600 mb-3 flex items-center gap-2">
                  <CheckCircle size={20} />
                  How It Works
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Upload your LinkedIn profile PDF and/or existing resume</li>
                  <li>Enter the job title and paste the complete job description</li>
                  <li>AI analyzes your background and the job requirements</li>
                  <li>Generates a tailored, ATS-optimized resume in seconds</li>
                  <li>Review your ATS score and download in multiple formats</li>
                </ol>
              </section>

              <section>
                <h3 className="text-xl font-bold text-purple-600 mb-3">
                  Getting Your LinkedIn PDF
                </h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ol className="list-decimal list-inside space-y-1 text-gray-700">
                    <li>Go to your LinkedIn profile page</li>
                    <li>Click "More" in the introduction section</li>
                    <li>Select "Save to PDF"</li>
                    <li>Download and upload the file here</li>
                  </ol>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-purple-600 mb-3">
                  ATS Optimization Tips
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <CheckCircle size={16} />
                      Do's
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✓ Use standard section headers</li>
                      <li>✓ Include relevant keywords naturally</li>
                      <li>✓ Use simple, clean formatting</li>
                      <li>✓ Quantify achievements with numbers</li>
                      <li>✓ Spell out acronyms first</li>
                      <li>✓ Use standard fonts (Arial, Calibri)</li>
                      <li>✓ Save as PDF or DOCX</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      <AlertTriangle size={16} />
                      Don'ts
                    </h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>✗ Avoid tables and text boxes</li>
                      <li>✗ No images or graphics</li>
                      <li>✗ Don't use headers/footers</li>
                      <li>✗ Avoid fancy fonts</li>
                      <li>✗ No multiple columns</li>
                      <li>✗ Skip personal pronouns</li>
                      <li>✗ Don't keyword stuff</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-purple-600 mb-3">
                  Writing Tips for Human-Like Content
                </h3>
                <div className="bg-purple-50 p-4 rounded-lg space-y-2 text-gray-700">
                  <p>Our AI is trained to write naturally, but here are tips for the best results:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Provide detailed job descriptions for better keyword matching</li>
                    <li>Include metrics and numbers in your source documents</li>
                    <li>The AI varies vocabulary and sentence structure automatically</li>
                    <li>Content is written in first-person perspective (without using "I")</li>
                    <li>Avoids common AI phrases like "spearheaded" or "leveraged synergies"</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-purple-600 mb-3">
                  Template Selection
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Professional:</strong> Best for corporate, finance, and traditional industries</p>
                  <p><strong>Modern:</strong> Great for tech, startups, and creative roles</p>
                  <p><strong>Minimal:</strong> Maximum ATS compatibility, works everywhere</p>
                  <p><strong>Executive:</strong> Ideal for senior leadership and C-level positions</p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-purple-600 mb-3">
                  Privacy & Security
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg text-gray-700">
                  <ul className="space-y-1">
                    <li>✓ Your API key is never stored or saved</li>
                    <li>✓ All processing happens in your browser</li>
                    <li>✓ Files are processed in memory only</li>
                    <li>✓ No data sent to external servers (except OpenAI)</li>
                    <li>✓ Your information stays private and secure</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-purple-600 mb-3">
                  Troubleshooting
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">PDF upload fails?</p>
                    <p className="text-sm text-gray-600">Ensure file is a valid, non-password-protected PDF</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Generation error?</p>
                    <p className="text-sm text-gray-600">Check your API key, credits, and internet connection</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Low ATS score?</p>
                    <p className="text-sm text-gray-600">Try a different template or provide more detailed job description</p>
                  </div>
                </div>
              </section>

              <section className="border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-purple-600 mb-3">
                  Pro Tips
                </h3>
                <div className="bg-yellow-50 p-4 rounded-lg space-y-2 text-gray-700">
                  <p>🎯 <strong>Tailor each resume:</strong> Customize for every application</p>
                  <p>📊 <strong>Use metrics:</strong> Include numbers, percentages, and concrete achievements</p>
                  <p>🔍 <strong>Keywords matter:</strong> But use them naturally in context</p>
                  <p>✏️ <strong>Always proofread:</strong> Review before sending</p>
                  <p>🧪 <strong>Test it:</strong> Run through free ATS checkers online</p>
                  <p>🔄 <strong>Update regularly:</strong> Keep your source documents current</p>
                </div>
              </section>
            </div>

            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700"
              >
                Got it, let's build my resume!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpModal;
