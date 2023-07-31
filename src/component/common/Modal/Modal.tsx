import { FC, useState } from "react";

import { CREATE_NOTE } from "../../../constants/btnOptConst";

import Button from "../Button/Button";

import "./Modal.css";
import {
  formatingCreatedDate,
  formatingDate,
} from "../../../utils/formatingDate.js";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../../redux/notesSlice";
import { selectNotesList } from "../../../redux/selectors";

type OnModalClose = () => void;
type Props = {
  onModalClose: OnModalClose;
};

const Modal: FC<Props> = ({ onModalClose }) => {
  const dispatch = useDispatch();
  const notes = useSelector(selectNotesList);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      created: { value: string };
      category: { value: string };
      content: { value: string };
      date: { value: string };
    };

    const name = target.name.value;
    const created = formatingCreatedDate(new Date());
    const category = target.category.value;
    const content = target.content.value;
    const date = formatingDate(target.date.value);

    const newNote = {
      name,
      created,
      category,
      content,
      date: date !== "Invalid Date" ? date : "",
    };
    console.log(newNote);
    dispatch(addNote(newNote));
    onModalClose();
  };

  // useEffect(() => {
  //   const handleKeydown = (e: KeyboardEvent): void => {
  //     if (e.code === "Escape") {
  //       onModalClose();
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeydown(e: KeyboardEvent));

  //   return () => {
  //     window.removeEventListener("keydown", handleKeydown);
  //   };
  // });

  const handleBackdropClick = ({ target, currentTarget }: any) => {
    if (currentTarget === target) {
      onModalClose();
    }
  };

  return (
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
        <form className="form-edit-note" onSubmit={handleSubmit}>
          <label>
            Category
            <select name="category" className="field">
              <option value="Task">Task</option>
              <option value="Random thought">Random thought</option>
              <option value="Idea">Idea</option>
            </select>
          </label>
          <label>
            Name
            <input
              name="name"
              className="field"
              type="text"
              value={notes.name}
            />
          </label>
          <label>
            Content
            <input
              name="content"
              className="field"
              type="text"
              value={notes.content}
            />
          </label>
          <label>
            Date
            <input
              name="date"
              className="field"
              type="date"
              value={notes.date}
            />
          </label>
          <Button btnOption={CREATE_NOTE} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
