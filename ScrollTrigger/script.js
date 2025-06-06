// gsap.from("#page1 .box", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
// });
// gsap.from("#page2 .box", {
//   scale: 0,
//   //   delay: 1,
//   //   duration: 2,
//   rotate: 360,
//   // scrollTrigger: '#page2 .box'
//   scrollTrigger: {
//     trigger: "#page2 .box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 10%",
//     scrub: 2,
//   },
// });

// gsap.from("#page2 h1", {
//   scale: 0,
//   delay: 1,
//   duration: 1,
//   y: 500,
//   scrollTrigger: {
//     trigger: "#page2 h1",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//   },
// });

gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
