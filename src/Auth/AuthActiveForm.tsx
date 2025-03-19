import { useContext, createContext } from "react";

type ActiveForm = "login" | "signup";

type ActiveFormContextType = {
  activeForm: ActiveForm;
  setActiveForm: React.Dispatch<React.SetStateAction<ActiveForm>>;
};

export const AuthActiveForm = createContext<ActiveFormContextType | null>(null);

export const useForm = () => {
  const context = useContext(AuthActiveForm);
  if (!context) {
    throw new Error("useForm must be used within a ActiveForm Provider");
  }
  return context;
};
