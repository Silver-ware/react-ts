import { IoMdLogIn } from "react-icons/io";
import { RiUserAddFill } from "react-icons/ri";
import loginLogo from '/stickers/login.png';
import signupLogo from '/stickers/signup.png'
import { useForm } from './AuthActiveForm';
import { useState } from "react";
import { useNavigate } from "react-router";
import { MdNearbyError } from "react-icons/md";
import { CgUserAdd } from "react-icons/cg";
import { motion } from "framer-motion";



type User = {
  id: number,
  username: string,
  password: string,
}

type SuccesMessage = {
  successMessage: string;
  setSuccessMessage: (value: string) => void;
}

const formVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};


export default function Form({successMessage, setSuccessMessage}: SuccesMessage) {
  const [users, addUser] = useState<User[]>([
    {id: 1, username: "garrycaber", password: "garrycaber123"},
    {id: 2, username: "ianbulilan", password: "ianbulilan123"},
  ]);

  const {activeForm, setActiveForm} = useForm();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [error, setError] = useState<string>("");



  const handleSwitchForm = () :void => {
    if(activeForm === 'login')setActiveForm("signup")
    else setActiveForm("login");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    return;
  }

  const navigate = useNavigate();

  const minError = "Username/Password must be at least 8 characters long.";
  const numberFormula = /\d/;

  const handleFormSubmission = () => {
    console.log("Username: ", username, "Password: ", password)
    console.log(users);

    const matchUser = users.find(
      (user) => user.username === username && user.password === password
    );

    console.log(matchUser);

    if (username.length < 8 || password.length < 8) {
      setError(minError);
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (!numberFormula.test(password)) {
      setError("Password must contain at least one number.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (activeForm === "login") {
      if (matchUser) {
        navigate("/home");
      } else {
        setPassword("");
        setError("Username or Password invalid!");
        setTimeout(() => setError(""), 3000);
      }
    } else {
      if (matchUser) {
        setError("Username already exists");
        setTimeout(() => setError(""), 3000);
        return;
      }
      else if(password !== confirmPassword){
        setError("Passwords does not matched.");
        setTimeout(() => setError(""), 3000);
        return;
      }
      addUser([
        ...users, 
        {id: 3, username: username, password: password},
      ]);
      setSuccessMessage("Created an Account successfuly!");
      setTimeout(() => setSuccessMessage(""), 3000);
      handleSwitchForm();
    }
  };


  return (
    <>
      <div className="relative h-[9%] w-[calc(100%-24px)] ml-3 overflow-hidden flex items-end text-2xl font-bold">
        <div className={`h-full w-full bg-amber-700 rounded-t-md absolute -bottom-1.5 right-0 border-x-[1px] border-t-[1px] border-black cursor-pointer
              hover:-translate-y-1.5 transition-all duration-300 ease-in-out flex ${activeForm === "login" ? 'justify-end' : 'justify-start'}  items-center px-2.5 text-amber-200`}
          onClick={() => handleSwitchForm()}>
          {activeForm === "login" ? <RiUserAddFill className="drop-shadow-lg" /> : <IoMdLogIn className="drop-shadow-lg" />}
        </div>
      </div>
      <div className="relative bg-amber-200 shadow-[inset_0px_0px_8px_0px_black] w-full h-[85%] p-2 border-x-[15px] border-b-[15px] border-amber-600">
        <div className="absolute left-0 top-0 w-full h-[15px] bg-amber-600 shadow-[0px_0px_8px_0px_#8b624a] z-100"></div>
        <motion.div
          key={activeForm}
          variants={formVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`relative h-full w-full bg-amber-200 flex border-t-[1px]
              ${activeForm === "login" ? "flex-row" : "flex-row-reverse"}`}
        >
          <div className="absolute top-[-45px] w-[96%] z-50 h-[45px] rounded-t-md bg-amber-200 border-x-[1px] border-t-[1px] border-gray-700
                px-2.5 flex items-center gap-1.5 text-amber-800 text-xl">
            {activeForm === "login" ? <IoMdLogIn className="drop-shadow-lg" /> : <RiUserAddFill className="drop-shadow-lg" />}
            {activeForm === "login" ? "LOGIN" : "SIGNUP"}
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center p-8 text-amber-700">
            <div className="">
              <img
                src={activeForm === "login" ? loginLogo : signupLogo}
                className="h-[200px] w-[200px] drop-shadow-lg"
                alt="Login Sticker"
              />
            </div>
            <h2 className="text-2xl font-bold mt-4">{activeForm === "login" ? "Welcome." : "Hi Sweetie."}</h2>
            <p className="text-sm mt-2 text-center">
              {activeForm === "login" ? "Login to Get Started!" : "Be part of US!"}
            </p>
          </div>
          <div className="w-1/2 py-4 px-10 flex items-center justify-center flex-col">
            <form
              className="w-full text-base"
              onSubmit={(e) => {
                e.preventDefault();
                handleFormSubmission();
              }}
            >
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Username: </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                  placeholder="example@garry0918"
                  value={username}
                  onChange={(input) => setUsername(input.target.value)}
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Password: </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                  value={password}
                  onChange={(input) => setPassword(input.target.value)}
                />
              </div>
  
              {activeForm === "signup" && (
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Confirm Password: </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700"
                    value={confirmPassword}
                    onChange={(input) => setConfirmPassword(input.target.value)}
                  />
                </div>
              )}
  
              {activeForm === "login" && (
                <div className="flex items-center justify-between mb-4">
                  <label className="flex items-center text-gray-600">
                    <input type="checkbox" className="mr-2 accent-amber-800" /> Remember Me
                  </label>
                  <a href="#" className="text-yellow-800 font-semibold">
                    Forgot Password?
                  </a>
                </div>
              )}
  
              <button
                type="submit"
                className="w-full bg-amber-500 text-gray-100 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-all
                    shadow-[0_6px_#8b4702] active:shadow-[0_1px_#8b4702] active:translate-y-1.5"
              >
                {activeForm === "login" ? "LOGIN" : "SIGNUP"}
              </button>
            </form>
  
            <p className="text-sm text-gray-600 mt-4 text-center flex gap-1 w-full justify-center">
              {activeForm === "login" ? "Don't have an account? " : "Already have an account? "}
              <button className="text-yellow-800 font-semibold cursor-pointer" onClick={() => handleSwitchForm()}>
                {activeForm === "login" ? "Register Here." : "Login Here. "}
              </button>
            </p>
          </div>
  
          {error && (
            <span className="absolute bottom-0 flex justify-center items-center w-full h-[40px] bg-amber-300 text-red-600 text-lg gap-2 font-bold">
              <MdNearbyError /> {error}
            </span>
          )}
          {successMessage && (
            <span className="absolute bottom-0 flex justify-center items-center w-full h-[40px] bg-amber-300 text-green-600 text-lg gap-2 font-bold">
              <CgUserAdd /> {successMessage}
            </span>
          )}
        </motion.div>
      </div>
    </>
  );
}
