import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationKr from "./kr.json";

i18n.use(initReactI18next).init({
	resources: {
		ko: {
			translation: translationKr,
		},
	},
	lng: "ko",
	debug: true,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
