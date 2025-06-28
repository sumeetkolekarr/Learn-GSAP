import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  // const gsapRef = useRef()
  // const boxRef = useRef()
  // const container = useRef()

  // const [circleX, setCircleX] = useState(0)
  // const [circleY, setCircleY] = useState(0)
  // const [circleR, setCircleR] = useState(0)
  // const randomCircleX = gsap.utils.random(-500, 500, 10)
  // const randomCircleY = gsap.utils.random(-500, 500, 10)
  // const randomCircleR = gsap.utils.random(-360, 360, 10)

  useGSAP(() => {
    // gsap.to(gsapRef.current, {
    //   x: 1000,
    //   duration: 2,
    //   delay: 1
    // })
    // gsap.from('.box', {
    //   rotate: 360,
    //   y: 1000,
    //   duration: 2,
    //   delay: 0.2
    // })
    // gsap.from(boxRef.current, {
    //   rotate: 360,
    //   duration: 1,
    //   delay: 0.2
    // })
    //   gsap.from('.box', {
    //     rotate: 360,
    //     scale: 0,
    //     duration: 1,
    //     delay: 0.2,
    //     opacity: 0
    //   })
    // }, { scope: container }

    //   gsap.to('.circle', {
    //     x: circleX,
    //     y: circleY,
    //     duration: 0.5,
    //     rotate: circleR
    //   })
    // }, [circleX, circleY, circleR]


  }
  )

  const boxRef = useRef()
  const {contextSafe} = useGSAP()
  const rotateBox = contextSafe(function () {
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1
    })
  })


  return (
    // <main>
    //   <div className="container" ref={container}>
    //     <div className="circle"></div>
    //     {/* <div ref={boxRef} className="box"></div> */}
    //     <div className="box"></div>
    //   </div>
    //   <div className="containerDiff">
    //     <div className="circle"></div>
    //     <div className="box"></div>
    //   </div>
    //   {/* <div ref={gsapRef} className="box"></div> */}
    // </main>

    // <main>
    //   <div onClick={() => { setCircleX(randomCircleX); setCircleY(randomCircleY); setCircleR(randomCircleR) }} className="circle"></div>
    // </main>

    // ContextSafe
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div className="box" ref={boxRef}></div>
    </main>
  )
}

export default App