import { FC, MouseEvent } from "react";

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
      className={
        btnOption.class === "btn-note"
          ? "py-1 px-2 w-max border-none rounded-md text-ingerit bg-bg-color shadow-main-shadow cursor-pointer focus:text-main-active-color focus:shadow-main-shadow-active hover:text-main-active-color hover:shadow-main-shadow-active"
          : "py-3 px-6 mt-3 ml-auto w-max border-none rounded-2xl text-ingerit bg-[color:#38404b] shadow-main-shadow cursor-pointer focus:text-main-active-color focus:shadow-main-shadow-active hover:text-main-active-color hover:shadow-main-shadow-active"
      }
      name={btnOption.name}
      onClick={onClick}
    >
      {btnOption.text}
    </button>
  );
};

export default Button;
