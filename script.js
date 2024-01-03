// Função para redirecionar o usuário ao clicar no ícone
function redirectUser() {
    // Aqui você pode definir a URL para onde deseja redirecionar o usuário
    window.location.href = 'login.html';
  }
  
  // Simulação de nomes de usuário (pode ser obtido após o registro)
  const registeredUsers = {
    'usuario1': 'CONVIDADO',
    'usuario2': 'Bob'
  };
  
  // Obtendo o nome do usuário (ou definindo como "Convidado" se não estiver registrado)
  document.addEventListener('DOMContentLoaded', function() {
    const userIcon = document.querySelector('.user-icon');
    const usernameSpan = document.getElementById('username');
  
    // Simulação: o usuário atual é 'usuario1'
    const currentUser = 'usuario1';
  
    if (registeredUsers[currentUser]) {
      usernameSpan.textContent = registeredUsers[currentUser];
    } else {
      usernameSpan.textContent = 'Convidado';
    }
  });
  
  const firebaseConfig = {
    apiKey: "AIzaSyDu68sO4-WiO5ECcdNBwxrODIyMDAjFFsI",
    authDomain: "onotera-4e4ea.firebaseapp.com",
    projectId: "onotera-4e4ea",
    // ... outras configurações do seu projeto Firebase
  };
  
  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);

  // Formulário de Registro
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nickname = document.getElementById('nickname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    // Se as senhas não coincidirem, exibir uma mensagem de erro
    alert('As senhas não coincidem. Por favor, digite novamente.');
    return;
  }

  // Criar novo usuário com e-mail e senha
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Atualizar o perfil com o nickname (opcional)
      userCredential.user.updateProfile({
        displayName: nickname
      }).then(() => {
        // Sucesso ao criar um novo usuário
        const user = userCredential.user;
        console.log("Novo usuário registrado:", user.uid);
      }).catch((error) => {
        console.error("Erro ao atualizar o perfil:", error);
      });
    })
    .catch((error) => {
      // Lidar com erros durante o registro
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erro ao registrar novo usuário:", errorMessage);
    });
});

// Formulário de Login
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;

  // Fazer login com e-mail e senha
  firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
    .then((userCredential) => {
      // Sucesso ao fazer login
      const user = userCredential.user;
      console.log("Usuário logado:", user.uid);
    })
    .catch((error) => {
      // Lidar com erros durante o login
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erro ao fazer login:", errorMessage);
    });
});

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Sucesso ao fazer login
    const user = userCredential.user;
    // Redirecionar para a página inicial
    window.location.href = 'index.html';
  })
  .catch((error) => {
    // Lidar com erros durante o login
    // ...
  });

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // O usuário está logado
      const displayName = user.displayName;
      const usernameSpan = document.getElementById('username');
      
      if (displayName) {
        // Se existir um displayName (nickname), exibe-o
        usernameSpan.textContent = displayName;
      } else {
        // Se não houver displayName, exibe "Convidado" por padrão
        usernameSpan.textContent = 'Convidado';
      }
    } else {
      // O usuário não está logado
      // Redirecionar para a página de login ou exibir o ícone do usuário como "Convidado"
    }
  });
  

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // O usuário está logado
      const displayName = user.displayName;
      const usernameSpan = document.getElementById('username');
      
      if (displayName) {
        // Se existir um displayName (nickname), exibe-o
        usernameSpan.textContent = displayName;
      } else {
        // Se não houver displayName, exibe "Convidado" por padrão
        usernameSpan.textContent = 'Convidado';
      }
    } else {
      // O usuário não está logado
      // Redirecionar para a página de login ou exibir o ícone do usuário como "Convidado"
    }
  });
  
  /// Adicionar evento de clique para alternar entre senha visível e oculta
const togglePassword = document.querySelector('.toggle-password');
togglePassword.addEventListener('click', function () {
  const passwordField = document.querySelector('#password');
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    this.classList.add('active');
  } else {
    passwordField.type = 'password';
    this.classList.remove('active');
  }
});


