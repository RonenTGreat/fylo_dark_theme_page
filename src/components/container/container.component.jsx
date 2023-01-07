import intro from "../../images/illustration-intro.png"

import curveMobile from "../../images/bg-curvy-mobile.svg"

import curveDesktop from "../../images/bg-curvy-desktop.svg"


const Container = () => {
  return ( 
    <main className="pb-40 bg-main-color">
      <section className="bg-intro-color">
        <img className="px-10 pt-4 relative z-30" src={intro} alt="hero image" />
      </section>
      <section className=" bg-main-color">
          <picture>
            <source media="(max-width: 1440px)" srcset={curveDesktop} />
            <img className=" bg-intro-color relative z-10 bottom-7" src={curveMobile} alt="intro" />
          </picture>

          <h1 className="absolute z-10 bottom-24 text-3xl text-white text-center max-w-sm ml-16">All your file in one secure location, accessible anywhere.</h1>

          <p className="text-center text-gray-300 max-w-xs mx-auto mt-6">
          Fylo stores all your most important files in one secure location. Access them wherever
          you need, share and collaborate with friends family, and co-workers.
          </p>

        <button className=" text-white font-semibold bg-gradient-to-r from-mycyan to-myblue hover:bg-gradient-to-r hover:to-mycyan w-72 ml-24 mt-10 p-3 rounded-full">Get Started</button>
      </section>
    </main>
   );
}
 
export default Container;