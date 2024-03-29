import { useState } from "react"


import intro from "../../images/illustration-intro.png"

import productive from "../../images/illustration-stay-productive.png"

import curveMobile from "../../images/bg-curvy-mobile.svg"

import curveDesktop from "../../images/bg-curvy-desktop.svg"

import Feature from "../feature/feature.component"

import device from "../../images/icon-access-anywhere.svg"

import security from "../../images/icon-security.svg"

import collaboration from "../../images/icon-collaboration.svg"

import file from "../../images/icon-any-file.svg"

import { BsFillArrowRightCircleFill } from "react-icons/bs"

import profile1 from "../../images/profile-1.jpg"

import profile2 from "../../images/profile-2.jpg"

import profile3 from "../../images/profile-3.jpg"

import Testimonial from "../testimonial/testimonial.component"



const Container = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value) && event.target.value !== "") {
      setError('Please enter a valid email address');
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };



  return (
    <main className="pb-44 bg-main-color">
      <section className="bg-intro-color">
        <img className="px-10 pt-4 relative z-10 top-5 md:mx-auto" src={intro} alt="hero image" />
      </section>
      <section className=" relative bg-main-color mb-20">
        <picture>
          <source media="(max-width: 1440px)" srcSet={curveDesktop} />
          <img className=" bg-intro-color absolute z-0 md:pt-12" src={curveMobile} alt="intro" />
        </picture>

        <div className="absolute z-20 mt-20 md:ml-[25%]">
        <h1 className="font-raleway font-bold text-4xl text-white text-center mx-auto mb-5 md:bottom-[29rem] md:max-w-2xl">All your file in one secure location, accessible anywhere.</h1>

        <p className="font-opensans text-sm text-center text-gray-300 max-w-xs mx-auto mb-8 md:text-sm md:max-w-md">
          Fylo stores all your most important files in one secure location. Access them wherever
          you need, share and collaborate with friends family, and co-workers.
        </p>

        <div className="grid place-content-center md:bottom-96 md:mt-6">
          <button className=" font-raleway text-white font-semibold bg-gradient-to-r from-mycyan to-myblue hover:bg-gradient-to-r hover:to-mycyan w-72 p-4 rounded-full">Get Started</button>
        </div>
        </div>
      </section>
      <section className="relative top-64 mt-52 md:grid md:grid-cols-2 md:top-44">
        <Feature
          img={device}
          head="Access your files, anywhere"
          description="The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere."
        />
        <Feature
          img={security}
          head="Security you can trust"
          description="2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files."
        />
        <Feature
          img={collaboration}
          head="Real-time collaboration"
          description="Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required."
        />
        <Feature
          img={file}
          head="Store any type of file"
          description="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared."
        />
      </section>
      <section className=" relative top-64 mt-32 ml-6 md:flex md:top-48">
        <img className=" px-10 mb-5" src={productive} alt="illustration" />
        <div className="md:mt-36 md:mr-16">
          <h2 className="font-raleway font-bold text-white py-4 md:text-3xl md:max-w-xs">Stay productive, wherever you are</h2>
          <p className="pb-4 font-opensans text-gray-300">Never let location be an issue when accessing your files. Fylo has you covered for all of your file
            storage needs.</p>
          <p className="font-opensans text-gray-300 pb-4">Securely share files and folders with friends, family and colleagues for live collaboration. No email
            attachments required.</p>
          <a className=" text-sm font-opensans flex gap-3 text-mycyan border-mycyan border-b-2 w-[9.6rem] pb-1 hover:text-white hover:border-white" href="/#">See how Fylo works <BsFillArrowRightCircleFill className="mt-1 shadow-xl shadow-mycyan rounded-full" /> </a>
        </div>
      </section>
      <section className="relative top-64 mt-36 px-11 md:top-40">
      <div className=" ml-3 bg-quote bg-no-repeat h-9"></div>
      <div className="md:flex gap-7">
        <Testimonial
          description="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
          profile={profile1}
          name="Satish Patel"
          title="Founder & CEO, Huddle"
        />
        <Testimonial
          description="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
          profile={profile2}
          name="Bruce McKenzie"
          title="Founder & CEO, Huddle"
        />
        <Testimonial
          description="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine."
          profile={profile3}
          name="Iva Boyd"
          title="Founder & CEO, Huddle"
        />
        </div>
      </section>

      <section className="mx-6 py-5 text-g bg-intro-color rounded-xl shadow-black shadow-2xl relative z-30 top-[24rem] md:max-w-4xl md:mx-auto md:top-[18rem]">
        <h2 className="text-xl font-raleway font-bold text-white py-4 text-center md:text-2xl">Get early access today</h2>
        <p className="pb-6 px-4 font-opensans text-gray-300 text-center max-w-xs mx-auto md:max-w-3xl">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
          questions, our support team would be happy to help you.</p>
        
          <form className=" flex flex-col px-8 md:block md:px-16" action="">
          <input className="placeholder:text-gray-300 py-3 px-8 outline-none rounded-full md:pr-80" type="email" name="email"  id="email"
        value={email}
        onChange={handleChange} placeholder="email@example.com" />
          <button className=" font-raleway text-white font-semibold bg-gradient-to-r from-mycyan to-myblue hover:bg-gradient-to-r hover:to-mycyan my-5 p-3 rounded-full md:ml-6 md:w-[13rem] md:text-sm md:p-4" type="submit">Get Started For Free</button>
          {error && <h2 className=" ml-5 text-light-red">{error}</h2>}
          </form>
    
      </section>
    </main>
  );
}

export default Container;