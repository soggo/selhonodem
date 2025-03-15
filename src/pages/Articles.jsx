const Articles = () =>{
    return(
        <>
          <div className="banner" style={{ backgroundImage: "url(/public/contact.png)" }}> 
          <h1>Articles&News</h1>
          </div>
          <img src="Search.png" alt="" />

          <div className="lpost">
            <div className="lpostleft">
                <img src="leftar.png" alt="" />
            </div>

            <div className="lpostright">
                <h2>
                Low Cost Latest Invented Interior <br />Designing Ideas  
                </h2>
                <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. <br />
                <br /> Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                <div className="buttondate">
                <p>
                    22 Decemeber 2023
                </p>

                <button> - </button>
            </div>
            </div>
          </div>
          <h1>Articles & News</h1>
          <div className="articlescontainer">

            <div className="articleitem">
              <img src="art2.png" alt="" />  
              <figcaption>Let’s Get Solution For Building Construction Work</figcaption>

              <div className="buttondate">
                <p>
                    22 Decemeber 2023
                </p>

                <button> - </button>
            </div>
            </div>  
            
            <div className="articleitem">
              <img src="art2.png" alt="" />  
              <figcaption>Let’s Get Solution For Building Construction Work</figcaption>

              <div className="buttondate">
                <p>
                    22 Decemeber 2023
                </p>

                <button> - </button>
            </div>
            </div>  

            <div className="articleitem">
              <img src="art2.png" alt="" />  
              <figcaption>Let’s Get Solution For Building Construction Work</figcaption>

              <div className="buttondate">
                <p>
                    22 Decemeber 2023
                </p>

                <button> - </button>
            </div>
            </div>  
           
          </div>
        </>
    )
}

export default Articles