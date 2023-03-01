export const BACKEND_URL = 'http://localhost:8000';

export const GET_ALL_EVENTS = () => ({
  url: `${BACKEND_URL}/api/events`,
  method: 'GET',
});

export const GET_EVENT_BY_ID = (id) => ({
  url: `${BACKEND_URL}/api/events/${id}`,
  method: 'GET',
});

export const UPDATE_BOOKMARK = (id) => ({
  url: `${BACKEND_URL}/api/events/${id}`,
  method: 'PATCH',
});

export const UPDATE_REGISTRATION = (id) => ({
  url: `${BACKEND_URL}/api/events/${id}`,
  method: 'PATCH',
});

export const GET_ALL_THEMES = () => ({
  url: `${BACKEND_URL}/api/themes`,
  method: 'GET',
});

export const SAVE_THEME = () => ({
  url: `${BACKEND_URL}/api/events/`,
  method: 'PUT',
});
