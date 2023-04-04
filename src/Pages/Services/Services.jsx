import React from 'react';
import "./Services.scss";

const Services = () => {
  return (

        
    <div className='services-wrap-new'>

<div className="ser-h2-wrap">
<h2 className='service-h2-design'>
Our Services</h2>
  </div> 

       <div className="services-div-data">
      <div className= "services-first-1">
        <h3 className="service-h3-text">Data Engineering <br/> and Solutions</h3>
        {/* <h4 className='serv_h4_dts'>Artificial Intelligence</h4> 
        <h4 className='serv_h4_dts'>Machine Learning</h4>
        <h4 className='serv_h4_dts'>Data Science </h4>
        <h4 className='serv_h4_dts'> Data Platform</h4> */}
        
        <img className='service-arrow-styl' src="rgs-img/arrow.png" alt="">
          
        </img>
        

         <img className='service-img-sty' src="rgs-img/dataeng.png"alt="" ></img> 

      </div>

      <div className= "services-first-2">
      <h3 className="service-h3-text">Digital Engineering <br/> and Transformation</h3>
      <img className='service-arrow-styl' src="rgs-img/arrow.png" alt=""></img>
      <img className='service-img-sty' src="rgs-img/digital.png"alt="" ></img> 
</div>

<div className= "services-first-3">
<h3 className="service-h3-text">Cloud Engineering <br/> and Platform</h3>
<img className='service-arrow-styl' src="rgs-img/arrow.png" alt=""></img>
<img className='service-img-sty' src="rgs-img/cloud.png"alt="" ></img> 
</div>

<div className= "services-first-4">
<h3 className="service-h3-text">Consulting And <br/> Advisory</h3>
<img className='service-arrow-styl' src="rgs-img/arrow.png" alt=""></img>
<img className='service-img-sty' src="rgs-img/consult.png"alt="" ></img> 
</div>
      
      

</div>
     
    </div>
   
  )
}

export default Services;


    