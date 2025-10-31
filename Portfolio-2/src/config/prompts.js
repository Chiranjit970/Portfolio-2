export const systemPrompts = {
  resumeGeneration: {
    system: `You are an expert resume writer and career coach specializing in creating ATS-friendly resumes that sound completely human-written and natural. You have 15+ years of experience helping candidates land interviews at top companies.

Your writing style:
- Natural and conversational, yet professional
- Varied sentence structures (not all starting with action verbs)
- Specific and metric-driven
- Story-focused rather than task-focused
- Authentic voice that passes AI detection
- Strategic keyword integration without stuffing

You avoid:
- Overused business jargon ("synergy", "leverage", "spearheaded")
- Robotic, templated language
- Generic statements without proof
- Passive voice
- Personal pronouns (I, me, my)`,

    user: (linkedInData, existingResume, jobTitle, jobDescription) => `Create a tailored resume for: ${jobTitle}

CRITICAL INSTRUCTIONS:
1. Write in a natural, human voice - varied vocabulary and sentence structures
2. Make it pass AI detection tools by being authentic and conversational
3. Optimize for ATS with clean formatting and relevant keywords
4. Include specific metrics and achievements
5. Tell a compelling career story
6. Use keywords from job description naturally

JOB DESCRIPTION:
${jobDescription}

LINKEDIN DATA:
${JSON.stringify(linkedInData, null, 2)}

EXISTING RESUME:
${JSON.stringify(existingResume, null, 2)}

Generate a complete resume in JSON format with this exact structure:
{
  "contact": {
    "name": "Full Name",
    "email": "email@example.com",
    "phone": "+1-XXX-XXX-XXXX",
    "location": "City, State",
    "linkedin": "linkedin.com/in/username",
    "portfolio": "portfolio-url (if applicable)"
  },
  "summary": "3-4 sentences that tell your professional story naturally. Focus on unique value and career progression. Write as if you're having a conversation with the hiring manager. No buzzwords.",
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "location": "City, State",
      "dates": "Month YYYY - Present",
      "achievements": [
        "Achievement with specific impact and metrics - written naturally",
        "Another achievement showing problem-solving with results",
        "Leadership or innovation example with quantifiable outcome"
      ]
    }
  ],
  "skills": {
    "technical": ["Skill 1", "Skill 2", "Skill 3"],
    "soft": ["Skill 1", "Skill 2", "Skill 3"]
  },
  "education": [
    {
      "degree": "Degree Name",
      "institution": "School Name",
      "location": "City, State",
      "date": "Month YYYY",
      "details": "Relevant coursework, honors, or achievements (optional)"
    }
  ],
  "certifications": [
    {
      "name": "Certification Name",
      "issuer": "Issuing Organization",
      "date": "Month YYYY"
    }
  ]
}

WRITING GUIDELINES:
- Achievement bullets should be 1-2 lines maximum
- Start with varied words, not always action verbs
- Include specific numbers whenever possible (%, $, time saved)
- Write achievements as "What I did" + "How I did it" + "Impact/Result"
- Make it sound like a real person wrote it, not an AI
- Use industry-specific terminology from the job description
- Vary your vocabulary - don't repeat the same words
- Focus on recent 10-15 years of experience

Remember: This resume needs to pass both ATS systems AND human review while avoiding AI detection.`
  },

  sectionEnhancement: {
    system: `You are a skilled professional resume writer who creates authentic, human-sounding content. Your writing is natural, varied, and completely undetectable as AI-generated.`,
    
    user: (section, content, jobContext) => `Enhance this ${section} section to be more impactful and ATS-friendly while sounding completely human-written.

Job Context: ${jobContext}

Current Content:
${content}

Requirements:
1. Natural, conversational tone
2. Varied sentence structures
3. Specific metrics and details
4. Relevant keywords integrated naturally
5. Authentic and personal voice
6. No AI detection red flags

Return only the enhanced text as if a thoughtful human wrote it.`
  },

  atsOptimization: {
    system: `You are an ATS (Applicant Tracking System) expert who analyzes resumes for compatibility and provides actionable feedback.`,
    
    user: (resumeContent, jobDescription) => `Analyze this resume against the job description and provide detailed ATS optimization feedback.

Resume Content:
${JSON.stringify(resumeContent, null, 2)}

Job Description:
${jobDescription}

Provide analysis in this JSON format:
{
  "atsScore": 0-100 (overall ATS compatibility),
  "keywordMatch": 0-100 (how well keywords match job description),
  "formattingScore": 0-100 (technical formatting compatibility),
  "suggestions": [
    "Specific, actionable suggestion 1",
    "Specific, actionable suggestion 2",
    "Specific, actionable suggestion 3"
  ],
  "missingKeywords": [
    "important keyword 1 from job description",
    "important keyword 2 from job description"
  ],
  "strengths": [
    "What this resume does well 1",
    "What this resume does well 2",
    "What this resume does well 3"
  ]
}

Be specific and actionable in your suggestions.`
  }
};

