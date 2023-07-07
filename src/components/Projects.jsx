import React from 'react'

const Projects = () => {

  const handleClickPokemon = ()=>{
    window.open('https://zesty-sprinkles-0bd933.netlify.app', '_blank')
    }
  
    const handleClickCart = ()=>{
      window.open('https://carrito-de-compra-jeal-aragon.netlify.app/#', '_blank')
      }

  return (
    <section className=' s'>

<section className=' h-[40vh] flex  flex-wrap flex-cols-1 md:flex-cols-8 md:flex-flow-row  text-white mt-20 md:mt-0  justify-center items-center'>
       
      
          {/*informacion */}
     <div className=' md:col-span-3  flex  flex-col items-center justify-center p-4 gap-3 max-w-auto sm:max-w-auto md:max-w-[800px] m-auto '> 
   
   
        <h1 className='text-3xl   md:text-5xl font-bold text-center ' > <span className='text-primary p-2'> My work, </span> my projects are based on React and use APIs to obtain information</h1>

    </div>   
   <section/>
   
   </section>


    <section className=' h-[40vh] flex  flex-wrap flex-cols-1 md:flex-cols-8 md:flex-flow-row    text-white mt-20 md:mt-0  justify-center items-center'>

{/*imagen */}
<div className=' md:col-span-4 flex justify-center items-center object-cover px-2 border-2 rounded-lg   '>
<img className='max-w-[200px] sm:max-w-[300px] md:max-w-[350px]  md:ms-auto  '  src="proyecto2.png" alt="" />
</div>        

{/*informacion */}
<div className=' md:col-span-4  flex  flex-col items-center justify-center p-4 gap-3 max-w-auto sm:max-w-auto md:max-w-[400px]  '> 


    <h1 className='  text-2xl   md:text-4xl font-bold text-center ' > Pokedex</h1>

    <p className='text-xls'> </p>

        <section className=' text-white text-xl py-2 px-10 rounded-full gap'> 
        
        <i className='bx bxl-react text-primary'></i>
        <i className='bx bxl-javascript text-[#f0db4f] ' ></i>  
        <i className='bx bxl-css3 text-[#264de4] ' ></i>  
        <i className='bx bxl-html5 text-[#f06529]  '></i> 
        <i className='bx bxl-tailwind-css text-primary  ' ></i>
        
        
         </section>
         <button  onClick={handleClickPokemon}   className=' text-white text-xl py-2 px-10 rounded-full border-2  border-white   hover:bg-cyan-600 '> go to project </button>        

</div>



<section/>

</section>

<section className=' h-[40vh] flex  flex-wrap flex-cols-1 md:flex-cols-8 md:flex-flow-row sm:flex-row-reverse   text-white  justify-center items-center mt-28 md:mt-0   '>

{/*imagen */}
<div className=' md:col-span-4 flex justify-center items-center object-cover px-2  '>
<img className='max-w-[200px] sm:max-w-[300px] md:max-w-[350px]  md:ms-auto  border-2 rounded-lg   '  src="proyecto1.png" alt="" />
</div>        

{/*informacion */}
<div className=' md:col-span-4  flex  flex-col items-center justify-center p-4 gap-3 max-w-auto sm:max-w-auto md:max-w-[400px]  '> 


    <h1 className='  text-2xl   md:text-4xl font-bold text-center ' > <span className='text-primary p-2'> </span> Ecommerce</h1>

    <p className='text-xls'> </p>

    <section className=' text-white text-xl py-2 px-10 rounded-full gap'> 
        
        
        <i className='bx bxl-javascript text-[#f0db4f] ' ></i>  
        <i className='bx bxl-css3 text-[#264de4] ' ></i>  
        <i className='bx bxl-html5 text-[#f06529]  '></i> 
        
        
        
         </section>

         
         <button onClick={handleClickCart}  className=' text-white text-xl py-2 px-10 rounded-full border-2  border-white  hover:bg-cyan-600'> go to project </button>    
       

</div>



<section/>

</section>


</section>
  )
}

export default Projects