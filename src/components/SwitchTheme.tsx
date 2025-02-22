import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface SwitchThemeProps {
  themeHandler: themeType;
  setThemeHandler: React.Dispatch<React.SetStateAction<themeType>>;
}

const SwitchTheme: React.FC<SwitchThemeProps> = ({
  themeHandler: theme,
  setThemeHandler: setTheme,
}) => {
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center p-3"
      style={{ gap: "1rem" }}
    >
      <FontAwesomeIcon
        icon={faSun}
        style={{
          color: theme === "light" ? "#f39c12" : "#ccc",
          transition: "color 0.3s",
        }}
      />
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="themeSwitch"
          onChange={toggleTheme}
          checked={theme === "dark"}
          style={{ cursor: "pointer" }}
        />
      </div>
      <FontAwesomeIcon
        icon={faMoon}
        style={{
          color: theme === "dark" ? "#34495e" : "#ccc",
          transition: "color 0.3s",
        }}
      />
    </div>
  );
};

export default SwitchTheme;
