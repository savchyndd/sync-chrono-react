import { useState, FC, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { EDIT_NOTE_SUBMIT } from "../../../../constants/btnOptConst";
import { formatingToFormDate } from "../../../../utils/formatingDate";

import { editNote } from "../../../../redux/notesSlice";

import Button from "../../Button/Button";

import "../Modal.css";
import { NoteType } from "../../../../types/NoteType";
import { parseDate } from "../../../../utils/parseDate";

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
  const [date, setDate] = useState(note.date);
  const [created, setCreated] = useState(formatingToFormDate(note.created));

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const dateList = parseDate(content, date);

    if (!name) return alert("Please write Name fields");
    if (!content) return alert("Please write Content fields");

    const newNote = {
      ...note,
      name,
      category,
      content,
      date: dateList ? dateList : "",
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

  // const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setDate(e.target.value);
  // };

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
