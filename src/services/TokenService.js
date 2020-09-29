const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(process.env.REACT_APP_TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(process.env.REACT_APP_TOKEN_KEY);
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(process.env.REACT_APP_TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
};

export default TokenService;
