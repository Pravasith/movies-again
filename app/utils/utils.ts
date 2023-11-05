export const worldsStupidestUuidGenerator = () => {
  const max = Number.MAX_SAFE_INTEGER;
  return Math.floor(Math.random() * max).toString();
};
