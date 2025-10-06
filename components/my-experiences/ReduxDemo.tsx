import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setInitialExperiences } from '../../store/features/experiences/experiencesSlice'
import type { ExperienceDisplay } from './MyExperiences'

// Sample data for testing
const sampleExperiences: ExperienceDisplay[] = [
  {
    id: 1,
    title: "Full-stack Developer",
    company: "Capgemini",
    duration: "May 2023 - Present",
    contractType: "Permanent Contract",
    description: "Working with React and Spring Boot",
    imageUrl: "/img/cacibSQY.jpg",
    shrunkImageBackgroundPosition: "bg-left",
    techStack: ["VueJS", "Java Spring Boot", "PostgreSQL", "GRPC", "Kubernetes"]
  },
  {
    id: 2,
    title: "Full-stack Developer",
    company: "Famoco",
    duration: "March 2020 - September 2020",
    contractType: "Internship",
    description: "Building innovative solutions",
    imageUrl: "/img/famoco.png",
    shrunkImageBackgroundPosition: "bg-center",
    techStack: ["VueJS", "Java Spring Boot", "JHipster", "PostgreSQL", "MongoDB"]
  }
]

export default function ReduxDemo(): JSX.Element {
  const dispatch = useAppDispatch()
  
  // Now these should work with proper typing
  const experiences = useAppSelector((state) => state.experiences.experiences)
  const loading = useAppSelector((state) => state.experiences.loading)
  const error = useAppSelector((state) => state.experiences.error)

  const handleLoadSampleData = () => {
    dispatch(setInitialExperiences(sampleExperiences))
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Redux Store Demo</h1>
      
      <div className="mb-4">
        <button 
          onClick={handleLoadSampleData}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Load Sample Experiences
        </button>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold">Store State:</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p><strong>Loading:</strong> {loading.toString()}</p>
          <p><strong>Error:</strong> {error || 'None'}</p>
          <p><strong>Experiences Count:</strong> {experiences.length}</p>
        </div>
      </div>

      {experiences.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Experiences:</h2>
          {experiences.map((exp: ExperienceDisplay) => (
            <div key={exp.id} className="border p-4 mb-2 rounded">
              <h3 className="font-bold">{exp.title} at {exp.company}</h3>
              <p className="text-sm text-gray-600">{exp.duration}</p>
              <p className="text-sm">{exp.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {exp.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}