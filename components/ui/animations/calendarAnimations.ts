import gsap from "gsap";


/* --------------------------------
   calendar container entrance
-------------------------------- */

export function animateCalendarEntrance(
  scope: HTMLElement
){

  const ctx = gsap.context(() => {

    gsap.from(".heroSection", {

      y: 30,
      opacity: 0,
      duration: 0.45,
      ease: "power2.out"

    });


    gsap.from(".monthHeader", {

      y: 20,
      opacity: 0,
      duration: 0.4,
      delay: 0.05

    });


    gsap.from(".dayCell", {

      y: 12,
      opacity: 0,
      stagger: 0.01,
      duration: 0.25,
      delay: 0.08

    });


    gsap.from(".notesWrapper", {

      y: 20,
      opacity: 0,
      duration: 0.35,
      delay: 0.1

    });

  }, scope);

  return ctx;

}


/* --------------------------------
   grid refresh animation
-------------------------------- */

export function animateGridChange(
  scope: HTMLElement
){

  const ctx = gsap.context(() => {

    gsap.fromTo(

      ".dayCell",

      {
        opacity: 0,
        scale: .96
      },

      {
        opacity: 1,
        scale: 1,
        stagger: 0.01,
        duration: 0.18,
        ease: "power1.out"
      }

    );

  }, scope);

  return ctx;

}


/* --------------------------------
   hover micro interaction
-------------------------------- */

export function animateHover(el: HTMLElement){

  gsap.to(el,{

    y: -1,

    duration: .12,

    ease: "power1.out"

  });

}


export function animateHoverOut(el: HTMLElement){

  gsap.to(el,{

    y: 0,

    duration: .12

  });

}


/* --------------------------------
   hero image subtle motion
-------------------------------- */

export function animateHeroImage(
  el: HTMLElement
){

  gsap.fromTo(

    el,

    {
      scale: 1.04
    },

    {
      scale: 1,
      duration: .6,
      ease: "power2.out"
    }

  );

}