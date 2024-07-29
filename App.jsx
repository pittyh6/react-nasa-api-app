import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [showModal, setShowModel] = useState(false);

  function handleToggleModel(){
    setShowModel(!showModal)
  }
  return (
    <>
      <Main />
      {showModal && <SideBar handleToggleModel={handleToggleModel} />}
      <Footer handleToggleModel={handleToggleModel} />
    </>
  );
}

export default App;
