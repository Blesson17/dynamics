import React from "react";

function ImageCard({ image }) {
  const { imageUrl, title, description } = image;

  return (
    <article className="image-card">
      <img className="card-image" src={imageUrl} alt={title} loading="lazy" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default ImageCard;
