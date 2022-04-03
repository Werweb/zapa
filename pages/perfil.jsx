import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import  Layout from "../componets/layout";
import LoginForm  from '../componets/LoginForm'
import { useUserContext } from "../context/userContext";
import { auth } from "../firebase/credenciales";
import  loginEmail from "../functions/loginEmail";
import getPaymentsByUID from '../functions/getPaymentsByUID'
function Perfil() {
  function login(e) {
    e.preventDefault();
    const correo = e.target.email.value;
    const password = e.target.password.value;
    loginEmail(correo, password);
  }

  const { user } = useUserContext();
  const [payments, setPayments] = useState([]);/* 51 */

  useEffect(() => {/* 52 */
    async function getPayments() {
      if (!user) return;
      console.log("user por usar", user.uid);
      const payments = await getPaymentsByUID(user.uid);
      setPayments(payments);
    }
    getPayments();
  }, [user]);
  return (
     <Layout> 
      {user ? (
        <p className="text-xl">
          Bienvenido,{" "}
          <span className="font-bold">
            {user.email} - {user.uid}
          </span>
        </p>
      ) : (
        <div className="w-1/2 flex flex-col items-center">
          <p className="text-xl my-3">No estas logueado</p>
          <LoginForm onSubmit={login} />
        </div>
      )}
      {payments.length > 0 &&
        payments.map((payment) => (
          <div className="w-full flex flex-row items-center justify-evenly">
            <h3>{payment.amount / 100} </h3>
            <span className="flex  ">
              {" "}
              {payment.items.map((item) => (
                <p key={item.description} className="mx-3">
                  {item.description}
                </p>
              ))}
            </span>
          </div>
        ))}

      {user && (
        <button
          onClick={() => signOut(auth)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded my-10"
        >
          Cerrar Sesión
        </button>
      )}
    </Layout>
  );
}

export default Perfil;