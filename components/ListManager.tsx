import { ReactNode } from "react";

interface IListManager<P> {
  data: P[];
  renderItem: (item: P, index: number) => ReactNode;
  classNames?: { list: string; item: string };
}

const ListManager = <P,>({ data, renderItem, classNames }: IListManager<P>) => {
  return (
    <ul className={classNames?.list}>
      {data.map((item, index) => (
        <li className={classNames?.item} key={index}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
};

export default ListManager;
