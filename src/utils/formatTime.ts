const formatTime = (date: string) => {
  const cleanedDate = date.replace(/\D/g, "");

  const hour = cleanedDate.slice(0, 2);
  const minute = cleanedDate.slice(2, 4);

  const formattedTime = [hour, minute].filter(Boolean).join(":");

  return formattedTime;
};

export default formatTime;
