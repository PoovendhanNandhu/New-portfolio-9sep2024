// import React from 'react'
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";


// function ScrollAnimation() {
//     const controls = useAnimation();
//     const [ref, inView] = useInView();
  
//     React.useEffect(() => {
//       if (inView) {
//         controls.start("visible");
//       }
//     }, [controls, inView]);
  
//     const text = "Framer Motion is a really cool tool".split(" ");
  
//     return (
//       <div className="App">
//         {text.map((el, i) => (
//           <motion.span
//             ref={ref}
//             initial="hidden"
//             animate={controls}
//             variants={{
//               visible: { opacity: 1, transition: { duration: 0.25, delay: i * 0.1 } },
//               hidden: { opacity: 0 }
//             }}
//             key={i}
//           >
//             {el}{" "}
//           </motion.span>
//         ))}
//       </div>
//     );
// }

// export default ScrollAnimation;