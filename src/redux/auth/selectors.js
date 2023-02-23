export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectUserName = state => state.auth.user.username;

export const selectSessionId = state => state.auth.sessionId;

export const selectRefreshToken = state => state.auth.refreshToken;
