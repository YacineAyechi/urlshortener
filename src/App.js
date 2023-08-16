import React, { useState } from "react";
import "./App.css";
import "./styles.css";
import ShortenerForm from "./components/ShortenerForm";
import ShortenedURL from "./components/ShortenedURL";

function App() {
  const [shortUrl, setShortUrl] = useState("");

  const handleUrlSubmit = async (originalUrl) => {
    // Simulate API call to a URL shortening service
    const response = await fetch("0ecd2498255cbb466ef262e2e56215b82649ff54", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ originalUrl }),
    });

    const data = await response.json();
    setShortUrl(data.shortUrl);
  };

  return (
    <div className="App">
      <ShortenerForm onSubmit={handleUrlSubmit} />
      {shortUrl && <ShortenedURL shortUrl={shortUrl} />}
    </div>
  );
}

export default App;
