const Singles = () => {
    const expItems = [
        { number: "12", description: "Years of experience" },
        { number: "1074", description: "success Project" },
        { number: "98", description: "Active Project" },
        { number: "583", description: "Happy Customers" }
    ];
    return(
        <>
              <div className="banner" style={{ backgroundImage: "url(/public/singleS.png)" }}>
                <h1>Single Services</h1>
            </div>

            <h1>We set the trends of <br />
                modern living services.</h1>

            <h3>It is a long established fact that a reader will be distracted by the of readable content of a page</h3>

            <div className="Singletextbox">
                <p>
                when lookings at its layouts the points spriof using that it has a more less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.
                </p>

                <p>when lookings at its layouts the points spriof using that it has a more less normal.A wonderful serenity has taken pgossession of my entire soul, like thesce sweet morndsings of sphring which I enjoy with my forwhole heart. I am alone, and feel the charm of excgistence in this spot, which was created for the bliss of souls like mine.</p>
            </div>

            <img style={{marginBottom:'5rem'}} src="./public/Frame3.png" alt="" />

                <div className="" style={{ backgroundImage: "url(/public/singleS1.png)  ",  backgroundSize: "cover", width:'1210px',height:'541px',     display:"flex", justifyContent:'center', alignItems:'center'}}> 
                    <div className="circlurr"  style={{width:'132px', height:"132px",backgroundColor:"white" ,borderRadius:"85px", display:"flex", justifyContent:'center', alignItems:'center' }} >
                    <img src="/public/SingleS2.svg" alt="" style={{width:'37px', height:'37px'}}/>
            </div>
            </div>

            <div className="comparsioncontainer">
                <div className="Uinterior">
                   
                    <ol>
                    <h2>Use of Interior</h2>
                        <li>We Provide high quality design sevices</li>
                        <li>Project on rime and lates design</li>
                        <li>Scientific skills for getting better results</li>
                        <li>Renovations benefit of service</li>
                        <li>We are confident about our project</li>
                    </ol>
                </div>
                           <hr />
                <div className="Mart">
                    
                    <ol>
                    <h2>Make an Art</h2>
                        <li>We Provide high quality design sevices</li>
                        <li>Project on rime and lates design</li>
                        <li>Scientific skills for getting better results</li>
                        <li>Renovations benefit of service</li>
                        <li>We are confident about our project</li>
                    </ol>
                </div>   
            </div>

            <div className="lovebox">
                <img src="/public/single4.png" alt="" />

                <div className="lovetextbox">
                    <h1>We love design, That's <br /> how we got here</h1>
                    <p>LIt is a long established fact that a reader will be <br /> distracted by the of readable content .</p>
                    <button className="bluebtn">Our portfolio</button>
                </div>
            </div>

            <div className="expcontainer">
                {expItems.map((item, index) => (
                    <div className="expitem" key={index}>
                        <h2>{item.number}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Singles