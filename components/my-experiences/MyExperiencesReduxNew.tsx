import React, { useEffect } from 'react'
import { useExperience } from './useExperienceRedux'
import type { ExperienceDisplay } from './MyExperiences'

// Sample data to demonstrate the Redux store
const sampleExperiences: ExperienceDisplay[] = [
  {
    id: 1,
    title: "Full-stack Developer",
    company: "Capgemini",
    duration: "May 2023 - Present",
    contractType: "Permanent Contract",
    description: "Working on banking and finance applications with modern tech stack",
    imageUrl: "/img/capgeminiBrest.jpg",
    shrunkImageBackgroundPosition: "bg-center",
    techStack: ["VueJS", "Java Spring Boot", "PostgreSQL", "GRPC", "Kubernetes"]
  },
  {
    id: 2,
    title: "Full-stack Developer",
    company: "Famoco",
    duration: "March 2020 - September 2020",
    contractType: "Internship",
    description: "Building innovative payment solutions for mobile devices",
    imageUrl: "/img/famoco.png",
    shrunkImageBackgroundPosition: "bg-center",
    techStack: ["VueJS", "Java Spring Boot", "JHipster", "PostgreSQL", "MongoDB"]
  }
]

export default function MyExperiencesRedux(): JSX.Element {
  const { 
    experiences, 
    loading, 
    error, 
    setInitialExperiences,
    updateExperience,
    deleteExperience
  } = useExperience()

  // Load sample data if no experiences are present
  useEffect(() => {
    if (experiences.length === 0 && !loading) {
      setInitialExperiences(sampleExperiences)
    }
  }, [experiences.length, loading, setInitialExperiences])

  if (loading && experiences.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <p className="mt-2">Loading experiences...</p>
      </div>
    )
  }

  if (error && experiences.length === 0) {
    return (
      <div className="text-center py-8 text-red-500">
        <p>Error: {error}</p>
        <button 
          onClick={() => setInitialExperiences(sampleExperiences)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Load Sample Data
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Experiences (Redux Version)</h2>
        <div className="space-x-2">
          <button
            onClick={() => setInitialExperiences([])}
            className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
          >
            Clear All
          </button>
          <button
            onClick={() => setInitialExperiences(sampleExperiences)}
            className="px-3 py-1 bg-green-500 text-white text-sm rounded hover:bg-green-600"
          >
            Reset Sample Data
          </button>
        </div>
      </div>

      {loading && (
        <div className="text-center py-4">
          <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span className="ml-2">Loading...</span>
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error: {error}
        </div>
      )}

      <div className="grid gap-6">
        {experiences.map((experience) => (
          <div key={experience.id} className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p className="text-lg text-gray-600">{experience.company}</p>
                <p className="text-sm text-gray-500">{experience.duration}</p>
                <p className="text-sm text-blue-600">{experience.contractType}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => updateExperience(experience.id, { 
                    title: experience.title + " (Updated)" 
                  })}
                  className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteExperience(experience.id)}
                  className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{experience.description}</p>

            <div>
              <h4 className="font-medium mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {experiences.length === 0 && !loading && (
        <div className="text-center py-8 text-gray-500">
          <p>No experiences found.</p>
          <button
            onClick={() => setInitialExperiences(sampleExperiences)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Load Sample Experiences
          </button>
        </div>
      )}

      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold mb-2">Redux Store Info:</h3>
        <p><strong>Total Experiences:</strong> {experiences.length}</p>
        <p><strong>Loading:</strong> {loading ? 'Yes' : 'No'}</p>
        <p><strong>Error:</strong> {error || 'None'}</p>
      </div>
    </div>
  )
}