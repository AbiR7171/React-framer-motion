
import {useAnimate} from "framer-motion"
import { useEffect } from "react";

const UseAnimate = () => {


     const [scope, animate] = useAnimate()


    
            useEffect(()=>{
                
             animate([
                [scope.current, {rotate: 45}],
                [scope.current, {opacity:0}],
                [scope.current, {rotate: 90, opacity:1}],
                [scope.current, {rotate: 180, opacity:0}],
                [scope.current, {rotate: 360, opacity:1,}],
             ])
            },[])
  

    return (
        <div className="flex justify-center items-center mt-52">
             <div ref={scope}  className="size-52 bg-orange-800 rounded"></div>
        </div>
    );
};

export default UseAnimate;