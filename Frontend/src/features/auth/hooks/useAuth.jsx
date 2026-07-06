import {useContext} from "react";
import {AuthContext} from "../auth_context.jsx";
import {login,register,logout,getMe} from "../services/auth_api.jsx";


  export  const useAuth=()=>{
    
    const context=useContext(AuthContext)
    const {user,setUser,loading,setLoading}=context
    

    const handleLogin=async({email,password})=>{
        setLoading(true)
        
        try {
         const data = await login({email,password})
         setUser(data.user)
         
         

    } catch (err) {
        
        
    }finally{
        setLoading(false)
    }
 }

const handleRegister=async({email,password,name})=>{
    setLoading(true)
    try {
     const data = await register({email,password,name})
     setUser(data.user)
     
    
} catch (err) {
    } finally{
        setLoading(false)
    }
}
const handleLogout=async()=>{
    setLoading(true)
     try {
        const data = await logout()
        setUser(null)
    } catch (err) {

    } finally {
        setLoading(false)
    }
    
}


return {user,loading,handleLogin,handleRegister,handleLogout}
}

