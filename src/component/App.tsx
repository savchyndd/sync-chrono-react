import { useState } from "react";

import { CREATE_NOTE } from "../constants/btnOptConst";

import Layout from "./common/Layout/Layout";
import ActiveTable from "./ActiveTable/ActiveTable";
import ArhivedTable from "./ArhivedTable/ArhivedTable";
import SummaryTable from "./SummaryTable/SummaryTable";
import Button from "./common/Button/Button";
import Modal from "./common/Modal/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToogleModalOpen = () => {
    setIsModalOpen((prev: boolean) => !prev);
  };

  return (
    <>
      <Layout>
        <section>
          <div className="grid justify-center m-auto p-10 w-4/5">
            <h1 className="text-center mb-0 font-bold text-2xl">Note APP</h1>
            <ActiveTable />
            <Button btnOption={CREATE_NOTE} onClick={handleToogleModalOpen} />
            <SummaryTable />
            <ArhivedTable />
          </div>
        </section>
      </Layout>
      {isModalOpen && <Modal onModalClose={handleToogleModalOpen} />}
    </>
  );
};

export default App;
