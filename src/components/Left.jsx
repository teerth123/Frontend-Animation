import gsap from "gsap"
import { useEffect } from "react"

export default function Left(){
    useEffect(()=>{
        var tl = gsap.timeline();
        tl.fromTo('.logo', {
                x:-30,
                opacity:0,
                duration:1.5
            },{
                x:5,
                opacity:1
            }
        );
        gsap.fromTo('.name', {
                x:-30,
                opacity:0
            }, {
                x:5,
                opacity:1,
                duration:1.5
            }
        );
        gsap.fromTo('.cls', {
            x:-30,
            opacity:0
        }, {
            x:5,
            opacity:1,
            duration:1.5
        }
    );
    }, [])
    return(
        <>
            <div className="align-middle items-center w-[40%] mx-10 ">
                <div>
                    <img src="https://i.pinimg.com/736x/1e/f8/58/1ef85829bc407465bd9d8d84bbf2ea51.jpg" alt="" 
                        className="logo w-[15%] m-[5%] "
                    />
                    <div className="name mt-[24%] mx-[5%]">
                        <h1 className="font-bold text-black text-3xl">VALKYRIE</h1>
                        <h3 className="text-red-500 font-bold">Winged Avenger</h3>
                    </div>

                    <div className="cls flex mt-[24%] mx-[5%]">
                        <img src="https://i.pinimg.com/736x/c4/84/6a/c4846a2d75b0c2839ac9298b68212750.jpg" alt=""
                            className="w-[8%] h-[4vw] object-cover" 
                        />
                        <div className="border-solid border border-black px-4">
                            <h3 className="font-bold text-red-500 text-lg">Class</h3>
                            <h1 className="font-bold text-2xl text-black">SKIRMISHER</h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}