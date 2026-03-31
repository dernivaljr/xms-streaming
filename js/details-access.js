document.addEventListener("DOMContentLoaded", () => {
  protectDetailsPage();
});

function protectDetailsPage() {
  const requiredAccess = normalizePlan(document.body.dataset.access);

  if (!requiredAccess) {
    return;
  }

  const currentUser = getCurrentUser();

  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }

  const userPlan = normalizePlan(currentUser.plan);

  if (requiredAccess === "basic") {
    return;
  }

  if (requiredAccess === "premium" && userPlan !== "premium") {
    window.location.href = "subscriber.html";
  }
}

function normalizePlan(value) {
  return String(value || "").trim().toLowerCase();
}