import React , {useState} from "react";
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleSignup(event) {
        event.preventDefault();
        
        if(password !== confirmPassword) {
            alert("Passwords do not match")
            return
        }
        else {
            fetch('http://localhost:4000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    fullname: fullname,
                    password: password,
                    email: email
                })
            })
            .then(response => response)
            .then(data => {
                console.log('Success:', data);
                navigate('/')
            })
            .catch((error) => {
                alert("Error:", error.message)
            })
        }

    }



  return (
    <section class="bg-gray-50 grid grid-cols-2">
        <div class="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                <img class="w-8 h-8 mr-2" src={require('../img/uofcLogo.png')} alt="img"/>
                UofC Central    
             </a>
        <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Create an Account
                </h1>
                <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSignup}>
                    <div>
                        <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                        <input type="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="user" required="" onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="fullname" class="block mb-2 text-sm font-medium text-gray-900 ">Full Name</label>
                        <input type="fullname" name="fullname" id="fullname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name" required="" onChange={(e) => setFullname(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="confirmpassword" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
                        <input type="password" name="confirmpassword" id="confirmpassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>

                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create Account</button>
                    <p class="text-sm font-light text-gray-500 text-center">
                        Already have an account? <a href="/" class="font-medium text-primary-600 hover:underline">Sign In</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
    <div class="w-full h-full" id="bg_img"></div>
    </section>
  )
}

export default SignupPage