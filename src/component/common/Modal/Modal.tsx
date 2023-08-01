import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CREATE_NOTE } from "../../../constants/btnOptConst";
import { formatingCreatedDate } from "../../../utils/formatingDate";

import { selectNotesList } from "../../../redux/selectors";
import { addNote } from "../../../redux/notesSlice";

import Button from "../Button/Button";

import "./Modal.css";
import { parseDate } from "../../../utils/parseDate";

type OnModalClose = () => void;
type Props = {
  onModalClose: OnModalClose;
};

const Modal: FC<Props> = ({ onModalClose }) => {
  const dispatch = useDispatch();
  const notes = useSelector(selectNotesList);

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
    const created = formatingCreatedDate(new Date().toDateString());
    const category = target.category.value;
    const content = target.content.value;
    const date = parseDate(content);

    if (!name) return alert("Please write Name fields");
    if (!content) return alert("Please write Content fields");

    const newNote = {
      name,
      created,
      category,
      content,
      date: date ? date : "",
    };

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
          <Button btnOption={CREATE_NOTE} />
        </form>
      </div>
    </div>
  );
};

export default Modal;
