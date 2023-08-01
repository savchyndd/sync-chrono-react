import { FC } from "react";

import { ReactChildrenProps } from "../../../types/ReactChildrenProps";

const Layout: FC<ReactChildrenProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
