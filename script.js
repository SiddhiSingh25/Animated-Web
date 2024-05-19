const scroll = new LocomotiveScroll({
    el: document.querySelector('.container'),
    smooth: true,
    lerp : 0.05,
    smartphone: {
        smooth: true
      },
      tablet: {
        smooth: true
      }
});
/*
function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}*/

const navAnim = () => {
    let nav = document.querySelector(".nav-headings");
    nav.addEventListener("mouseenter", () => {
        let tl = gsap.timeline();
        tl.to(".nav-footer", {
            height: "21.5vh"
        })
        tl.to(".nav-head h5", {
            display: "block"
        })
        tl.to(".nav-head span", {
            y: 0,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", () => {
        let tl = gsap.timeline();
        tl.to(".nav-head span", {
            y: 25,
            stagger: {
                amount: 0.3
            }
        })
        tl.to(".nav-head h5", {
            display: "none",
            duration: 0.1
        })
        tl.to(".nav-footer", {
            height: "0",
            duration: 0.25
        })
    })
};
const scrollChange = () => {
    let navbar = document.querySelector("nav");
    document.addEventListener("scroll", function () {
        navbar.style.height = "8vh";
    })
};
const cursorImgAnime = () => {
    document.querySelectorAll(".rightelm").forEach((elm) => {
    console.log(elm.childNodes)
        elm.addEventListener("mouseenter", () => {
            elm.style.borderTop = "1.7px solid white"
            gsap.to(elm.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        elm.addEventListener("mouseleave", () => {
            elm.style.borderTop = "1px solid #333"
            gsap.to(elm.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elm.addEventListener("mousemove", (dets) => {
            elm.style.borderTop = "1.7px solid white"
            gsap.to(elm.childNodes[3], {
                x: dets.x - elm.getBoundingClientRect().x - 52,
                y: dets.y - elm.getBoundingClientRect().y - 230
            })
        })
    })
};
const playfun = () => {
    let play = document.querySelector(".center-div");
    let textdiv = document.querySelector(".text");
    play.addEventListener("mouseenter", () => {
        gsap.to(textdiv, {
            opacity: 1,
            scale: 1,
            y: -15
        })
    })
    play.addEventListener("mouseleave", () => {
        gsap.to(textdiv, {
            opacity: 0,
            scale: 0.85,
            y: 15
        })
    })
    let video = document.querySelector("video");
    document.querySelector(".center-div").addEventListener("click", () => {
        video.play();
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", () => {
        video.load();
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0
        })
    });
};
const page7Anime = () => {
    let page7video = document.querySelector(".page7video");
    let circle = document.querySelector(".circle");
    document.querySelector(".page7right").addEventListener("mouseenter", (dets) => {
        page7video.play();
        document.querySelector(".page7right").style.backgroundImage = `url('')`;
        page7video.style.opacity = 1;
    })
    document.querySelector(".page7right").addEventListener("mousemove", (dets) => {
        gsap.to(circle, {
            opacity: 1,
            scale: 1,
            x: dets.x - document.querySelector(".page7right").getBoundingClientRect().x - 60,
            y: dets.y - document.querySelector(".page7right").getBoundingClientRect().y - 70
        })
    })
    document.querySelector(".page7right").addEventListener("mouseleave", () => {
        document.querySelector(".page7right").style.backgroundImage = `url('img8.webp')`;
        page7video.style.opacity = 0;
        gsap.to(circle, {
            opacity: 0,
            scale: 0
        })
    })
};
//navAnim();
scrollChange();
cursorImgAnime();
playfun();
page7Anime();
document.querySelectorAll(".page8Common").forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        e.childNodes[5].style.opacity = 0;
        e.childNodes[1].style.borderTop = "2px solid #333";
        e.lastElementChild.play();
        gsap.to(e.lastElementChild, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1
        })
    })
    e.addEventListener("mouseleave",()=>{
        e.childNodes[5].style.opacity = 1;
        e.childNodes[1].style.borderTop = "2px solid#e0e0e0";
        e.lastElementChild.load();
        gsap.to(e.lastElementChild, {
            transform: "scaleX(1) scaleY(0.4)",
            opacity: 0
        })
    })
})
function page6Animations() {
    gsap.from("#btm6-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm6-part2",
            scroller: "#main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}
//Img anime 
document.querySelector(".imgAnime").addEventListener("mouseenter", ()=>{
    gsap.to(".rectangle img", {
        opacity : 1,
        transfvarorm: "scaleX(1) scaleY(1)"
    })
})
document.querySelector(".imgAnime").addEventListener("mousemove", (dets)=>{
    gsap.to(".rectangle img", {
        x : dets.x - document.querySelector(".imgAnime").getBoundingClientRect().x - 180,
        y: dets.y - document.querySelector(".imgAnime").getBoundingClientRect().y -100,
        transform: "scaleX(1) scaleY(1)"
    })
})
document.querySelector(".imgAnime").addEventListener("mouseleave", ()=>{
    gsap.to(".rectangle img", {
        opacity : 0,
        transform: "scaleX(1) scaleY(0.05)",
        duration:0.5
    })
})

/*gsap.from(".page1 h1",{
    y: -100,
    delay : 0.8,
    duration : 0.6,
    stagger: 0.5,
    opacity:0
})*/


let style = document.createElement('style');
let screenWidth = window.innerWidth || document.documentElement.clientWidth;
const responsive = ()=>{
    if( screenWidth <= 700 ){
        document.querySelector(".page1").childNodes[1].innerHTML = "AI & ML Product";
        var pageElement = document.querySelector('.page3');
            // Log the current value of the data-scroll-speed attribute
            console.log('Current data-scroll-speed:', pageElement.getAttribute('data-scroll-speed'));
            // Remove the data-scroll-speed attribute
            pageElement.removeAttribute('data-scroll-speed');
            // Confirm the removal
            console.log('data-scroll-speed attribute removed:', !pageElement.hasAttribute('data-scroll-speed'));
            document.querySelector(".page1").style.transform = 'scale(1, 1)';
    }
}
window.addEventListener('resize', responsive);
gsap.from(".page1",{
    transform: 'scaleX(0.7) scaleY(0)',
    delay : 0.3,
    duration:2,
    animation: 'all videoanime 5s linear infinite'
})
gsap.to("nav",{
    opacity:1,
    delay: 1.6,
    duration:1.2,
    height : '11vh'
})
gsap.from(".first",{
    y: 130,
    delay:0.7,
    duration : 0.7,
    stagger: 0.6,
    opacity:0
})
gsap.from(".second",{
    y: 100,
    delay : 1.3,
    duration : 0.7,
    stagger: 0.6,
    opacity:0
})
gsap.to(".page1 p, .page1-buttons",{
    y:-40,
    delay :2,
    duration:1,
    opacity:1
})
gsap.to(".moving-box",{
    opacity:1,
    delay:2
})