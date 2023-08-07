import { FC } from "react";

type TheadList = string[];
type TheadProps = { theadList: TheadList };

const Thead: FC<TheadProps> = ({ theadList }) => {
  return (
    <thead>
      <tr className="rounded-xl shadow-main-shadow">
        {theadList.map((item, idx) => (
          <th key={idx} className="p-3">
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
