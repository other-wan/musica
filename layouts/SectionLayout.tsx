import { ReactNode, FunctionComponent } from "react";
import classNames from "classnames";
import SectionLayoutStyles from "styles/sectionLayout.module.css";

interface ISectionLayout {
  title?: string;
  content: ReactNode;
  className?: string;
}

const SectionLayout: FunctionComponent<ISectionLayout> = ({
  title,
  content,
  className,
}) => {
  return (
    <section className={classNames(SectionLayoutStyles.section, className)}>
      {title && <h2 className="text__mdBold header">{title}</h2>}
      {content}
    </section>
  );
};

export default SectionLayout;
