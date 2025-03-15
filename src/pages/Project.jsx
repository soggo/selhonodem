import { Link } from "react-router-dom"
const Project = () =>{

    const gridItems = [
        {
            image: "./public/Rectangle29.png",
            title: "Minimal Bedroom"
        },
        {
            image: "./public/Rectangle29.png",
            title: "Minimal Bedroom"
        },
        {
            image: "./public/Rectangle29.png",
            title: "Minimal Bedroom"
        },
        {
            image: "./public/Rectangle29.png",
            title: "Minimal Bedroom"
        },
    ];

  return(
  <>
  <div className="banner" style={{ backgroundImage: "url(/public/Rectangle20.png)" }}><h1>Our Projects</h1></div>

  <div className="sliderContainer">
    <div className="sliderItem">Bathroom</div>
    <div className="sliderItem">Bed Room</div>
    <div className="sliderItem">Kitchen</div>
    <div className="sliderItem">Living Area</div>
  </div>
 
  <div className="ProjectsGrid">
        {gridItems.map((item, index) => (
          <Link to="/details" key={index}>
            <div className="ProjectsGridItem">
              <img src={item.image} alt={item.title} />
              <div className="ProjectsGridDescr">
                <h4>{item.title}</h4>
                <button className="circular">~</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
  </>
  );
}

export default Project;