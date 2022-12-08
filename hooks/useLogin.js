import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const useLogin = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const loginUser = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('signed in');
        const user = userCredential.user;
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage('Invalid username/password');
        if (error.code === 'auth/user-not-found') {
          setErrorMessage('Invalid username/password');
        } else if (error.code === 'auth/wrong-password') {
          setErrorMessage('Invalid username/password');
        }
      });
  };

  return { loginUser, errorMessage };
};
