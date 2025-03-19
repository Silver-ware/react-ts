import { useState} from 'react'
import './App.css'
import Form from './Auth/Form'
import { AuthActiveForm } from './Auth/AuthActiveForm';

type ActiveForm = "login" | "signup";

const ActiveFormProvider = ({children}: {children: React.ReactNode}) => {
  const [activeForm, setActiveForm] = useState<ActiveForm>("login");

  return (
    <AuthActiveForm.Provider value={{activeForm, setActiveForm}}>
      {children}
    </AuthActiveForm.Provider>
  )
}


function App() {
  const [successMessage, setSuccessMessage] = useState<string>("");
  
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen bg-gray-200">
        <div className='mt-6 w-2/3 h-[80%] bg-amber-400 rounded-t-2xl rounded-b-xl flex flex-col justify-end overflow-hidden
          shadow-lg shadow-amber-800 select-none'>
            <ActiveFormProvider>
              <Form successMessage={successMessage} setSuccessMessage={setSuccessMessage}/>  
            </ActiveFormProvider>
        </div>
      </div>
    </>
  )
}

export default App
