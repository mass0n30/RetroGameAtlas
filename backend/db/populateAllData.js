// prisma/seed.js
const { prisma } = require('./prismaClient');
const platforms = [
  { id: 59, name: "Atari 2600",                          releaseOrder: 0,  abbreviation: "A2600",  displayabbrev: "Atari 2600",        generation: 2, slug: "atari-2600", platformLogo: "/consoles/atari2600.png" },
  { id: 18, name: "Nintendo Entertainment System",       releaseOrder: 1,  abbreviation: "NES",    displayabbrev: "NES",               generation: 3, slug: "nes",        platformLogo: "/consoles/nes.png" },
  { id: 29, name: "Sega Mega Drive/Genesis",             releaseOrder: 2,  abbreviation: "MD/Gen", displayabbrev: "Genesis",           generation: 4, slug: "genesis",    platformLogo: "/consoles/genesis.png" },
  { id: 33, name: "Game Boy",                            releaseOrder: 3,  abbreviation: "GB",     displayabbrev: "Game Boy",          generation: 4, slug: "gb",         platformLogo: "/consoles/gb.png" },
  { id: 19, name: "Super Nintendo Entertainment System", releaseOrder: 4,  abbreviation: "SNES",   displayabbrev: "SNES",              generation: 4, slug: "snes",       platformLogo: "/consoles/snes.png" },
  { id: 7,  name: "PlayStation",                         releaseOrder: 5,  abbreviation: "PS1",    displayabbrev: "PlayStation",       generation: 5, slug: "ps",         platformLogo: "/consoles/ps1.png" },
  { id: 32, name: "Sega Saturn",                         releaseOrder: 6,  abbreviation: "Saturn", displayabbrev: "Saturn",            generation: 5, slug: "saturn",     platformLogo: "/consoles/saturn.png" },
  { id: 4,  name: "Nintendo 64",                         releaseOrder: 7,  abbreviation: "N64",    displayabbrev: "Nintendo 64",       generation: 5, slug: "n64",        platformLogo: "/consoles/n64.png" },
  { id: 22, name: "Game Boy Color",                      releaseOrder: 8,  abbreviation: "GBC",    displayabbrev: "Game Boy Color",    generation: 5, slug: "gbc",        platformLogo: "/consoles/gbc.png" },
  { id: 23, name: "Dreamcast",                           releaseOrder: 9,  abbreviation: "DC",     displayabbrev: "Dreamcast",         generation: 6, slug: "dc",         platformLogo: "/consoles/dreamcast.png" },
  { id: 8,  name: "PlayStation 2",                       releaseOrder: 10, abbreviation: "PS2",    displayabbrev: "PS2",               generation: 6, slug: "ps2",        platformLogo: "/consoles/ps2.png" },
  { id: 21, name: "GameCube",                            releaseOrder: 11, abbreviation: "GC",     displayabbrev: "GameCube",          generation: 6, slug: "gamecube",   platformLogo: "/consoles/gamecube.png" },
  { id: 24, name: "Game Boy Advance",                    releaseOrder: 12, abbreviation: "GBA",    displayabbrev: "Game Boy Advance",  generation: 6, slug: "gba",        platformLogo: "/consoles/gba.png" },
  { id: 11, name: "Xbox",                                releaseOrder: 13, abbreviation: "Xbox",   displayabbrev: "Xbox",              generation: 6, slug: "xbox",       platformLogo: "/consoles/xbox.png" },
  { id: 20, name: "Nintendo DS",                         releaseOrder: 14, abbreviation: "DS",     displayabbrev: "Nintendo DS",       generation: 7, slug: "nds",        platformLogo: "/consoles/nds.png" },
  { id: 38, name: "PlayStation Portable",                releaseOrder: 15, abbreviation: "PSP",    displayabbrev: "PSP",               generation: 7, slug: "psp",        platformLogo: "/consoles/psp.png" },
  { id: 12, name: "Xbox 360",                            releaseOrder: 16, abbreviation: "360",    displayabbrev: "Xbox 360",          generation: 7, slug: "xbox360",    platformLogo: "/consoles/xbox360.png" },
  { id: 5,  name: "Wii",                                 releaseOrder: 17, abbreviation: "Wii",    displayabbrev: "Wii",               generation: 7, slug: "wii",        platformLogo: "/consoles/wii.png" },
  { id: 9,  name: "PlayStation 3",                       releaseOrder: 18, abbreviation: "PS3",    displayabbrev: "PS3",               generation: 7, slug: "ps3",        platformLogo: "/consoles/ps3.png" },
  { id: 37, name: "Nintendo 3DS",                        releaseOrder: 19, abbreviation: "3DS",    displayabbrev: "Nintendo 3DS",      generation: 8, slug: "3ds",        platformLogo: "/consoles/3ds.png" },
];


