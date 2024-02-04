import { useScroll , motion} from "framer-motion";

const UseScroll = () => {

     const {scrollYProgress} = useScroll()
    return (
        <div>
             <div className="h-[500vh] bg-green-900">

             </div> 

             <motion.div style={{scale: scrollYProgress}} className="h-10 w-full bg-red-950 fixed top-0">
                 NavBar
             </motion.div>
        </div>
    );
};

export default UseScroll;