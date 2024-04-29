import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_img from '../../assets/hero_image.png';
import hero_img_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import {motion} from 'framer-motion'
const Hero = () => {
  
   const transition = {type:'spring', duration:3}
    return (
    <div className='hero'>
        <div className="blur blur-hero"></div>
       <div className='left-h'>
        <Header/>

        {/* The best add */}
        <div className='the-best-ad'>
            <motion.div
             initial={{left:'238px'}}
             whileInView={{left:'8px'}}
             transition={{...transition, type:'tween'}}

            ></motion.div>
            <span>The best fitness club in the Town</span>
        </div>

        {/* Hero heading */}
        <div className='hero-text'>
            <div className="">
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </div>

            <div className="">
                <span>Ideal Body</span>
            </div>

            <div>
                <span>In here we will help you to shape and build your ideal
                    to live up your life to the fullest</span>
            </div>

        </div>

        {/* figures */}
        <div className="figures">
            <div>
            <span>+140</span>
            <span>Expert Coaches</span>
            </div>
            <div><span>+9781</span>
            <span>members joined</span></div>
            <div>
                <span>+50</span>
                <span>fitness Programs</span>
            </div>
        </div>

        <div className="hero-button">
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
        </div>  
       </div>

       {/* Starting the right side of the website */}
       <div className='right-h'>
        <button className='btn'>Join Now</button>
       
        <motion.div 
        initial={{right: '-1rem'}}
        whileInView={{right:"4rem"}}
        transition={transition}
        className="heart-rate">
            <img src={heart} alt="" />
            <span>Heart Rate</span><span>116 Bpm</span>
        </motion.div>

        {/* Hero images */}

        <img src={hero_img} alt="" className='hero-img'/>
        <motion.img 
        initial={{right:"11rem"}}
        whileInView={{right:"28rem"}}
        transition={transition}
        src={hero_img_back} alt="" className='hero-img-back' />
         
         {/* Calories sub section */}
         
         <motion.div className="calories"
         initial={{right: "37rem"}}
         whileInView={{right:"28rem"}}
         transition={transition}>
            <img src={calories} alt="" />
           
           <div>
           <span>calories</span>
            <span>220 Kcal</span>
           </div>
            
         </motion.div>


       </div>
    </div>
  );
}

export default Hero