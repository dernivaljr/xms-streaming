const USERS_KEY = "xms_users";
const CURRENT_USER_KEY = "xms_current_user";

function getUsers() {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function clearUsers() {
  localStorage.removeItem(USERS_KEY);
}

function getCurrentUser() {
  const currentUser = localStorage.getItem(CURRENT_USER_KEY);
  return currentUser ? JSON.parse(currentUser) : null;
}

function setCurrentUser(user) {
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

function clearCurrentUser() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

function generateUserId(users) {
  if (!users.length) {
    return 1;
  }

  return Math.max(...users.map((user) => user.id)) + 1;
}