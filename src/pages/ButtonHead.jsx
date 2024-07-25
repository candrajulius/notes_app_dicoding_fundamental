import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import { localeData } from "../utils/content";
const ButtonHead = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { locale, toggleLocale } = useContext(LocaleContext);
  return (
    <nav className='navigation'>
      <ul>
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
      </ul>
    </nav>
  );
};
export default ButtonHead;
