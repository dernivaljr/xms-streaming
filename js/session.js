document.addEventListener("DOMContentLoaded", () => {
  protectSubscriberPage();
  renderCurrentUserData();
  initializeLogoutButtons();
});

function protectSubscriberPage() {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    window.location.href = "login.html";
  }
}

function renderCurrentUserData() {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return;
  }

  const welcomeText = document.getElementById("welcomeText");
  const profileName = document.getElementById("profileName");
  const profileEmail = document.getElementById("profileEmail");
  const profilePlan = document.getElementById("profilePlan");
  const headerUserName = document.getElementById("headerUserName");

  if (welcomeText) {
    welcomeText.textContent = `${currentUser.name}, seu acesso ${translatePlan(currentUser.plan)} foi confirmado. Explore agora os conteúdos exclusivos do universo mutante.`;
  }

  if (profileName) {
    profileName.textContent = currentUser.name;
  }

  if (profileEmail) {
    profileEmail.textContent = currentUser.email;
  }

  if (profilePlan) {
    profilePlan.textContent = translatePlan(currentUser.plan);
  }

  if (headerUserName) {
    headerUserName.textContent = currentUser.name;
  }
}

function initializeLogoutButtons() {
  const logoutButton = document.getElementById("logoutButton");
  const logoutButtonSecondary = document.getElementById("logoutButtonSecondary");

  if (logoutButton) {
    logoutButton.addEventListener("click", logoutUser);
  }

  if (logoutButtonSecondary) {
    logoutButtonSecondary.addEventListener("click", logoutUser);
  }
}

function logoutUser() {
  clearCurrentUser();
  window.location.href = "login.html";
}

function translatePlan(plan) {
  if (plan === "Premium") {
    return "Premium";
  }

  if (plan === "Basic") {
    return "Basic";
  }

  return plan;
}