const Contact = () =>{

    return(
        <>
          <div className="banner" style={{ backgroundImage: "url(/public/contact.png)" }}>
               
            </div>
        <h1>We love meeting new people <br />
        and helping them</h1>


        <div className="contactfield">
           <div className="contactinfocontainer"> 
                    <div className="contactinfo">
                        <div className="contacticons">
                            <img src="mail.png" alt="" />
                            <img src="caller.png" alt="" />
                            <img src="web.png" alt="" />
                        </div>

                        <div className="contacttext">
                        <p>info@selhon.com</p>
                        <p>+1 (378) 400-123</p>
                        <p>www.selhono.com</p>    
                        </div>
                    </div> 
                    <div className="contactsocials">
                            <img src="twitter.png" alt="" />
                            <img src="twitter.png" alt="" />
                            <img src="twitter.png" alt="" />
                            <img src="twitter.png" alt="" />
                        </div>  
            </div>
            <form className="contact-form">
                <div className="form-row">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" />
                </div>
                </div>

                <div className="form-row">
                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" />
                </div>
                </div>

                <div className="form-message">
                <label>Hello, I am interested in..</label>
                <textarea></textarea>
                </div>

                <button type="submit" className="submit-button bluebtn">Send Now →</button>
            </form>
        </div>
        </>


    )
}

export default Contact;