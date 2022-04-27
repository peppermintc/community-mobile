import moment from "moment";

const getCurrentTime = () => {
  const currentTime = moment().format().slice(0, -6);
  return currentTime;
};

export default getCurrentTime;
