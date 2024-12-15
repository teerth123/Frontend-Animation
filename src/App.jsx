import { useEffect, useState } from 'react'
import './App.css'
import './index.css';
import gsap from 'gsap';
import Left from './components/Left';
import Right from './components/Right';
import Center from './components/Center';
import pic from './assets/image-removebg.png';
function App() {
  useEffect(()=>{
    var tl = gsap.timeline();
    tl.fromTo('.cont', {
      y:50,
      duration:2
    }, {
      y:0
    });
    tl.fromTo('.img', {
      opacity:0,
      y:80,
      duration:5
    }, {
      opacity:1,
      y:0,
      
    })
    


    //left
    var tl1 = gsap.timeline();
        tl1.fromTo('.logo', {
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
        });

        //center
        // var tl2 = gsap.timeline();
        // tl2.fromTo('.cont', {y:-20, duration:3}, {y:0});
        // tl2.fromTo('.three', {
        //         x:-20, 
        //         duration:3.5,
        //         opacity:0
        //     },{
        //         x:0,
        //         opacity:1
        //     } 
        // );

        //right
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
            
        })
  }, [])
  return (
    <>
     <div className=' justify-center items-center w-full h-screen '>
        <div className='cont w-[90vw] h-[42vw] bg-[#FEFFFE] flex justify-between items-start relative z-0 top-[10%] left-[5%]'>
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
              <div className="cont bg-red-500 w-1/2 h-full flex justify-around ">
                    <h1 className="three font-bold text-2xl text-white mt-[5%]">LEGENDS</h1>
                    <h1 className="three font-bold text-2xl text-white mt-[5%]">BATTLE PASS</h1>
                    <h1 className="three font-bold text-2xl text-white mt-[5%]">NEWS</h1>
              </div>

              {/* //right */}
              <div className="w-[50%] justify-center items-start  align-middle flex flex-col ml-10 " >
                <div className="download flex  h-14 mt-14 ">
                    <div className="bg-black h-14 w-8 flex items-center justify-center  ">
                        <i className="ri-search-fill text-white text-2xl"></i>
                    </div>                
                    <span className="bg-red-500 text-white font-bold text-xl h-14 px-3 items-center flex ">Free Download</span>
                </div>
                
                <div className="info w-2/3 2xl:mt-18 lg:mt-24 ">
                    <h1 className=" 2xl:w-96 2xl:mt-8 2xl:h-48 xl:w-80 xl:h-40 xl:text-sm xl:mt-5  lg:w-64 lg:h-32 lg:text-xs md:-mt-20 font-bold text-justify overflow-hidden">
                    Valkyrie, a character from Riot Games' Valorant, is a highly skilled and strategic Agent. Known for her exceptional recon abilities, she uses her advanced technology to guide her team to victory. A former scientist, Valkyrie’s drone-based toolkit includes a Drone that scouts enemy positions, a Guided Missile for area denial, and a Valkyrie’s Drone that heals allies from a distance. With a calm yet determined demeanor, she’s a natural leader, thriving in high-stakes situations. Valkyrie is dedicated to using her intellect and precision to secure tactical advantages for her team. She embodies resilience, offering both offensive and supportive prowess in battle.
                    </h1>
                </div>

                <div className="ability ">
<br />
                    <div>
                        <h3 className="text-red-500 font-bold 2xl:text-lg xl:text-sm lg:text-sm md:text-xs ">Tactical Ability</h3>
                        <h1 className="font-bold text-2xl 2xl:text-lg xl:text-sm lg:text-sm md:text-xs">MISSILE SWARM</h1>
                    </div>  
<br />
                    <div>
                        <h3 className="text-red-500 font-bold 2xl:text-lg xl:text-sm lg:text-sm md:text-xs">Passive Ability</h3>
                        <h1 className="font-bold text-2xl 2xl:text-lg xl:text-sm lg:text-sm md:text-xs">VTOL JETS</h1>
                    </div>
                    <br />
                    <div>
                        <h3 className="text-red-500 font-bold 2xl:text-lg xl:text-sm lg:text-sm md:text-xs">Ultimate Ability</h3>
                        <h1 className="font-bold text-2xl 2xl:text-lg xl:text-sm lg:text-sm md:text-xs">SKYWARD DIVE</h1>
                    </div>
                </div>
            </div>
        </div>     
        <img src={pic} alt="" className='img fixed z-10 top-36 left-[30%] justify-center items-center flex w-[40%]'/>
      </div>
    </>
  )
}

export default App
