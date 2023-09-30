import React from "react";
import "./Home.css";
import video from "./Coral.mp4";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect} from "react";
import ScrollTrigger from 'gsap/ScrollTrigger';
import img1 from "./pngwing.com.png"
import img2 from "./pngwing.com (1).png"
import img3 from "./pngwing.com (2).png"
import img4 from "./pngwing.com (3).png"
import img5 from "./pngimg.com - women_bag_PNG6396.png"
import Navbar from "./Navbar";




const Home = (props) => {
  useEffect(() => {
 const locomotiveAnimation=()=>{
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveAnimation()
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
    gsap.to(play2, {transform: 'translate(-50%,-50%) scale(1)'
    });
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
const dets = document.getElementsByClassName("dets")
const hover=()=>{

}


  return (
    
    <div  locomotiveAnimation onMouseMove = {mouseMove2} id="main" onLoadedData = {animation} onScroll={""} data-scroll-container>
      <div id="home">
        <strong>
          <h1 data-scroll
                data-scroll-speed="1" className="h1" id="h1">
            Change
          </h1>
          <h1 data-scroll
                data-scroll-speed="1" className="h1">The Style</h1>
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
              alt=""></img>
              <div data-scroll
                data-scroll-speed="-2" className="dets" id="det1"><span className="span2">.</span><span className="span">shop</span><img id="img1" src={img3} alt="image"></img>
                <span id="buy1" className="buy">₹99,999</span></div>
            </div>
            <div id="elem2" className="elem">
              <img
                data-scroll
                data-scroll-speed="1"
                src="https://c4.wallpaperflare.com/wallpaper/183/371/686/luxury-fashion-model-profile-wallpaper-preview.jpg"
              alt=""></img>
              <div data-scroll
                data-scroll-speed="-2" className="dets" id="det2"><span className="span2" id="span2D" >.</span><span className="span" id="span3D">shop</span><img id="img2" src={img2} alt="image"></img>
                <span id ="buy2" className="buy">Price - ₹99,999</span></div>

            </div>
            <div id="elem3" className="elem">
              <img
                data-scroll
                data-scroll-speed="1"
                src="https://s1.1zoom.me/big0/350/Handbag_Lera_Viacheslav_Krivonos_Model_Pose_Brown_594834_682x1024.jpg"
              alt=""></img>
              <div onMouseEnter={hover} data-scroll
                data-scroll-speed="-2" className="dets" id="det3"><span className="span2" id="span2">.</span><span className="span">shop</span>
                <img id="img3" src={img4} alt="image"></img>
                <span id="buy3" className="buy">Price - ₹99,999</span></div>

            </div>
           
          </div>
          <div onMouseMove = {mouseMove2} onMouseEnter={mouseEnter2} id="page2">
          <div  className="child" id="child1">
            <img src="https://www.freepnglogos.com/uploads/women-bag-png/women-bag-women-shoulder-bags-png-transparent-images-27.png"></img>
          </div>
          <div onMouseEnter={mouseEnter} className="child" id="child2">
          <img src="https://hips.hearstapps.com/hmg-prod/images/pre-fall-bags-072820b-1596125759.jpg?crop=0.364xw:0.728xh;0.319xw,0.212xh&resize=640:*"></img>
          </div>
          <div onMouseEnter={mouseEnter} className="child" id="child3">
          <img src="https://www.nicepng.com/png/detail/305-3057103_fashion-designer-bags-png-psd-detail-gucci-bags.png"></img>
          </div>
          <div onMouseEnter={mouseEnter} className="child" id="child4">
          <img src={img5}alt="image not available"></img>
          </div>
          </div>
        </div>
        <div   id="cursor"></div>
      </div>
    </div>
  );
};
 
export default Home;
