import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { LocaleProvider } from "./contexts/LocaleContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import {
  archive_page_path,
  detail_page_path,
  home_page_path,
  login_page_path,
  new_page_path,
  register_page_path,
} from "./utils/constant";
import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import ArchivePage from "./pages/ArchivePage";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import Navigation from "./components/Navigation";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { home } from "./utils/content";
import ButtonHead from "./pages/ButtonHead";

function App() {
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [authedUser, setAuthedUser] = useState(null);
  const [initiliazing, setInitiliazing] = useState(true);

  const handleLogin = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitiliazing(false);
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  });

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  });

  if (initiliazing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <LocaleProvider value={localeContextValue}>
        <ThemeProvider value={themeContextValue}>
          <div className='app-container'>
            <header>
              <h1>
                <Link to={home_page_path}>{home[locale].header}</Link>
              </h1>
              <ButtonHead />
            </header>
            <main>
              <Routes>
                <Route
                  path={login_page_path}
                  element={<LoginPage loginSuccess={handleLogin} />}
                />
                <Route path={register_page_path} element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </LocaleProvider>
    );
  }

  return (
    <LocaleProvider value={localeContextValue}>
      <ThemeProvider value={themeContextValue}>
        <div className='app-container'>
          <header>
            <h1>
              <Link to={home_page_path}>{home[locale].header}</Link>
            </h1>
            <Navigation logout={handleLogout} name={authedUser.name} />
          </header>
          <main>
            <Routes>
              <Route path={home_page_path} element={<HomePage />} />
              <Route path={new_page_path} element={<AddPage />} />
              <Route path={detail_page_path} element={<DetailPage />} />
              <Route path={archive_page_path} element={<ArchivePage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </LocaleProvider>
  );
}

export default App;
