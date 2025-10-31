# Contributing to AI Resume Builder

Thank you for your interest in contributing to the AI-Powered ATS-Friendly Resume Builder!

## Getting Started

### Prerequisites
- Node.js v16 or higher
- npm or yarn
- Git
- OpenAI API key (for testing)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio-2
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

Note: We use `--legacy-peer-deps` due to React version conflicts with @react-three/drei.

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

## Project Structure

```
Portfolio-2/
├── src/
│   ├── components/          # React components
│   │   ├── ResumeBuilder.jsx      # Main application
│   │   ├── ResumePreview.jsx      # Resume preview display
│   │   ├── ATSScoreCard.jsx       # ATS score visualization
│   │   └── HelpModal.jsx          # Help and documentation
│   ├── utils/              # Utility functions
│   │   ├── pdfParser.js           # PDF parsing logic
│   │   ├── openaiService.js       # OpenAI API integration
│   │   ├── resumeTemplates.js     # Resume HTML templates
│   │   ├── exportResume.js        # Export functionality
│   │   └── atsGuidelines.js       # ATS optimization rules
│   ├── config/             # Configuration
│   │   └── prompts.js             # AI prompts and examples
│   ├── styles/             # CSS files
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
├── public/                 # Static assets
├── package.json
└── vite.config.js
```

## Development Guidelines

### Code Style

#### React Components
- Use functional components with hooks
- Destructure props in function parameters
- Use meaningful variable names
- Keep components focused and single-purpose

```javascript
// Good
const ResumePreview = ({ resumeData, templateName }) => {
  if (!resumeData) return null;
  // component logic
};

// Avoid
const Preview = (props) => {
  if (!props.data) return null;
  // component logic
};
```

#### State Management
- Use useState for local state
- Keep state close to where it's used
- Lift state up when needed by multiple components

```javascript
// Good
const [loading, setLoading] = useState(false);
const [error, setError] = useState('');

// Avoid deeply nested state
```

#### Styling
- Use Tailwind CSS utility classes
- Keep inline styles minimal
- Use consistent spacing (mb-4, mt-6, etc.)
- Follow responsive-first approach

```javascript
// Good
<div className="p-6 bg-white rounded-lg shadow-xl">

// Avoid inline styles
<div style={{ padding: '24px', background: 'white' }}>
```

### Adding New Features

#### 1. New Resume Template

1. Add template definition to `src/utils/resumeTemplates.js`:
```javascript
export const templates = {
  // ... existing templates
  newTemplate: {
    name: 'New Template',
    description: 'Description here',
    colors: {
      primary: '#COLOR1',
      secondary: '#COLOR2',
      accent: '#COLOR3'
    }
  }
};
```

2. Update the `generateResumeHTML` function to use new colors
3. Test with various resume data
4. Verify ATS compatibility

#### 2. New Export Format

1. Create export function in `src/utils/exportResume.js`:
```javascript
export const exportToNewFormat = (resumeData, filename) => {
  // Implementation
};
```

2. Add export button in `ResumeBuilder.jsx`
3. Handle errors appropriately
4. Test with various browsers

#### 3. New AI Prompt

1. Add prompt to `src/config/prompts.js`:
```javascript
export const systemPrompts = {
  // ... existing prompts
  newPromptType: {
    system: 'System message',
    user: (params) => `User message with ${params}`
  }
};
```

2. Create service function in `src/utils/openaiService.js`
3. Test with various inputs
4. Validate JSON responses

### Testing

#### Manual Testing Checklist
- [ ] Upload LinkedIn PDF
- [ ] Upload existing resume PDF
- [ ] Generate resume with all templates
- [ ] Check ATS scores
- [ ] Export to all formats
- [ ] Test error scenarios
- [ ] Verify responsive design
- [ ] Check browser compatibility

#### Test Different Scenarios
1. **No LinkedIn PDF**: Only existing resume
2. **No existing resume**: Only LinkedIn PDF
3. **Both documents**: Combined data
4. **Long job descriptions**: Large text input
5. **Short job descriptions**: Minimal input
6. **Special characters**: In names, companies
7. **International formats**: Different date formats

### Error Handling

Always provide user-friendly error messages:

```javascript
// Good
try {
  await generateResume();
} catch (error) {
  setError('Failed to generate resume. Please check your API key and try again.');
}

// Avoid
try {
  await generateResume();
} catch (error) {
  setError(error.message); // May be cryptic
}
```

### Performance Considerations

