import React from "react";
import ImageCard from "./components/ImageCard.jsx";

const images = [
  { id: 1, imageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=85", title: "Mountain Morning", description: "A quiet sunrise settles over a lake tucked between the peaks." },
  { id: 2, imageUrl: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85", title: "Golden Fields", description: "The last warm light of the day stretches across open fields." },
  { id: 3, imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85", title: "Open Road", description: "A winding road leads into a wide, sunlit landscape." },
  { id: 4, imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85", title: "Forest Walk", description: "Tall trees frame a peaceful trail through the forest." },
  { id: 5, imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85", title: "Coastal Calm", description: "Soft waves roll onto a bright, quiet stretch of shore." },
  { id: 6, imageUrl: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85", title: "Ocean Blue", description: "Deep blue water catches the changing colors of the sky." },
];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#" aria-label="Moments home">moments<span>.</span></a>
        <p className="header-note">A collection of places to pause</p>
      </header>
      <main className="page">
        <section className="intro" aria-labelledby="gallery-title">
          <p className="eyebrow">THE PHOTO JOURNAL</p>
          <h1 id="gallery-title">Little moments, beautifully found.</h1>
          <p className="intro-copy">A few views from the outdoors to brighten your day.</p>
        </section>
        <section className="gallery" aria-label="Image gallery">
          {images.map((image) => <ImageCard key={image.id} image={image} />)}
        </section>
        <footer className="page-footer">Made for slow days and curious eyes.</footer>
      </main>
    </>
  );
}

export default App;
