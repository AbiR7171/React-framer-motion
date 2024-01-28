import { motion } from "framer-motion"

import './App.css'

function App() {


  const parent = {
      hidden: {opacity:0,  scale:0.9},
      show : {opacity: 1, scale: 1}
  }

  const child = {
    hidden: {opacity:0,  scale:0.9},
    show : {opacity: 1, scale: 1}
  }
 

  return (
    <>
       <div>
            <motion.div  className="box flex gap-2 flex-wrap p-4"
            variants={parent}
             initial="hidden"
             animate = "show"
             transition={{
              duration: 2,
              delayChildren:1,
              staggerChildren:0.5
              
             }}
            
            >
                 <motion.div variants={child}  className="size-20 rounded bg-green-900 "></motion.div>       
                 <motion.div variants={child}  className="size-20 rounded bg-green-900 "></motion.div>       
                 <motion.div variants={child}  className="size-20 rounded bg-green-900 "></motion.div>       
                 <motion.div variants={child}  className="size-20 rounded bg-green-900 "></motion.div>         
            </motion.div>
       </div>
    </>
  )
}

export default App
