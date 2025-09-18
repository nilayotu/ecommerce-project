// src/store/thunks/clientThunks.js
import { setRoles } from "../reducers/clientReducer";

// Roller API'den (mock) çekiliyor
export const fetchRolesIfNeeded = () => {
  return async (dispatch, getState) => {
    const { roles } = getState().client;

    // Eğer roller zaten varsa tekrar çağırma
    if (roles && roles.length > 0) {
      return;
    }

    try {
      const response = await fetch("/roles.json"); // <-- public klasöründen okuyor
      if (!response.ok) {
        throw new Error("Failed to load roles");
      }

      const data = await response.json();
      dispatch(setRoles(data));
    } catch (error) {
      console.error("Failed to fetch roles:", error);
    }
  };
};