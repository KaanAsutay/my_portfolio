const About = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row items-center max-w-5xl">

      <div className="md:w-1/2">
        <img
          src="./images/avatar.jpeg"
          alt="Profile"
          className="rounded-full w-32 h-32 md:h-96 md:w-96 sm:h-32 sm:w-32"
          />
      </div>

      <div className="md:w-1/2 mt-4 md:mt-0 md:pl-4">
        <h2 className="text-5xl font-bold hover:text-violet-800">Who am I?</h2>
        <p className="text-2xl mt-2">I am Tolga Kaan Asutay</p>
        <p className="mt-2 text-xl">I am a full stack web developer with experience in developing websites, web applications, mobile games (Android & iOS), and Flutter mobile applications.</p>
        <button 
          onClick={() => window.open('/documents/Tolga_kaan_asutay.pdf', '_blank')}
          class="bg-stone-600 text-violet-400 border mt-4 border-violet-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
        >
        <span 
          class="bg-violet-400 shadow-violet-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Download My CV
        </button>
      </div>
    </div>
  );
};

export default About;