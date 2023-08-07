import { FC, useState } from "react";
import { NoteTypeWhithId } from "../../../types/NoteType";
import Button from "../Button/Button";
import {
  ARHIVE_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  UNARHIVE_NOTE,
} from "../../../constants/btnOptConst";
import { removeNote, toggleArhivedNote } from "../../../redux/notesSlice";
import { useDispatch } from "react-redux";
import EditModal from "../Modal/EditModal/EditModal";

import "../Tbody/Tbody";

type Props = {
  note: NoteTypeWhithId;
};
const TbodyItem: FC<Props> = ({ note }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToogleModalOpen = () => {
    setIsModalOpen((prev: boolean) => !prev);
  };

  const handleArhiveNote = () => {
    dispatch(toggleArhivedNote(note.id));
  };

  const handleRemoveNote = () => {
    dispatch(removeNote(note.id));
  };
  return (
    <tr key={note.id} className="rounded-xl shadow-second-shadow">
      <td className="p-3">{note.name}</td>
      <td className="p-3">{note.created}</td>
      <td className="p-3">{note.category}</td>
      <td className="p-3">{note.content}</td>
      <td className="p-3">{note.date}</td>
      <td className="p-3">

        <Button btnOption={EDIT_NOTE} onClick={handleToogleModalOpen} />
        {isModalOpen && (
          <EditModal onModalClose={handleToogleModalOpen} note={note} />
        )}
      </td>
      <td className="p-3">
        <Button
          btnOption={!note.arhived ? ARHIVE_NOTE : UNARHIVE_NOTE}
          onClick={handleArhiveNote}
        />
      </td>
      <td className="p-3">
        <Button btnOption={DELETE_NOTE} onClick={handleRemoveNote} />
      </td>
    </tr>
  );
};

export default TbodyItem;
