function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  var splittedText = h1Text.split("");
  var halfVal = splittedText.length / 2;
  var clutter = "";

  splittedText.forEach(function (elem, idx) {
    if (idx < halfVal) {
      clutter += `<span class='a'>${elem}</span>`;
    } else {
      clutter += `<span class='b'>${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

// gsap.from("h1 span", {
//   y: 70,
//   opacity: 0,
//   duration: 0.5,
//   delay: 0.25,
//   stagger: -0.1,
// });

gsap.from("h1 .a", {
  y: 70,
  opacity: 0,
  duration: 0.5,
  delay: 0.25,
  stagger: 0.1,
});

gsap.from("h1 .b", {
  y: 70,
  opacity: 0,
  duration: 0.5,
  delay: 0.25,
  stagger: -0.1,
});
