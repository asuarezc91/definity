import React, { useEffect, useRef } from "react";
import { Container } from "../Container";

// import React from "react";
import { Mapi } from "./styles";

// export const Mapa = () => <Mapi></Mapi>;

// export function Mapa() {
//   const elementRef = useRef();

//   useEffect(_ => {
//     let cleanup;
//     // lazy load the module that loads the JSAPI
//     // and initialize it
//     import("../data/logic").then(
//       app => (cleanup = app.initialize(elementRef.current))
//     );
//     return () => cleanup && cleanup();
//   }, []);

//   // assign elementRef to the ref of our component
//   return <div className="viewDiv" ref={elementRef}></div>;
// }

export const Mapa = () => {
  const elementRef = useRef();

  useEffect(_ => {
    let cleanup;
    // lazy load the module that loads the JSAPI
    // and initialize it
    import("../data/logic").then(
      app => (cleanup = app.initialize(elementRef.current))
    );
    return () => cleanup && cleanup();
  }, []);

  // assign elementRef to the ref of our component
  return <div className="viewDiv" ref={elementRef}>
 </div>;
};

 