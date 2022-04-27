const getCurrentTime = () => {
  const currentTime = new Date().toISOString().slice(0, -5);
  return currentTime;
};

export default getCurrentTime;
