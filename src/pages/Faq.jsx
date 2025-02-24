import Accordion from "../components/accordion"

const Faq = () =>{
    const faqs1 = [
        { question: "What What is the Hipcouch Interior Design Service? ", answer: "orem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat minima, laborum corrupti maiores cum!" },
        { question: "so how exaclty does this work? ", answer: "orem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat minima, laborum corrupti maiores cum!" },
        { question: "What cities do you operate in? ", answer: "orem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat minima, laborum corrupti maiores cum!" },

        { question: "What cities do you operate in? ", answer: "orem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat minima, laborum corrupti maiores cum!" },
      ];

      const faqs2 = [
        { question: "What What is the Hipcouch Interior Design Service? ", answer: "orem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat minima, laborum corrupti maiores cum!" },
        { question: "so how exaclty does this work? ", answer: "orem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat minima, laborum corrupti maiores cum!" },
        { question: "What cities do you operate in? ", answer: "orem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat minima, laborum corrupti maiores cum!" },

        { question: "What cities do you operate in? ", answer: "orem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat minima, laborum corrupti maiores cum!" },
      ];


    return(
        <>
            <div className="banner" style={{ backgroundImage: "url(/public/RectangleF20.png)" }}><h1>FAQ's</h1></div>

            <h2>Every Question Answered</h2>
             <div className="faqboxcontainer">
                <div className="faqboxone">
                    {faqs1.map((faq, index) => (
                        <Accordion key={index} question={faq.question} answer={faq.answer} customClass="faq-accordion" />
                    ))}
                      </div>
                    <img src="/public/faqphoto1.png" alt="" />
                  
            </div>
                        <br />
                        <br />
            <h2>Project related questions</h2>
            <div className="faqboxcontainer2">
                <div className="faqbox2">
                    {faqs2.map((faq, index) => (
                        <Accordion key={index} question={faq.question} answer={faq.answer} customClass="faq-accordion"  buttonClass="faq-button"/>
                    ))}
                    </div>
                    <img src="/public/faqphoto2.png" alt="" />
                
            </div>
        </>
    )
    
}

export default Faq