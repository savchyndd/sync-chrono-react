import { FC } from "react";

import "./Thead.css";

type TheadList = string[];
type TheadProps = { theadList: TheadList };

const Thead: FC<TheadProps> = ({ theadList }) => {
  return (
    <thead>
      <tr className="table_header">
        {theadList.map((item, idx) => (
          <th key={idx}>{item}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
