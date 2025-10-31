import OpenAI from 'openai';
import { systemPrompts } from '../config/prompts';

const getOpenAIClient = (apiKey) => {
  if (!apiKey) {
    throw new Error('OpenAI API key is required');
  }
  return new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  });
};

export const generateATSFriendlyResume = async (apiKey, linkedInData, existingResume, jobTitle, jobDescription) => {
  const client = getOpenAIClient(apiKey);

  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: systemPrompts.resumeGeneration.system
        },
        {
          role: 'user',
          content: systemPrompts.resumeGeneration.user(linkedInData, existingResume, jobTitle, jobDescription)
        }
      ],
      temperature: 0.9,
      max_tokens: 4000,
      response_format: { type: 'json_object' }
    });

    const resumeData = JSON.parse(completion.choices[0].message.content);
    return resumeData;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error(`Failed to generate resume: ${error.message}`);
  }
};

export const enhanceResumeSection = async (apiKey, section, sectionContent, jobContext) => {
  const client = getOpenAIClient(apiKey);

  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: systemPrompts.sectionEnhancement.system
        },
        {
          role: 'user',
          content: systemPrompts.sectionEnhancement.user(section, sectionContent, jobContext)
        }
      ],
      temperature: 0.85,
      max_tokens: 1000
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error(`Failed to enhance section: ${error.message}`);
  }
};

export const optimizeForATS = async (apiKey, resumeContent, jobDescription) => {
  const client = getOpenAIClient(apiKey);

  try {
    const completion = await client.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: systemPrompts.atsOptimization.system
        },
        {
          role: 'user',
          content: systemPrompts.atsOptimization.user(resumeContent, jobDescription)
        }
      ],
      temperature: 0.3,
      max_tokens: 1500,
      response_format: { type: 'json_object' }
    });

    return JSON.parse(completion.choices[0].message.content);
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error(`Failed to optimize for ATS: ${error.message}`);
  }
};
