const formatDotDate = (isoDate: string) => {
  const date = new Date(isoDate);

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const period = hours >= 12 ? "오후" : "오전";

  hours = hours % 12 || 12;

  return `${period} ${hours}:${minutes.toString().padStart(2, "0")}`;
};

export default formatDotDate;
