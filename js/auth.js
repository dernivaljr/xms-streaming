document.addEventListener("DOMContentLoaded", () => {
  redirectIfAuthenticated();
  initializeRegisterForm();
  initializeLoginForm();
  initializePasswordToggles();
  initializeClearUsersButton();
});

function redirectIfAuthenticated() {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return;
  }

  const currentPage = window.location.pathname.split("/").pop();

  if (currentPage === "login.html" || currentPage === "register.html") {
    window.location.href = "subscriber.html";
  }
}

function initializeRegisterForm() {
  const registerForm = document.getElementById("registerForm");

  if (!registerForm) {
    return;
  }

  registerForm.addEventListener("submit", handleRegisterSubmit);
}

function initializeLoginForm() {
  const loginForm = document.getElementById("loginForm");

  if (!loginForm) {
    return;
  }

  loginForm.addEventListener("submit", handleLoginSubmit);
}

function initializePasswordToggles() {
  const toggleButtons = document.querySelectorAll("[data-toggle-password]");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const inputId = button.getAttribute("data-toggle-password");
      const input = document.getElementById(inputId);

      if (!input) {
        return;
      }

      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      button.textContent = isPassword ? "Ocultar" : "Mostrar";
    });
  });
}

function initializeClearUsersButton() {
  const clearUsersButton = document.getElementById("clearUsersButton");

  if (!clearUsersButton) {
    return;
  }

  clearUsersButton.addEventListener("click", () => {
    const confirmed = window.confirm("Deseja realmente apagar todos os usuários salvos neste navegador?");

    if (!confirmed) {
      return;
    }

    clearUsers();
    clearCurrentUser();

    const messageElement = document.getElementById("registerMessage");
    showMessage(messageElement, "Usuários removidos com sucesso. Agora você pode cadastrar novamente.", "success");
  });
}

function handleRegisterSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const planInput = document.getElementById("plan");
  const messageElement = document.getElementById("registerMessage");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  const plan = planInput.value;

  clearMessage(messageElement);

  if (!name || !email || !password || !confirmPassword || !plan) {
    showMessage(messageElement, "Preencha todos os campos.", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showMessage(messageElement, "Digite um e-mail válido.", "error");
    return;
  }

  if (password.length < 6) {
    showMessage(messageElement, "A senha deve ter pelo menos 6 caracteres.", "error");
    return;
  }

  if (password !== confirmPassword) {
    showMessage(messageElement, "As senhas não coincidem.", "error");
    return;
  }

  const users = getUsers();

  if (users.length >= 2) {
    showMessage(messageElement, "Limite de 2 usuários cadastrados atingido.", "error");
    return;
  }

  const userAlreadyExists = users.some((user) => user.email === email);

  if (userAlreadyExists) {
    showMessage(messageElement, "Já existe um usuário cadastrado com este e-mail.", "error");
    return;
  }

  const newUser = {
    id: generateUserId(users),
    name,
    email,
    password,
    plan,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  saveUsers(users);

  showMessage(messageElement, "Cadastro realizado com sucesso. Redirecionando para o login...", "success");

  event.target.reset();

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}

function handleLoginSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const messageElement = document.getElementById("loginMessage");

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value.trim();

  clearMessage(messageElement);

  if (!email || !password) {
    showMessage(messageElement, "Preencha e-mail e senha.", "error");
    return;
  }

  const users = getUsers();

  const matchedUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!matchedUser) {
    showMessage(messageElement, "E-mail ou senha inválidos.", "error");
    return;
  }

  const sessionUser = {
    id: matchedUser.id,
    name: matchedUser.name,
    email: matchedUser.email,
    plan: matchedUser.plan,
    createdAt: matchedUser.createdAt
  };

  setCurrentUser(sessionUser);

  showMessage(messageElement, "Login realizado com sucesso. Redirecionando...", "success");

  setTimeout(() => {
    window.location.href = "subscriber.html";
  }, 1000);
}

function showMessage(element, text, type) {
  element.textContent = text;
  element.classList.remove("success", "error");
  element.classList.add(type);
}

function clearMessage(element) {
  element.textContent = "";
  element.classList.remove("success", "error");
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}