import { FunctionComponent, ReactNode } from "react";
import ChartButtonStyles from "styles/chartButton.module.css";

interface IActionButton {
  svg: ReactNode;
  label?: string;
}

const ActionButton: FunctionComponent<IActionButton> = ({ svg, label }) => {
  return (
    <button className={ChartButtonStyles.chartButton}>
      {svg}
      {label && (
        <p className="text__xxsmReg" style={{ color: "inherit" }}>
          {label}
        </p>
      )}
    </button>
  );
};

export default ActionButton;
