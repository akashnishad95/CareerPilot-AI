import {useContext} from "react";
import {AuthContext} from "../auth_context.jsx";
import {login,register,logout,getMe} from "../services/auth_api.jsx";


export const useAuth=()=>{
    const context=useContext(AuthContext)
    const {user,setUser,loading,setLoading}=context
    

    const handleLogin=async({email,password})=>{
        setLoading(true)
         const data = await login({email,password})
         setUser(data.user)
         setLoading(false)
         return data

    }

const handleRegister=async({email,password,name})=>{
    setLoading(true)
     const data = await register({email,password,name})
     setUser(data.user)
     setLoading(false)
     return data
}

const handleLogout=async()=>{
    setLoading(true)
     await logout()
     setUser(null)
     setLoading(false)
}

const handleGetMe=async()=>{
    setLoading(true)
     const data = await getMe()
     setUser(data.user)
     setLoading(false)
     return data
}

return {user,loading,handleLogin,handleRegister,handleLogout,handleGetMe}
}