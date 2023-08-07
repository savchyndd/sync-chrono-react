import { regexForDates } from "../constants/regexForDate";
import { formatingDate } from "./formatingDate";

export const parseDate = (content: string, date?: string) => {
  const dateContentArr = content
    ?.match(regexForDates)
    ?.map((date) => formatingDate(date));

  const dateArr = date?.match(regexForDates);

  if (dateArr) {
    if (!dateContentArr) return dateArr.join(", ");

    const allDates = [...dateArr, ...dateContentArr];
    return [...new Set(allDates.map((item) => item))].join(", ");
  }

  return dateContentArr?.join(", ");
};
