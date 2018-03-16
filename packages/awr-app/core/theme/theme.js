import AOTheme from "./AOTheme";
import { merge } from "lodash";

// кастомная тема Styled Components
// Базовая тема
const baseTheme = {
  palette: {
    mainColor: "#222",
    secondColor: "#666",
    thirdColor: "#f8f8f8",
    darkTextColor: "#555",
    lightTextColor: "#fff"
  },
  statuses: {
    success: "#fff"
  },
  sign: {
    logo: {
      height: "100px"
    }
  },
  header: {
    height: "60px"
  },
  sidebar: {
    width: "280px",
    background: "#fff",
    menu: {
      background: "#f8f8f8"
    }
  },
  sidebarExpanded: {
    width: "70px",
    menu: {
      background: "#fff"
    }
  }
};

// В зависимости от брендинга возвращаем тему
// Какая-то константа, которая содержит текущий брендинг
const CURRENT_BRAND = "AO";
// переопределяем базовую тему темой из брендинга
const mergeTheme = brandTheme => merge(baseTheme, brandTheme);
// Получение темы по брендингу
const getTheme = () => {
  switch (CURRENT_BRAND) {
    case "AO":
      return mergeTheme(AOTheme);
    default:
      return mergeTheme(baseTheme);
  }
};

export default getTheme();
