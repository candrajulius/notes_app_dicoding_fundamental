import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { register } from "../utils/network-data";
import { home_page_path, login_page_path } from "../utils/constant";
import Register from "../components/Register";
import { registerLocale } from "../utils/content";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const handleRegister = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate(home_page_path);
    }
  };
  return (
    <section className='register-page'>
      <h2>{registerLocale[locale].contentH2}</h2>
      <Register register={handleRegister} />
      <p>
        {registerLocale[locale].contentP}
        <Link to={login_page_path}>{registerLocale[locale].contentLink}</Link>
      </p>
    </section>
  );
};
export default RegisterPage;
