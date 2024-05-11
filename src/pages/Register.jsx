import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {
    const{createUser} = useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        const newUser ={name, email, password, photo }
        console.log(newUser);

       createUser(email, password)
       .then(result =>{
        console.log(result.user)
       })
       .catch(error =>{
        console.log(error)
       })
    }
    return (
        <div className="bg-[url(https://i.ibb.co/x7szsXW/img-login.jpg)] outline
         ">
        <div>
        <h2 className="text-orange-600 text-center text-3xl font-bold pt-4">Please Register now! </h2>
         <form onSubmit={handleRegister}  className="card-body mx-auto lg:w-1/2 md:w-3/4 mt-2 bg-[#584d6c] opacity-95 font-bold">
             <div className="form-control">
                 <label className="label">
                      <span className="label-text">Name</span>
                  </label>
                 <input type="text" name="name" placeholder="Your name" className="input input-bordered" required
                 />
                 
             </div>
             <div className="form-control">
                 <label className="label">
                      <span className="label-text">Email</span>
                  </label>
                 <input type="email" name="email" placeholder="Email" className="input input-bordered" required
                  />
                 
             </div>
             <div className="form-control">
                 <label className="label">
                      <span className="label-text">Photo Url</span>
                  </label>
                 <input type="text" name="photo" placeholder="Photp Url" className="input input-bordered" 
                  />
             </div>
             <div className="form-control">
                 <label className="label">
                      <span className="label-text">Password</span>
                 </label>
                  <input type="password" name="password" placeholder="Password" className="input input-bordered" required
                   />
                 
                 <label className="label">
                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                     </label>
             </div>
                 <div className="form-control mt-6">
                     <button className="btn btn-info uppercase">Register</button>
                 </div>
          </form> 
          <div className="mx-auto text-center mb-6">
              <p className="text-orange-500 font-semibold pb-8">Already have an account? <Link to='/login'>
                     <button className="text-green-600 font-bold hover:underline">Login</button>
                 </Link>
             </p> 
             {/* {registerError && <p className="text-red-600 pb-12">{registerError}</p>}
             {registerSuccess && <p className="text-green-600">{registerSuccess}</p>} */}
          </div>
        </div>
         
     </div>
    );
};

export default Register;