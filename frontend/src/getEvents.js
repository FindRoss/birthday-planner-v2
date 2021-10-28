const url = 'http://localhost:5000/events'

export const getEvents = async () => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};