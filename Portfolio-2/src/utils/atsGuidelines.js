export const atsGuidelines = {
  formatting: {
    fonts: ['Arial', 'Calibri', 'Times New Roman', 'Georgia', 'Helvetica'],
    fontSize: {
      name: '24pt',
      section: '13pt',
      body: '11pt',
      details: '10pt'
    },
    spacing: {
      sections: '20px',
      items: '12px',
      lines: '1.4-1.6'
    },
    avoid: [
      'Tables',
      'Text boxes',
      'Headers and footers',
      'Images and graphics',
      'Multiple columns',
      'Special characters',
      'Fancy fonts',
      'Colored backgrounds'
    ]
  },
  
  sections: {
    required: [
      'Contact Information',
      'Professional Summary or Objective',
      'Work Experience',
      'Education',
      'Skills'
    ],
    optional: [
      'Certifications',
      'Projects',
      'Publications',
      'Languages',
      'Volunteer Work',
      'Professional Affiliations'
    ],
    standardHeaders: [
      'Professional Experience',
      'Work Experience',
      'Professional Summary',
      'Summary',
      'Education',
      'Skills',
      'Technical Skills',
      'Certifications',
      'Professional Development'
    ]
  },
  
  content: {
    bestPractices: [
      'Use strong action verbs',
      'Include quantifiable achievements',
      'Tailor content to job description',
      'Use industry-specific keywords',
      'Spell out acronyms on first use',
      'Use standard date formats',
      'Include relevant keywords naturally',
      'Keep bullet points concise',
      'Focus on achievements, not just duties',
      'Use consistent tense (past for previous roles, present for current)'
    ],
    actionVerbs: [
      'Achieved', 'Improved', 'Trained', 'Managed', 'Created',
      'Resolved', 'Volunteered', 'Influenced', 'Increased', 'Decreased',
      'Led', 'Developed', 'Implemented', 'Streamlined', 'Coordinated',
      'Analyzed', 'Designed', 'Built', 'Launched', 'Optimized'
    ],
    avoidPhrases: [
      'Responsible for',
      'Duties included',
      'Hard worker',
      'Team player',
      'Go-getter',
      'Self-starter (use sparingly)',
      'Thinks outside the box',
      'Best of breed',
      'Synergy',
      'Leverage (overused)'
    ]
  },
  
  fileFormats: {
    preferred: ['.docx', '.pdf'],
    avoid: ['.jpg', '.png', '.pages'],
    notes: [
      'PDF preserves formatting across systems',
      'DOCX is easily parsed by most ATS',
      'Avoid scanned images of resumes',
      'Use text-based PDFs, not image-based'
    ]
  },
  
  keywords: {
    tips: [
      'Mirror language from job description',
      'Include both acronyms and full terms',
      'Use industry-standard terminology',
      'Include technical skills explicitly',
      'Add soft skills when relevant',
      'Use variations of key terms',
      'Don\'t keyword stuff',
      'Make keywords contextual'
    ],
    categories: [
      'Technical skills',
      'Soft skills',
      'Certifications',
      'Tools and technologies',
      'Methodologies',
      'Industry terms',
      'Job-specific requirements'
    ]
  },
  
  commonMistakes: [
    'Using tables for layout',
    'Adding photos or graphics',
    'Using non-standard section headers',
    'Including references on resume',
    'Using personal pronouns (I, me, my)',
    'Adding salary information',
    'Including irrelevant work experience',
    'Using fancy formatting or fonts',
    'Submitting wrong file format',
    'Having spelling or grammar errors',
    'Using a two-column layout',
    'Adding headers/footers with contact info'
  ],
  
  lengthGuidelines: {
    entrylevel: '1 page',
    midLevel: '1-2 pages',
    senior: '2 pages',
    executive: '2-3 pages',
    notes: [
      'Quality over quantity',
      'Relevance is key',
      'Cut outdated experience',
      'Focus on recent 10-15 years'
    ]
  },
  
  contactInfo: {
    required: ['Full Name', 'Email', 'Phone Number', 'Location (City, State)'],
    optional: ['LinkedIn URL', 'Portfolio Website', 'GitHub (for tech roles)'],
    avoid: ['Full street address', 'Photo', 'Age', 'Marital status', 'Social Security Number']
  },
  
  scanningTips: [
    'ATS reads top to bottom, left to right',
    'Keep most important info near top',
    'Use standard fonts for better OCR',
    'Ensure sufficient contrast',
    'Test your resume with ATS simulators',
    'Use standard bullet points (•)',
    'Avoid background colors or images',
    'Save with descriptive filename: FirstName_LastName_Resume.pdf'
  ]
};

export const getKeywordsFromJobDescription = (jobDescription) => {
  const keywords = new Set();
  
  const commonTechnical = [
    'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'SQL', 'AWS',
    'Docker', 'Kubernetes', 'Git', 'API', 'REST', 'Agile', 'Scrum'
  ];
  
  const commonSoft = [
    'leadership', 'communication', 'problem-solving', 'analytical',
    'collaborative', 'strategic', 'innovative', 'detail-oriented'
  ];
  
  const words = jobDescription.toLowerCase().split(/\W+/);
  
  commonTechnical.forEach(tech => {
    if (jobDescription.toLowerCase().includes(tech.toLowerCase())) {
      keywords.add(tech);
    }
  });
  
  commonSoft.forEach(skill => {
    if (words.includes(skill)) {
      keywords.add(skill);
    }
  });
  
  return Array.from(keywords);
};

export const validateATSCompliance = (resumeHTML) => {
  const issues = [];
  
  if (resumeHTML.includes('<table')) {
    issues.push('Contains tables - may not parse correctly');
  }
  
  if (resumeHTML.includes('background-image') || resumeHTML.includes('<img')) {
    issues.push('Contains images - remove for better ATS compatibility');
  }
  
  if (resumeHTML.match(/font-family:[^;]*?(?!Arial|Calibri|Times|Georgia|Helvetica)/i)) {
    issues.push('Uses non-standard fonts');
  }
  
  if (!resumeHTML.includes('Experience') && !resumeHTML.includes('Work History')) {
    issues.push('Missing standard Experience section header');
  }
  
  if (!resumeHTML.includes('Education')) {
    issues.push('Missing Education section');
  }
  
  if (!resumeHTML.includes('Skills')) {
    issues.push('Missing Skills section');
  }
  
  return {
    compliant: issues.length === 0,
    issues: issues,
    score: Math.max(0, 100 - (issues.length * 15))
  };
};

export default atsGuidelines;
