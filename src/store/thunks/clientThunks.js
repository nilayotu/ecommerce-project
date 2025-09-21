import api from "../api";
import { setRoles, setUser, clearUser } from "../reducers/clientReducer";

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
// Login thunk
export const loginUser = (credentials, rememberMe) => async (dispatch) => {
  try {
    const response = await api.post("/auth/login", credentials);

    const { token, name, email, role_id } = response.data;
    const userData = { token, name, email, role_id };

    // store’a kaydet
    dispatch(setUser(userData));

    // remember me aktifse token sakla
    if (rememberMe) {
      localStorage.setItem("token", token);
    }

    return { success: true };
  } catch (err) {
    console.error("Login failed:", err.response?.data || err.message);
    return { success: false, message: err.response?.data?.error || "Login failed" };
  }
};

// Logout thunk
export const logoutUserThunk = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch(clearUser());
};

export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return;

  // Axios header’a token ekle (Bearer ekleme yok)
  api.defaults.headers.common["Authorization"] = token;

  try {
    const response = await api.get("/auth/verify"); // Backend verify endpoint
    const { name, email, role_id, token: newToken } = response.data;

    dispatch(setUser({ name, email, role_id, token: newToken || token }));

    // Token yenilenmişse localStorage ve axios header güncelle
    if (newToken) {
      localStorage.setItem("token", newToken);
      api.defaults.headers.common["Authorization"] = newToken;
    }
  } catch (err) {
    console.error("Token verification failed:", err.response?.data || err.message);
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
    dispatch(clearUser());
  }
};