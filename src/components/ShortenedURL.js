import React from "react";

const ShortenedURL = ({ shortUrl }) => {
  return (
    <div>
      <h2>Shortened URL</h2>
      <p>{shortUrl}</p>
    </div>
  );
};

export default ShortenedURL;
