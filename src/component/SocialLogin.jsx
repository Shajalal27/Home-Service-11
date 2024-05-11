import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const SocialLogin = () => {
    const{googleLogIn, githubLogIn, twitterLogIn} = useContext(AuthContext)

    const handleSocialLogIn = socialProvider =>{
        socialProvider()
        .then(result =>{
            console.log(result.user);
        })
    }
    return (
    <div className="text-6xl flex gap-12 justify-center items-center">
        <button onClick={() => handleSocialLogIn(googleLogIn)}><FcGoogle /></button>
        <button onClick={() => handleSocialLogIn(githubLogIn)}><FaGithub /></button>
        <button onClick={() => handleSocialLogIn(twitterLogIn)}><FaTwitter /></button>
    </div>
    );
};

export default SocialLogin;