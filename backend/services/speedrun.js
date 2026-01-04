let recordName = null;
let recordNameAlt = null;


async function getAllWorldRecordRunTimes(gameName, gameConsole) {

  const search = await fetch(`https://www.speedrun.com/api/v1/games?name=${encodeURIComponent(gameName)}`);
  const game = (await search.json()).data[0];
  if (!game) return null;

  const categories = await fetch(`https://www.speedrun.com/api/v1/games/${game.id}/categories`);
  const categoriesJson = await categories.json();
  const allCategoryData = categoriesJson.data;

  const allTop3Data = (categoriesJson.data.length > 0) ? await Promise.all(
    allCategoryData.map(async (category) => {
      const top3Runs = await getTop3RunsForCategory(category.id);
      return {
        categoryName: category.name,
        categoryId: category.id,
        top3Runs
      };
    })
  ) : [];


  return {
    allTop3Data
  };
};

async function getTop3RunsForCategory(categoryId) {

  const wr = await fetch(`https://www.speedrun.com/api/v1/categories/${categoryId}/records?top=3`);
 
  const records = (await wr.json()).data[0] || [];

  const firstRun  = records?.runs?.[0];
  const secondRun = records?.runs?.[1];
  const thirdRun  = records?.runs?.[2];

  const [firstPlace, secondPlace, thirdPlace] = await Promise.all([
    firstRun  ? convertRunData(firstRun.run)  : null,
    secondRun ? convertRunData(secondRun.run) : null,
    thirdRun  ? convertRunData(thirdRun.run)  : null,
  ]);

  return [
    firstPlace,
    secondPlace,
    thirdPlace,
  ];
};


async function convertRunData(run) {

  if (run == null) {
    return null;
  }

  const runId = run.id;
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
    username,
    runId
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



module.exports = { getAllWorldRecordRunTimes};