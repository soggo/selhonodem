const Footer = () => {
  const menuSections = {
    Pages: ['About us', 'Our Projects', 'Our Team', 'Contact Us', 'Services', ],
    Services: ['Kitchen', 'Living Area', 'Bathroom', 'Dining Hall', 'Bedroom',]
  };

  const renderMenuSection = (title, items) => (
    <div className="listitemone" key={title}>
      <h3>{title}</h3>
      {items.map((item, index) => (
        <li key={`${title}-${index}`}>{item}</li>
      ))}
    </div>
  );

  return (
    <section className="footercontainer">
      <div className="footeritemone">
        <img src="/public/SELHONO.png" alt="Selhono logo" />
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <div className="socialscontainer">
        <div className="socialscontainer">
          <img src="./public/twitter.png" alt="social media" />
          <img src="./public/twitter.png" alt="social media" />
          <img src="./public/twitter.png" alt="social media" />
          <img src="./public/twitter.png" alt="social media" />
        </div>
        </div>
      </div>

      <div className="footerlistitem">
        {Object.entries(menuSections).map(([title, items]) => 
          renderMenuSection(title, items)
        )}
      </div>

      <div className="footeritemtwo">
        <h3>Contact</h3>
        <p>55 East Birchwood</p>
        <p>Contact@selhone.com</p>
      </div>
    </section>
  );
};

export default Footer;