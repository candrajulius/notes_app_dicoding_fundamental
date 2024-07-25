import { useContext } from "react";
import useInput from "../hooks/UseInput";
import PropTypes from "prop-types";
import React from "react";
import LocaleContext from "../contexts/LocaleContext";
import { registerInput } from "../utils/content";

const Register = ({ register }) => {
  const [name, onNameChangeHandler] = useInput("");
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const { locale } = useContext(LocaleContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    register({
      name: name,
      email: email,
      password: password,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className='input-register'>
      <label htmlFor='name'>Nama</label>
      <input type='text' value={name} onChange={onNameChangeHandler} />
      <label htmlFor='email'>Email</label>
      <input type='email' value={email} onChange={onEmailChangeHandler} />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button>{registerInput[locale].btnRegister}</button>
    </form>
  );
};
Register.propTypes = {
  register: PropTypes.func.isRequired,
};
export default Register;
