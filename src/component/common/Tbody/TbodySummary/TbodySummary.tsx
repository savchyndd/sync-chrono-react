import { FC } from "react";

import "../Tbody.css";

type TbodyList = {
  category: string;
  active: number;
  arhived: number;
}[];
type Props = { tbodyList: TbodyList };

const TbodySummary: FC<Props> = ({ tbodyList }) => {
  return (
    <tbody className="table-note">
      {tbodyList.map(({ category, active, arhived }, idx) => {
        return (
          <tr key={idx} className="table_row">
            <td>{category}</td>
            <td>{active}</td>
            <td>{arhived}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TbodySummary;
