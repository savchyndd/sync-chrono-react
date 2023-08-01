import { useState, FC, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { EDIT_NOTE_SUBMIT } from "../../../../constants/btnOptConst";
import {
  formatingDate,
  formatingToFormDate,
} from "../../../../utils/formatingDate.js";

// import { selectNotesList } from "../../../../redux/selectors";
import { editNote } from "../../../../redux/notesSlice";

import Button from "../../Button/Button";

import "../Modal.css";
import { NoteType } from "../../../../types/NoteType";

type OnModalClose = () => void;
type Note = NoteType;
type Props = {
  onModalClose: OnModalClose;
  note: Note;
};

const EditModal: FC<Props> = ({ onModalClose, note }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState(note.name);
  const [category, setCategory] = useState(note.category);
  const [content, setContent] = useState(note.content);
  const [date, setDate] = useState(formatingToFormDate(note.date));
  const [created, setCreated] = useState(formatingToFormDate(note.created));

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const formatDate = note.date;
    let formatNewDate =
      formatingDate(date) !== "Invalid Date" ? formatingDate(date) : "";

    if (formatDate.length > 0) {
      if (
        formatDate.split(",")[0].trim().length &&
        formatNewDate.trim().length
      ) {
        const arrDate = formatDate.split(",");
        arrDate.push(formatNewDate);
        formatNewDate = arrDate.join(", ");
      }
    }

    const newNote = {
      ...note,
      name,
      category,
      content,
      date: formatNewDate,
    };

    dispatch(editNote(newNote));
    onModalClose();
  };

  const handleBackdropClick = ({ target, currentTarget }: any) => {
    if (currentTarget === target) {
      onModalClose();
    }
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  return (
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
        <form className="form-edit-note" onSubmit={handleSubmit}>
          <label>
            Category
            <select
              name="category"
              className="field"
              value={category}
              onChange={handleCategoryChange}
            >
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
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label>
            Content
            <input
              name="content"
              className="field"
              type="text"
              value={content}
              onChange={handleContentChange}
            />
          </label>
          <label>
            Date
            <input
              name="date"
              className="field"
              type="date"
              value={date}
              onChange={handleDateChange}
            />
          </label>
          <label>
            Time of creation
            <input
              name="created"
              className="field"
              type="date"
              disabled
              value={created}
            />
          </label>
          <Button btnOption={EDIT_NOTE_SUBMIT} />
        </form>
      </div>
    </div>
  );
};

export default EditModal;
