import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      illustration_alt: "Illustration",
      brand: "AmanaDesk",
      subtitle: "Manage with trust, act with confidence.",
      email: "Email Address",
      email_placeholder: "broker@yourfirm.com",
      password: "Password",
      password_placeholder: "Enter your password",
      show: "Show",
      hide: "Hide",
      remember_me: "Remember me",
      forgot_password: "Forgot password?",
      sign_in: "Log In",
      signing_in: "Logging in...",
      new_here: "New to AmanaDesk?",
      sign_up: "Register",
      login_success: "Login successful!",
      login_failed: "Invalid credentials, please try again.",
    },
  },
  ar: {
    translation: {
      illustration_alt: "رسم توضيحي",
      subtitle: "الإدارة بثقة، اتخاذ القرار بيقين.",
      brand: "أمانة",
      email: "عنوان البريد الإلكتروني",
      email_placeholder: "broker@yourfirm.com",
      password: "كلمة المرور",
      password_placeholder: "أدخل كلمة المرور الخاصة بك",
      show: "عرض",
      hide: "إخفاء",
      remember_me: "تذكرني",
      forgot_password: "نسيت كلمة المرور؟",
      sign_in: "تسجيل الدخول",
      signing_in: "جارٍ تسجيل الدخول...",
      new_here: "جديد في أماناديسك؟",
      sign_up: "إنشاء حساب",
      login_success: "تم تسجيل الدخول بنجاح!",
      login_failed: "بيانات اعتماد غير صالحة، حاول مرة أخرى.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
