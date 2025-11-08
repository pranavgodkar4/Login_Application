import { useActionState, useState } from 'react';
import UserLogin from './UserLogin';
import Input from '../../Component/Fields/Input';
import { InputPasswordField } from '../../Component/Fields/InputPasswordField';
import RadioButton from '../../Component/Fields/RadioButton';
import Datepicker from '../../Component/Fields/Datepicker';
import { checkEmailValue, checkEmptyValue, checkEqualValue } from '../../Util/Validation';

import usePostAPIData from '../../Hooks/PostAPIs';

function SignUp() {
  const [isLogin, setIsLogin] = useState(false);

  const [dob, setDOB] = useState<Date | null>(null);
  const [gender , setGender] = useState("");

  const { error:resError, PostData:postData } = usePostAPIData('/signup');

  const handleInputForms = async (_prevState:any,formData: any) => {
    const fName = formData.get('Fname');
    const lName = formData.get('Lname');
    const email = formData.get('email');
    const userName = formData.get('userName');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const gender = formData.get('gender');
    const dateOfBirth = dob;
    let errorData: any = {};


    if (!checkEmptyValue(fName)) {
      errorData.Fname = "Please enter First Name";
    }
    if (!checkEmptyValue(email) || !checkEmailValue(email)) {
      errorData.Email = "Please enter Valid email";
    }

    if (password && confirmPassword && !checkEqualValue(password, confirmPassword)) {
      errorData.password = "Password does not match with confirm password"
    }
    if (!checkEmptyValue(password)) {
      errorData.password = "Please enter password";
    }
    if (!checkEmptyValue(confirmPassword)) {
      errorData.confirmPassword = "Please enter confirm password";
    }
    if (!checkEmptyValue(userName)) {
      errorData.userName = "Please enter user name";
    }
    if (!checkEmptyValue(gender)) {
      errorData.gender = "Please select the gender";
    }

    if (Object.keys(errorData).length>0) {
      return {
        errorData,
        enterValues: {
          fName, lName, email, userName, password, confirmPassword, gender, dateOfBirth
        }
      };
    }

    await postData({
      firstName:fName,
      lastName:lName,
      email:email,
      userName:userName,
      password,
      DOB:dateOfBirth,
      gender:gender
    })
    
    return{errorData:null}
  }
  
 const [formState,formAction] = useActionState(handleInputForms,{errorData:null});

  if (isLogin) return <UserLogin />
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">User Registration</h2>

        <form className="space-y-5" action={formAction}>
          {resError && <p className="text-sm text-red-700 ">{String(resError)}</p>}
          <div className='grid grid-flow-col grid-rows-1 gap-4'>
            <div className="col-span-2">
              <Input inputName='Fname' labelName='First Name' placeHolder='Enter First Name' default={formState.enterValues?.fName}/>
              <p className="text-sm text-red-700 absolute ">{formState.errorData?.Fname}</p>
            </div>
            <div className="col-span-2">
              <Input inputName='Lname' labelName='Last Name' placeHolder='Enter Last Name' default={formState.enterValues?.lName}/>
            </div>
          </div>
          <div>
            <Input inputName='email' labelName='Email' placeHolder='you@example.com' default={formState.enterValues?.email}/>
          <p className="text-sm text-red-700 absolute ">{formState.errorData?.Email}</p>
          </div>
          <div>
            <Input inputName='userName' labelName='User Name' placeHolder='Enter User Name' default={formState.enterValues?.userName} />
            <p className="text-sm text-red-700 absolute ">{formState.errorData?.userName}</p>
          </div>

          <div className='grid grid-flow-col grid-rows-1 gap-4'>
            <div className="col-span-2">
              <InputPasswordField inputName='password' type='password' labelName='Password' placeHolder='Enter Password' default={formState.enterValues?.password}/>
            <p className="text-sm text-red-700 absolute ">{formState.errorData?.password}</p>
            </div>
            <div className="col-span-2">
              <InputPasswordField inputName='confirmPassword' type='password' labelName='Confirm Password' placeHolder='Confirm Password' default={formState.enterValues?.confirmPassword} />
            <p className="text-sm text-red-700 absolute ">{formState.errorData?.confirmPassword}</p>
            </div>
          </div>

          <div className='grid grid-flow-col grid-rows-1 gap-4'>
            <div className="col-span-2">
              <RadioButton labelName='Gender' radiovalue={gender?gender:formState.enterValues?.gender} setValue={setGender}  
              radioName='gender' radioValues={["Male","Female","others"]}  default={formState.enterValues?.gender}/>
             <p className="text-sm text-red-700 absolute ">{formState.errorData?.gender}</p>
            
            </div>
            <div className="col-span-2">
              <Datepicker
                label='Date Of Birth'
                onChange={(date) => setDOB(date)}
                selectedDate={dob} />
            </div>
          </div>


          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Sign Up
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?
            <button onClick={() => setIsLogin(true)} className="text-blue-600 hover:underline">Login</button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
