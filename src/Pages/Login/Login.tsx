import React, { useEffect, useRef, useState } from 'react';
import SignUp from './SignUp';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../Store/Auth/AuthReducer';

export const Login: React.FC = () => {
  const [isRegistration, setIsRegistration] = useState(false);

  const [validation, setValidation] = useState({});
  const [userInput , setUserInput] = useState({userName:"",password:""})
  const userRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch();
  console.log(validation);

    const handleSubmit = (event: any) => {
    event.preventDefault();
    const userNmae = userRef.current?.value;
    const pwd = passRef.current?.value;

    const errors:any = {}
    if (userNmae?.trim() === '') {
      errors.user = "Please enter UserName";
    }
    if (pwd?.trim() === '') {
      errors.pwd = "please enter Password"
    }
    console.log(Object.keys(errors).length);
    if(Object.keys(errors).length > 0)
    {
    
      console.log("error");
      setValidation(errors);
      setUserInput({userName:"",password:""})
    }
    else{
    setValidation({});
    setUserInput({userName: userNmae ?? "", password: pwd ?? ""})
    }
    }

  useEffect(() =>{
    console.log(Object.values(userInput).every(val => val !== ""));
    if(Object.values(userInput).every(val => val !== ""))
    {
      const url = '/login'
      dispatch(fetchUser({url,userInput} as any));
      // const apiD = async () =>{
      //   // const data = await LoginAPI("/login",userInput);
      //   // console.log(data);
      //   // return data;
        
      // }
      // const apiData = apiD();
      // console.log(apiData);
    }
    else
    {
      console.log("userInput not found");
    }
  },[handleSubmit])

 if (isRegistration) return <SignUp />
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Login</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm text-gray-600">User Name</label>
            <input
              type="text"
              ref={userRef}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-600">Password</label>
            <input
              ref={passRef}
              type="password"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign In
          </button>

          <p className="text-sm text-center mt-4">
            Don’t have an account?
            <button onClick={() => setIsRegistration(true)} className="text-blue-600 hover:underline">Register</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
