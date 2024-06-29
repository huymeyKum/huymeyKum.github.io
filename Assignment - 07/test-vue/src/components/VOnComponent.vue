<template>
    <div class="login-container">
      <div class="login-card">
        <h2>Welcome back,</h2>
        <p>Please login to your admin account.</p>
        <div class="input-group">
          <label for="username">Username</label> <br>
          <input type="text" v-model="username">
        </div>
        <div class="input-group">
          <label for="password">Password</label><br>
          <input id="password" v-model="password" type="text" />
        </div>
        <button @click="login" class="login-button">Login</button>
        <div class="user-login" v-if="showUserData">
            <div class="name">Username: {{ user.name }}</div>
            <div class="password">Password: {{ user.password }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        user:{},
        showUserData: false
      };
    },
    methods: {
      login() {
        // Handle login logic here
        console.log('Logging in with', this.username, this.password);
        this.user = {
            name: this.username,
            password: this.password,
        }
        this.username = '';
        this.password = '';
        this.showUserData = true;
      },
    },
  };
  </script>
  
  <style scoped>
  .login-card {
    width: 30%;
    margin: auto;
    padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
margin-top: 60px;
}
input[type="text"],
input[type="password"] {
    padding: 10px;
    width: 90%;
    border-radius: 7px;
    border: 1px solid;
    margin-top: 10px;
}
button.login-button {
    margin-top: 20px;
    border: none;
    padding: 10px;
    border-radius: 7px;
}
.user-login {
    margin-top: 50px;
}
  </style>
  