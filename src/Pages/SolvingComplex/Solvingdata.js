import React from "react";
import styled from "styled-components";


 function Solvingdata() {
  const data = [
    {
     
      title: "Eliminate Blind Spots",
      subTitle:
        "Discover new opportunities for your  Data, Operations and Business ",
    },
    {
      
      title: "Achieve Digital Transformation",
      subTitle:
        "Data,Digital and Cloud to achieve scale,agility and security",
    },
    {
    
      title: "Accelerate Decisions",
      subTitle:
        "AI and ML to gain actionable business insights",
    },
    {
     
      title: "Drive Growth and ROI",
      subTitle:
        "Automation, Optimization Re-engineering to increase growth and reduce cost",
    },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service-solving-dv">
            
            <div className="icon">
              {/* <img src={service.icon} alt="" /> */}
            </div>
            <h3 className="solving-h3-wrap">{service.title}</h3>
            <p className="solving-p-data">{service.subTitle}</p>
          
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  position:relative;
  top:-30rem;
padding:30px;

  .service-solving-dv {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    padding: 2rem;
    height:13rem;
    width:15rem;
    
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .solving-p-data{
      font-size:16px;
      margin:10px;
      padding:S0px;
      color:#565872;
      
      
    }

    .solving-p-data:hover{
      color:red;
    }

    .solving-h3-wrap{
      top:20px;
      gap:10px;
    }
    .icon {
      img {
        height: 2.4rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }`;

  export default Solvingdata