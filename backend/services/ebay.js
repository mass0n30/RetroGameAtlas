
require('dotenv').config(); 

 async function getEbayToken() {

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

  const data = await res.json();

  if (data) {
    return data.access_token;
  } else {
    return null;
  }
};

async function getGamePrice(gameName, platform) {
  const token = await getEbayToken();  

  console.log(token);

  if (token == null) {
    return null
  };

  const res = await fetch(
    `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${encodeURIComponent(`${gameName} ${platform}`
    )}&fieldgroups=MATCHING_ITEMS&aspect_filter=category_id:139973,Title:${gameName}&limit=3&filter=conditions:{NEW|USED},buyingOptions:{FIXED_PRICE}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
      },
    }
  );

  const data = await res.json();
  console.log(data);
};

module.exports = { getGamePrice};
