import axios from "axios";

// const apiDomainName = 'https://habibi-and-habibat-api.herokuapp.com'  
//     // const apiDomainName = 'http://127.0.0.1:8000' 
//     // const domainNameFrontend = 'https://habibi-and-habiba.vercel.app/' 
// const domainNameFrontend = 'http://127.0.0.1:3000' 



// const registerUser = async (e) => {
//     e.preventDefault();
//     if ( e.target.password.value === e.target.password2.value){

//        const data = {
//            'first_name' : e.target.first_name.value ,
//            'last_name' : e.target.last_name.value ,
//            'username' : e.target.username.value ,
//            'email': e.target.email.value,
//            'password': e.target.password.value,
//            'password2': e.target.password2.value,
//            'gender' : e.target.gender.value

//        }


//         const response = await fetch(`${apiDomainName}/api/auth/register/`, {
//             method: 'POST',
//             headers : {
//                 'content-type' : 'application/json'
//             },
//             body : JSON.stringify(data)
            
//         })
//         if(response.status === 200){    
//             alert('Your account is successfully created you can now login')
//             window.location['href'] = `${domainNameFrontend}/account/login`;
//         }
//     }
// } 






// async function refreshToken(){
//     const response =  await fetch(`${apiDomainName}/api/auth/token/refresh/`, {
//         method: 'POST',
//         headers : {
//             'content-type' : 'application/json',
//         },
//         // UPDATE TOKEN IF TOKEN IN LOCAL STORAGE ELSE LOGOUT USER 
//         body : JSON.stringify({'refresh' : authToken?.refresh})
//     })
//     if(response.status === 200){
//        const data = await response.json();    
//         console.log('TOKEN REFRESHED') ;         
//         setAuthToken(data)
//         localStorage.setItem('authToken', JSON.stringify(data))
//     }
//     // LOGOUT USER IF REFRESH TOKEN EXPIRED
//     if( response.statusText === 'Unauthorized'){
//         logoutUser()
//     } 
//     if(Loading){
//         setLoading(false)
//     }
// } 






// async function logout(access , refresh){
//     const response =  await fetch(`${apiDomainName}/api/auth/logout/`, {
//         method: 'POST',
//         headers : {
//             'content-type' : 'application/json',
//             'Authorization': 'Bearer '+ String(access)
//         },
//         body : JSON.stringify({'refresh' : refresh})
//     })
    
//     if(response.status === 205){
//         localStorage.removeItem('authToken');
//         window.location['href'] = `${domainNameFrontend}/account/login`
//     }
//     if(response.status === 400){
//         localStorage.removeItem('authToken');
//         window.location['href'] = `${domainNameFrontend}/account/login`
//     }
//     if( response.statusText === 'Unauthorized'){
//         localStorage.removeItem('authToken');
//         window.location['href'] = `${domainNameFrontend}/account/login`
//     }
// }  








export async function fetchProducts(){
    axios.get('https://api.escuelajs.co/api/v1/products')
    .then( res =>{
        // console.log(res)
        return res
    })
    .catch( err => {
        console.log(err)
        return []
    })
}