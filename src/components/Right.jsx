import { useEffect } from "react";
import gsap from "gsap";

export default function Right(){
    useEffect(()=>{
        var tl = gsap.timeline();
        tl.fromTo('.download', {
                x:30,
                opacity:0,
                duration:1.5
            },{
                x:0,
                opacity:1
            }
        );
        gsap.fromTo('.info', {
                x:30,
                opacity:0
            }, {
                x:0,
                opacity:1,
                duration:1.5
            }
        );
        gsap.fromTo('.ability', {
            x:30,
            opacity:0,
            duration:1.5
        }, {
            x:0,
            opacity:1,
            
        }
    );
    }, [])
    return(
        <>  
            <div className="w-[50%] justify-center items-start  align-middle flex flex-col ml-10 " >
                <div className="download flex  h-14 mt-14 ">
                    <div className="bg-black h-14 w-8 flex items-center justify-center  ">
                        <i className="ri-search-fill text-white text-2xl"></i>
                    </div>                
                    <span className="bg-red-500 text-white font-bold text-xl h-14 px-3 items-center flex ">Free Download</span>
                </div>
                
                <div className="info w-2/3 mt-24 ">
                    <h1 className="w-96 h-48 font-bold text-justify overflow-hidden">
                    Valkyrie, a character from Riot Games' Valorant, is a highly skilled and strategic Agent. Known for her exceptional recon abilities, she uses her advanced technology to guide her team to victory. A former scientist, Valkyrie’s drone-based toolkit includes a Drone that scouts enemy positions, a Guided Missile for area denial, and a Valkyrie’s Drone that heals allies from a distance. With a calm yet determined demeanor, she’s a natural leader, thriving in high-stakes situations. Valkyrie is dedicated to using her intellect and precision to secure tactical advantages for her team. She embodies resilience, offering both offensive and supportive prowess in battle.
                    </h1>
                </div>

                <div className="ability">
<br />
                    <div>
                        <h3 className="text-red-500 font-bold">Tactical Ability</h3>
                        <h1 className="font-bold text-2xl">MISSILE SWARM</h1>
                    </div>  
<br />
                    <div>
                        <h3 className="text-red-500 font-bold">Passive Ability</h3>
                        <h1 className="font-bold text-2xl">VTOL JETS</h1>
                    </div>
                    <br />
                    <div>
                        <h3 className="text-red-500 font-bold">Ultimate Ability</h3>
                        <h1 className="font-bold text-2xl">SKYWARD DIVE</h1>
                    </div>
                </div>
            </div>
            
        </>
    )
}