async function getWorldRecordTime(gameName, gameConsole) {

  let recordName = "Any%"

  const search = await fetch(`https://www.speedrun.com/api/v1/games?name=${encodeURIComponent(gameName)}`);
  const game = (await search.json()).data[0];
  if (!game) return null;

  const categories = await fetch(`https://www.speedrun.com/api/v1/games/${game.id}/categories`);
  const categoryJson = await categories.json();
  let anyPercent = categoryJson.data.find(c => c.name === recordName);

  if (!anyPercent && categoryJson.data.length > 0) {
    anyPercent = categoryJson.data[0];

    anyPercent.name ? recordName = anyPercent.name : recordName = null
  }

  const wr = await fetch(`https://www.speedrun.com/api/v1/categories/${anyPercent.id}/records?top=1`);
  const test = (await wr.json()).data[0].runs[0];
  const runLink = test.run.weblink;
  const videoLink = test.run.videos?.links[0]?.uri || null;
  const timeInSeconds = test.run.times.primary_t;
  const timeConverted = formatSecondsToHHMMSS(timeInSeconds);


  return {
    timeInSeconds,
    timeConverted,
    runLink,
    videoLink,
    recordName
  };
};

async function getHundredPercentTime(gameName, gameConsole) {

  let recordName = '100%'

  const search = await fetch(`https://www.speedrun.com/api/v1/games?name=${encodeURIComponent(gameName)}`);
  const game = (await search.json()).data[0];
  if (!game) return null;

  const categories = await fetch(`https://www.speedrun.com/api/v1/games/${game.id}/categories`);
  const categoriesJson = await categories.json();
  let hundredPercent = categoriesJson.data.find(c => 
    c.name.includes('100%') || 
    c.name.includes('All') || 
    c.name.includes('Complete')
  );
  if (!hundredPercent && categoriesJson.data.length > 1) {
    hundredPercent = categoriesJson.data[1]

    hundredPercent.name ? recordName = hundredPercent.name : recordName = null
  } else {
    return null;
  }

  const wr = await fetch(`https://www.speedrun.com/api/v1/categories/${hundredPercent.id}/records?top=1`);
  const test = (await wr.json()).data[0].runs[0];
  const runLink = test.run.weblink;
  const videoLink = test.run.videos?.links[0]?.uri || null;
  const timeInSeconds = test.run.times.primary_t;
  const timeConverted = formatSecondsToHHMMSS(timeInSeconds);

  return {
    timeInSeconds,
    timeConverted,
    runLink,
    videoLink,
    recordName
  };
};

function formatSecondsToHHMMSS(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  // Pad with leading zeros if necessary
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}



module.exports = { getHundredPercentTime, getWorldRecordTime};