import React from 'react';
import { motion } from "framer-motion"

const GestureAnimation = () => {
    return (
        <div className='flex justify-center items-center h-96'>
             <motion.div 
              
              drag
              dragSnapToOrigin
              dragElastic = {0.5}
              whileDrag={{
                boxShadow:"0px 10px 10px  #000"
              }}
             
             className="size-52 rounded bg-green-900 "></motion.div> 
        </div>
    );
};

export default GestureAnimation;