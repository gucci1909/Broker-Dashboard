import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import brokerIllustration from "../../public/Life.svg";
import { FiLoader } from "react-icons/fi";

const Login = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "en");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLanguageToggle = () => {
    const newLang = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
    document.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const handleLogin = () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      if (email === "broker@dubai.com" && password === "1@3") {
        navigate("/dashboard");
      } else {
        setError("❌ Invalid credentials");
      }
    }, 1500);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300 px-4 rtl:from-yellow-300 rtl:to-yellow-100">
      <div className="flex w-full max-w-5xl flex-col-reverse items-center justify-between gap-10 rounded-2xl bg-white p-8 shadow-xl sm:flex-row sm:gap-0">
        <div className="w-full sm:w-1/2">
          <div className="mb-6 flex items-center justify-end gap-2">
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={lang === "ar"}
                onChange={handleLanguageToggle}
              />
              <div className="peer h-6 w-11 rounded-full bg-gray-300 transition-all peer-checked:bg-yellow-600">
                <div
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ${
                    lang === "ar" ? "right-0.5" : "left-0.5"
                  }`}
                ></div>
              </div>
            </label>
            <span className="text-sm font-medium text-gray-700">
              {lang === "ar" ? "العربية" : "English"}
            </span>
          </div>

          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-start">
            {t("sign_in")}
          </h2>
          <p className="mb-6 text-center text-sm text-gray-600 sm:text-start">
            {t("subtitle")}
          </p>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              {t("email")}
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setError("");
                setEmail(e.target.value);
              }}
              placeholder={t("email_placeholder")}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-yellow-400 focus:outline-none rtl:text-right"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              {t("password")}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setError("");
                setPassword(e.target.value);
              }}
              placeholder={t("password_placeholder")}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-yellow-400 focus:outline-none rtl:text-right"
            />
          </div>

          {error && (
            <p className="animate-shake mb-4 text-sm text-red-600">{error}</p>
          )}

          <button
            onClick={() => {
              if (email && password) handleLogin();
            }}
            disabled={loading || !email || !password}
            className={`flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-white transition-colors duration-300 ${email && password ? "cursor-pointer bg-yellow-500 hover:bg-yellow-600" : "cursor-not-allowed bg-gray-400"}`}
          >
            {loading ? (
              <>
                <FiLoader className="animate-spin" />
                {t("signing_in")}
              </>
            ) : (
              t("sign_in")
            )}
          </button>
        </div>

        <div className="hidden w-full text-center sm:block sm:w-1/2">
          <img
            src={brokerIllustration}
            alt={t("illustration_alt")}
            className="animate-fade-in mx-auto w-[90%] max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
