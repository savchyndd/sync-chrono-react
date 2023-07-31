import { useEffect, FC, KeyboardEvent } from "react";

import { EDIT_NOTE_SUBMIT } from "../../../../constants/btnOptConst";

import Button from "../../Button/Button";

import "../Modal.css";

type OnModalClose = () => void;
type Props = {
  onModalClose: OnModalClose;
};

const EditModal: FC<Props> = ({ onModalClose }) => {
  const handleBackdropClick = ({ target, currentTarget }: any) => {
    if (currentTarget === target) {
      onModalClose();
    }
  };

  return (
    <div className="overlay" onClick={handleBackdropClick}>
      <div className="modal">
        <form className="form-edit-note">
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
            <input name="name" className="field" type="text" />
          </label>
          <label>
            Content
            <input name="content" className="field" type="text" />
          </label>
          <label>
            Date
            <input name="date" className="field" type="date" />
          </label>
          <label>
            Time of creation
            <input name="created" className="field" type="date" disabled />
          </label>
          <Button btnOption={EDIT_NOTE_SUBMIT} />
        </form>
      </div>
    </div>
  );
};

export default EditModal;
