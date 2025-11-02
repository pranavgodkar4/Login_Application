import React from 'react';

function HomePage() {
    console.log("Home");
    console.log("token - " +localStorage.getItem("token"));
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default HomePage;
