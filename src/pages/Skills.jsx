import React from 'react'

const Skills = () => {
  return (
    <div className='w-full'>
    <div className='text-2xl'>Full-Stack Developer</div>
    <div className='flex justify-evenly'>
    <div className='bg-slate-700'>
    <div className='text-xl mb-4 underline'>Frontend</div>
    <div><img src="./svg/HTML (1).svg" alt="" /></div>
    <div><img src="./svg/CSS.svg" alt="" /></div>
    <div><img src="./svg/JavaScript.svg" alt="" /></div>
    <div>REACT</div>
    <div>TypeScript</div>
    <div>NextJS</div>
    <div>Sass</div>
    <div>Bootstrap</div>
    <div>Tailwind</div>
    </div>

    <div className='bg-slate-700'>
      <div className='text-xl mb-4 underline'>Backend</div>
      <div>NodeJs</div>
      <div>ExpressJs</div>
      <div>SQL</div>
      <div>NOSQL</div>
      <div>POSTGRESQL</div>
      <div>MONGODB</div>
      <div>RESTFULAPI</div>
      <div>SQUELİZE</div>
      <div>DOCKER</div>
    </div>
    </div>

    <div className='w-50 text-center mt-20 ml-20 mr-20'>
      Lorem ipsum dolor sit amet consectetur, 
      adipisicing elit. Enim, iste. Nam facere 
      voluptatibus tenetur nemo alias eveniet cum 
      ratione doloribus vitae est asperiores assumenda 
      ut placeat reiciendis quasi, unde dolorum?
    </div>
    </div>
  )
}

export default Skills