import { THEAD_SUMMARY_NOTES } from "../../constants/theadConst";

import { useSelector } from "react-redux";
import { selectNotesList } from "../../redux/selectors";

import Table from "../common/Table/Table";
import Thead from "../common/Thead/Thead";
import TbodySummary from "../common/Tbody/TbodySummary/TbodySummary";
import getSummaryData from "../../utils/getSummaryData";

const SummaryTable = () => {
  const notesList = useSelector(selectNotesList);
  const summaryList = getSummaryData(notesList);

  return (
    <Table>
      <Thead theadList={THEAD_SUMMARY_NOTES} />
      <TbodySummary tbodyList={summaryList} />
    </Table>
  );
};

export default SummaryTable;
