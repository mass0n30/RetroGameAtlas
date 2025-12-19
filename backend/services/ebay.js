
require('dotenv').config(); 

// storing access token server side in global variable 
// Update Logic to use Exp and 
let ebayAccessToken = null;
let ebayTokenExpiresAt = null;

 async function getEbayToken() {
  const now = Date.now();

  if (ebayAccessToken && now < ebayTokenExpiresAt) {
    return ebayAccessToken;
  }

  const res = await fetch('https://api.ebay.com/identity/v1/oauth2/token',
    {
      method:'POST',
      
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        Authorization: "Basic " + Buffer.from(
          `${process.env.EBAY_APP_ID}:${process.env.EBAY_APP_SECRET}`
        ).toString("base64"),
      
      },
      body: "grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope",
    }
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  ebayAccessToken = data.access_token;
  ebayTokenExpiresAt = Date.now() + data.expires_in * 1000; 
  return data.access_token;

};

async function getGamePrice(gameName, platform) {
  const token = await getEbayToken();  

  if (token == null) {
    console.log('ebay token is null')
    return null
  };

  // try fetching w authentic and ridding reproduction keywords first
  let res = await fetch(
    `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${encodeURIComponent(`${gameName} ${platform}authentic -repro -reproduction -bootleg -fake`)}&fieldgroups=MATCHING_ITEMS&aspect_filter=category_id:139973,Title:${gameName}&limit=3&filter=conditions:{NEW|USED},buyingOptions:{FIXED_PRICE}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
      },
    }
  );

  if (!res.itemSummaries) {
    res = await fetch(
      `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${encodeURIComponent(`${gameName} ${platform}`
      )}&fieldgroups=MATCHING_ITEMS&aspect_filter=category_id:139973,Title:${gameName}&limit=5&filter=conditions:{NEW|USED},buyingOptions:{FIXED_PRICE}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
        },
      }
    );
  }

  if (res) {
    const data = await res.json();
    return data.itemSummaries;
  }

};

module.exports = { getGamePrice};
