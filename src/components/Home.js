import React from 'react';
import homeImage from './home-image.jpg'; // Import the image file

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to My React App!</h1>
      <img src={image1.img} alt="Home" /> {/* Display the image */}
      <p>This is the home page of my React.js application.</p>
      {/* Add more content as needed */}
    </div>
  );
}

export default HomePage;
