import React from 'react'
import gsap from "gsap";
import svg from "./Untitled.png"

const Navbar = () => {
  const st=()=>{
    gsap.to("#part1 svg",{
      transform:"translateY(-100%)",
      scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top 0 ",
        end:"top -5%",
        scrub:true
      }
    })
  }
  const it=()=>{
    gsap.to("#part2 #links",{
      transform:"translateY(-100%)",
      scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 0 ",
        end:"top -5%",
        scrub:true
      }
    })
  }
  st()
  it()

  return (
    <div>
      <div id='navbar' >
        <div id='part1'>
        <img id='svg' src={svg}></img>

          <svg width="62" height="63" viewBox="0 0 62 63" fill="none" xmlns="http://www.w3.org/2000/svg" class="go1438215768" style={{transform: "translate(0px, 0px)"}}><path d="M46.8316 0C42.9105 0 39.1501 1.59236 36.3775 4.42677C33.605 7.26119 32.0474 11.1055 32.0474 15.114C32.0474 19.1224 33.605 22.9667 36.3775 25.8011C39.1501 28.6355 42.9105 30.2279 46.8316 30.2279C50.7526 30.2279 54.513 28.6355 57.2856 25.8011C60.0582 22.9667 61.6158 19.1224 61.6158 15.114C61.6158 11.1055 60.0582 7.26119 57.2856 4.42677C54.513 1.59236 50.7526 0 46.8316 0Z" fill="currentColor"></path><path d="M14.793 0C10.872 0 7.11154 1.59236 4.33897 4.42677C1.56639 7.26119 0.00878906 11.1055 0.00878906 15.114C0.00878906 19.1224 1.56639 22.9667 4.33897 25.8011C7.11154 28.6355 10.872 30.2279 14.793 30.2279C18.714 30.2279 22.4744 28.6355 25.247 25.8011C28.0196 22.9667 29.5772 19.1224 29.5772 15.114C29.5772 11.1055 28.0196 7.26119 25.247 4.42677C22.4744 1.59236 18.714 0 14.793 0Z" fill="currentColor"></path><path d="M36.9805 32.7422L32.0366 37.7963L56.6819 62.9913L61.6258 57.9372L36.9805 32.7422Z" fill="currentColor"></path><path d="M56.6836 32.7485L32.0383 57.9435L36.9822 62.9976L61.6275 37.8026L56.6836 32.7485Z" fill="currentColor"></path><path d="M4.94386 32.7464L0 37.8005L24.6453 62.9955L29.5892 57.9414L4.94386 32.7464Z" fill="currentColor"></path><path d="M24.647 32.7527L0.00170898 57.9477L4.94557 63.0018L29.5909 37.8068L24.647 32.7527Z" fill="currentColor"></path></svg>
          </div>
        <div id='part2'>
        <div id='links'>
          <a href='/' >Shop</a>
          <a href='/' >Cart</a>
          <a href='/' >Sign In </a>
        </div>
        <div id='icon' >
        <i class="ri-shopping-cart-line"></i>
        <label className='hamburger-menu'>
          <input type="checkbox" />
        </label>
        <aside className="sidebar">
         <strong > <a id="anchor" href='#' > <div className='sidebar-font'>Shop</div>
          <div className='sidebar-font'>About</div>
          <div className='sidebar-font'>Contact</div>
          <div className='sidebar-font'>Product</div>
          </a></strong>
          <a id="anchor" href='#'>
          <div className="heading">CONNECT WITH US</div>
          <di className="connect">Facebook</di>
          <di className="connect">Instgram</di>
          <di className="connect">Twitter</di>
          <di className="connect">LinkedIn</di>
          <di className="connect">YouTube</di>
          <div className="heading2">NITTY GRITTIES</div>
          <di className="connect2">Handbags FAQs</di>
          <di className="connect2">Contact</di>
          <di className="connect2">Store Location</di>
          <di className="connect2">Pathway</di>
          <di className="connect2">Career</di>
          </a>
        </aside>
        </div>
       
        </div>
      </div>
    </div>
  )
}

export default Navbar
