const urlStore = {
  lfmi6alk2t0: 'https://youtube.com',
  lfmi6alk35b: 'https://paypal.com',

}; // this object will store the mappings between short codes and long urls

// function to generate short code
function generateShortCode() {
  const timestamp = new Date().getTime().toString(36); // use current timestamp as part of the code
  const random = Math.floor(Math.random() * 10000).toString(36); // use a random number as part of the code
  return `${timestamp}${random}`; // combine the timestamp and random number to create the short code
}

// main function
function shortenUrl(longUrl) {
  // check if the long url already has a short code
  for (const code in urlStore) {
    if (urlStore[code] === longUrl) {
      return `https://${code}`; // return the existing short url
    }
  }

  // generate a new short code
  const shortCode = generateShortCode();
  urlStore[shortCode] = longUrl; // store the mapping in the database
  return `https://${shortCode}`; // return the new short url
}

// function to get expanded url
function expandUrl(shortUrl) {
  const code = shortUrl.substring(shortUrl.lastIndexOf("/") + 1); // extract the short code from the url
  if (urlStore[code]) {
    return urlStore[code]; // return the original long url
  } else {
    throw new Error("Invalid short url"); // throw an error if the short url is invalid
  }
}

// test
shortenUrl("https://google.com")
shortenUrl("https://apple.com")
shortenUrl("https://twitter.com")
shortenUrl("https://paypal.com")
shortenUrl("https://youtube.com")

console.log(urlStore)

console.log(expandUrl("lfmi6alk2t0"))
