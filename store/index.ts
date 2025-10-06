import { configureStore } from '@reduxjs/toolkit';
import experiencesReducer from './features/experiences/experiencesSlice';

export const store = configureStore({
  reducer: {
    experiences: experiencesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Export for use in other files
export type { ExperienceDisplay, Experience } from '../components/my-experiences/MyExperiences';