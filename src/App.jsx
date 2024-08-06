import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
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
        const apiData = await res.json()
        setData(apiData)
        console.log('DATA\n', apiData)
      }catch{
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])
  return (
    <>
      {data ? (<Main data={data} />):
      <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
      </div>}
      {showModal && <SideBar data={data} handleToggleModel={handleToggleModel} />}
      {date && (<Footer data={data} handleToggleModel={handleToggleModel} />)}
    </>
  );
}

export default App;
