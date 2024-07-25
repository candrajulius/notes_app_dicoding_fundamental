import { useContext } from "react";
import useInput from "../hooks/UseInput";
import LocaleContext from "../contexts/LocaleContext";
import React from "react";
import PropTypes from "prop-types";
import { loginInput } from "../utils/content";

const Login = ({ login }) => {
  const [email, onEmailChangeHandler] = useInput("");
  const [password, onPasswordChangeHandler] = useInput("");
  const { locale } = useContext(LocaleContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    login({
      email: email,
      password: password,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className='input-login'>
      <label htmlFor='emaik'>Email</label>
      <input type='email' value={email} onChange={onEmailChangeHandler} />
      <label htmlFor='password'>Password</label>
      <input
        type='password'
        value={password}
        onChange={onPasswordChangeHandler}
      />
      <button>{loginInput[locale].btnLogin}</button>
    </form>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
