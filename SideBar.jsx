export default function SideBar(props) {

  const [handleToggleModel] = props
  return (
    <div className="sidebar">
      <div onClick={handleToggleModel} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>The Brutal Martial landscape</h2>
        <div>
          <p>Description</p>
          <p>
            dhfuhdf usdhf ushdfvksld vhsleihgfowshrgvuhsfdlvhsrgohd wsiedhfgo ls
            ohws oghos hgoshoughv osh
          </p>
        </div>
        <button>
          <i onClick={handleToggleModel} className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
