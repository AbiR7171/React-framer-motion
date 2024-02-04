import { useDragControls , motion} from "framer-motion";

const UseDragControls = () => {

     const constrols = useDragControls()
    return (
        <div className="flex flex-col justify-center items-center mt-52">
            <div onPointerDown={(e)=>constrols.start(e)} className="w-52 h-10 bg-green-900 rounded">

            </div>
              
              <motion.div 
              drag="x"
              dragControls={constrols}
              className="size-52 bg-red-900 rounded">
                 
              </motion.div>
        </div>
    );
};

export default UseDragControls;