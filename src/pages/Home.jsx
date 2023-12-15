import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import React from "react";
import Type from "./Type";

const Home = () => {

  return (
    <div style={{ backgroundImage: `url('./images/black-background.jpeg')` }} className="w-full bg-cover bg-center flex flex-col items-center justify-center h-screen bg-gray-200 text-gray-800 p-10 " >
    <h1 style={{ paddingBottom: 15 }} md={7} className="text-5xl text-slate-100">
    Hi There!{" "}
    <span className="wave" role="img" aria-labelledby="wave">
      👋🏻
    </span>
    </h1>

    <h1 className="heading-name text-5xl text-slate-100">
          I'm
      <strong className="main-name text-violet-800"> Tolga Kaan Asutay</strong>
    </h1>

      <p className="text-xl mb-10 text-center">
      <div className="text-5xl text-violet-800" style={{ padding: 40, textAlign: "left" }}>
        <strong> <Type /> </strong>  
      </div>
      </p>
      <div className="flex space-x-6 text-5xl">
        <Link to="https://github.com/KaanAsutay" target="_blank" className="text-stone-600 hover:text-zinc-950">
          <FaGithub className="inline-block" />
        </Link>
        <Link to="https://www.linkedin.com/in/tolga-kaan-asutay/" target="_blank" className="text-stone-600  hover:text-blue-700">
          <FaLinkedin className="inline-block" />
        </Link>
        <Link to="mailto:kaanasutay10@gmail.com" target="_blank" className="text-stone-600   hover:text-orange-600">
          <FaGoogle className="inline-block" />
        </Link>
      </div>
      <button 
      onClick={() => window.open('/documents/Tolga_kaan_asutay.pdf', '_blank')}
      class="bg-stone-600 text-violet-400 border mt-4 border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
      >
      <span 
      class="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
      Download My CV
      </button>
      <p className="text-sm mt-10">©2023 Reactor Portfolio</p>
    </div>
  );
};
export default Home;