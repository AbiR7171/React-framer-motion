import { motion, useMotionValue, useTransform } from "framer-motion";

const UseMotionValueWithTransform = () => {

      const x = useMotionValue(0)
      const opacity =  useTransform(x, [0, 500], [1,0])

    return (
        <div className="flex items-center justify-center mt-52 border p-10 border-red-700">
             <motion.div className="size-52 rounded bg-red-950"
             style={{x, opacity}}
             drag="x"

             >

             </motion.div>
        </div>
    );
};

export default UseMotionValueWithTransform;