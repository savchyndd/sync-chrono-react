import { FC } from "react";

import { ReactChildrenProps } from "../../../types/ReactChildrenProps";

import "./Table.css";

const Table: FC<ReactChildrenProps> = ({ children }) => {
  return <table className="table">{children}</table>;
};

export default Table;
