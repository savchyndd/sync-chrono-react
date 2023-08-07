import { FC } from "react";

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
          <tr key={idx} className="rounded-xl shadow-second-shadow">
            <td className="p-3">{category}</td>
            <td className="p-3">{active}</td>
            <td className="p-3">{arhived}</td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TbodySummary;
