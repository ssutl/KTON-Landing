//create an object of the months
const months: { [key: number]: string } = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const convertDateFunc = (date: string) => {
  const dateObj = new Date(date);

  const month = dateObj.getUTCMonth() + 1;
  const year = dateObj.getUTCFullYear();

  // Format the date as "dd/mm/yyyy"
  //Select the month using the month object

  const formattedDate = `${months[month]} ${year}`;

  // Check if the date is within the last 7 days
  const currentDate = new Date();
  const sevenDaysAgo = new Date(
    currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
  );

  const isWithinLast7Days = dateObj >= sevenDaysAgo && dateObj <= currentDate;

  return `${
    isWithinLast7Days ? `Recently released` : "Released"
  } ${formattedDate}`;
};

export default convertDateFunc;