export const exampleJobDescriptions = {
  softwareEngineer: `Senior Software Engineer

We are seeking an experienced Senior Software Engineer to join our growing engineering team. You will be responsible for designing, developing, and maintaining scalable web applications using modern technologies.

Required Qualifications:
• 5+ years of professional software development experience
• Strong proficiency in JavaScript/TypeScript and React
• Experience with Node.js and RESTful API development
• Solid understanding of SQL and NoSQL databases
• Experience with cloud platforms (AWS, Azure, or GCP)
• Strong problem-solving and analytical skills
• Excellent communication and collaboration abilities

Preferred Qualifications:
• Experience with microservices architecture
• Knowledge of CI/CD pipelines and DevOps practices
• Familiarity with containerization (Docker, Kubernetes)
• Experience with Agile/Scrum methodologies
• Bachelor's degree in Computer Science or related field

Responsibilities:
• Design and implement scalable, maintainable code
• Collaborate with cross-functional teams on product development
• Participate in code reviews and technical discussions
• Mentor junior developers and share knowledge
• Contribute to technical architecture decisions
• Troubleshoot and resolve production issues`,

  productManager: `Senior Product Manager

Join our product team to drive strategy and execution for our B2B SaaS platform. You will own the product roadmap and work closely with engineering, design, and stakeholders to deliver impactful features.

Required Qualifications:
• 5+ years of product management experience, preferably in SaaS
• Proven track record of launching successful products
• Strong analytical skills and data-driven decision making
• Experience with agile development methodologies
• Excellent stakeholder management and communication skills
• Deep understanding of user-centered design principles
• MBA or equivalent experience preferred

Key Responsibilities:
• Define and execute product strategy and roadmap
• Conduct market research and competitive analysis
• Gather and prioritize product requirements
• Work closely with engineering teams on delivery
• Define and track key performance indicators
• Present product vision to leadership and stakeholders
• Analyze user feedback and usage data to inform decisions`,

  marketingManager: `Marketing Manager

We're looking for a creative and data-driven Marketing Manager to lead our digital marketing initiatives and drive customer acquisition and retention.

Required Skills:
• 4+ years of digital marketing experience
• Strong understanding of SEO, SEM, and content marketing
• Experience with marketing automation platforms (HubSpot, Marketo)
• Proficiency in Google Analytics and marketing analytics
• Excellent written and verbal communication skills
• Experience managing marketing budgets
• Creative mindset with strong attention to detail

Responsibilities:
• Develop and execute comprehensive marketing strategies
• Manage multi-channel marketing campaigns
• Create compelling content for various platforms
• Analyze campaign performance and optimize for ROI
• Collaborate with sales team on lead generation
• Manage social media presence and community engagement
• Stay current with marketing trends and best practices`
};

export const writingTips = {
  actionVerbs: {
    leadership: ['Led', 'Directed', 'Managed', 'Coordinated', 'Supervised', 'Guided', 'Mentored'],
    achievement: ['Achieved', 'Accomplished', 'Exceeded', 'Delivered', 'Completed', 'Attained'],
    improvement: ['Improved', 'Enhanced', 'Optimized', 'Streamlined', 'Upgraded', 'Refined'],
    creation: ['Created', 'Developed', 'Built', 'Designed', 'Established', 'Launched', 'Implemented'],
    analysis: ['Analyzed', 'Evaluated', 'Assessed', 'Investigated', 'Researched', 'Examined'],
    communication: ['Presented', 'Communicated', 'Collaborated', 'Negotiated', 'Persuaded']
  },

  metricExamples: [
    'Increased revenue by 35% year-over-year',
    'Reduced processing time from 4 hours to 45 minutes',
    'Managed team of 12 developers across 3 time zones',
    'Improved customer satisfaction score from 3.2 to 4.7',
    'Cut operational costs by $250K annually',
    'Delivered 15+ projects on time and under budget'
  ],

  avoidPhrases: [
    'Responsible for',
    'Duties included',
    'Worked on',
    'Helped with',
    'Participated in',
    'Involved in'
  ],

  replacementPhrases: [
    'Led initiative to',
    'Drove results by',
    'Built and launched',
    'Transformed process by',
    'Achieved X% improvement in',
    'Delivered measurable impact through'
  ]
};

export default systemPrompts;