const ratings = [
  { id: 2, rating: 'C', description: '/ratings/Crating.png' },
  { id: 3, rating: 'E', description: '/ratings/Erating.png' },
  { id: 4, rating: 'E10+', description: '/ratings/E10rating.png' },
  { id: 5, rating: 'T', description: '/ratings/Trating.png' },
  { id: 6, rating: 'M', description: '/ratings/Mrating.png' },
  { id: 7, rating: 'AO', description: '/ratings/Mrating.png' }
];

const developers = [
  { id: 70, name: "Nintendo", country: "Japan", logoUrl: '/developers/Nintendo.svg'},
  { id: 37, name: "Capcom", country: "Japan" ,logoUrl:'/developers/capcom.svg'},
  { id: 112, name: "Sega", country: "Japan" ,logoUrl:'/developers/sega.svg'},
  { id: 24170, name: "Squaresoft", country: "Japan" ,logoUrl: '/developers/squaresoft.svg'},
  { id: 129, name: "Konami", country: "Japan", logoUrl:'/developers/konami.svg'},
  { id: 771, name: "Rare", country: "UK" ,logoUrl:'/developers/rare.png'},
  { id: 818, name: "Atlus", country: "Japan" ,logoUrl:'/developers/atlus.svg'},
  { id: 401, name: "Naughty Dog", country: "USA", logoUrl: '/developers/naughtydog.png'},
  { id: 620, name: "Bungie", country: "USA" ,logoUrl: '/developers/bungie.svg'},

  { id: 1474, name: "SNK", country: "Japan", logoUrl: '/devlopers/snk.svg' },             
  { id: 248, name: "Bandai Namco Entertainment", country: "Japan", logoUrl: '/developers/bandai.svg' }, 
  { id: 184, name: "id Software", country: "USA", logoUrl: '/developers/idsoftware.png' },
  { id: 51, name: "Blizzard Entertainment", country: "USA", logoUrl: '/developers/blizzard.svg' },
  { id: 10, name: "LucasArts", country: "USA", logoUrl: '/developers/lucasarts.png' },
  { id: 56, name: "Valve", country: "USA", logoUrl: '/developers/valve.svg' },
  { id: 126, name: "Bethesda Game Studios", country: "USA", logoUrl: '/developers/bethesda.svg' },
  { id: 104, name: "Ubisoft Entertainment", country: "France", logoUrl: '/developers/ubisoft.svg' }, 
  { id: 8, name: "2K Games", country: "USA", logoUrl: '/developers/2kgames.svg' },
  { id: 29, name: "Rockstar Games", country: "USA", logoUrl:'/developers/rockstar.png' },
  { id: 1012, name: "FromSoftware", country: "Japan", logoUrl:'/developers/fromsoftware.svg' },
  { id: 17463, name: "Epic Games", country: "USA", logoUrl: '/developers/epicgames.svg' },
  { id: 834, name: "Insomniac Games", country: "USA", logoUrl: '/developers/insomniac.svg' },
  { id: 2, name: "BioWare", country: "Canada", logoUrl: '/developers/bioware.svg' },
];


function mapRating(ageRatingId) {
  let rating = null;

  if (!ageRatingId) return null;

  if ([2].includes(ageRatingId)) rating = 2; // C
  else if ([3, 8, 9, 18, 19, 23, 24, 28].includes(ageRatingId)) rating = 3; // E
  else if ([4, 10, 20, 30, 31].includes(ageRatingId)) rating = 4; // E10+
  else if ([5, 11, 21, 32].includes(ageRatingId)) rating = 5; // T
  else if ([6, 12, 16, 17, 22, 33, 38].includes(ageRatingId)) rating = 6; // M
  else if ([7, 26, 39].includes(ageRatingId)) rating = 7; // AO

  return rating; 
}

async function seed() {
  for (const platform of platforms) {
    await prisma.platform.upsert({
      where: { id: platform.id },
      update: platform,
      create: platform
    });
  }

  for (const rating of ratings) {
    await prisma.gameRating.upsert({
      where: { id: rating.id },
      update: rating,
      create: rating
    });
  }

  for (const developer of developers) {
    await prisma.developers.upsert({
      where: {id: developer.id},
      update: developer,
      create: developer
    });
  }
  console.log("All platforms, developers and ratings seeded");
}

seed()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());

  module.exports = {allPlatFormsData:platforms, allRatingsData:ratings, mapRating, allDevelopersData:developers};
