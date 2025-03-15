const Services = () => {
    const servicesData = [
      {
        title: "Project Plan",
        description:
          "Here are many variations of the passages of lorem ipsum from available majority",
      },
      {
        title: "Interior Work",
        description:
          "Here are many variations of the passages of lorem ipsum from available majority",
      },
      {
        title: "Retail Design",
        description:
          "Here are many variations of the passages of lorem ipsum from available majority",
      },
      {
        title: "2d/3d Art Work",
        description:
          "Here are many variations of the passages of lorem ipsum from available majority",
      },
      {
        title: "Interior work",
        description:
          "Here are many variations of the passages of lorem ipsum from available majority",
      },
      {
        title: "Decoration Work",
        description:
          "Here are many variations of the passages of lorem ipsum from available majority",
      },
    ];
    const steps = [
        {
          number: "01",
          title: "Concept & Details",
          text: "It is a long established fact will be distracted by Lorem Ipsum. It is simply dummy text of the print and typesetting industry.",
          image: "/public/workleft.png",
          align: "right",
        },
        {
          number: "02",
          title: "Idea for Work",
          text: "It is a long established fact will be distracted by Lorem Ipsum. It is simply dummy text of the print and typesetting industry.",
          image: "/public/workright.png",
          align: "left",
        },
        {
          number: "03",
          title: "Design",
          text: "It is a long established fact will be distracted by Lorem Ipsum. It is simply dummy text of the print and typesetting industry.",
          image: "/public/workleft.png",
          align: "right",
        },
        {
          number: "04",
          title: "Perfection",
          text: "It is a long established fact will be distracted by Lorem Ipsum. It is simply dummy text of the print and typesetting industry.",
          image: "/public/workright.png",
          align: "left",
        },
      ];
    
  
    return (
      <>
        <div
          className="banner"
          style={{ backgroundImage: "url(/public/servicesb.png)" }}
        >
          <h1>Services</h1>
        </div>
  
        <div className="servicegridcontainer">
          {servicesData.map((service, index) => (
            <div className="servicegriditem" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <p>Read More</p>
            </div>
          ))}
        </div>

        <div className="howwework">
            <h1>How We Work</h1>
            <p>It is a long established fact will be dustractd by Lorem Upsum is simply dummy txt of <br />
            the print and typestting industry</p>
        </div>

     
    <div className="work-container">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`work-item ${step.align === "right" ? "work-right" : "work-left"}`}
        >
          <div className="work-text">
            <h1>{step.number}</h1>
            <h2>{step.title}</h2>
            <p>{step.text}</p>
          </div>
          <img src={step.image} alt={step.title} className="work-image" />
        </div>
      ))}
    </div>

    <section className="segfive-container">
                    <h2>Wanna Join the interno</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button>Contact us</button>
                </section>


      </>
    );
  };
  
  export default Services;
  