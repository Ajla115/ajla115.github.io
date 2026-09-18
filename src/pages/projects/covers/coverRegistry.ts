// Repo card covers -- GitHub's own OpenGraph social-preview image per repo,
// captured at 960x600 webp.
import agenticAiAutomation from "@assets/projects/agentic-ai-automation.webp";
import secureSoftwareSystem from "@assets/projects/secure-software-system.webp";
import instametrics from "@assets/projects/instametrics.webp";
import moviesWatchlist from "@assets/projects/movies-watchlist.webp";
import carRental from "@assets/projects/car-rental.webp";
import realTimeImageAnalytics from "@assets/projects/real-time-image-analytics.webp";

export type ProjectCover = { kind: "image"; src: string };

/** Cover per project id (ids from data/projects.json). */
const COVER_BY_ID: Record<number, ProjectCover> = {
   1: { kind: "image", src: agenticAiAutomation },
   2: { kind: "image", src: secureSoftwareSystem },
   3: { kind: "image", src: instametrics },
   4: { kind: "image", src: moviesWatchlist },
   5: { kind: "image", src: carRental },
   6: { kind: "image", src: realTimeImageAnalytics },
};

export const getProjectCover = (
   id: number,
   _title: string,
): ProjectCover | undefined => COVER_BY_ID[id];
