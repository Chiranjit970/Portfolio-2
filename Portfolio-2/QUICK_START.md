# Quick Start Guide - AI Resume Builder

## 🚀 Get Started in 3 Steps

### Step 1: Get Your OpenAI API Key (2 minutes)

1. Visit https://platform.openai.com/api-keys
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the key (starts with `sk-`)
5. Keep it handy for the app

💰 **Cost:** ~$0.10-0.30 per resume generation

### Step 2: Prepare Your Documents (3 minutes)

#### Get Your LinkedIn PDF:
1. Go to linkedin.com/in/your-profile
2. Click "More" button
3. Select "Save to PDF"
4. Download file

#### Optional: Get Your Existing Resume
- Have your current resume as a PDF
- This helps improve the AI generation

### Step 3: Run the Application (1 minute)

```bash
# Navigate to project directory
cd Portfolio-2

# Install dependencies (first time only)
npm install --legacy-peer-deps

# Start the application
npm run dev
```

Open http://localhost:5173 in your browser

## 📝 Using the App

### Upload Phase
1. Enter your OpenAI API key
2. Upload LinkedIn PDF
3. (Optional) Upload existing resume PDF
4. Click "Continue"

### Configure Phase
1. Enter job title (e.g., "Senior Software Engineer")
2. Paste complete job description
3. Select resume template
4. Click "Generate ATS-Friendly Resume"

### Review & Download Phase
1. Review your ATS score (target: 90%+)
2. Preview the generated resume
3. Change template if desired
4. Download in preferred format:
   - **PDF** - For applications (recommended)
   - **HTML** - For further editing
   - **TXT** - For maximum compatibility

## 🎯 Pro Tips

### For Best Results:
- ✅ Use complete, detailed job descriptions
- ✅ Keep LinkedIn profile updated
- ✅ Include metrics and achievements
- ✅ Provide both LinkedIn and resume PDFs
- ✅ Choose template matching industry

### Common Mistakes to Avoid:
- ❌ Using partial job descriptions
- ❌ Outdated LinkedIn profile
- ❌ Missing API key credits
- ❌ Not reviewing before download
- ❌ Ignoring ATS score suggestions

## 🔒 Privacy Note

Your data is safe:
- API key is never stored
- Files processed in browser
- Nothing saved to servers
- Only OpenAI receives data for processing

## 🆘 Quick Troubleshooting

**PDF won't upload?**
- Ensure it's a valid PDF (not image)
- Remove password protection
- Re-export from LinkedIn

**Generation fails?**
- Check API key is valid
- Verify you have OpenAI credits
- Ensure job description is provided
- Check internet connection

**Low ATS score?**
- Use more detailed job description
- Try different template
- Review missing keywords
- Apply suggestions

## 📚 Next Steps

- Read full [Usage Guide](USAGE_GUIDE.md) for detailed instructions
- Check [README](../README.md) for technical details
- Review [ATS Guidelines](src/utils/atsGuidelines.js) for optimization tips

## 💡 Examples

### Good Job Description Format:
```
Senior Full-Stack Developer

Company XYZ is seeking an experienced Full-Stack Developer...

Required Skills:
- 5+ years JavaScript/TypeScript
- React, Node.js, Express
- AWS/Azure cloud experience
- SQL and NoSQL databases

Responsibilities:
- Develop scalable web applications
- Lead technical architecture decisions
- Mentor junior developers
- Collaborate with product team
```

### Template Selection:
- **Professional** → Corporate, Finance, Consulting
- **Modern** → Tech, Startups, Creative
- **Minimal** → Government, Academic, Safe Choice
- **Executive** → C-Level, VP, Director

## ✅ Checklist Before Download

- [ ] ATS Score is 85%+
- [ ] Contact info is correct
- [ ] All dates are accurate
- [ ] Job titles match LinkedIn
- [ ] Achievements are quantified
- [ ] Keywords are naturally integrated
- [ ] No typos or errors
- [ ] Template suits industry

Ready to build your perfect resume? Let's go! 🚀
