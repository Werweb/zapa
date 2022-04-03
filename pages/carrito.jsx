import React,{useState} from 'react'
import {useCarritoContext} from "../context/carritoContext"
import{useUserContext} from '../context/userContext'
import Link from 'next/link'
import LoginEmail from '../functions/loginEmail';
import  createCheckoutSession from '../functions/createCheckoutSesion'

const carrito = () => {
    const {carrito}= useCarritoContext();/* 30 */
    console.log(carrito)
    const {user, setUser} = useUserContext();/* 46 */
    const[isModal, setIsModal] = useState(false)/* 43 */

    function Login(e){/* 39 */
      e.preventDefault()
      const correo = e.target.email.value;
      const password = e.target.password.value;
      LoginEmail(correo, password);
      setIsModal(false);
      /* funcion de compra */
       createCheckoutSession(user.uid, carrito)/* 49 */
    }
      function isAutenticated(){/* 35 */
    if(user){
      /* correr funcion de comprar */
       createCheckoutSession(user.uid, carrito)/* 50 */
      console.log("comprar")
    }
    if(!user){
      /* mostrar un modal */
      setIsModal(true)/* 44 */
    }

  }
 
  return (
    <div className='relative'>
        {/* 36 */} {/* 46 */}<div id="modal-comprar" 
      className={`absolute  flex flex-col justify-center 
      items-center top-0 left-0 bg-slate-600/40 w-screen
       z-30 backdrop-dlur-sm ${isModal ? "block" : "hidden"}`}>
        <div className=
        'bg-white w-1/3 h-1/3 flex flex-col items-center justify-evenly'
        ><h3>Inicia sesión o regístrate:</h3>
        {/* 37 */}<form onSubmit={e=>Login(e)}/* 38 */ className='flex flex-col'>
          <input type="text" name="email" placeholder="Correo"/>
          <input type="password" name="password" placeholder="Contraseña"/>
          <button>Iniciar Sesión</button>
        </form>
        </div>
      </div>
      Tu Carrito:
        {carrito?.map(producto =>(/* 31 */
            <p>{producto.name}</p>
        ))}
        <button onClick={isAutenticated} className='bg-slate-800 px-5 py-3 text-white'>
          Comprar</button>{/* 33 */}
        <Link href="/">Volver al inicio</Link>{/* 32 */}
    </div>
  )
}

export default carrito