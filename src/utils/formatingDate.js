export const formatingCreatedDate = (date) => {
  const result = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return result;
};
export const formatingDate = (date) => {
  const result = new Date(date).toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  return result;
};
export const formatingToFormDate = (date) => {
  const result = new Date(date).toLocaleDateString("en-CA", {
    year: "numeric",
    day: "numeric",
    month: "numeric",
  });

  return result;
};
