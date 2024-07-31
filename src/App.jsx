import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  
  const [showModal, setShowModel] = useState(false);

  function handleToggleModel(){
    setShowModel(!showModal)
  }

  useEffect(()=> {
    async function fetchAPIData(){
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`
      try{
        const res = await fetch(url)
        const data = await res.json()
        console.log('DATA\n', data)
      }catch{
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])
  return (
    <>
      <Main />
      {showModal && <SideBar handleToggleModel={handleToggleModel} />}
      <Footer handleToggleModel={handleToggleModel} />
    </>
  );
}

export default App;
