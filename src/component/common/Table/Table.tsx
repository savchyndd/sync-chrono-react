import { FC } from "react";

import { ReactChildrenProps } from "../../../types/ReactChildrenProps";

const Table: FC<ReactChildrenProps> = ({ children }) => {
  return (
    <table className="text-center p-3 mt-6 outline outline-2 outline-main-color outline-offset-2 rounded-2xl border-spacing-5 border-separate ">
      {children}
    </table>
  );
};

export default Table;
