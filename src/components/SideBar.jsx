export default function SideBar(props) {

  const {handleToggleModel, data} = props
  return (
    <div className="sidebar">
      <div onClick={handleToggleModel} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">Description</p>
          <p>{data?.explanation}</p>
        </div>
        <button>
          <i onClick={handleToggleModel} className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
