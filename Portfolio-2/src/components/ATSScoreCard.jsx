import { CheckCircle, AlertCircle, TrendingUp, Award } from 'lucide-react';

const ATSScoreCard = ({ score }) => {
  const getScoreColor = (value) => {
    if (value >= 90) return 'text-green-600';
    if (value >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (value) => {
    if (value >= 90) return 'bg-green-100';
    if (value >= 75) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200">
      <div className="flex items-center gap-2 mb-4">
        <Award className="text-purple-600" size={24} />
        <h3 className="text-xl font-bold text-gray-900">ATS Optimization Score</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Overall ATS Score</div>
          <div className={`text-3xl font-bold ${getScoreColor(score.atsScore)}`}>
            {score.atsScore}%
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Keyword Match</div>
          <div className={`text-3xl font-bold ${getScoreColor(score.keywordMatch)}`}>
            {score.keywordMatch}%
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-sm text-gray-600 mb-1">Formatting Score</div>
          <div className={`text-3xl font-bold ${getScoreColor(score.formattingScore)}`}>
            {score.formattingScore}%
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="text-green-600" size={20} />
            <h4 className="font-semibold text-gray-900">Strengths</h4>
          </div>
          <ul className="space-y-2">
            {score.strengths?.map((strength, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="text-blue-600" size={20} />
            <h4 className="font-semibold text-gray-900">Suggestions</h4>
          </div>
          <ul className="space-y-2">
            {score.suggestions?.map((suggestion, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-blue-600 mt-1">→</span>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {score.missingKeywords && score.missingKeywords.length > 0 && (
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="text-yellow-600" size={18} />
            <h4 className="font-semibold text-gray-900">Missing Keywords</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {score.missingKeywords.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white text-yellow-800 text-sm rounded-full border border-yellow-300"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
        <p className="text-sm text-gray-700">
          <strong>Note:</strong> Your resume has been optimized to score {score.atsScore}% on ATS systems. 
          The content is written in a natural, human-like style to avoid AI detection while maintaining 
          professional quality and keyword optimization.
        </p>
      </div>
    </div>
  );
};

export default ATSScoreCard;
