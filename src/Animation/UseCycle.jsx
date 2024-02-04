import React from 'react';
import  {motion, useCycle} from "framer-motion"

const UseCycle = () => {

      const animation = [
        {x:0, y:0, opacity:1},
        {x:100, y:100, opacity:0.5},
        {x:-100, y:-100, opacity:0.25},
        {x: 200, y:-200, opacity:0},
      ]

     const [x, cycle]=useCycle(0, 100, 200, -100, -200)
     const [animate, controls]=useCycle(...animation)

    return (
        <div className='flex justify-center items-center  mt-52 gap-20'>
              <motion.div className='size-52 bg-red-800 rounded'
              
              animate={{x:x}}
              onTap={()=>cycle()}
              >
                
                </motion.div> 
                <motion.div className='size-52 bg-red-950 rounded'
              
              animate={animate}
              onTap={()=>controls()}
              >
                
                </motion.div> 
        </div>
    );
};

export default UseCycle;