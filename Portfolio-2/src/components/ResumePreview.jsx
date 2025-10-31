import { Eye } from 'lucide-react';
import { generateResumeHTML } from '../utils/resumeTemplates';

const ResumePreview = ({ resumeData, templateName }) => {
  if (!resumeData) return null;

  const html = generateResumeHTML(resumeData, templateName);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-2 mb-6">
        <Eye className="text-purple-600" size={24} />
        <h3 className="text-2xl font-bold text-gray-900">Preview</h3>
      </div>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <div 
          className="bg-white p-8 overflow-auto"
          style={{ 
            maxHeight: '1000px',
            fontFamily: 'Arial, sans-serif'
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      
      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Preview Tip:</strong> This is how your resume will appear. The actual PDF export will maintain perfect formatting for ATS systems.
        </p>
      </div>
    </div>
  );
};

export default ResumePreview;
