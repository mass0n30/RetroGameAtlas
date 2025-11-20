
require('dotenv').config(); 

 async function getEbayGamePriceData() {

  const game = "super mario 64";
  const platform = "nintendo 64";
  const token = process.env.EBAY_APP_ID

  const res = await fetch(
    `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${encodeURIComponent(
      game + " " + platform
    )}&limit=20&filter=conditions:{3000|1000|2000}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,

        "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
        // affiliate optional in future
        "X-EBAY-C-ENDUSERCTX": "affiliateCampaignId=5338836542",
      },
    }
  );

  const data = await res.json();
  console.log(data);
  return Response.json(data);
};

module.exports = { getEbayGamePriceData};