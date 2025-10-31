import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const exportToPDF = async (resumeHTML, filename = 'resume.pdf') => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = resumeHTML;
  tempDiv.style.position = 'absolute';
  tempDiv.style.left = '-9999px';
  tempDiv.style.width = '8.5in';
  tempDiv.style.background = 'white';
  tempDiv.style.padding = '0.5in';
  document.body.appendChild(tempDiv);

  try {
    const canvas = await html2canvas(tempDiv, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      width: 816,
      windowWidth: 816
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'in',
      format: 'letter'
    });

    const imgWidth = 8.5;
    const pageHeight = 11;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(filename);
  } catch (error) {
    console.error('Error exporting to PDF:', error);
    throw new Error('Failed to export resume to PDF');
  } finally {
    document.body.removeChild(tempDiv);
  }
};

export const exportToHTML = (resumeHTML, filename = 'resume.html') => {
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const exportToPlainText = (resumeData, filename = 'resume.txt') => {
  const { contact, summary, experience, skills, education, certifications } = resumeData;
  
  let text = '';
  
  text += `${contact.name}\n`;
  text += `${contact.email} | ${contact.phone} | ${contact.location}\n`;
  if (contact.linkedin) text += `LinkedIn: ${contact.linkedin}\n`;
  if (contact.portfolio) text += `Portfolio: ${contact.portfolio}\n`;
  text += `\n${'='.repeat(80)}\n\n`;
  
  if (summary) {
    text += `PROFESSIONAL SUMMARY\n`;
    text += `${'-'.repeat(80)}\n`;
    text += `${summary}\n\n`;
  }
  
  if (experience && experience.length > 0) {
    text += `PROFESSIONAL EXPERIENCE\n`;
    text += `${'-'.repeat(80)}\n`;
    experience.forEach(exp => {
      text += `\n${exp.title}\n`;
      text += `${exp.company} | ${exp.location} | ${exp.dates}\n`;
      if (exp.achievements) {
        exp.achievements.forEach(achievement => {
          text += `  • ${achievement}\n`;
        });
      }
      text += '\n';
    });
  }
  
  if (skills) {
    text += `SKILLS\n`;
    text += `${'-'.repeat(80)}\n`;
    if (skills.technical) {
      text += `Technical: ${skills.technical.join(', ')}\n`;
    }
    if (skills.soft) {
      text += `Professional: ${skills.soft.join(', ')}\n`;
    }
    text += '\n';
  }
  
  if (education && education.length > 0) {
    text += `EDUCATION\n`;
    text += `${'-'.repeat(80)}\n`;
    education.forEach(edu => {
      text += `\n${edu.degree}\n`;
      text += `${edu.institution} | ${edu.location} | ${edu.date}\n`;
      if (edu.details) text += `${edu.details}\n`;
    });
    text += '\n';
  }
  
  if (certifications && certifications.length > 0) {
    text += `CERTIFICATIONS\n`;
    text += `${'-'.repeat(80)}\n`;
    certifications.forEach(cert => {
      text += `  • ${cert.name} - ${cert.issuer} (${cert.date})\n`;
    });
  }

  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
