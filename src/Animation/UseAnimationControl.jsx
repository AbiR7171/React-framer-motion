import React, { useState } from 'react';
import { motion, useAnimationControls} from "framer-motion"

const UseAnimationControl = () => {

      const controls = useAnimationControls(); 
      
      const [toggle, setToggle] = useState(false)


       const handelForward = () =>{
               setToggle(!toggle)
                if(toggle){
                    controls.start((i)=> ({x:200, transition: { delay: i *1, duration: i *  5}}))
                }else{
                    controls.start((i)=> ({x: -200, transition: { delay: i *1, duration: i *  5}}))
                }
       }
    return (
        <div className='flex flex-col space-y-3 justify-center items-center mt-10'> 

                <button  onClick={handelForward} className='bg-yellow-300 px-10 py-3 rounded'>Position</button>
              <motion.div className='bg-green-800 size-44 rounded' animate={controls} custom={1}>
                    
              </motion.div>
              <motion.div className='bg-green-800 size-44 rounded' animate={controls} custom={2}>
                    
              </motion.div>
              <motion.div className='bg-green-800 size-44 rounded' animate={controls} custom={3}>
                    
              </motion.div>
        </div>
    );
};

export default UseAnimationControl;