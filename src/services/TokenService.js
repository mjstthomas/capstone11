const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token);
  },
  saveIdToken(token) {
    window.sessionStorage.setItem("id", token);
  },
  saveProfileToken(token) {
    window.sessionStorage.setItem("Profile", token);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
  },
  getIdToken() {
    return window.sessionStorage.getItem("id");
  },
  getProfileToken() {
    return window.sessionStorage.getItem("Profile");
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(process.env.REACT_APP_TOKEN_KEY);
  },
  clearIdToken() {
    window.sessionStorage.removeItem("id");
  },
  clearProfileToken() {
    window.sessionStorage.removeItem("Profile");
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  hasIdToken() {
    return !!TokenService.getIdToken();
  },
};

export default TokenService;
