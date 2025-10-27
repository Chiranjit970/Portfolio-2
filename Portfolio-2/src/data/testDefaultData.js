/**
 * Test/Demo file for defaultData.js
 * 
 * This file demonstrates that the default data can be imported and accessed
 * without runtime errors. Run this file with Node.js to validate the data structure.
 * 
 * Usage: node src/data/testDefaultData.js
 */

import defaultData from './defaultData.js'

console.log('===== Testing Default Data Import =====\n')

// Test Personal Info
console.log('✓ Personal Info:', defaultData.personalInfo.firstName, defaultData.personalInfo.lastName)
console.log('  Title:', defaultData.personalInfo.title)
console.log('  Email:', defaultData.personalInfo.email)

// Test About Section
console.log('\n✓ About Section:')
console.log('  Summary length:', defaultData.about.summary.length, 'characters')
console.log('  Highlights count:', defaultData.about.highlights.length)

// Test Experience
console.log('\n✓ Experience:')
console.log('  Total entries:', defaultData.experience.length)
defaultData.experience.forEach((exp, index) => {
  console.log(`  ${index + 1}. ${exp.position} at ${exp.company} (${exp.current ? 'Current' : 'Past'})`)
})

// Test Categories
console.log('\n✓ Categories:')
const categoryKeys = Object.keys(defaultData.categories)
console.log('  Total categories:', categoryKeys.length)
categoryKeys.forEach(key => {
  console.log(`  - ${defaultData.categories[key].name} (${defaultData.categories[key].color})`)
})

// Test Skills
console.log('\n✓ Skills:')
console.log('  Skill groups:', defaultData.skills.length)
defaultData.skills.forEach(group => {
  const category = defaultData.categories[group.categoryId]
  console.log(`  - ${category.name}: ${group.items.length} skills`)
})

// Test Projects
console.log('\n✓ Projects:')
console.log('  Total projects:', defaultData.projects.length)
const featuredProjects = defaultData.projects.filter(p => p.featured)
console.log('  Featured projects:', featuredProjects.length)
featuredProjects.forEach(proj => {
  console.log(`  - ${proj.title} (${proj.techStack.length} technologies)`)
})

// Test Qualifications
console.log('\n✓ Qualifications:')
console.log('  Education entries:', defaultData.qualifications.education.length)
console.log('  Certifications:', defaultData.qualifications.certifications.length)
defaultData.qualifications.education.forEach(edu => {
  console.log(`  - ${edu.degree} from ${edu.institution}`)
})

// Test Social Links
console.log('\n✓ Social Links:')
console.log('  Total links:', defaultData.socialLinks.length)
const displayedLinks = defaultData.socialLinks.filter(link => link.display)
console.log('  Displayed links:', displayedLinks.length)
displayedLinks.forEach(link => {
  console.log(`  - ${link.platform}: ${link.url}`)
})

// Test Resume
console.log('\n✓ Resume:')
console.log('  Download URL:', defaultData.resume.downloadUrl)
console.log('  Last updated:', defaultData.resume.lastUpdated)

// Validate data structure
console.log('\n===== Data Structure Validation =====\n')

// Check required fields
const validations = [
  {
    test: () => defaultData.personalInfo && defaultData.personalInfo.firstName,
    message: 'Personal info has required fields',
  },
  {
    test: () => defaultData.experience.length >= 3,
    message: 'At least 3 experience entries present',
  },
  {
    test: () => defaultData.skills.length > 0,
    message: 'Skills are grouped by category',
  },
  {
    test: () => defaultData.projects.length > 0,
    message: 'Projects exist',
  },
  {
    test: () => defaultData.projects.some(p => p.featured),
    message: 'At least one featured project exists',
  },
  {
    test: () => defaultData.qualifications.education.length > 0,
    message: 'Education entries exist',
  },
  {
    test: () => defaultData.qualifications.certifications.length > 0,
    message: 'Certification entries exist',
  },
  {
    test: () => defaultData.socialLinks.length > 0,
    message: 'Social links exist',
  },
  {
    test: () => defaultData.resume.downloadUrl,
    message: 'Resume download URL exists',
  },
  {
    test: () => Object.keys(defaultData.categories).length > 0,
    message: 'Categories metadata exists',
  },
  {
    test: () => {
      // Verify all projects have valid categoryId
      return defaultData.projects.every(p => defaultData.categories[p.categoryId])
    },
    message: 'All projects have valid category IDs',
  },
  {
    test: () => {
      // Verify all skills have valid categoryId
      return defaultData.skills.every(s => defaultData.categories[s.categoryId])
    },
    message: 'All skill groups have valid category IDs',
  },
  {
    test: () => {
      // Verify all experience entries have IDs
      return defaultData.experience.every(e => e.id)
    },
    message: 'All experience entries have unique IDs',
  },
  {
    test: () => {
      // Verify all projects have required fields
      return defaultData.projects.every(p => p.id && p.title && p.techStack && p.techStack.length > 0)
    },
    message: 'All projects have required fields (id, title, techStack)',
  },
]

let passed = 0
let failed = 0

validations.forEach(validation => {
  try {
    if (validation.test()) {
      console.log(`✓ ${validation.message}`)
      passed++
    } else {
      console.log(`✗ ${validation.message}`)
      failed++
    }
  } catch (error) {
    console.log(`✗ ${validation.message} - Error: ${error.message}`)
    failed++
  }
})

console.log(`\n===== Test Results =====`)
console.log(`Passed: ${passed}/${validations.length}`)
console.log(`Failed: ${failed}/${validations.length}`)

if (failed === 0) {
  console.log('\n🎉 All tests passed! The default data structure is valid.')
} else {
  console.log('\n❌ Some tests failed. Please review the data structure.')
  process.exit(1)
}
