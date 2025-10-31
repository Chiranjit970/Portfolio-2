import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export const parsePDF = async (file) => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    
    let fullText = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join(' ');
      fullText += pageText + '\n';
    }
    
    return fullText;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    throw new Error('Failed to parse PDF. Please ensure it\'s a valid PDF file.');
  }
};

export const extractLinkedInData = (text) => {
  const data = {
    name: '',
    email: '',
    phone: '',
    location: '',
    headline: '',
    summary: '',
    experience: [],
    education: [],
    skills: [],
    certifications: [],
    languages: []
  };

  const lines = text.split('\n').filter(line => line.trim());
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.match(/^[A-Z][a-z]+ [A-Z][a-z]+/)) {
      data.name = line;
    }
    
    if (line.match(/[\w\.-]+@[\w\.-]+\.\w+/)) {
      data.email = line.match(/[\w\.-]+@[\w\.-]+\.\w+/)[0];
    }
    
    if (line.match(/\+?\d[\d\s\-\(\)]+/)) {
      data.phone = line.match(/\+?\d[\d\s\-\(\)]+/)[0];
    }
    
    if (line.toLowerCase().includes('experience')) {
      let j = i + 1;
      while (j < lines.length && !lines[j].toLowerCase().includes('education') && !lines[j].toLowerCase().includes('skills')) {
        const expLine = lines[j].trim();
        if (expLine.length > 10) {
          data.experience.push(expLine);
        }
        j++;
      }
    }
    
    if (line.toLowerCase().includes('skills')) {
      let j = i + 1;
      while (j < lines.length && !lines[j].toLowerCase().includes('education') && !lines[j].toLowerCase().includes('certifications')) {
        const skill = lines[j].trim();
        if (skill.length > 0) {
          data.skills.push(skill);
        }
        j++;
      }
    }
    
    if (line.toLowerCase().includes('education')) {
      let j = i + 1;
      while (j < lines.length && !lines[j].toLowerCase().includes('skills') && !lines[j].toLowerCase().includes('certifications')) {
        const eduLine = lines[j].trim();
        if (eduLine.length > 10) {
          data.education.push(eduLine);
        }
        j++;
      }
    }
  }
  
  return data;
};

export const parseExistingResume = (text) => {
  const sections = {
    contact: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
    certifications: '',
    raw: text
  };

  const lines = text.split('\n');
  let currentSection = '';
  
  lines.forEach(line => {
    const lowerLine = line.toLowerCase().trim();
    
    if (lowerLine.includes('summary') || lowerLine.includes('objective') || lowerLine.includes('profile')) {
      currentSection = 'summary';
    } else if (lowerLine.includes('experience') || lowerLine.includes('work history')) {
      currentSection = 'experience';
    } else if (lowerLine.includes('education')) {
      currentSection = 'education';
    } else if (lowerLine.includes('skills') || lowerLine.includes('technical')) {
      currentSection = 'skills';
    } else if (lowerLine.includes('certifications') || lowerLine.includes('certificates')) {
      currentSection = 'certifications';
    } else if (currentSection) {
      sections[currentSection] += line + '\n';
    }
  });
  
  return sections;
};
