# Default Data Documentation

This directory contains the default portfolio data structure and related files.

## Files

- **`defaultData.js`** - Main export containing the complete default data structure
- **`testDefaultData.js`** - Test file to validate the data structure
- **`index.js`** - Re-exports for easy importing

## Data Structure

The default data object contains the following sections:

### Personal Info

Basic contact and identity information:

```javascript
{
  firstName: string
  lastName: string
  title: string
  email: string
  phone: string
  location: string
  website: string
  tagline: string
  avatar: string (path to image)
}
```

### About

Professional summary and bio:

```javascript
{
  summary: string
  bio: string
  highlights: string[]
}
```

### Experience

Array of work experience entries (at least 3 entries provided):

```javascript
[
  {
    id: string (unique identifier)
    company: string
    position: string
    location: string
    type: string (e.g., "Full-time", "Contract")
    startDate: string (YYYY-MM format)
    endDate: string | null (null for current position)
    current: boolean
    description: string
    responsibilities: string[]
    technologies: string[]
    achievements: string[]
  }
]
```

### Categories

Metadata for categorizing skills and projects:

```javascript
{
  [categoryId]: {
    id: string
    name: string
    color: string (hex color)
    icon: string (lucide-react icon name)
    description: string
  }
}
```

Available categories:
- `frontend` - Frontend development
- `backend` - Backend development
- `database` - Database management
- `devops` - DevOps and infrastructure
- `design` - UI/UX design
- `tools` - Development tools
- `mobile` - Mobile development

### Skills

Array of skill groups, organized by category:

```javascript
[
  {
    categoryId: string (references categories)
    items: [
      {
        name: string
        level: number (0-100)
        years: number
      }
    ]
  }
]
```

### Projects

Array of portfolio projects:

```javascript
[
  {
    id: string (unique identifier)
    title: string
    slug: string
    categoryId: string (references categories)
    featured: boolean
    description: string (short)
    longDescription: string
    image: string (path to image)
    images: string[] (additional images)
    techStack: string[]
    liveUrl: string
    githubUrl: string
    demoVideo: string (optional)
    startDate: string (YYYY-MM format)
    endDate: string | null
    status: string (e.g., "completed", "in-progress")
    role: string
    teamSize: number
    highlights: string[]
  }
]
```

### Qualifications

Education and certifications:

```javascript
{
  education: [
    {
      id: string
      degree: string
      institution: string
      location: string
      startDate: string (YYYY-MM format)
      endDate: string
      gpa: string (optional)
      description: string
      honors: string[]
      relevantCourses: string[]
    }
  ],
  certifications: [
    {
      id: string
      name: string
      issuer: string
      issueDate: string (YYYY-MM format)
      expiryDate: string | null
      credentialId: string
      credentialUrl: string
      description: string
      logo: string (path to image)
    }
  ]
}
```

### Social Links

Array of social media profiles:

```javascript
[
  {
    id: string
    platform: string
    url: string
    icon: string (lucide-react icon name)
    username: string
    display: boolean (whether to show on UI)
  }
]
```

### Resume

Resume download information:

```javascript
{
  downloadUrl: string (path to PDF file)
  lastUpdated: string (YYYY-MM-DD format)
  fileSize: string
}
```

### Metadata

Additional metadata:

```javascript
{
  version: string
  lastUpdated: string
  theme: {
    primaryColor: string
    accentColor: string
  }
}
```

## Usage

### Basic Import

```javascript
import { defaultData } from '../data'

// Access personal info
console.log(defaultData.personalInfo.firstName)

// Access experience
console.log(defaultData.experience)

// Access projects
const featuredProjects = defaultData.projects.filter(p => p.featured)
```

### With React Context

```javascript
import { DataProvider, useData } from '../context'

function MyComponent() {
  const { data } = useData()
  
  return (
    <div>
      <h1>{data.personalInfo.firstName} {data.personalInfo.lastName}</h1>
      <p>{data.personalInfo.title}</p>
    </div>
  )
}

function App() {
  return (
    <DataProvider>
      <MyComponent />
    </DataProvider>
  )
}
```

## Testing

Run the test file to validate the data structure:

```bash
node src/data/testDefaultData.js
```

This will:
- Verify all required fields are present
- Check data integrity (e.g., valid category IDs)
- Ensure arrays have the minimum required entries
- Validate the structure matches expected schema

## Customization

To customize the default data:

1. Open `defaultData.js`
2. Modify the relevant section (e.g., `personalInfo`, `experience`, etc.)
3. Ensure you maintain the expected structure
4. Run the test file to verify your changes
5. Build the project to ensure no runtime errors

## Asset Placeholders

The default data includes placeholder paths for assets:

- **Images**: `/assets/images/...`
- **Resume**: `/assets/resume/...`
- **Logos**: `/assets/images/certs/...`

These should be replaced with actual file paths or URLs when implementing the portfolio.

## Icon Names

The data uses lucide-react icon names. Common icons used:

- `Monitor` - Frontend
- `Server` - Backend
- `Database` - Database
- `Cog` - DevOps
- `Palette` - Design
- `Wrench` - Tools
- `Smartphone` - Mobile
- `Github` - GitHub
- `Linkedin` - LinkedIn
- `Twitter` - Twitter
- `Mail` - Email

See [Lucide Icons](https://lucide.dev/) for all available icons.

## Best Practices

1. **IDs**: Always use unique IDs for items in arrays (experience, projects, etc.)
2. **Dates**: Use consistent date formats (YYYY-MM or YYYY-MM-DD)
3. **Arrays**: Ensure arrays are never undefined (use empty arrays `[]` as default)
4. **Category References**: Always ensure `categoryId` references exist in the `categories` object
5. **URLs**: Use absolute URLs for external links, relative paths for local assets
6. **Null vs Empty**: Use `null` for "current" dates (endDate), empty string for missing optional fields

## Data Validation

The test file validates:

- ✓ Personal info has required fields
- ✓ At least 3 experience entries present
- ✓ Skills are grouped by category
- ✓ Projects exist
- ✓ At least one featured project exists
- ✓ Education entries exist
- ✓ Certification entries exist
- ✓ Social links exist
- ✓ Resume download URL exists
- ✓ Categories metadata exists
- ✓ All projects have valid category IDs
- ✓ All skill groups have valid category IDs
- ✓ All experience entries have unique IDs
- ✓ All projects have required fields

## Notes

- All data is currently static placeholder content
- Replace with actual portfolio data before deployment
- Consider loading data from an API or CMS for dynamic content
- The structure is designed to be easily serializable (JSON-compatible)
- TypeScript types can be generated from this structure if needed
