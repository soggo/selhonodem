import { Link } from 'react-router-dom';

const Team = () => {
  const gridItems = [
    { image: "public/team.png", dname: "John Smith", title: "Design Australia" },
    { image: "public/team.png", dname: "John Smith", title: "Design Australia" },
    { image: "public/team.png", dname: "John Smith", title: "Design Australia" },
    { image: "public/team.png", dname: "John Smith", title: "Design Australia" },
    { image: "public/team.png", dname: "John Smith", title: "Design Australia" },
    { image: "public/team.png", dname: "John Smith", title: "Design Australia" },
    { image: "public/team.png", dname: "John Smith", title: "Design Australia" },
    { image: "public/team.png", dname: "John Smith", title: "Design Australia" }
  ];
  
  return (
    <>
      <div
        className="banner"
        style={{ backgroundImage: "url(/public/Rectangle20.png)" }}
      >
        <h1>Team</h1>
      </div>
      <div className="compress">
        <div className="teamgrid">
          {gridItems.map((item, index) => (
            <Link to="/teams" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="teamgriditem">
                <div className="team-image-container">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="team-member-info">
                  <h4>{item.dname}</h4>
                  <h4>{item.title}</h4>
                  <img src="/public/twitter.png" alt="Twitter" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;