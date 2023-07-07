import React from 'react'

const Skills = () => {
  return (
    <div className='text-white bg-slate-800 p-4 grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3   justify-center items-center gap-4 rounded-md max-w-[800px]  mx-auto  mt-20 md:mt-0  '   >
          
          

    <section className='bg-slate-900 gap-2  px-4 py-8  min-w-[180px] rounded-md grid justify-center items-center ' >
        <span className='text-primary mx-auto' > <i className='bx bxl-react'></i></span>
        <p>React js</p>

    </section>


    <section className='bg-slate-900 gap-2  px-4 py-8  min-w-[180px] rounded-md grid justify-center items-center ' >
        <span className=' mx-auto flex ' > <i className='bx bxl-javascript text-[#f0db4f] ' ></i>    <i className='bx bxl-css3 text-[#264de4] ' ></i>  <i className='bx bxl-html5 text-[#f06529]  '></i>  </span>
        <p>JS CSS y HTML</p>

    </section>

    <section className='bg-slate-900 gap-2  px-4 py-8  min-w-[180px] rounded-md grid justify-center items-center ' >
        <span className='text-primary mx-auto' >  <i className='bx bxl-tailwind-css' ></i> </span>
        <p>Tailwind </p>

    </section>




</div>    

  )
}

export default Skills