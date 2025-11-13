

function normalizeGameData(rawGame) {

  if (!rawGame) {
     return null;
  } 

  return {
    id: rawGame.id,
    igdbId: rawGame.igdbId,
    name: rawGame.name ?? "Unknown Title",
    releaseDate: rawGame.firstReleaseDate ?? "Unknown",
    developer: rawGame.developer ?? "Unknown Developer",
    ageRating: rawGame.ageRating ?? "Unavailable",
    ageDescription: rawGame.ageRating?.description ?? "",
    rating: rawGame.rating ? Math.round(rawGame.rating) : null,
    cover: rawGame.coverUrl ?? "",
    originalPlatform: rawGame.originalPlatform,
    platforms: rawGame.platforms,
    screenshots: normalizeScreenshots(rawGame.screenshots),
    summary: rawGame.summary ?? "",
    storyline: rawGame.storyline ?? "",
    url: rawGame.url ?? "",
  };
};

function normalizeScreenshots(screenshots) {
  if (!Array.isArray(screenshots)) {
      return [];
  }

  return screenshots.map(ss => ({
    id: ss.id,
    gameId: ss.gameId,
    url: ss.url?.replace("t_thumb", "t_screenshot_huge") ?? "",
    width: ss.width,
    height: ss.height,
  }));
};

export function resetFilters(setPlatform, setDeveloper, setGenre, setYear, setOrder, setSearch) {
  setPlatform(new Set());
  setDeveloper(new Set());
  setGenre(new Set());
  setYear({ min: "1985", max: "2006" });
  setOrder("");
  setSearch("");
};

export function randomizeIndex(min, max) {
  min = Math.ceil(min); // min current offset value
  max = Math.floor(max); // max offset + limit value
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

import { useEffect, useState } from 'react';

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function: clear the timeout if the value or delay changes before the timer fires
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Re-run effect if value or delay changes

  return debouncedValue;
}



export default normalizeGameData;