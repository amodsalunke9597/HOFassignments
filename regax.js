const urlRegex = /^(http:\/\/|https:\/\/)[\w\d\S]+[.][a-zA-Z]+$/;

function checkUrl(url) {
  if (urlRegex.test(url)) {
    console.log(`${url} is a valid URL.`);
  } else {
    console.log(`${url} is not a valid URL.`);
  }
}

// Example usage
checkUrl('https://www.google.com'); // output: https://www.google.com is a valid URL.
checkUrl('http://localhost:3000'); // output: http://localhost:3000 is a valid URL.
checkUrl('www.example.com'); // output: www.example.com is not a valid URL.
