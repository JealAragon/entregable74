import React, { useEffect, useState } from 'react'

import { CSSTransition, SwitchTransition } from 'react-transition-group'

const arrayOfWork = ["React","Javascript","CSS","HTML", "Tailwind"]

const Skd = () => {

    const [paragraphCounter, setParagraphCounter] = useState(0)
    useEffect(() => {
      const interval =setInterval(()=>{
        setParagraphCounter((currentValue)=> {
            if (currentValue + 1 == arrayOfWork.length) {
                return 0
            }
            return currentValue + 1
        } )
      },3000)
      
      return () => clearInterval(interval)

    }, [])


    const [icon, setIcon] = useState(false)



    


    

  return (


    <div    className='flex justify-center items-center flex-wrap  text-base  sm:text-lg md:text-xl  gap-2   text-center'  >

        
        <h3 className='text-primary'> {"<h2>"} </h3>
     

        <div className='text-white' > {arrayOfWork[paragraphCounter]}    </div>


        <h3 className='text-primary'  > {"</h2>"} </h3>

        

        

       {/*
   
        <div  id='React'  className=' font-[Inconsolata]  text-base  sm:text-lg md:text-xl  gap-1  flex items-center justify-center  text-center' >
        <i className='bx bxl-react'></i>
      
        </div>

        <div id='Javascript'  className=' font-[Inconsolata]  text-base  sm:text-lg md:text-xl  gap-1  flex items-center justify-center  text-center' >
        <i className='bx bxl-javascript' ></i>
    
        </div>

        <div  id='CSS'  className=' font-[Inconsolata]  text-base  sm:text-lg md:text-xl  gap-1  flex items-center justify-center  text-center' >
        <i className='bx bxl-css3 ' ></i>
      
        </div>

        <div  id='HTML' className=' font-[Inconsolata]  text-base  sm:text-lg md:text-xl  gap-1  flex items-center justify-center  text-center' >
        <i className='bx bxl-html5'></i>
       
        </div>

        <div  id='Tailwind'  className=' font-[Inconsolata] text-base  sm:text-lg md:text-xl  gap-1  flex items-center justify-center  text-center' >
        <i className='bx bxl-tailwind-css' ></i>
       
        </div>

     */}





    </div>
  )
}

export default Skd