document.addEventListener("DOMContentLoaded", () => {
  protectPremiumContent();
});

function protectPremiumContent() {
  const isPremiumPage = document.body.dataset.premiumPage === "true";

  if (!isPremiumPage) {
    return;
  }

  const currentUser = getCurrentUser();
  const premiumLock = document.getElementById("premiumLock");
  const premiumSections = document.querySelectorAll(".premium-content");

  if (!currentUser) {
    if (premiumLock) {
      premiumLock.classList.remove("premium-hidden");
    }

    premiumSections.forEach((section) => {
      section.style.display = "none";
    });

    return;
  }

  if (premiumLock) {
    premiumLock.style.display = "none";
  }

  premiumSections.forEach((section) => {
    section.style.display = "";
  });
}