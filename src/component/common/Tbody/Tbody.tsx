import { FC, useState } from "react";

import "./Tbody.css";
import {
  ARHIVE_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  UNARHIVE_NOTE,
} from "../../../constants/btnOptConst";
import Button from "../Button/Button";
import EditModal from "../Modal/EditModal/EditModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToogleModalOpen = () => {
    setIsModalOpen((prev: boolean) => !prev);
  };

  return (
    <tbody className="table-note">
      {tbodyList.map(
        ({ id, name, created, category, content, date, arhived }) => {
          if (arhive ? !arhived : arhived) return;

          return (
            <tr key={id} className="table_row">
              <td>{name}</td>
              <td>{created}</td>
              <td>{category}</td>
              <td>{content}</td>
              <td>{date}</td>
              <td>
                <Button btnOption={EDIT_NOTE} onClick={handleToogleModalOpen} />
                {isModalOpen && (
                  <EditModal onModalClose={handleToogleModalOpen} />
                )}
              </td>
              <td>
                <Button btnOption={arhived ? UNARHIVE_NOTE : ARHIVE_NOTE} />
              </td>
              <td>
                <Button btnOption={DELETE_NOTE} />
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};

export default Tbody;
