import React from 'react';
import {Icon} from "@iconify/react";
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import FacebookLogin1 from 'react-facebook-login/dist/facebook-login-render-props'
import {GoogleOAuthProvider,GoogleLogin} from '@react-oauth/google';



const Login = () => {
    const goToHomePage = useNavigate();
    const data = {Email: "", Password: ""};
    const [inputData, setInputData] = useState(data);

    const handleChange = (e) => {
        setInputData({...setInputData, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        setInputData("");
        goToHomePage("/home");
    }

    const responseFacebook = (response) => {
        const name=response.name;
        const email=response.email;
        const picture=response.picture.data.url;
        const data={name:name,email:email,picture:picture}
        localStorage.setItem('List', JSON.stringify(data))
        goToHomePage("/home");
    }


        // useEffect(()=>{
        //     localStorage.setItem('List', JSON.stringify(data))
        //   },[])

    return (
        <div
            className="w-full lg:w-2/4 mx-auto my-10 p-5 border rounded border-red-500"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <h1 className="text-center text-3xl font-semibold text-red-500 my-10">
                Login Here
            </h1>
            <div className="flex justify-center flex-col md:flex-row">
                <div className="mr-3">
                </div>
                <div className="ml-3 mt-5 md:mt-0">
                    <form>
                        <div className="my-2">
                            <label className="font-bold">Your Email</label>
                            <input
                                type="email"
                                className="w-full border focus:outline-none focus:border-red-500 p-2 my-2 rounded"
                                onChange={handleChange}
                                placeholder="Type Your Email"
                                name='Email'
                                value={inputData.Email}
                                required
                            />
                        </div>
                        <div className="my-2">
                            <label className="font-bold">Your Password</label>
                            <input
                                type="password"
                                className="w-full border focus:outline-none focus:border-red-500 p-2 my-2 rounded"
                                onChange={handleChange}
                                placeholder="Type Your Password"
                                name='Password' value={inputData.Password}
                                required
                            />
                        </div>
                        <div>
                            <button className="w-full text-center transition duration-500 hover:bg-[#333533] bg-red-500 text-white rounded font-semibold text-lg my-3 py-2"
                                type="submit" onClick={handleSubmit}
                            >
                                Submit
                            </button>
                            </div>
                    </form>
                    <h1 className="text-center font-semibold">
                        DoNot have a account?{" "}
                        <Link to="/registration" className="text-red-500">
                            register
                        </Link>
                    </h1>
                    <hr className="border-t-2 border-black my-5"/>
                    <div className="flex flex-col items-center">
                        <h1 className="mb-5 font-semibold">Or Login With</h1>
                        <FacebookLogin1
                            appId="260582573384570"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            render={renderProps => (
                            <button className="text-lg border flex px-[19px] font-semibold rounded py-[6px]" onClick={renderProps.onClick}><Icon icon="logos:facebook" className="flex mr-2" width="25px"/>Login with Facebook</button>
                            )}
                            />

                        <div className="space-x-5 mt-2">
                        
                                   <GoogleOAuthProvider
                                        clientId="220017953809-v2e2l5j147l6mk5jqqfhovmufmj7n4c4.apps.googleusercontent.com">
                                            <GoogleLogin
                                               onSuccess={result => {
                                                const userInfoUrl ="https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" +result.credential
                                                const xhr = new XMLHttpRequest();
                                                xhr.open('GET', userInfoUrl);
                                                xhr.onload = function() {
                                             if (xhr.status === 200) {
                                                  const userInfo = JSON.parse(xhr.responseText);
                                                  const {name,email,picture}=userInfo;
                                                  const data={name:name,email:email,picture:picture}
                                                  localStorage.setItem('List', JSON.stringify(data))
                                                  goToHomePage("/home");
                                                    }
                                                    };
                                                    xhr.send();
                                                    }}
                                                    onError={() => {
                                                     console.log('Login Failed');
                                                   }}
                                            />
                                   </GoogleOAuthProvider>
                        </div>
                        <NavLink to="/forgotpassword" className="p-2">Forget Password?</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login