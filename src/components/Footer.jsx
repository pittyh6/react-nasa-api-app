import { useState } from "react";

export default function Footer(props) {
  const {showModel, handleToggleModel, data} = props
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>APOD PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleToggleModel}> 
        <i class="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
