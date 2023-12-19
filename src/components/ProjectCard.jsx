import React from "react";
import { FaGithub } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-violet-500">
        <div className="flex items-center justify-center  ">
          <Link className="" href="https://www.google.com" target="_blank">
            <img
              className="w-full border-2 border-white object-cover hover:scale-110 transition-transform duration-300      "
              src="https://ilkaytech.netlify.app/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1698929274945-9b073cae75b9%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D2894%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=384&q=75"
              alt="Profil"
            />
          </Link>
        </div>
        <div className="flex justify-between">
          <div class="px-6 py-4 ">
            <p class="text-left text-sm mb-2  ">
              React | Nextjs | Redux | MongoDB
            </p>
            <Link href="https://fastt-foodd.netlify.app/" target="_blank">
              <p class=" text-left font-bold hover:underline  ">
                Portfolio Website
              </p>
            </Link>
          </div>
          <div className="flex mt-4 gap-2 mr-4">
            <Link
              href="https://github.com/ilkaytech/E_Commerce_Website_Design"
              target="_blank"
            >
              <FaGithub className="text-2xl text-white hover:text-zinc-800" />
            </Link>
            <Link href="https://fastt-foodd.netlify.app/" target="_blank">
              <RxExit className="text-2xl text-white hover:text-zinc-800  " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;