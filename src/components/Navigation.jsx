import { Link } from "react-router-dom";
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FiPlusCircle, FiLogOut } from "react-icons/fi";
import { archive_page_path, new_page_path } from "../utils/constant";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContext";
import { localeData } from "../utils/content";
import { FaMoon, FaSun } from "react-icons/fa";
const Navigation = ({ logout, name }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { locale, toggleLocale } = useContext(LocaleContext);
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <Link to={archive_page_path}>Archived</Link>
        </li>
        <li>
          <Link to={new_page_path}>
            <FiPlusCircle />
          </Link>
        </li>
        <li>
          <button className='toggle-theme' onClick={toggleTheme}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </li>
        <li>
          <button className='toggle-locale' onClick={toggleLocale}>
            {localeData[locale].localeText}
          </button>
        </li>
        <li>
          <button onClick={logout}>
            {name} <FiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
};
Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
Navigation.defaultProps = {
  name: "",
};
export default Navigation;
