import React from 'react'

const Hero = () => {
  return (
    <section className=' h-[90vh] sd:h[40vh] grid grid-cols-1 md:grid-cols-8 md:grid-flow-row text-white p-2 '>
       
    {/*imagen */}
    <div className=' md:col-span-4 flex justify-center items-center object-cover px-2 '>
    <img className='max-w-[250px] sm:max-w-[350px] md:max-w-[400px]  md:ms-auto'  src="anime3.png" alt="" />
    </div>        
    
    {/*informacion */}
    <div className=' md:col-span-4  flex  flex-col items-center justify-center p-4 gap-3 max-w-auto sm:max-w-auto md:max-w-[400px]  '> 


        <h1 className='  text-3xl   md:text-6xl font-bold text-center ' > <span className='text-primary p-2'>Hola, </span> Soy un programador peruano,</h1>

        <p className='text-xls'> desarrollo front-end,  conozco la necesidad de mantener un diseño (UX y UI) simple y útil, para los usuarios de un sistema, tengo experiencia en ventas, auditoría y contabilidad, lo que me permite estar pendiente de una mejor experiencia de usuario. </p>

            <a href="./cv.pdf" download  className=' text-white text-xl py-2 px-10 rounded-full  hover:bg-cyan-600 border-2 border-white'>  <i class='bx bxs-file-pdf'></i>  Descargar CV </a>
 
    </div>



<section/>

</section>
  )
}

export default Hero