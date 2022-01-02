import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  getIdToken,
} from "firebase/auth";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const [successMsg, setSuccessMsg]=useState('');
  const [firebaseError, setFirebaseError]=useState('')

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // function for google signIn
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        userData(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        // history.replace(destination);
        history(destination);
      })
      .catch((error) => {
        setAuthError(error.massage);
      })
      .finally(() => setIsLoading(false));
  };

  // Register user with Email Password
  const createAccount =(email, password, name, history)=>{
    console.log(name, email,password)
    setIsLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      setSuccessMsg('congratulations!! Account successfully created')
      setFirebaseError('');
      const newUser = {email, displayName:name};
      setUser(newUser);

      //save use to the database-------------------saveduser
      // savedUser(email, name, 'POST')
      //update profile
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
       
      }).catch((error) => {
      }); 
      history.replace('/')
    })
    .catch((error) => {
      setFirebaseError(error.message);
    })
    .finally(()=> setIsLoading(false)
    )
  }

  // Save User Information
  const userData = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://arcane-oasis-37685.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  // Login user with Email Password
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        // history.replace(destination);
        history(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // user observation
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // For Logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetch(`https://arcane-oasis-37685.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);
  return {
    user,
    signInWithGoogle,
    isLoading,
    authError,
    createAccount,
    successMsg,
    firebaseError,
    loginUser,
    logout,
    admin,
    token,
  };
};

export default useFirebase;
