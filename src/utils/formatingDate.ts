export const formatingCreatedDate = (date: string) => {
  const result = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return result;
};
export const formatingDate = (date: string) => {
  const result = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return result;
};
export const formatingToFormDate = (date: string) => {
  const result = new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    day: "numeric",
    month: "numeric",
  });

  return result;
};
