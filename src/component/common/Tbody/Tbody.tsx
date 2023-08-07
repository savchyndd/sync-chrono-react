import { FC } from "react";

import TbodyItem from "../TbodyItem/TbodyItem";

type TbodyList = {
  id: string;
  name: string;
  created: string;
  content: string;
  category: string;
  date: string;
  arhived: boolean;
}[];
type Arhive = boolean;
type Props = { tbodyList: TbodyList; arhive?: Arhive };

const Tbody: FC<Props> = ({ tbodyList, arhive = false }) => {
  return (
    <tbody className="table-note">
      {tbodyList.map((note) => {
        if (arhive ? !note.arhived : note.arhived) return null;
        return <TbodyItem key={note.id} note={note} />;
      })}
    </tbody>
  );
};

export default Tbody;
