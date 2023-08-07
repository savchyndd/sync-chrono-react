import { useState, FC, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

import { EDIT_NOTE_SUBMIT } from "../../../../constants/btnOptConst";
import { formatingToFormDate } from "../../../../utils/formatingDate";

import { editNote } from "../../../../redux/notesSlice";

import Button from "../../Button/Button";

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

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const dateList = parseDate(content, note.date);

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

  return (
    <div
      className="fixed z-99 top-0 left-0 w-screen h-screen overflow-y-scroll flex justify-center items-center bg-gradient-to-tr from-bg-overlay-from to-bg-overlay-to"
      onClick={handleBackdropClick}
    >
      <div className="rounded-3xl overflow-hidden max-w-[calc(100vw - 48px)] max-h-[calc(100vh - 24px)] p-8 bg-bg-color">
        <form className="grid gap-1" onSubmit={handleSubmit}>
          <label className="grid text-left">
            Category
            <select
              name="category"
              className="p-3  text-main-color bg-bg-color shadow-main-shadow-active rounded-lg border-none focus:outline focus:outline-2 focus:outline-main-active-color"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="Task">Task</option>
              <option value="Random thought">Random thought</option>
              <option value="Idea">Idea</option>
            </select>
          </label>
          <label className="grid text-left">
            Name
            <input
              name="name"
              className="p-3  text-main-color bg-bg-color shadow-main-shadow-active rounded-lg border-none focus:outline focus:outline-2 focus:outline-main-active-color"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label className="grid text-left">
            Content
            <input
              name="content"
              className="p-3  text-main-color bg-bg-color shadow-main-shadow-active rounded-lg border-none focus:outline focus:outline-2 focus:outline-main-active-color"
              type="text"
              value={content}
              onChange={handleContentChange}
            />
          </label>
          <label className="grid text-left">
            Time of creation
            <input
              name="created"
              className="p-3  text-main-color bg-bg-color shadow-main-shadow-active rounded-lg border-none focus:outline focus:outline-2 focus:outline-main-active-color"
              type="date"
              disabled
              value={formatingToFormDate(note.created)}
            />
          </label>
          <Button btnOption={EDIT_NOTE_SUBMIT} />
        </form>
      </div>
    </div>
  );
};

export default EditModal;
