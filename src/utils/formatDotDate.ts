const formatDate = (dateString: string): string => {
  const parsedDate = new Date(dateString);

  return parsedDate
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\./g, "")
    .replace(/ /g, ".");
};

export default formatDate;
