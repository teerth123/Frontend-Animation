import { useEffect } from "react"
import gsap from "gsap";
export default function Center(){
    useEffect(()=>{
        var tl = gsap.timeline();
        tl.fromTo('.cont', {y:-20, duration:3}, {y:0});
        tl.fromTo('.three', {
                x:-20, 
                duration:3.5,
                opacity:0
            },{
                x:0,
                opacity:1
            } 
        )
    }, [])
    return(
        <>
            <div className="cont bg-red-500 w-1/2 h-full flex justify-around ">
                    <h1 className="three font-bold text-2xl text-white mt-[5%]">LEGENDS</h1>
                    <h1 className="three font-bold text-2xl text-white mt-[5%]">BATTLE PASS</h1>
                    <h1 className="three font-bold text-2xl text-white mt-[5%]">NEWS</h1>
            </div>
        </>
    )
}