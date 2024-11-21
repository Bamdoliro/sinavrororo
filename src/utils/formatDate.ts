const formatDate = (date: string, type: "d" | "m") => {
  const cleanedDate = date.replace(/\D/g, "");

  let month = cleanedDate.slice(4, 6);
  let day = cleanedDate.slice(6, 8);

  if (type === "m") {
    month = month.padStart(2, "0");
    return month;
  }
  if (type === "d") {
    day = day.padStart(2, "0");
    return day;
  }
};

export default formatDate;
