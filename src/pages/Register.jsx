
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {
    const{ createUser, updateUserProfile, user, setUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = async e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value 
        const password = form.password.value
        const photo = form.photo.value
        const newUser ={email, password, name, photo }
        console.log(newUser);
        try{
            const result = await createUser(email, password)
            console.log(result);
            await updateUserProfile(name, photo)
            setUser({ ...user, photoURL:photo, displayName: name})
            navigate('/')
            toast.success('Registetion Successfull')
        } catch(err) {
            console.log(err)
            toast.error('Registetion faild')
        }

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
                      <span className="label-text">Password</span>
                 </label>
                  <input type="password" name="password" placeholder="Password" className="input input-bordered" required
                   />
                 
                 <label className="label">
                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                     </label>
             </div>
             <div className="form-control">
                 <label className="label">
                      <span className="label-text">Photo Url</span>
                  </label>
                 <input type="text" name="photo" placeholder="Photp Url" className="input input-bordered" 
                  />
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