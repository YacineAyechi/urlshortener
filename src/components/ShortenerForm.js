import React, { useState } from "react";

const App = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const API_KEY = "0ecd2498255cbb466ef262e2e56215b82649ff54";

  const handleShorten = async () => {
    try {
      const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          long_url: originalUrl,
        }),
      });

      const data = await response.json();
      setShortUrl(data.link);
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter URL to shorten"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && (
        <div>
          <p>Shortened URL: {shortUrl}</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            Visit Shortened URL
          </a>
        </div>
      )}
    </div>
  );
};

export default App;
