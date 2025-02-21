
function Segfour() {
  
    const gridItems = [
        {
            image: "public/Rectangle4.jpg",
            title: "Modern Bedroom"
        },
        {
            image: "public/Rectangle4.jpg",
            title: "Modern Bedroom"
        },
        {
            image: "public/Rectangle4.jpg",
            title: "Modern Bedroom"
        },
        {
            image: "public/Rectangle4.jpg",
            title: "Modern Bedroom"
        }
    ];

   
    const expItems = [
        { number: "12", description: "Years of experience" },
        { number: "1074", description: "success Project" },
        { number: "98", description: "Active Project" },
        { number: "583", description: "Happy Customers" }
    ];

    return (
        <>
        <section className="segmfour-container">
            <div className="segfourintro">
                <h1>Follow our Projects</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, perferendis.</p>
            </div>

            <div className="segfourgrid">
                {gridItems.map((item, index) => (
                    <div className="segfourgriditem" key={index}>
                        <img src={item.image} alt={item.title} />
                        <div className="segfourgriditemdescr">
                            <h4>{item.title}</h4>
                            <button className="circular">~</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="expcontainer">
                {expItems.map((item, index) => (
                    <div className="expitem" key={index}>
                        <h2>{item.number}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            
        </section>

        <section className="segfive-container">
                    <h2>Wanna Join the interno</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <button>Contact us</button>

                </section>
        </>
        
    );
}

export default Segfour;