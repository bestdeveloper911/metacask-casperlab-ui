/* eslint-disable */
export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const truncateString = (
  longString,
  startChunk,
  endChunk
) => {
  if (!longString) return;
  return (
    longString.substring(0, startChunk) +
    '...' +
    longString.substring(longString.length - endChunk)
  );
}
