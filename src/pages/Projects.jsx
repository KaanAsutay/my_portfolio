import React from "react";
import { FaGithub } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";
import { projectData } from "../helper/projectData";

const Projects = () => {
  return (
    <div>
      <h1 className="smky-btn3 relative hover:text-white py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-violet-800 after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-600">
        My Projects
      </h1>
      <div className="">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 md:px-4 sm:grid-cols-1 gap-4 w-full mt-8">
      {projectData?.map((item, i) => (
        <div key={i + 1} className="mx-2 border-rounded">
          <Link className="" to="https://soup-restaurant.vercel.app/" target="_blank">
             {/* resimleri canvadan belli px de ayarla */}
            <img
              className="w-full h-64 border-2 border-violet-700 object-cover hover:scale-105 transition-transform duration-300"
              src={item.image}
              alt="My Project"
            />
          </Link>
                <div className="flex justify-between max-w-md  bg-slate-500 mt-1 px-2 rounded-md">
                 <div className="px-6 py-6">
            <div className="text-left text-sm mb-2">{item.techTool}</div>
            <Link to="https://soup-restaurant.vercel.app/" target="_blank">
            <div class=" text-left font-bold hover:underline">
              {item.name}
            </div>
            </Link>
            </div>
            <div className="flex mt-4 gap-2 mr-4">
              <Link>
              <FaGithub className="text-2xl text-black hover:text-white " />
              </Link>
              <Link>
              <RxExit className="text-2xl text-black hover:text-white  " />
              </Link>
            </div>
            </div>
        </div>
      ))}
       </div>
       </div>
    </div>
  );
};
export default Projects;