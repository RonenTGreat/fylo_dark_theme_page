import intro from "../../images/illustration-intro.png"

import curveMobile from "../../images/bg-curvy-mobile.svg"

import curveDesktop from "../../images/bg-curvy-desktop.svg"


const Container = () => {
  return ( 
    <main className="pb-40 bg-main-color">
      <section className="bg-intro-color">
        <img className="px-10 pt-4 relative z-30" src={intro} alt="hero image" />
      </section>
      <section className=" bg-main-color relative">
          <picture>
            <source media="(max-width: 1440px)" srcset={curveDesktop} />
            <img className=" bg-intro-color relative z-10 bottom-7" src={curveMobile} alt="intro" />
          </picture>

          <h1 className="font-raleway font-bold relative z-10 bottom-24 text-3xl text-white text-center max-w-sm mx-auto">All your file in one secure location, accessible anywhere.</h1>

          <p className="font-opensans text-ms relative z-10 bottom-20 text-center text-gray-300 max-w-xs mx-auto">
          Fylo stores all your most important files in one secure location. Access them wherever
          you need, share and collaborate with friends family, and co-workers.
          </p>

        <div className="relative z-10 bottom-12 grid place-content-center">
          <button className=" font-raleway text-white font-semibold bg-gradient-to-r from-mycyan to-myblue hover:bg-gradient-to-r hover:to-mycyan w-72 p-3 rounded-full">Get Started</button>
        </div>
      </section>
      <section>
        h
      </section>
    </main>
   );
}
 
export default Container;