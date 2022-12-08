import styles from './Login.module.css';
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

export default function Login() {
  const [inputValues, setInputValues] = useState({ email: '', password: '' });
  const { loginUser, errorMessage } = useLogin();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(inputValues.email, inputValues.password);
  };

  return (
    <dialog className={styles.loginModal}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={inputValues.email}
          onInput={handleInputChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={inputValues.password}
          onInput={handleInputChange}
        />
        <button type='submit' className={styles.submitBtn}>
          <span className={styles.btnShadow}></span>
          <span className={styles.btnFront}>Login</span>
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </dialog>
  );
}
