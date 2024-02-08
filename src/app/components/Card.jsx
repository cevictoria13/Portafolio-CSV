import { Button } from '@nextui-org/button'
import { BsDownload } from "react-icons/bs";
import React from 'react'

const Card = () => {
    return (
        <div className='flex flex-col'>
            <div className='mb-5'>
                <h2 className='text-5xl font-bold'>Construimos tus ideas!!</h2>
            </div>

            <div>
                <p className='text-lg' >
                    Utilizamos las nuevas tecnologías para la creación/concreción de tus proyectos ofreciendo siempre, la mejor solución.
                </p>
            </div>

            <div className='mt-5'>
            <Button 
            color='primary' 
            className='py-6 px-5 text-base' 
            endContent={<BsDownload fontSize={22} />}
            >
            Curriculum</Button>
            </div>
        </div>
    )
}

export default Card
