export const templates = {
  professional: {
    name: 'Professional',
    description: 'Clean, ATS-friendly format perfect for corporate positions',
    colors: {
      primary: '#2C3E50',
      secondary: '#34495E',
      accent: '#3498DB'
    }
  },
  modern: {
    name: 'Modern',
    description: 'Contemporary design with subtle styling, still ATS-compatible',
    colors: {
      primary: '#1A1A2E',
      secondary: '#16213E',
      accent: '#0F3460'
    }
  },
  minimal: {
    name: 'Minimal',
    description: 'Ultra-clean design with maximum ATS compatibility',
    colors: {
      primary: '#000000',
      secondary: '#333333',
      accent: '#666666'
    }
  },
  executive: {
    name: 'Executive',
    description: 'Sophisticated format for senior-level positions',
    colors: {
      primary: '#1C2833',
      secondary: '#273746',
      accent: '#5D6D7E'
    }
  }
};

export const generateResumeHTML = (resumeData, templateName = 'professional') => {
  const template = templates[templateName] || templates.professional;
  const { contact, summary, experience, skills, education, certifications } = resumeData;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${contact.name} - Resume</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Calibri', 'Arial', sans-serif;
            font-size: 11pt;
            line-height: 1.4;
            color: #000000;
            max-width: 8.5in;
            margin: 0 auto;
            padding: 0.5in;
            background: white;
        }
        
        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid ${template.colors.primary};
            padding-bottom: 15px;
        }
        
        .name {
            font-size: 24pt;
            font-weight: bold;
            color: ${template.colors.primary};
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .contact-info {
            font-size: 10pt;
            color: #333333;
            line-height: 1.6;
        }
        
        .contact-info span {
            margin: 0 10px;
        }
        
        .section {
            margin-bottom: 20px;
        }
        
        .section-title {
            font-size: 13pt;
            font-weight: bold;
            color: ${template.colors.primary};
            text-transform: uppercase;
            border-bottom: 1px solid ${template.colors.secondary};
            padding-bottom: 5px;
            margin-bottom: 12px;
            letter-spacing: 0.5px;
        }
        
        .summary-text {
            text-align: justify;
            line-height: 1.5;
            margin-bottom: 5px;
        }
        
        .experience-item {
            margin-bottom: 18px;
            page-break-inside: avoid;
        }
        
        .job-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 5px;
        }
        
        .job-title {
            font-weight: bold;
            font-size: 11pt;
            color: ${template.colors.primary};
        }
        
        .company-name {
            font-weight: bold;
            font-size: 10.5pt;
            color: #000000;
            margin-bottom: 3px;
        }
        
        .job-details {
            font-size: 10pt;
            color: #555555;
            margin-bottom: 8px;
        }
        
        .achievements {
            margin-left: 20px;
        }
        
        .achievement-item {
            margin-bottom: 5px;
            line-height: 1.4;
            text-align: justify;
        }
        
        .achievement-item::before {
            content: "• ";
            color: ${template.colors.accent};
            font-weight: bold;
            margin-left: -15px;
            margin-right: 5px;
        }
        
        .skills-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        
        .skills-category {
            margin-bottom: 10px;
        }
        
        .skills-category-title {
            font-weight: bold;
            color: ${template.colors.primary};
            margin-bottom: 5px;
            font-size: 10.5pt;
        }
        
        .skills-list {
            line-height: 1.6;
        }
        
        .education-item {
            margin-bottom: 12px;
            page-break-inside: avoid;
        }
        
        .degree {
            font-weight: bold;
            font-size: 11pt;
            color: ${template.colors.primary};
        }
        
        .institution {
            font-weight: bold;
            font-size: 10.5pt;
            margin-bottom: 3px;
        }
        
        .education-details {
            font-size: 10pt;
            color: #555555;
        }
        
        .certifications-list {
            margin-left: 20px;
        }
        
        .certification-item {
            margin-bottom: 8px;
            line-height: 1.4;
        }
        
        .certification-item::before {
            content: "• ";
            color: ${template.colors.accent};
            font-weight: bold;
            margin-left: -15px;
            margin-right: 5px;
        }
        
        .cert-name {
            font-weight: bold;
        }
        
        @media print {
            body {
                padding: 0;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">${contact.name || 'Your Name'}</div>
        <div class="contact-info">
            ${contact.email ? `<span>${contact.email}</span>` : ''}
            ${contact.phone ? `<span>|</span><span>${contact.phone}</span>` : ''}
            ${contact.location ? `<span>|</span><span>${contact.location}</span>` : ''}
            ${contact.linkedin ? `<span>|</span><span>${contact.linkedin}</span>` : ''}
            ${contact.portfolio ? `<span>|</span><span>${contact.portfolio}</span>` : ''}
        </div>
    </div>

    ${summary ? `
    <div class="section">
        <div class="section-title">Professional Summary</div>
        <div class="summary-text">${summary}</div>
    </div>
    ` : ''}

    ${experience && experience.length > 0 ? `
    <div class="section">
        <div class="section-title">Professional Experience</div>
        ${experience.map(exp => `
            <div class="experience-item">
                <div class="job-title">${exp.title || ''}</div>
                <div class="company-name">${exp.company || ''}</div>
                <div class="job-details">
                    ${exp.location ? exp.location : ''} ${exp.dates ? '| ' + exp.dates : ''}
                </div>
                ${exp.achievements && exp.achievements.length > 0 ? `
                    <div class="achievements">
                        ${exp.achievements.map(achievement => `
                            <div class="achievement-item">${achievement}</div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        `).join('')}
    </div>
    ` : ''}

    ${skills && (skills.technical || skills.soft) ? `
    <div class="section">
        <div class="section-title">Skills</div>
        <div class="skills-container">
            ${skills.technical && skills.technical.length > 0 ? `
                <div class="skills-category">
                    <div class="skills-category-title">Technical Skills</div>
                    <div class="skills-list">${skills.technical.join(' • ')}</div>
                </div>
            ` : ''}
            ${skills.soft && skills.soft.length > 0 ? `
                <div class="skills-category">
                    <div class="skills-category-title">Professional Skills</div>
                    <div class="skills-list">${skills.soft.join(' • ')}</div>
                </div>
            ` : ''}
        </div>
    </div>
    ` : ''}

    ${education && education.length > 0 ? `
    <div class="section">
        <div class="section-title">Education</div>
        ${education.map(edu => `
            <div class="education-item">
                <div class="degree">${edu.degree || ''}</div>
                <div class="institution">${edu.institution || ''}</div>
                <div class="education-details">
                    ${edu.location ? edu.location : ''} ${edu.date ? '| ' + edu.date : ''}
                </div>
                ${edu.details ? `<div style="margin-top: 5px;">${edu.details}</div>` : ''}
            </div>
        `).join('')}
    </div>
    ` : ''}

    ${certifications && certifications.length > 0 ? `
    <div class="section">
        <div class="section-title">Certifications</div>
        <div class="certifications-list">
            ${certifications.map(cert => `
                <div class="certification-item">
                    <span class="cert-name">${cert.name || ''}</span> - 
                    ${cert.issuer || ''} ${cert.date ? '(' + cert.date + ')' : ''}
                </div>
            `).join('')}
        </div>
    </div>
    ` : ''}
</body>
</html>
  `;
};

export const getATSOptimizationTips = () => {
  return [
    'Use standard section headers (Experience, Education, Skills)',
    'Avoid tables, text boxes, headers, and footers',
    'Use standard fonts (Arial, Calibri, Times New Roman)',
    'Save as .docx or PDF format',
    'Include relevant keywords from the job description naturally',
    'Use chronological format for work history',
    'Spell out acronyms at least once',
    'Use standard bullet points, not custom graphics',
    'Keep formatting simple and consistent',
    'Include contact information at the top'
  ];
};
