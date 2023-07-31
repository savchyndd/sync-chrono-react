import { THEAD_ACTIVE_NOTES } from "../../constants/theadConst";

import { useSelector } from "react-redux";
import { selectNotesList } from "../../redux/selectors";

import Table from "../common/Table/Table";
import Thead from "../common/Thead/Thead";
import Tbody from "../common/Tbody/Tbody";

const NoteActiveTable = () => {
  const notesList = useSelector(selectNotesList);

  return (
    <Table>
      <Thead theadList={THEAD_ACTIVE_NOTES} />
      <Tbody tbodyList={notesList} />
    </Table>
  );
};

export default NoteActiveTable;
