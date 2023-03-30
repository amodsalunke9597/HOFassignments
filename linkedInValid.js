// Regular expression to match valid LinkedIn profile URLs
const linkedInRegex = /^https:\/\/www\.linkedin\.com\/in\/[\w-]{5,30}[a-zA-Z0-9]$/;

// Sample input URLs to test
const urls = [
  "https://www.linkedin.com/in/john-doe-123",
  "https://www.linkedin.com/in/jane-doe",
  "https://www.linkedin.com/in/john_doe",
  "https://www.linkedin.com/in/johndoe",
  "https://www.linkedin.com/in/john-doe-12345678901234567890",
  "https://www.linkedin.com/in/john-doe-!",
  "https://www.linkedin.com/profile/view?id=12345",
];

// Test each URL against the regular expression and print the result
urls.forEach(url => {
  const isValid = linkedInRegex.test(url);
  if (isValid) {
    console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
});
