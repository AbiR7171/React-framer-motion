import { useRef } from "react";
import {motion, useInView} from "framer-motion"


const UseInView = () => {
    const ref = useRef<HTMLDivElement>(null)
    const  inView = useInView(ref)
    console.log(inView);
    return (
        <div className="flex flex-col justify-center ">
            <div className="bg-green-600 h-[900px] w-full">

            </div>
             <motion.div  className="bg-yellow-800 size-52 rounded"
             ref={ref}
             animate={ inView ? {x:500, opacity:1, transition: {duration:4}} : {x:-200, opacity:0.5}}
             >

             </motion.div>
        </div>
    );
};

export default UseInView;