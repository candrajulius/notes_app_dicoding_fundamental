import { login } from "../utils/network-data";
import Login from "../components/Login";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { register_page_path } from "../utils/constant";
import { registerLocale } from "../utils/content";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import { loginLocale } from "../utils/content";

const LoginPage = ({ loginSuccess }) => {
  const { locale } = useContext(LocaleContext);
  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };

  return (
    <section className='login-page'>
      <h2>{loginLocale[locale].contentH2}</h2>
      <Login login={onLogin} />
      <p>
        {loginLocale[locale].contentP}
        <Link to={register_page_path}>{loginLocale[locale].contentLink}</Link>
      </p>
    </section>
  );
};
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};
export default LoginPage;
