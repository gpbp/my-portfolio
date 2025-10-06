import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  fetchExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
  clearError,
  setInitialExperiences,
} from '../../store/features/experiences/experiencesSlice'
import type { ExperienceDisplay } from './MyExperiences';
import { RootState } from '@/store';

export interface UseExperienceAPI {
  experiences: ExperienceDisplay[]
  loading: boolean
  error: string | null
  fetchExperiences: () => void
  addExperience: (newExperience: Omit<ExperienceDisplay, 'id'>) => void
  updateExperience: (id: number, updates: Partial<ExperienceDisplay>) => void
  deleteExperience: (id: number) => void
  clearError: () => void
  setInitialExperiences: (experiences: ExperienceDisplay[]) => void
}

export function useExperience(): UseExperienceAPI {
  const dispatch = useAppDispatch()
  

  const experiences = useAppSelector((state: RootState) => state.experiences.experiences)
  const loading = useAppSelector((state: RootState) => state.experiences.loading)
  const error = useAppSelector((state: RootState) => state.experiences.error)

  // Load experiences on first mount
  useEffect(() => {
    if (experiences.length === 0) {
      dispatch(fetchExperiences())
    }
  }, [dispatch, experiences.length])

  const handleFetchExperiences = () => {
    dispatch(fetchExperiences())
  }

  const handleAddExperience = (newExperience: Omit<ExperienceDisplay, 'id'>) => {
    dispatch(addExperience(newExperience))
  }

  const handleUpdateExperience = (id: number, updates: Partial<ExperienceDisplay>) => {
    dispatch(updateExperience({ id, updates }))
  }

  const handleDeleteExperience = (id: number) => {
    dispatch(deleteExperience(id))
  }

  const handleClearError = () => {
    dispatch(clearError())
  }

  const handleSetInitialExperiences = (experiencesData: ExperienceDisplay[]) => {
    dispatch(setInitialExperiences(experiencesData))
  }

  return {
    experiences,
    loading,
    error,
    fetchExperiences: handleFetchExperiences,
    addExperience: handleAddExperience,
    updateExperience: handleUpdateExperience,
    deleteExperience: handleDeleteExperience,
    clearError: handleClearError,
    setInitialExperiences: handleSetInitialExperiences,
  }
}