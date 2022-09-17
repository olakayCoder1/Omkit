import React, {  useEffect, useState } from "react";
import { createContext  } from "react";
import {fetchProducts} from './utils/functions.js'


export const AuthContext = createContext()




export default function AuthContextProvider({children}){

    
    const apiDomainName = 'https://habibi-and-habibat-api.herokuapp.com'  
    // const apiDomainName = 'http://127.0.0.1:8000' 
    // const domainNameFrontend = 'https://habibi-and-habiba.vercel.app/' 
    const domainNameFrontend = 'http://127.0.0.1:3000'                    
    // TOKEN STATE 
    const [authToken , setAuthToken ] = React.useState(()=> JSON.parse(localStorage.getItem('authToken'))|| null)
    // USER DETAIL STATE 
    const [ authUser  ] = React.useState(()=> JSON.parse(localStorage.getItem('authUser'))|| null);
    // LOADING STATE TO DETERMINE WHEN TO UPDATE TOKEN 
    const [ loginError, setLoginError] = useState(false)

    const [ Loading , setLoading] = useState(null)
     // REFRESH TOKEN WHILE USER STILL ONLINE 
        const registerUser = async (e) => {
         e.preventDefault();
         if ( e.target.password.value === e.target.password2.value){

            const data = {
                'first_name' : e.target.first_name.value ,
                'last_name' : e.target.last_name.value ,
                'username' : e.target.username.value ,
                'email': e.target.email.value,
                'password': e.target.password.value,
                'password2': e.target.password2.value,
                'gender' : e.target.gender.value

            }

    
             const response = await fetch(`${apiDomainName}/api/auth/register/`, {
                 method: 'POST',
                 headers : {
                     'content-type' : 'application/json'
                 },
                 body : JSON.stringify(data)
                 
             })
             if(response.status === 200){    
                 alert('Your account is successfully created you can now login')
                 window.location['href'] = `${domainNameFrontend}/account/login`;
             }
         
             if(response.status === 400){
                 if (data.email){
 
                    //  setAuthEmailError(data.email[0])
                    //  setFormEmailError(true)
                        
                     }
                 
             }
             }else{
                //  setFormPasswordError('Password does not match')
                //  setAuthPasswordError(true)
             }
    } 

   useEffect(()=> {
    fetchProducts()
   },[])
 
 const value = {    authUser ,
                     authToken ,
                     registerUser , 
                     loginError,
                     Loading
                  }
     


    
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    )
}