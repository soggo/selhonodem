const Details = () => {
    return(
        <>
         <div className="banner" style={{ backgroundImage: "url(/public/deets.png)" }}><h1>Our Projects</h1></div>

        <div className="textboxcontainer">
            <div className="textbox">
                <div className="boldtext">
                    <p>Client</p>
                    <p>Category</p>
                    <p>Tags</p>
                    <p>Date</p>
                    <p>Link</p>
                </div>

                <div className="ntext">
                    <p>Client name</p>
                    <p>Vip</p>
                    <p>Vip Home</p>
                    <p>Dec 23 2022</p>
                    <p>Example .com</p>
                </div>
            </div>
                <div className="textbox">
                <h2>Minimal Look Bedrooms</h2>
                <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 
                    <br />
                    <br />
                In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</p>
            </div>
        </div>

        <div className="" style={{ backgroundImage: "url(/public/deets2.png)",  backgroundSize: "cover", width:'1210px',height:'541px', display:"flex", justifyContent:'center', alignItems:'center'}}> 
        <div className="circlurr"  style={{width:'132px', height:"132px",backgroundColor:"white" ,borderRadius:"85px", display:"flex", justifyContent:'center', alignItems:'center' }} >
           <img src="/public/Vector.png" alt="" style={{width:'37px', height:'37px'}}/>
        </div>
       </div>

        </>
    )
}

export default Details