import React, { useEffect, useState } from 'react'

const arrayOfWork =['hola','jeal','aragon']

const Skd = () => {

    const [count, setCount] = useState(0)
    const [paragraph, setParagraph] = useState('')
    const [paragraphCounter, setParagraphCounter] = useState(0)


        

    




  return (
    <div    className='flex justify-center items-center flex-wrap  '  >

       

        <div className=' font-[Inconsolata]  text-base  sm:text-lg md:text-xl  gap-1  flex items-center justify-center  text-center' >
        <i className='bx bxl-react'></i>
        <h4>React</h4>
        </div>

        <div className=' font-[Inconsolata]  text-base  sm:text-lg md:text-xl  gap-1  flex items-center justify-center  text-center' >
        <i className='bx bxl-javascript' ></i>
        <h4>Javascript</h4>
        </div>

        <div className=' font-[Inconsolata]  text-base  sm:text-lg md:text-xl  gap-1  flex items-center justify-center  text-center' >
        <i className='bx bxl-css3 ' ></i>
        <h4>CSS</h4>
        </div>

        <div className=' font-[Inconsolata]  text-base  sm:text-lg md:text-xl  gap-1  flex items-center justify-center  text-center' >
        <i className='bx bxl-html5'></i>
        <h4>Html5</h4>
        </div>

        <div className=' font-[Inconsolata] text-base  sm:text-lg md:text-xl  gap-1  flex items-center justify-center  text-center' >
        <i className='bx bxl-tailwind-css' ></i>
        <h4>Tailwind</h4>
        </div>

        





    </div>
  )
}

export default Skd