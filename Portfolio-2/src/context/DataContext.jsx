import React, { createContext, useContext, useState } from 'react'
import { defaultData } from '../data'

const DataContext = createContext()

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(defaultData)

  const updatePersonalInfo = (updates) => {
    setData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...updates }
    }))
  }

  const updateAbout = (updates) => {
    setData(prev => ({
      ...prev,
      about: { ...prev.about, ...updates }
    }))
  }

  const addExperience = (experience) => {
    setData(prev => ({
      ...prev,
      experience: [experience, ...prev.experience]
    }))
  }

  const updateExperience = (id, updates) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.map(exp =>
        exp.id === id ? { ...exp, ...updates } : exp
      )
    }))
  }

  const deleteExperience = (id) => {
    setData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }))
  }

  const addProject = (project) => {
    setData(prev => ({
      ...prev,
      projects: [project, ...prev.projects]
    }))
  }

  const updateProject = (id, updates) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(proj =>
        proj.id === id ? { ...proj, ...updates } : proj
      )
    }))
  }

  const deleteProject = (id) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id)
    }))
  }

  const updateSkills = (categoryId, items) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.map(skillGroup =>
        skillGroup.categoryId === categoryId
          ? { ...skillGroup, items }
          : skillGroup
      )
    }))
  }

  const addQualification = (type, qualification) => {
    setData(prev => ({
      ...prev,
      qualifications: {
        ...prev.qualifications,
        [type]: [qualification, ...prev.qualifications[type]]
      }
    }))
  }

  const updateSocialLink = (id, updates) => {
    setData(prev => ({
      ...prev,
      socialLinks: prev.socialLinks.map(link =>
        link.id === id ? { ...link, ...updates } : link
      )
    }))
  }

  const value = {
    data,
    setData,
    updatePersonalInfo,
    updateAbout,
    addExperience,
    updateExperience,
    deleteExperience,
    addProject,
    updateProject,
    deleteProject,
    updateSkills,
    addQualification,
    updateSocialLink,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
