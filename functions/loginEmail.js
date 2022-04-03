import {auth} from '../firebase/credenciales'
import { signInWithEmailAndPassword } from 'firebase/auth';





async function LoginEmail(email,password){
    
    const result = await signInWithEmailAndPassword(auth,email,password);
    console.log(result)
    return result;
}
export default LoginEmail