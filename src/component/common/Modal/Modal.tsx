import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CREATE_NOTE } from "../../../constants/btnOptConst";
import { formatingCreatedDate } from "../../../utils/formatingDate";

import { selectNotesList } from "../../../redux/selectors";
import { addNote } from "../../../redux/notesSlice";

import Button from "../Button/Button";

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

  const handleBackdropClick = ({ target, currentTarget }: any) => {
    if (currentTarget === target) {
      onModalClose();
    }
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
              value={notes.name}
            />
          </label>
          <label className="grid text-left">
            Content
            <input
              name="content"
              className="p-3  text-main-color bg-bg-color shadow-main-shadow-active rounded-lg border-none focus:outline focus:outline-2 focus:outline-main-active-color"
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
