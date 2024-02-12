import {Button,  Input } from "@nextui-org/react"

const FormContacto = () => {
  return (
    <form className='h-screen flex flex-col justify-center items-center gap-5'>
      <h1 className="text-lg">Formulario de Contacto</h1>
      <Input 
      type="text" 
      label="Nombre" 
      className="w-1/2 xl:w-1/3"/>

      <Input 
      type="text" 
      label="Email" 
      className="w-1/2 xl:w-1/3"
      />
    
      <Input 
      type="text" 
      label="Mensaje" 
      className="w-1/2 xl:w-1/3"
       />

       <Button className="text-white mt-5 py-6 px-8 text-base"  color="primary">Contactar
      
       </Button>
    </form>
  )
}

export default FormContacto
