
import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";




const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const{signIn, signInWithGoogle, user, loading} = useContext(AuthContext);
    useEffect(() =>{
        if(user){
            navigate('/')
        }
    }, [navigate, user])
    const from = location.state || '/' 

    //Sign in Emaim Password
    const handleSignIn = async e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password);
        try{
            const result = await signIn(email, password)
            console.log(result)
            navigate(from, {replace: true});
            toast.success('Login successfull')
        }
        catch (err) {
            console.log(err)
            navigate('/register')
            toast.error( 'Logged in faild')
        }
    }

    const handleGoogleSignIn = async () =>{
        try{
           await signInWithGoogle()
           navigate(from, {replace: true});
           toast.success('Login successfull')
        }
        catch (err){
            console.log(err)

            toast.error(err, 'Logged in faild')
        }
    }

    if(user || loading) return
    return (
        <div className="">
        <div className="w-full max-w-lg p-6 m-auto mx-auto mt-12 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex justify-center mx-auto">
                <img className="w-auto h-7 sm:h-8" src="https://i.ibb.co/LSgPdY1/kisspng-computer-icons-login-management-user-5ae155f3386149-6695613615247170432309.jpg" alt=""/>
            </div>

            <form onSubmit={handleSignIn} className="mt-6  ">
                <div className="relative flex items-center mt-6">
                    <span className="absolute pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                    <input type="text" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 pl-12" placeholder="Email address"/>
                </div>

                <div className="mt-4 relative flex items-center">
                    
                        <span className="absolute pt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>
                        
            
                    
                    <input type="password" name="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 pl-12" 
                    placeholder="Password"/>
                </div>

                <div className="mt-6">
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                        Sign In
                    </button>
                </div>
            </form>
            <div>
                
            </div>
            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
                    or login with Social Media
                </a>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
            </div>

            <div className="flex items-center mt-6 -mx-2">
                <button onClick={handleGoogleSignIn} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                        </path>
                    </svg>

                    <span className="hidden mx-2 sm:inline">Sign in with Google</span>
                </button>

                <a href="#" className="p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z">
                        </path>
                    </svg>
                </a>
            </div>

            <p className="mt-8  font-light text-center text-gray-500"> Do not have an account? <Link to = '/register' href="#" className="font-xl text-green-600 font-bold hover:underline">Register</Link></p>
        </div>
    </div>
    );
};

export default Login;