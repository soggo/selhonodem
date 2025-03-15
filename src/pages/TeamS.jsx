import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPlus, FaMinus } from 'react-icons/fa';

export default function TeamS() {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };
  
  const questions = [
    {
      question: "Website & Mobile App Design?",
      answer: "Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem turpismaximus."
    },
    {
      question: "How to Easy Successful Projects?",
      answer: "I focus on clear communication, detailed planning, and regular check-ins with clients to ensure project goals are consistently met and expectations are exceeded."
    },
    {
      question: "International Trade Experience?",
      answer: "I've worked with clients across North America, Europe, and Asia, adapting designs to meet cultural preferences and international market requirements."
    }
  ];

  const teamMembers = [
    {
      id: 1,
      image: "team.png",
      name: "Parker Carter",
      position: "Design, Australia",
      socials: {
        facebook: true,
        twitter: true,
        linkedin: false
      }
    },
    {
      id: 2,
      image: "team.png",
      name: "Avery Jackson",
      position: "Design, Australia",
      socials: {
        facebook: true,
        twitter: true,
        linkedin: true
      }
    },
    {
      id: 3,
      image: "team.png",
      name: "Liam James",
      position: "Design, Australia",
      socials: {
        facebook: true,
        twitter: true,
        linkedin: false
      }
    },
    {
      id: 4,
      image: "team.png",
      name: "Gianna Mateo",
      position: "Design, Australia",
      socials: {
        facebook: true,
        twitter: true,
        linkedin: false
      }
    }
  ];
  
  return (
    <>
      <div className="banner" style={{ backgroundImage: "url(/teams.png)" }}>
        <h1>Team Single</h1>
      </div>

      <div className="portfolio-container">
        <div className="portfolio-content">
          <div className="header-section">
            <div className="left-section">
              <h1 className="name">Alex Johnson</h1>
              <p className="title">Designer</p>
              
              <p className="bio-short">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpismaximus posuere in.Contrarietie frandsnised 
                words which don't look even slightly believable.
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <span className="icon">✉️</span>
                  <span className="text">info@aljhono.com</span>
                </div>
                
                <div className="contact-item">
                  <span className="icon">📞</span>
                  <span className="text">+1 (378) 400-1234</span>
                </div>
                
                <div className="contact-item">
                  <span className="icon">🌐</span>
                  <span className="text">www.aljhono.com</span>
                </div>
              </div>
              
              <div className="social-icons">
                <span className="social-icon"><FaFacebookF /></span>
                <span className="social-icon"><FaTwitter /></span>
                <span className="social-icon"><FaLinkedinIn /></span>
                <span className="social-icon"><FaInstagram /></span>
              </div>
            </div>
            
            <div className="right-section">
              <div className="profile-image">
                <img src="/team.png" alt="Alex Johnson" />
              </div>
            </div>
          </div>
          
        
          <div className="biography-section">
            <h2 className="section-title">Short Biography</h2>
            
            <p className="bio-paragraph">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpismaximus posuere in.Contrary to popular belief.There are 
              many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, njectionhumour 
              randomised words which don't look even slightly believable.
            </p>
            
            <p className="bio-paragraph">
              Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined but the 
              majority have suffered alteration in some form chunks as necessary.
            </p>
          </div>
          
     
          <div className="two-column-section">
            <div className="left-column">
              <h3 className="column-title">Simplicity and Functionality</h3>
              
              <p className="column-paragraph">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpismaximus posuere in belief.
              </p>
              
              <p className="column-paragraph">
                There are many variations of passages of Lorem Ipsum from available, but the majority have suffered alteration in some form, njectionhumour
              </p>
              
           
              <div className="skills-section">
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Project Design</span>
                    <span className="skill-percentage">65%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '65%' }}></div>
                    <div className="skill-dot" style={{ left: '65%' }}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Team Management</span>
                    <span className="skill-percentage">95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '95%' }}></div>
                    <div className="skill-dot" style={{ left: '95%' }}></div>
                  </div>
                </div>
                
                <div className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">Client Satisfaction</span>
                    <span className="skill-percentage">75%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                    <div className="skill-dot" style={{ left: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="right-column">
              <h3 className="column-title">Question And Answer</h3>
              
              <p className="column-paragraph">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpismaximus posuere in.
              </p>
              
             
              <div className="faq-section">
                {questions.map((item, index) => (
                  <div key={index} className={`faq-item ${expandedQuestion === index ? 'expanded' : ''}`}>
                    <div className="faq-question" onClick={() => toggleQuestion(index)}>
                      <span>{item.question}</span>
                      <span className="toggle-icon">
                        {expandedQuestion === index ? <FaMinus /> : <FaPlus />}
                      </span>
                    </div>
                    
                    {expandedQuestion === index && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="team-gallery">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h4 className="member-name">{member.name}</h4>
                <p className="member-position">{member.position}</p>
                <div className="member-social">
                  {member.socials.facebook && (
                    <span className="social-icon small">
                      <FaFacebookF />
                    </span>
                  )}
                  {member.socials.twitter && (
                    <span className="social-icon small">
                      <FaTwitter />
                    </span>
                  )}
                  {member.socials.linkedin && (
                    <span className="social-icon small">
                      <FaLinkedinIn />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}