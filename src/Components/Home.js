import React from "react";
import "./Home.css";
import video from "./Coral.mp4";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import img1 from "./pngwing.com.png";
import img2 from "./pngwing.com (1).png";
import img3 from "./pngwing.com (2).png";
import img4 from "./pngwing.com (3).png";
import img5 from "./pngimg.com - women_bag_PNG6396.png";
import Navbar from "./Navbar";

const Home = (props) => {
  useEffect(() => {
    const locomotiveAnimation = () => {
      gsap.registerPlugin(ScrollTrigger);

      // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
      });
      // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
      locoScroll.on("scroll", ScrollTrigger.update);

      // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
      ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform
          ? "transform"
          : "fixed",
      });

      // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

      // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
      ScrollTrigger.refresh();
    };

    locomotiveAnimation();
  }, []);
  // const st=()=>{
  //   gsap.to("#part1 svg",{
  //     transform:"translateY(-100%)",
  //     scrollTrigger:{
  //       trigger:"#page1",
  //       scroller:"#main",
  //       markers:true,
  //       start:"top 0 ",
  //       end:"top -5%",
  //       scrub:true
  //     }
  //   })
  // }
  // const it=()=>{
  //   gsap.to("#part2 #links",{
  //     transform:"translateY(-100%)",
  //     scrollTrigger:{
  //       trigger:"#page1",
  //       scroller:"#main",
  //       start:"top 0 ",
  //       end:"top -5%",
  //       scrub:true
  //     }
  //   })
  // }
  // st()
  // it()

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector("[data-scroll-container]"),
  //     smooth: true,
  //     smartphone: { smooth: true },
  //     tablet: { smooth: true },
  //   });
  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  const animation = () => {
    const h1 = document.getElementsByClassName("h1");
    gsap.from(h1, {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      delay: 0.5,
      duration: 0.8,
    });
    const video = document.getElementById("video-container");
    gsap.from(video, {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      delay: 0.5,
      duration: 0.8,
    });
  };
  const mouseEnter = () => {
    const play = document.getElementById("play");
    gsap.to(play, { scale: 1, opacity: 1 });
  };
  const mouseEnter2 = () => {
    const play2 = document.getElementById(" ");
    gsap.to(play2, { transform: "translate(-50%,-50%) scale(1)" });
  };
  const mouseExit = () => {
    const play = document.getElementById("play");

    gsap.to(play, { scale: 0, opacity: 0 });
  };
  const mouseMove = (det) => {
    const play = document.getElementById("play");

    gsap.to(play, { left: det.clientX - 35, top: det.clientY - 30 });
  };
  const mouseMove2 = (det) => {
    const play2 = document.getElementById("cursor");

    gsap.to(play2, { left: det.clientX - 0, top: det.clientY - 0 });
  };
  const dets = document.getElementsByClassName("dets");
  const hover = () => {};

  return (
    <div
      locomotiveAnimation
      onMouseMove={mouseMove2}
      id="main"
      onLoadedData={animation}
      onScroll={""}
      data-scroll-container
    >
      <div id="home">
        <strong>
          <h1 data-scroll data-scroll-speed="1" className="h1" id="h1">
            Change
          </h1>
          <h1 data-scroll data-scroll-speed="1" className="h1">
            The Style
          </h1>
        </strong>
        <div id="video-container">
          <span id="play">
            <b>PLAY</b>
          </span>
          <video
            className="pointer"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseExit}
            onMouseMove={mouseMove}
            autoPlay
            playsInline
            loop
            muted
            src={video}
          ></video>

          <div id="page1">
            <div id="elem1" className="elem">
              <img
                data-scroll
                data-scroll-speed="1"
                src="https://cdn.pixabay.com/photo/2015/12/25/14/55/handbag-1107716_640.jpg"
                alt=""
              ></img>
              <div
                data-scroll
                data-scroll-speed="-2"
                className="dets"
                id="det1"
              >
                <span className="span2">.</span>
                <span className="span">shop</span>
                <span id="click">Click Here To See The Magic</span>
                <img id="img1" src={img3} alt="image"></img>
                <span id="buy1" className="buy">
                  BUY-₹99,999
                </span>
              </div>
            </div>
            <div id="elem2" className="elem">
              <img
                data-scroll
                data-scroll-speed="1"
                src="https://c4.wallpaperflare.com/wallpaper/183/371/686/luxury-fashion-model-profile-wallpaper-preview.jpg"
                alt=""
              ></img>
              <div
                data-scroll
                data-scroll-speed="-2"
                className="dets"
                id="det2"
              >
                <span className="span2" id="span2D">
                  .
                </span>
                <span className="span" id="span3D">
                  shop
                </span>
                <span id="click">Click Here To See The Magic</span>
                <img id="img2" src={img2} alt="image"></img>
                <span id="buy2" className="buy">
                  BUY-₹99,999
                </span>
              </div>
            </div>
            <div id="elem3" className="elem">
              <img
                data-scroll
                data-scroll-speed="1"
                src="https://s1.1zoom.me/big0/350/Handbag_Lera_Viacheslav_Krivonos_Model_Pose_Brown_594834_682x1024.jpg"
                alt=""
              ></img>
              <div
                onMouseEnter={hover}
                data-scroll
                data-scroll-speed="-2"
                className="dets"
                id="det3"
              >
                <span className="span2" id="span2">
                  .
                </span>
                <span className="span">shop</span>
                <img id="img3" src={img4} alt="image"></img>
                <span id="buy3" className="buy">
                  BUY-₹99,999
                </span>
              </div>
            </div>
          </div>
          <div onMouseMove={mouseMove2} onMouseEnter={mouseEnter2} id="page2">
            <div className="child" id="child1">
              <img src="https://www.freepnglogos.com/uploads/women-bag-png/women-bag-women-shoulder-bags-png-transparent-images-27.png"></img>
              <h3>Cherry Blossom</h3>
            </div>
            <div onMouseEnter={mouseEnter} className="child" id="child2">
              <img src="https://hips.hearstapps.com/hmg-prod/images/pre-fall-bags-072820b-1596125759.jpg?crop=0.364xw:0.728xh;0.319xw,0.212xh&resize=640:*"></img>
              <h3>BlueBerry Current</h3>
            </div>
            <div onMouseEnter={mouseEnter} className="child" id="child3">
              <img src="https://www.nicepng.com/png/detail/305-3057103_fashion-designer-bags-png-psd-detail-gucci-bags.png"></img>
              <h3 id="cherish">Cherish</h3>
            </div>
            <div onMouseEnter={mouseEnter} className="child" id="child4">
              <img src={img5} alt="image not available"></img>
              <h3>Hobo Browny</h3>
            </div>
          </div>
        </div>
        <div id="cursor"></div>
      </div>
      <footer>
        <div className="container">

         <svg className="container" id="container" width="216" height="215" viewBox="0 0 216 215" fill="none" xmlns="http://www.w3.org/2000/svg" style={{overflow: "visible;"}}><path d="M51.7757 0C38.0521 0 24.8906 5.43423 15.1866 15.1072C5.48261 24.7802 0.0309982 37.8997 0.0309982 51.5794C0.0309982 65.2591 5.48261 78.3785 15.1866 88.0515C24.8906 97.7245 38.0521 103.159 51.7757 103.159C65.4992 103.159 78.6607 97.7245 88.3647 88.0515C98.0687 78.3785 103.52 65.2591 103.52 51.5794C103.52 37.8997 98.0687 24.7802 88.3647 15.1072C78.6607 5.43423 65.4992 0 51.7757 0Z" fill="var(--foreground)" data-svg-origin="51.775497406721115 51.579498291015625" transform="matrix(1,0,0,1,0,0)" style={{transformOrigin: "0px 0px", opacity: "1;"}}></path><path d="M163.911 0C150.187 0 137.026 5.43423 127.322 15.1072C117.618 24.7802 112.166 37.8997 112.166 51.5794C112.166 65.2591 117.618 78.3785 127.322 88.0515C137.026 97.7245 150.187 103.159 163.911 103.159C177.634 103.159 190.796 97.7245 200.5 88.0515C210.204 78.3785 215.655 65.2591 215.655 51.5794C215.655 37.8997 210.204 24.7802 200.5 15.1072C190.796 5.43423 177.634 0 163.911 0Z" fill="var(--foreground)" data-svg-origin="163.9104995727539 51.579498291015625" transform="matrix(1,0,0,1,0,0)" style={{transformOrigin: "0px 0px;", opacity: "1;"}}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 129.002L17.3035 111.753L51.795 146.135L86.2649 111.775L103.568 129.023L69.0982 163.383L103.562 197.737L86.2586 214.985L51.7947 180.631L17.3099 215.006L0.00634766 197.758L34.4914 163.383L0 129.002Z" fill="var(--foreground)" data-svg-origin="51.784000396728516 163.37949752807617" transform="matrix(1,0,0,1,0,0)" style={{transformOrigin: "0px 0px;", opacity: "1;"}}></path><path fill-rule="evenodd" clip-rule="evenodd" d="M112.128 128.988L129.431 111.739L163.923 146.121L198.393 111.761L215.696 129.009L181.226 163.369L215.69 197.722L198.386 214.971L163.923 180.617L129.438 214.992L112.134 197.744L146.619 163.369L112.128 128.988Z" fill="var(--foreground)" data-svg-origin="163.9119987487793 163.3655014038086" transform="matrix(1,0,0,1,0,0)" style={{transformOrigin: "0px 0px;", opacity: "1;"}}></path></svg>

         <span className="container" id="location"><b>Store Location</b> :- New Delhi</span>

      

          <br></br>
        <p>We are proud and privileged to have our home on this land, and to be able to continue the long tradition of community coming together around food, begun thousands of years ago by First Nations peoples. As we stand together on this unceded land, we acknowledge our First Nations people, are the original custodians of this land, and we recognise their deep connection to land, water, sky and community which continues today. We pay our deep respects to community elders, past, present and emerging, for they hold the memories, the traditions, the culture and hopes of Aboriginal and Torres Strait Islander peoples. Always was, always will be Aboriginal land.</p>
        </div>
        <br></br>
        
      </footer>

    </div>
  );
};

export default Home;
