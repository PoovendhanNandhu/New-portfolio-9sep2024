import React from 'react'
import './portofolio.css'
import Spline from '@splinetool/react-spline';
import Projects from './Cards';
import Skills from './Skills';
import Resume from './Resume';



function Work(){

  const workPosts=[
    {id: 'work1',company_name:'SK KIDDO',position:'Technical Co-Founder',time:'2020-Present'},
    {id: 'work2',company_name:'BEWINGZ',position:'Web Developer (Intern)',time:'2024-Present'},
    {id: 'work3',company_name:'Fiverr/Upwork',position:'Freelancer',time:'2020-Present'},
    
  ]

  return(
    <div className="work">
      <div className="work-experience">
      <div className="header">
        <div className="back-button">
          <span>&#8249;</span>
        </div>
        <h2>{workPosts.length} YEARS OF</h2>
      </div>
      <h1>EXPERIENCE</h1>
      {workPosts.map((work, index) => (
        <div key={work.id} className={`work-item ${index !== 0 ? 'faded' : ''}`}>
          <h3>{work.position}</h3>
          <div className="work-details">
            <span className="company">{work.company_name}</span>
            <span className="time">{work.time}</span>
          </div>
        </div>
              ))}
      </div>
      
      
    </div>

  )
}



function Portfolio() {
  return (
    <>
         <div className="spline-container relative">
        <h1 className="spline-title-portfolio">Portfolio</h1>
      <Spline scene="https://prod.spline.design/2qc3Sa3Gy1PSpU6h/scene.splinecode" className='Spline'/>
      <div className="overlay-container">
    
          <Projects/>
          <Work/>
          <Skills/>
          <Resume/>
        
      </div>
      </div>
    </>
    
  )
}

export default Portfolio;

           
