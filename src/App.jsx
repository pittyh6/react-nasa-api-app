import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [showModal, setShowModel] = useState(false);
  return (
    <>
      <Main />
      {showModal && <SideBar />}
      <Footer />
    </>
  );
}

export default App;
