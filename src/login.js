import React from "react";
function Login() {
  return (
    <div className="container flex items-center   mx-auto bg-slate-300 ">
      <div className="container mx-auto flex p-32 md:flex-col sm:flex-col h-screen  bg-white lg:flex-row ">
        <div className="container mx-auto sm:hidden md:hidden  lg:block flex flex-col pt-32 pb-40 bg-slate-200/40 ">
          <img src="login.png" className="h-full w-full" alt="login"></img>
          <div className="container justify-center items-center  space-y-5 flex-col flex">
            <div className="flex flex-rows space-x-5  font-bold ">
              <img src="tick.png" alt="tick"></img>
              <p>Feature 1</p>
              <img src="tick.png" alt="tick"></img>
              <p>Feature 2</p>
            </div>
            <div className="flex  flex-rows space-x-5 font-bold">
              <img src="tick.png" alt="tick"></img>
              <p>Feature 3</p>
              <img src="tick.png" alt="tick"></img>
              <p>Feature 4</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:p-0 sm:p-0 lg:p-40">
          <div className="flex flex-row pb-10 sm:mt-4  md:mt-7  space-x-3">
            <img src="logo.png" className="h-16" alt="logo"></img>
            <p className=" font-sans text-6xl text-blue-900/75">Infovault</p>
          </div>
          <div className="container flex flex-col space-y-4">
            <div className="container flex  font-semibold text-6xl ">
              Sign in
            </div>
            <div className=" border-2  border-gray-200 "></div>
            <p className="font-semibold">Or continue with email address</p>
            <form>
              <label className="relative flex flex-col ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-24 mt-3.5  h-9 absolute z-10  "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <input
                    id="email"
                    type="email"
                    className="p-4 pl-20 w-full  z-0 peer/email border-4 relative rounded-2xl focus:outline-none focus:border-blue-800"
                    placeholder="enter email address"
                  ></input>
                  <svg
                    for="email "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-10 mt-3 ml-80 h-10 z-10 absolute invisible peer-valid/email:visible  text-green-800 text-sm"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p
                  for="email"
                  className="p-2 invisible peer-invalid/email:visible text-red-700  text-sm"
                >
                  please provide a valid email address
                </p>
                {/* <p
                  for="email"
                  className="p-2 invisible peer-invalid/email:visible text-red-700  text-sm"
                >
                  please provide a valid email address
                </p> */}
              </label>
              <label className="relative flex flex-col ">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="w-24 mt-3.5  h-9 absolute z-10  "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                  <input
                    id="password"
                    type="password"
                    className="p-4 pl-20 w-full  z-0 peer/password border-4 relative rounded-2xl focus:outline-none focus:border-blue-800"
                    placeholder="enter password"
                  ></input>
                  <svg
                    for="password "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-10 mt-3.5 ml-80 h-10 z-10 absolute invisible peer-valid/password:visible  text-green-800 text-sm"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                {/* <p
                  for="password"
                  className="p-2 z-10 invisible peer-invalid/email:visible  text-red-700 peer-required:visible text-sm"
                >
                  please provide a valid email address
                </p> */}
              </label>
            </form>
            <button
              type="button"
              className="text-white text-lg font-semibold  bg-blue-900/75 p-3 rounded-lg"
            >
              Sign in
            </button>
            <p className="text-gray-400 text-lg font-semibold">
              The site is protected by reCAPTCHA and Google privacy policy
            </p>
            <p className="text-gray-400 text-lg font-extrabold">
              Don't have a account?<span className=" text-black">Sign up </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
