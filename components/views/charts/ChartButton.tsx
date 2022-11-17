import { FunctionComponent, ReactNode } from "react";
import ChartButtonStyles from "styles/chartButton.module.css";

interface IChartButton {
  svg: ReactNode;
  label?: string;
}

const ChartButton: FunctionComponent<IChartButton> = ({ svg, label }) => {
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

export default ChartButton;
