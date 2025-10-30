import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";

import { RxCross2 } from "react-icons/rx";
import { NavbarContext } from "../../../context/NavContext";
import { Navigate, useNavigate } from "react-router-dom";

export const FullScreenNav = () => {
  const navigate = useNavigate();
  const fullNAvLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);
  console.log(navOpen);

  function gsapAnimation() {
    const tl = gsap.timeline();


    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: -0.2,
      },
    });

    tl.from(fullNAvLinksRef.current, {
      opacity: 0,
    });

    tl.from(".link", {
      rotateX: 90,
      opacity: 0,
      stagger: {
        amount: 0.3,
      },
    });

    tl.to(".navlink", {
      opacity: 1,
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsap.to(".fullScreenNav", {
          display: "block",
        });
        gsapAnimation();
      } else {
        gsap.to(".fullScreenNav", {
          display: "none",
        });
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullScreenNav h-screen w-full z-50 absolute bg-black"
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>

      <div ref={fullNAvLinksRef} className=" relative">
        <div className="flex w-full justify-between p-2 items-center">
          <div className="">
            <div className="">
              <h1 className="font-[font2] text-white text-7xl font-extrabold">
                K72
              </h1>
            </div>
          </div>

          <div className="h-20 w-20 bg-black">
            <div
              onClick={() => {
                setNavOpen(false);
              }}
              className="flex justify-center text-center"
            >
              <RxCross2 className="text-7xl text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className=" py-20">
        <div onClick={()=>{ setNavOpen(false); navigate("/projects")}} className="link navlink relative link border-t-1 border-white">
          <h1 className="font-[font2] text-[8vw] uppercase text-white border-white leading-[0.8] pt-5 text-center">
            porjects
          </h1>

          <div  className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
            <div className="movingX flex items-center">
              <div className="flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll1.jpg" />

                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll2.jpg" />
              </div>
            </div>

            <div className="movingX flex items-center">
              <div className="flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-black border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll1.jpg" />

                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-black border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll2.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div onClick={()=>{ setNavOpen(false); navigate("/agence")}} className="link navlink origin-top relative link border-t-1 border-white">
          <h1 className="font-[font2] text-[8vw] uppercase text-white border-white leading-[0.8] pt-5 text-center">
            Agence
          </h1>

          <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
            <div className="movingX flex items-center">
              <div className="flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll1.jpg" />

                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll2.jpg" />
              </div>
            </div>

            <div className="movingX flex items-center">
              <div className="flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-black border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll1.jpg" />

                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-black border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll2.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div onClick={() =>{ setNavOpen(false); navigate("/contect")}} className="link navlink origin-top relative link border-t-1 border-white">
          <h1 className="font-[font2] text-[8vw] uppercase text-white border-white leading-[0.8] pt-5 text-center">
            contact
          </h1>

          <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
            <div className="movingX flex items-center">
              <div className="flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll1.jpg" />

                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll2.jpg" />
              </div>
            </div>

            <div className="movingX flex items-center">
              <div className="flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-black border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll1.jpg" />

                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-black border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll2.jpg" />
              </div>
            </div>
          </div>
        </div>

        <div onClick={() =>{ setNavOpen(false); navigate("/")}} className="link navlink origin-top relative link border-y-1 border-white">
          <h1 className="font-[font2] text-[8vw] uppercase text-white border-white leading-[0.8] pt-5 text-center">
            blogue
          </h1>

          <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
            <div className="movingX flex items-center">
              <div className="flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll1.jpg" />

                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll2.jpg" />
              </div>
            </div>

            <div className="movingX flex items-center">
              <div className="flex items-center">
                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-black border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll1.jpg" />

                <h2 className="whitespace-nowrap font-[font2] text-[8vw] uppercase text-black border-white leading-[0.8] pt-5 text-center">
                  pour tour voir
                </h2>
                <img className="w-38 rounded-full" src="navscroll2.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
