import firebaseInit from "./firebaseConfig/firebaseInit";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

firebaseInit();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(false)

    const auth = getAuth()
    //register user with email password ==========
    const registerWithEmailPass = (email: string, password: string) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            setUser(userCredential.user)
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })

    }

    return {
        registerWithEmailPass,
        isLoading,
        user,
        error,
    };
};

export default useFirebase;