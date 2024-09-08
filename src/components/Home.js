import React from 'react'
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import Footer from './Footer';



import '../components/Home.css'
import AnimatedButton from './AnimatedButton';


function Home() {

  const buttonVariants = {
    hidden: { 
        scale: 0,
        opacity: 0
    },
    visible: { 
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeIn"
        }
      }}

const textIndex = useMotionValue(0);
const texts = [
"Hi,",
"I am Poovendhan ",
"I am a Software Developer",
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);



  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 0.75,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // If page is in loading state, display
  // loading message. Modify it as per your
  // requirement.
 

  return (
    <div className="spline-container relative">
   
          <motion.span className='spline-title '>{displayText}</motion.span>

      <Spline scene="https://prod.spline.design/zrIB0sUZMjomKEQP/scene.splinecode" />
      
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeIn" }}>
      <AnimatedButton/>
      </motion.div>
      <Footer className=" footer"/>





    </div>
  )
}


export default Home