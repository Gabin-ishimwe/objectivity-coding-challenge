const urlDatabase = {}; // this object will store the mappings between short codes and long urls

function generateShortCode(longUrl) {
  const timestamp = new Date().getTime().toString(36); // use current timestamp as part of the code
  const random = Math.floor(Math.random() * 10000).toString(36); // use a random number as part of the code
  return `${timestamp}${random}`; // combine the timestamp and random number to create the short code
}

function shortenUrl(longUrl) {
  // check if the long url already has a short code
  for (const code in urlDatabase) {
    if (urlDatabase[code] === longUrl) {
      return `https://example.com/${code}`; // return the existing short url
    }
  }

  // generate a new short code
  const shortCode = generateShortCode(longUrl);
  urlDatabase[shortCode] = longUrl; // store the mapping in the database
  return `https://example.com/${shortCode}`; // return the new short url
}

function expandUrl(shortUrl) {
  const code = shortUrl.substring(shortUrl.lastIndexOf("/") + 1); // extract the short code from the url
  if (urlDatabase[code]) {
    return urlDatabase[code]; // return the original long url
  } else {
    throw new Error("Invalid short url"); // throw an error if the short url is invalid
  }
}
