import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, {useRef, useState }  from "react";

// useRef
// const App = () =>{

//   const containerRef = useRef()
//   const boxgsapRef = useRef()
//   useGSAP(()=>{
//     gsap.from(".box",{
//       y:300,
//       opacity:0,
//       duration:2,
//       delay:1,
      
//     })
//     gsap.from(".circle",{
//       y:-300,
//       opacity:0,
//       duration:2,
//       delay:1,
//       rotate:720
//     })
//   }, {scope:containerRef})

  
//   return(
//     <main>
      

//       {/* useRef */}
//       <div ref={containerRef} className="container">
//         <div className="circle"></div>
//         <div className="box"></div>
//       </div>
//       <div className="kuch">
//         <div className="circle"></div>
//         <div className="box"></div>
//       </div>

//     </main>
//   )
// }

// useState
// const App = () =>{

//   const imageRef = useRef()

//   const [circleX, setCircle] = useState(0)
//   const random = gsap.utils.random(-500,500,100)
//   const [roti, setRotate] = useState(0)
//   const rotateX = gsap.utils.random(-360,360,30)
//   const [yValue, setYValue] = useState(0)
//   const rotateY = gsap.utils.random(-500,500,30)

//   useGSAP(()=>{
//     gsap.to(imageRef.current,{
//       x:circleX,
//       y:yValue,
//       duration:.5,
//       rotate:roti
//     })
//   },{scope:"main",dependencies:[circleX,roti,yValue]})
//   return(
//     <main>
     
//       {/* useState */}
//       <button onClick={()=>{
//         setCircle(random);
//         setRotate(rotateX)
//         setYValue(rotateY)
//       }}>Animate</button>
//       <img onClick={()=>{
//         setCircle(random);
//         setRotate(rotateX)
//         setYValue(rotateY)
//       }} ref={imageRef} height={30} src="https://imgs.search.brave.com/NEBI4BPK65UC55uRKoRg3Z53-x0_RWJ6DTqEFaiZ0WE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDUyNDIw/OTgucG5n" alt="" />

//     </main>
//   )
// }

// ContextSafe
// it is used for memory management
const App = () =>{
  
  const boxRef = useRef()
  const {contextSafe} = useGSAP()
  const rotateBox = contextSafe(()=>{
    gsap.to(boxRef.current,{
      rotate:720,
      duration :1
    })
  })
  return(
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box"></div>
    </main>
  )
}
export default App