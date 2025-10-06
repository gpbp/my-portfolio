import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import type { ExperienceDisplay } from '../../../components/my-experiences/MyExperiences'

// Define the state interface
interface ExperiencesState {
  experiences: ExperienceDisplay[]
  loading: boolean
  error: string | null
}

// Define the initial state
const initialState: ExperiencesState = {
  experiences: [],
  loading: false,
  error: null,
}

// Async thunk for fetching experiences
export const fetchExperiences = createAsyncThunk(
  'experiences/fetchExperiences',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/experiences', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      if (!response.ok) {
        throw new Error('Failed to fetch experiences')
      }
      const data = await response.json()
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
    }
  }
)

// Async thunk for adding a new experience
export const addExperience = createAsyncThunk(
  'experiences/addExperience',
  async (newExperience: Omit<ExperienceDisplay, 'id'>, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/experiences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExperience)
      })
      if (!response.ok) {
        throw new Error('Failed to add experience')
      }
      const data = await response.json()
      return data as ExperienceDisplay
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
    }
  }
)

// Async thunk for updating an experience
export const updateExperience = createAsyncThunk(
  'experiences/updateExperience',
  async ({ id, updates }: { id: number; updates: Partial<ExperienceDisplay> }, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/experiences/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      })
      if (!response.ok) {
        throw new Error('Failed to update experience')
      }
      const data = await response.json()
      return data as ExperienceDisplay
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
    }
  }
)

// Async thunk for deleting an experience
export const deleteExperience = createAsyncThunk(
  'experiences/deleteExperience',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/experiences/${id}`, {
        method: 'DELETE'
      })
      if (!response.ok) {
        throw new Error('Failed to delete experience')
      }
      return id
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error')
    }
  }
)

// Create the slice
export const experiencesSlice = createSlice({
  name: 'experiences',
  initialState,
  reducers: {
    // Synchronous reducers for local state updates
    clearError: (state) => {
      state.error = null
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    // Set initial experiences (for testing/fallback)
    setInitialExperiences: (state, action: PayloadAction<ExperienceDisplay[]>) => {
      state.experiences = action.payload
    },
    // Local action for immediate UI updates (optimistic updates)
    addExperienceLocally: (state, action: PayloadAction<ExperienceDisplay>) => {
      state.experiences.push(action.payload)
    },
    updateExperienceLocally: (state, action: PayloadAction<{ id: number; updates: Partial<ExperienceDisplay> }>) => {
      const { id, updates } = action.payload
      const index = state.experiences.findIndex(exp => exp.id === id)
      if (index !== -1) {
        state.experiences[index] = { ...state.experiences[index], ...updates }
      }
    },
    deleteExperienceLocally: (state, action: PayloadAction<number>) => {
      state.experiences = state.experiences.filter(exp => exp.id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch experiences
      .addCase(fetchExperiences.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchExperiences.fulfilled, (state, action) => {
        state.loading = false
        state.experiences = action.payload
      })
      .addCase(fetchExperiences.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      // Add experience
      .addCase(addExperience.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(addExperience.fulfilled, (state, action) => {
        state.loading = false
        state.experiences.push(action.payload)
      })
      .addCase(addExperience.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      // Update experience
      .addCase(updateExperience.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(updateExperience.fulfilled, (state, action) => {
        state.loading = false
        const index = state.experiences.findIndex(exp => exp.id === action.payload.id)
        if (index !== -1) {
          state.experiences[index] = action.payload
        }
      })
      .addCase(updateExperience.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
      // Delete experience
      .addCase(deleteExperience.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(deleteExperience.fulfilled, (state, action) => {
        state.loading = false
        state.experiences = state.experiences.filter(exp => exp.id !== action.payload)
      })
      .addCase(deleteExperience.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

// Export actions
export const { 
  clearError, 
  setLoading, 
  setInitialExperiences,
  addExperienceLocally, 
  updateExperienceLocally, 
  deleteExperienceLocally 
} = experiencesSlice.actions

// Export reducer
export default experiencesSlice.reducer