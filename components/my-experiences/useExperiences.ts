"use client";

import { ExperienceDisplay } from "./MyExperiences";

export type ExperienceAPIResponse = {
    getAllExperiences: () => Promise<ExperienceDisplay[]>;
}


export function useExperience(): ExperienceAPIResponse {
  async function getAllExperiences(): Promise<ExperienceDisplay[]> {
    try {
      const response = await fetch('/api/experiences');
      if (response.ok) {
        return await response.json();
      } else {
        return [];
      }
    } catch (error) {
      console.error("Failed to fetch experiences");
      return [];
    }
  };
  return { getAllExperiences };
}