#### Optimization Tips
- Memoize expensive calculations
- Use lazy loading for large components
- Minimize re-renders
- Optimize images and assets
- Keep bundle size reasonable

```javascript
// Good: Memoize expensive operations
const resumeHTML = useMemo(
  () => generateResumeHTML(resumeData, template),
  [resumeData, template]
);

// Good: Avoid unnecessary re-renders
const handleChange = useCallback((e) => {
  setValue(e.target.value);
}, []);
```

## API Integration

### OpenAI Service

When working with OpenAI API:

1. **Always use the client-side pattern**:
```javascript
const client = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true
});
```

2. **Set appropriate parameters**:
- Temperature: 0.9 for creative content, 0.3 for analytical
- Max tokens: Sufficient for complete responses
- Response format: JSON for structured data

3. **Handle errors gracefully**:
```javascript
try {
  const completion = await client.chat.completions.create({...});
} catch (error) {
  if (error.status === 401) {
    throw new Error('Invalid API key');
  } else if (error.status === 429) {
    throw new Error('Rate limit exceeded');
  } else {
    throw new Error('API request failed');
  }
}
```

### PDF Processing

When parsing PDFs:

1. **Validate file format**:
```javascript
if (file.type !== 'application/pdf') {
  throw new Error('Please upload a valid PDF file');
}
```

2. **Handle large files**:
```javascript
if (file.size > 10 * 1024 * 1024) { // 10MB
  throw new Error('File size must be under 10MB');
}
```

3. **Extract text carefully**:
- Handle multi-page documents
- Preserve structure where possible
- Clean up extracted text

## Documentation

### Code Comments

Add comments for:
- Complex logic
- Non-obvious decisions
- Important warnings
- Public API functions

```javascript
// Good: Explains why, not what
// Using high temperature to generate more natural-sounding text
temperature: 0.9

// Avoid: Explains obvious code
// Set loading to true
setLoading(true);
```

### JSDoc for Functions

```javascript
/**
 * Generates an ATS-friendly resume using GPT-4
 * @param {string} apiKey - OpenAI API key
 * @param {Object} linkedInData - Parsed LinkedIn profile data
 * @param {Object} existingResume - Parsed existing resume data
 * @param {string} jobTitle - Target job title
 * @param {string} jobDescription - Complete job description
 * @returns {Promise<Object>} Generated resume data
 * @throws {Error} If API call fails or data is invalid
 */
export const generateATSFriendlyResume = async (apiKey, linkedInData, existingResume, jobTitle, jobDescription) => {
  // Implementation
};
```

## Submitting Changes

### Before Submitting

1. **Test thoroughly**:
   - Run the app and test your changes
   - Test edge cases
   - Verify no console errors
   - Check responsive design

2. **Code quality**:
   - Follow existing code style
   - Remove console.logs
   - Update comments
   - Clean up unused code

3. **Documentation**:
   - Update README if needed
   - Add comments for complex logic
   - Update FEATURES.md for new features

### Commit Messages

Use clear, descriptive commit messages:

```bash
# Good
git commit -m "Add cover letter generation feature"
git commit -m "Fix PDF export formatting on Safari"
git commit -m "Improve ATS score calculation accuracy"

# Avoid
git commit -m "Update stuff"
git commit -m "Fix bug"
```

## Common Issues

### Build Errors

**Issue**: `ERESOLVE could not resolve` error
**Solution**: Use `npm install --legacy-peer-deps`

**Issue**: Large bundle size warning
**Solution**: This is expected due to OpenAI and PDF libraries

### Runtime Errors

**Issue**: "API key is required"
**Solution**: Ensure API key is passed to all OpenAI functions

**Issue**: PDF parsing fails
**Solution**: Check PDF is text-based, not scanned image

**Issue**: Export doesn't work
**Solution**: Check browser pop-up blockers

## Resources

### Documentation
- [React Documentation](https://react.dev)
- [OpenAI API Reference](https://platform.openai.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

### Tools
- [PDF.js Documentation](https://mozilla.github.io/pdf.js/)
- [jsPDF Documentation](https://github.com/parallax/jsPDF)
- [ATS Resume Checkers](https://www.jobscan.co/)

## Questions?

If you have questions or need help:
1. Check existing documentation (README, USAGE_GUIDE, FEATURES)
2. Review existing code for patterns
3. Test your changes thoroughly
4. Ask for clarification if needed

## License

By contributing, you agree that your contributions will be licensed under the ISC License.

---

Thank you for contributing to making job searching easier for everyone! 🚀
