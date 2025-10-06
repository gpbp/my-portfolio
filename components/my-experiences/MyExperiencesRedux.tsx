import React from 'react'
import { useExperience } from './useExperienceRedux'
import TechStack from "@/ui-components/tech-stack/TechStack"
import SlidingCard from "@/ui-components/sliding-card/SlidingCard"
import Carousel from "@/ui-components/carousel/Carousel"

export default function MyExperiencesRedux(): JSX.Element {
  const { 
    experiences, 
    loading, 
    error, 
    fetchExperiences, 
    clearError 
  } = useExperience()

  if (loading && experiences.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-2">Loading experiences...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        <p>Error: {error}</p>
        <button 
          onClick={() => {
            clearError()
            fetchExperiences()
          }}
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Retry
        </button>
      </div>
    )
  }

  const cards = experiences.map((exp) => {
    const content = (
      <div>{exp.description}</div>
    )

    const header = (
      <div>
        <div className="text-xl">{exp.title}</div>
        <div className="text-xs">{exp.company}</div>
        <div className="text-xs">{exp.contractType}</div>
        <div className="text-xs">{exp.duration}</div>
      </div>
    )

    const footer = (
      <div className="mt-4">
        <TechStack techStack={exp.techStack}/>
      </div>
    )

    return (
      <SlidingCard 
        key={exp.id} 
        header={header} 
        content={content} 
        footer={footer} 
        imageUrl={exp.imageUrl} 
        className="flex-1/3 h-100" 
        shrunkImageBackgroundPosition={exp.shrunkImageBackgroundPosition} 
      />
    )
  })

  return (
    <div className="flex flex-col gap-y-2">
      <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-4xl font-bold w-2/3">
        Behind every project is a <p className="bg-gradient-to-b from-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text">lesson</p>, and behind every
        challenge is <p className="bg-gradient-to-b from-blue-500 to-indigo-500 inline text-transparent bg-clip-text">growth</p>.
      </div>
      <div className="font-roboto-mono inline-block items-center justify-center px-8 py-4 text-lg text-gray-500 font-bold w-1/2">
        This is a brief overview of my professional journey. Each experience has contributed to my growth and skill set.
      </div>
      <div className="flex justify-end px-8">
        <button 
          onClick={fetchExperiences}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>
      <Carousel cards={cards}/>
    </div>
  )
}