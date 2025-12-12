export const platformLogos = [
  { id: 49   , imageUrl: "https://images.igdb.com/igdb/image/upload/t_logo_med/49.jpg"   }, // Sega Saturn
  { id: 254  , imageUrl: "https://images.igdb.com/igdb/image/upload/t_logo_med/254.jpg"  }, // PlayStation 2
  { id: 270  , imageUrl: "https://images.igdb.com/igdb/image/upload/t_logo_med/270.jpg"  }, // Dreamcast
  { id: 256  , imageUrl: "https://images.igdb.com/igdb/image/upload/t_logo_med/256.jpg"  }, // Game Boy Advance
  { id: 266  , imageUrl: "https://images.igdb.com/igdb/image/upload/t_logo_med/266.jpg"  }, // Xbox
  { id: 245  , imageUrl: "https://images.igdb.com/igdb/image/upload/t_logo_med/245.jpg"  }, // Nintendo DS
  { id: 273  , imageUrl: "https://images.igdb.com/igdb/image/upload/t_logo_med/273.jpg"  }, // Game Boy Color
  { id: 816  , imageUrl: "https://images.igdb.com/igdb/image/upload/t_logo_med/816.jpg"  }, // NES
  { id: 262  , imageUrl: "https://images.igdb.com/igdb/image/upload/t_logo_med/262.jpg"  }, // Nintendo GameCube
  { id: 274  , imageUrl: "https://images.igdb.com/igdb/image/upload/t_logo_med/274.jpg"  }, // Game Boy
  { id: 803  , imageUrl: "https://images.igdb.com/igdb/image/upload/t_logo_med/803.jpg"  }, // PlayStation (PS1)
  { id: 260  , imageUrl: "https://images.igdb.com/igdb/image/upload/t_logo_med/260.jpg"  }, // Nintendo 64
  { id: 106  , imageUrl: "https://images.igdb.com/igdb/image/upload/t_logo_med/106.jpg"  }, // SNES
  { id: 326  , imageUrl: "https://images.igdb.com/igdb/image/upload/t_logo_med/326.jpg"  }, // Wii
];

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

export function resetFilters(setPlatform, setDeveloper, setGenre, setYear, setOrder, setSearch, setDiscoverMode, setMount, setOpen) {
  setPlatform(new Set());
  setDeveloper(new Set());
  setGenre(new Set());
  setYear({ min: "1985", max: "2006" });
  setOrder("");
  setSearch("");
  if (setMount) {
    setMount(true);
  }
  
  setOpen(new Set());

  if (setDiscoverMode) {
    setDiscoverMode(false);
  }

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