import { useState } from "react";

export default function Footer(props) {
  const [showModel, handleToggleModel] = props
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>The Brutal Martian Landscape</h2>
        <h1>APOD PROJECT</h1>
      </div>
      <button onClick={handleToggleModel}> 
        <i class="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
