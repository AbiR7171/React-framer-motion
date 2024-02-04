import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
const UseAnimatePresence = () => {

    const [show, setShow]=useState(true)

    const animation = {

          hidden : {opacity:0, scale:0.5},
          visiable: {opacity:1, scale:1, transition : {duration:2}},
          exits : { y:100, scale:0.5, transition: {duration:2}}
    }
    return (
        <div className="flex flex-col justify-center items-center mt-52">
            <button onClick={()=> setShow(!show)} className="bg-slate-900 p-2 rounded text-white ">Hidden</button>
            <AnimatePresence>
                
           {show && <motion.div className="size-52 rounded bg-red-950"
            variants={animation}
            initial="hidden"
            animate="visiable"
            exit="exits"
            >
                 
            </motion.div>}
            </AnimatePresence>
            
        </div>
    );
};

export default UseAnimatePresence;