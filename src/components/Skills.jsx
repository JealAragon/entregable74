import React from 'react'

const Skills = () => {
  return (
    <div className='text-white bg-slate-800 p-4 grid grid-cols-1  sm:grid-cols-2  md:grid-cols-4   justify-center items-center gap-4 rounded-md max-w-[800px]  mx-auto  mt-20 md:mt-0  '   >
          
          
    <section className='bg-slate-900 gap-2  px-4 py-8  min-w-[180px] rounded-md grid justify-center items-center  ' >
        <span className='text-primary mx-auto' >1</span>
        <p>React js</p>

    </section>

    <section className='bg-slate-900 gap-2  px-4 py-8  min-w-[180px] rounded-md grid justify-center items-center ' >
        <span className='text-primary mx-auto' > 2 </span>
        <p>JS CSS y HTML</p>

    </section>

    <section className='bg-slate-900 gap-2  px-4 py-8  min-w-[180px] rounded-md grid justify-center items-center ' >
        <span className='text-primary mx-auto' > 3 </span>
        <p> PHP</p>

    </section>

    <section className='bg-slate-900 gap-2  px-4 py-8  min-w-[180px] rounded-md grid justify-center items-center ' >
        <span className='text-primary mx-auto' > 4 </span>
        <p>WordPress</p>

    </section>


</div>    

  )
}

export default Skills