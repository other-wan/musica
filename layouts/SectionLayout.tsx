import { ReactNode, FunctionComponent } from "react";

interface ISectionLayout {
  title?: string;
  content: ReactNode;
}

const SectionLayout: FunctionComponent<ISectionLayout> = ({
  title,
  content,
}) => {
  return (
    <section className="section">
      {title && <h2 className="text__mdBold header">{title}</h2>}
      {content}
    </section>
  );
};

export default SectionLayout;
