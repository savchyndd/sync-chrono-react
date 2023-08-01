import { FC, MouseEvent } from "react";

import "./Button.css";

type BtnOption = {
  name: string;
  text: string;
  class?: string;
};
type OnClick = (event: MouseEvent<HTMLButtonElement>) => void;
type Props = { btnOption: BtnOption; onClick?: OnClick };

const Button: FC<Props> = ({ btnOption, onClick }) => {
  return (
    <button
      className={btnOption.class ? btnOption.class : "btn"}
      name={btnOption.name}
      onClick={onClick}
    >
      {btnOption.text}
    </button>
  );
};

export default Button;
