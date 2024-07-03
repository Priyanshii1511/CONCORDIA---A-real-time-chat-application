import React from 'react'
import GenderCheckbox from './GenderCheckbox.jsx'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3x1 font-semibold text-center text-gray-300'>
          Sign up to 
            <span className='text-green-500'>
              &nbsp;CONCORDIA
            </span>
        </h1>

        <form>
          <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Full Name</span>
              </label>
              <input type='text' placeholder='Priyanshi Siwach' className='w-full input input-bordered h-10'/>
          </div>

          <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input type='text' placeholder='priyanshisiwach' className='w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
          </div>

          <GenderCheckbox/>

          <div>
            <button className='btn btn-block btn-sm mt-2 bg-green-500'>Signup</button>
          </div>

          Already have an account? <a href='#' className='text-sm text-black hover:underline hover:text-blue-600 mt-2 inline-block'>
          Login </a>
        </form>
      </div>
    </div>
  )
}

export default SignUp

//Starter code for signup

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox.jsx'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3x1 font-semibold text-center text-gray-300'>
//           Sign up to 
//             <span className='text-green-500'>
//               &nbsp;CONCORDIA
//             </span>
//         </h1>

//         <form>
//           <div>
//               <label className='label p-2'>
//                 <span className='text-base label-text'>Full Name</span>
//               </label>
//               <input type='text' placeholder='Priyanshi Siwach' className='w-full input input-bordered h-10'/>
//           </div>

//           <div>
//               <label className='label p-2'>
//                 <span className='text-base label-text'>Username</span>
//               </label>
//               <input type='text' placeholder='priyanshisiwach' className='w-full input input-bordered h-10'/>
//           </div>

//           <div>
//             <label className='label'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input type='password' placeholder='Enter password' className='w-full input input-bordered h-10'/>
//           </div>

//           <div>
//             <label className='label'>
//               <span className='text-base label-text'>Confirm Password</span>
//             </label>
//             <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
//           </div>

//           <GenderCheckbox/>

//           <div>
//             <button className='btn btn-block btn-sm mt-2 bg-green-500'>Signup</button>
//           </div>

//           Already have an account? <a href='#' className='text-sm text-black hover:underline hover:text-blue-600 mt-2 inline-block'>
//           Login </a>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp