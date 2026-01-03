async function getWorldRecordTime(gameName, gameConsole) {


  const search = await fetch(`https://www.speedrun.com/api/v1/games?name=${encodeURIComponent(gameName)}`);
  const game = (await search.json()).data[0];
  if (!game) return null;

  const categories = await fetch(`https://www.speedrun.com/api/v1/games/${game.id}/categories`);
  const categoryJson = await categories.json();
  let anyPercent = categoryJson.data.find(c => c.name.includes('Any%'));

  //looking for any percent run first, if not push another run
  if (!anyPercent && categoryJson.data.length > 0) {
    anyPercent = categoryJson.data[0];

    anyPercent.name ? recordName = anyPercent.name : recordName = null
  }

  const wr = await fetch(`https://www.speedrun.com/api/v1/categories/${anyPercent.id}/records?top=3`);
 
  const records = (await wr.json()).data[0] || [];

  const firstRun  = records?.runs?.[0];
  const secondRun = records?.runs?.[1];
  const thirdRun  = records?.runs?.[2];

  const [firstPlace, secondPlace, thirdPlace] = await Promise.all([
    firstRun  ? convertRunData(firstRun.run)  : null,
    secondRun ? convertRunData(secondRun.run) : null,
    thirdRun  ? convertRunData(thirdRun.run)  : null,
  ]);

  return {
    firstPlace,
    secondPlace,
    thirdPlace
  };
};

async function getHundredPercentTime(gameName, gameConsole) {

  const search = await fetch(`https://www.speedrun.com/api/v1/games?name=${encodeURIComponent(gameName)}`);
  const game = (await search.json()).data[0];
  if (!game) return null;

  const categories = await fetch(`https://www.speedrun.com/api/v1/games/${game.id}/categories`);
  const categoriesJson = await categories.json();

  //looking for hundred percent run first, if not push another run
  let hundredPercent = categoriesJson.data.find(c => 
    c.name.includes('100%')
  );

  if (!hundredPercent && categoriesJson.data.length > 1) {
    hundredPercent = categoriesJson.data[0]

    hundredPercent.name ? recordName = hundredPercent.name : recordName = null
  } 

const wr = await fetch(`https://www.speedrun.com/api/v1/categories/${hundredPercent.id}/records?top=3`);

const records = (await wr.json()).data[0] || [];

const firstRun  = records?.runs?.[0];
const secondRun = records?.runs?.[1];
const thirdRun  = records?.runs?.[2];

const [firstPlace, secondPlace, thirdPlace] = await Promise.all([
  firstRun  ? convertRunData(firstRun.run)  : null,
  secondRun ? convertRunData(secondRun.run) : null,
  thirdRun  ? convertRunData(thirdRun.run)  : null,
]);

  return {
    firstPlace,
    secondPlace,
    thirdPlace
  };
};

async function convertRunData(run) {

  if (run == null) {
    return null;
  }

  const runLink = run?.weblink || null;
  const playerId = run?.players?.[0]?.id || null;
  const username = await getUsernameById(playerId);
  const videoLink = run?.videos?.links?.[0]?.uri || null;
  const timeInSeconds = run?.times?.primary_t || null;
  const timeConverted = formatSecondsToHHMMSS(timeInSeconds);

  return {
    timeConverted,
    runLink,
    videoLink,
    username
  }

}

async function getUsernameById(userId) {
  if (!userId) return null;

  const res = await fetch(`https://www.speedrun.com/api/v1/users/${userId}`);
  const json = await res.json();

  return json?.data?.names?.international || null;
}


function formatSecondsToHHMMSS(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds.toFixed(2)).padStart(2, '0');
  

  return `${formattedHours} hr :${formattedMinutes} min :${formattedSeconds} sec`;
};



module.exports = { getHundredPercentTime, getWorldRecordTime};