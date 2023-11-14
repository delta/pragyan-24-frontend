// 'use client';

// /* eslint-disable @typescript-eslint/no-non-null-assertion */
// import React, { useEffect, useState } from 'react';
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// import { FullPage, Slide } from 'react-full-page';

// const visitedSet = new Set<number>();

// const Landing = () => {

//   const [scollDetails, setScollDetails] = useState({ from: 0, to: 1 });
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const dotRef = React.useRef<HTMLDivElement>(null);
//   const fullPageRef = React.useRef(null);

//   const beforeScroll = (detail: { from: number; to: number }) => {
// 	  setScollDetails(detail);
// 	  setCurrentSlide(detail.to);
// 	  console.log(detail);
// 	  if (dotRef.current) {
//       dotRef.current.style.transform = `translateY(${detail.to * 36 - 92}px)`;
//       dotRef.current.style.transition = 'transform 0.5s ease-in-out';
//     }
//   };

//   const scrollUp = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     fullPageRef.current!.scrollToSlide(currentSlide - 1);
//   };

//   const scrollDown = () => {
//     if (currentSlide < 6) {
//       setCurrentSlide(currentSlide + 1);
//     }
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     fullPageRef.current!.scrollToSlide(currentSlide + 1);
//   };

//   const scrollTo = (slide: number) => {
//     setCurrentSlide(slide);
//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     fullPageRef.current!.scrollToSlide(slide);
//   };

//   useEffect(() => {
//     visitedSet.add(currentSlide);
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'e' || e.key === 'E') {
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <section className="h-full w-full text-red-500">
//       <FullPage ref={fullPageRef} afterChange={beforeScroll} duration={1000}>
//         <Slide>
//           <section id="page1" className="h-full w-full sections">
//             page1
//           </section>
//         </Slide>

//         <Slide>
//           <section id="page2" className="h-full w-full sections">
//             page2
//           </section>
//         </Slide>

//         <Slide>
//           <section id="page3" className="h-full w-full sections">
//             page3
//           </section>
//         </Slide>
//       </FullPage>
//     </section>
//   );
// };

// export default Landing;
