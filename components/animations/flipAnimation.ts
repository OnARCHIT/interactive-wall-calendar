import gsap from "gsap";


/* --------------------------------
   month flip animation
-------------------------------- */

export function flipMonth(
  container: HTMLElement,
  direction: "next" | "prev"
){

  const rotation = direction === "next"
    ? -90
    : 90;

  const tl = gsap.timeline();


  tl.to(container,{

    rotateX: rotation,

    opacity: 0,

    duration: .18,

    transformOrigin: "top",

    ease: "power1.in"

  });


  tl.set(container,{

    rotateX: -rotation

  });


  tl.to(container,{

    rotateX: 0,

    opacity: 1,

    duration: .22,

    ease: "power2.out"

  });


  return tl;

}


/* --------------------------------
   subtle lift effect
-------------------------------- */

export function liftCard(
  el: HTMLElement
){

  gsap.to(el,{

    y: -4,

    duration: .18,

    ease: "power1.out"

  });

}


export function resetLift(
  el: HTMLElement
){

  gsap.to(el,{

    y: 0,

    duration: .18

  });

}