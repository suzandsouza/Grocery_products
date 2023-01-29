//we create the authentication context here
import { createContext, useReducer,useEffect } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action)=>{
    //switch cases
    switch(action.type){
        case 'LOGIN':
            return { user: action.payload }
        case 'LOGOUT':
            return { user: null }
        
        default:
            return state    //return original state
    }
}
//create context provider
export const AuthContextProvider = ({ children })=>{
    const [ state, dispatch ] = useReducer(authReducer, {
        user: null
    })
    //runs only once to check if we have a value for the user in the local storage
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            dispatch({type:'LOGIN',payload:user})
        }
    },[])
    console.log('AuthContext state: ',state)

    return(
        <AuthContext.Provider value={{...state, dispatch}}> 
            { children }
        </AuthContext.Provider>
    )
}