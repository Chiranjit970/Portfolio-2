import React from 'react'
import { useData } from '../context'

function DataTest() {
  const { data } = useData()

  return (
    <div className="min-h-screen p-8 bg-gradient-dark">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="glass-panel">
          <h1 className="text-4xl font-display font-bold gradient-text-indigo-purple mb-4">
            Default Data Test
          </h1>
          <p className="text-lg opacity-80">
            This component demonstrates that the default data can be imported and used in React components without errors.
          </p>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl font-bold gradient-text-purple-pink mb-4">
            Personal Info
          </h2>
          <div className="space-y-2">
            <p><strong>Name:</strong> {data.personalInfo.firstName} {data.personalInfo.lastName}</p>
            <p><strong>Title:</strong> {data.personalInfo.title}</p>
            <p><strong>Email:</strong> {data.personalInfo.email}</p>
            <p><strong>Location:</strong> {data.personalInfo.location}</p>
            <p><strong>Tagline:</strong> {data.personalInfo.tagline}</p>
          </div>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl font-bold gradient-text-indigo-pink mb-4">
            Experience ({data.experience.length} entries)
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id} className="glass-frosted p-4 rounded-lg">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-sm opacity-80">{exp.company} • {exp.location}</p>
                <p className="text-sm opacity-60">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </p>
                <p className="mt-2 text-sm">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gradient-indigo-purple rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl font-bold gradient-text-purple-pink mb-4">
            Skills by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.skills.map((skillGroup) => {
              const category = data.categories[skillGroup.categoryId]
              return (
                <div key={skillGroup.categoryId} className="glass-frosted p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2" style={{ color: category.color }}>
                    {category.name}
                  </h3>
                  <ul className="space-y-1 text-sm">
                    {skillGroup.items.slice(0, 5).map((skill, idx) => (
                      <li key={idx} className="opacity-80">
                        {skill.name} ({skill.level}%)
                      </li>
                    ))}
                    {skillGroup.items.length > 5 && (
                      <li className="opacity-60 text-xs">
                        +{skillGroup.items.length - 5} more
                      </li>
                    )}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl font-bold gradient-text-indigo-purple mb-4">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.projects.filter(p => p.featured).map((project) => (
              <div key={project.id} className="glass-frosted p-4 rounded-lg">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm opacity-80 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gradient-purple-pink rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="text-sm mt-3 inline-block opacity-80 hover:opacity-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl font-bold gradient-text-indigo-pink mb-4">
            Qualifications
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Education</h3>
              {data.qualifications.education.map((edu) => (
                <div key={edu.id} className="glass-frosted p-4 rounded-lg mb-2">
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-sm opacity-80">{edu.institution}</p>
                  <p className="text-sm opacity-60">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {data.qualifications.certifications.map((cert) => (
                  <div key={cert.id} className="glass-frosted p-3 rounded-lg">
                    <p className="text-sm font-semibold">{cert.name}</p>
                    <p className="text-xs opacity-80">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card">
          <h2 className="text-2xl font-bold gradient-text-purple-pink mb-4">
            Social Links
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.socialLinks.filter(link => link.display).map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button"
              >
                {link.platform}
              </a>
            ))}
          </div>
        </div>

        <div className="glass-panel text-center">
          <h2 className="text-2xl font-bold gradient-text-indigo-purple mb-2">
            ✅ All Data Loaded Successfully
          </h2>
          <p className="opacity-80">
            The default data structure is working correctly with React components and Context API.
          </p>
          <a
            href={data.resume.downloadUrl}
            className="glass-button mt-4 inline-block"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default DataTest
