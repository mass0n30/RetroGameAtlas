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

export function resetFilters(setPlatform, setDeveloper, 
  setGenre, setYear, setOrder, setSearch, setScreenshotMode, setMount, setOpen, setDiscover) {
  if (setPlatform) {setPlatform(new Set())};
  if (setDeveloper) {setDeveloper(new Set());};
  if (setGenre)   {setGenre(new Set())};

  setYear({ min: "1974", max: "2012"  });
  setOrder("");
  if (setSearch) {
    setSearch("");
  }
  if (setDiscover) {
    setDiscover(false);
  }
  if (setMount) {
    setMount(true);
  }
  
  setOpen(new Set());

  if (setScreenshotMode) {
    setScreenshotMode(false);
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

export function getYouTubeId(url) {
  if (!url) return null;

  try {
    const u = new URL(url);

    // youtube.com/watch?v=ID
    if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v");
    }

    // youtu.be/ID
    if (u.hostname === "youtu.be") {
      return u.pathname.slice(1);
    }

    return null;
  } catch {
    return null;
  }
}



export function styleMessages() {
  let toggleRowsColors = false;

  const fieldsDivs = document.querySelectorAll(".recordsectionbtn");

  console.log("Styling message rows:", fieldsDivs);

  fieldsDivs.forEach((message) => {
    if (toggleRowsColors) {
      message.classList.add("light");
      toggleRowsColors = false;
    } else {
      message.classList.add("dark");
      toggleRowsColors = true;
    }
  });
};


export function getCompletedGamesStats(completedGames) {
  const totalGames = completedGames.length;
  const genresCount = {
    "Shooter": 0,
    "Arcade": 0,
    "Sport": 0,
    "Racing": 0,
    "Card & Board Game": 0,
    "Puzzle": 0,
    "Simulator": 0,
    "Strategy": 0,
    "Music": 0,
    "Adventure": 0,
    "Fighting": 0,
    "Platform": 0,
    "Turn-based strategy (TBS)": 0,
    "Pinball": 0,
    "Role-playing (RPG)": 0,
    "Tactical": 0,
    "Point-and-click": 0,
    "Hack and slash/Beat 'em up": 0,
    "Real Time Strategy (RTS)": 0,
    "Quiz/Trivia": 0,
    "Indie": 0,
    "Visual Novel": 0
  };
  const consolesCount = {
    "Atari 2600": 0,
    "NES": 0,
    "Genesis": 0,
    "Game Boy": 0,
    "SNES": 0,
    "PlayStation": 0,
    "Saturn": 0,
    "Nintendo 64": 0,
    "Game Boy Color": 0,
    "Dreamcast": 0,
    "PS2": 0,
    "GameCube": 0,
    "Game Boy Advance": 0,
    "Xbox": 0,
    "Nintendo DS": 0,
    "PSP": 0,
    "Xbox 360": 0,
    "Wii": 0,
    "PS3": 0,
    "Nintendo 3DS": 0
  };

  completedGames.forEach(game => {
    if (game.genres && Array.isArray(game.genres)) {
      game.genres.forEach(genre => {
        genresCount[genre.name] += 1;
      });
    }
  });

  completedGames.forEach(game => {
    if (game.platforms && Array.isArray(game.platforms)) {
      game.platforms.forEach(platform => {
        consolesCount[platform.displayabbrev] += 1;
      });
    }
  });

  const consolesArray = Object.entries(consolesCount).map(function ([name, count]) {
    return { name: name, count: count };
  });

  const genresArray = Object.entries(genresCount).map(function ([name, count]) {
    return { name: name, count: count };
  });

  return {
    totalGames,
    genresArray,
    consolesArray
  };
};


export default normalizeGameData;