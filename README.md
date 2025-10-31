# AI-Powered ATS-Friendly Resume Builder

A sophisticated resume builder application that uses GPT-4/GPT-5 to create ATS-optimized, human-written resumes from your LinkedIn profile and existing resume. The app generates tailored resumes for specific job positions with 98% ATS compatibility and content written to avoid AI detection.

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4-00A67E?logo=openai)

## 🌟 Features

### Core Functionality
- **PDF Parsing**: Extract information from LinkedIn PDFs and existing resumes
- **AI-Powered Generation**: Uses OpenAI GPT-4/GPT-5 to create tailored resumes
- **ATS Optimization**: 98% ATS compatibility with keyword optimization
- **Human-Like Writing**: Content written to pass AI detection tools
- **Job-Specific Tailoring**: Customizes resume based on job title and description
- **Multiple Templates**: Choose from Professional, Modern, Minimal, and Executive templates
- **Real-time Preview**: See your resume before downloading
- **ATS Score Analysis**: Get detailed feedback on ATS compatibility

### Export Options
- **PDF Export**: High-quality PDF optimized for ATS systems
- **HTML Export**: Web-friendly format
- **Plain Text Export**: Universal compatibility

### ATS Optimization Features
- Standard section headers
- Simple, clean formatting
- No tables, graphics, or complex layouts
- Keyword optimization from job descriptions
- Standard fonts and formatting
- Proper spacing and structure

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio-2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Getting Your LinkedIn PDF

1. Go to your LinkedIn profile
2. Click "More" in your profile section
3. Select "Save to PDF"
4. Download the PDF file

## 📖 How to Use

### Step 1: Upload Documents
1. Enter your OpenAI API key (stored locally, never saved)
2. Upload your LinkedIn profile PDF (required)
3. Optionally upload your existing resume PDF

### Step 2: Configure Job Details
1. Enter the target job title
2. Paste the complete job description
3. Select your preferred resume template

### Step 3: Generate and Export
1. Click "Generate ATS-Friendly Resume"
2. Review your ATS optimization score
3. Preview the generated resume
4. Download in your preferred format (PDF, HTML, or TXT)

## 🎨 Available Templates

### Professional
Clean, corporate design perfect for traditional industries
- High ATS compatibility
- Traditional formatting
- Conservative color scheme

### Modern
Contemporary design with subtle styling
- ATS-friendly with modern aesthetics
- Balanced professional appearance
- Suitable for tech and creative roles

### Minimal
Ultra-clean design with maximum compatibility
- Highest ATS score potential
- Simple, distraction-free layout
- Works everywhere

### Executive
Sophisticated format for senior positions
- Professional appearance
- Emphasis on leadership experience
- Ideal for C-level applications

## 🔧 Technology Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 7.1.12
- **Styling**: Tailwind CSS 4.1.16
- **AI Integration**: OpenAI GPT-4
- **PDF Processing**: pdfjs-dist, pdf-parse
- **PDF Generation**: jsPDF, html2canvas
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📁 Project Structure

```
Portfolio-2/
├── src/
│   ├── components/
│   │   ├── ResumeBuilder.jsx       # Main application component
│   │   ├── ResumePreview.jsx       # Resume preview component
│   │   └── ATSScoreCard.jsx        # ATS score display
│   ├── utils/
│   │   ├── pdfParser.js            # PDF parsing utilities
│   │   ├── openaiService.js        # OpenAI API integration
│   │   ├── resumeTemplates.js      # Resume templates
│   │   └── exportResume.js         # Export functionality
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## 🎯 Key Features Explained

### ATS Optimization
The application ensures high ATS compatibility through:
- Standard section headers (Experience, Education, Skills, etc.)
- Simple formatting without tables or complex layouts
- Standard fonts (Arial, Calibri)
- Proper keyword density from job descriptions
- Chronological work history format
- No headers, footers, or text boxes

### Human-Like Content Generation
The AI is specifically prompted to:
- Use natural, conversational language
- Vary sentence structures and vocabulary
- Avoid common AI-generated phrases
- Include specific metrics and achievements
- Tell a story rather than list tasks
- Sound authentic and personal

### Privacy & Security
- API keys are never stored or transmitted
- All processing happens locally in your browser
- No data is sent to external servers except OpenAI
- Uploaded files are processed in memory only

## 🔒 API Key Security

Your OpenAI API key is:
- ✅ Used only for API calls
- ✅ Stored temporarily in browser memory
- ✅ Never saved to disk
- ✅ Cleared when you refresh the page
- ✅ Not transmitted to any server except OpenAI

## 💡 Tips for Best Results

### For LinkedIn PDF
- Ensure your profile is complete and up-to-date
- Include all relevant experience and skills
- Add accomplishments and metrics
- Fill out the summary section

### For Job Description
- Copy the entire job posting
- Include requirements, responsibilities, and qualifications
- Don't edit or summarize
- The AI will extract relevant keywords automatically

### For Resume Generation
- Be specific with the job title
- Provide detailed job descriptions
- Upload both LinkedIn and existing resume for best results
- Choose template based on industry norms

## 🐛 Troubleshooting

### PDF Upload Issues
- Ensure file is a valid PDF
- Check file isn't password-protected
- Try re-exporting from LinkedIn

### Generation Errors
- Verify your OpenAI API key is correct
- Check you have sufficient API credits
- Ensure job description is at least 100 words
- Try a different browser if issues persist

### Export Problems
- Disable browser pop-up blockers
- Check browser download settings
- Try a different export format

## 📊 ATS Score Breakdown

The ATS score includes:
- **Overall ATS Score**: General compatibility with ATS systems
- **Keyword Match**: How well your resume matches job requirements
- **Formatting Score**: Technical compatibility and structure
- **Strengths**: What your resume does well
- **Suggestions**: Areas for improvement
- **Missing Keywords**: Important terms from job description

## 🚀 Future Enhancements

- [ ] Multiple resume versions for A/B testing
- [ ] Cover letter generation
- [ ] LinkedIn profile optimization suggestions
- [ ] Industry-specific templates
- [ ] Skills gap analysis
- [ ] Interview preparation based on resume

## 📝 License

ISC License

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section
2. Review the OpenAI API documentation
3. Ensure all dependencies are installed correctly

## ⚠️ Important Notes

- This tool requires an active OpenAI API key with available credits
- API calls to OpenAI will incur charges based on your usage
- Resume quality depends on the quality of input data
- Always review and customize the generated resume before submission
- Test your resume with actual ATS systems if possible

## 🎓 Best Practices

1. **Keep it concise**: Aim for 1-2 pages maximum
2. **Use metrics**: Include numbers and percentages
3. **Customize**: Tailor each resume to the specific job
4. **Proofread**: Always review before sending
5. **Test**: Use ATS scanning tools to verify compatibility
6. **Update regularly**: Keep your source documents current

---

Built with ❤️ using React, OpenAI GPT-4, and modern web technologies
