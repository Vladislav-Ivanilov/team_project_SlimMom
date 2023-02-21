export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectSid = state => state.auth.sid;

export const selectRefreshToken = state => state.auth.refreshToken;
