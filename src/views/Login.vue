<template>
  <section class="login">
    <h1>Login</h1>
    <form class="form">
      <label for>Email</label>
      <input type="email" name="email" id="email" v-model="login.email" />
      <label for>Password</label>
      <input type="password" name="password" id="password" v-model="login.pass" />
      <button class="btn" @click.prevent="logar">Log in</button>
    </form>
    <p class="lostPass">
      <a href="/" target="_blank">Lost your password? Click here.</a>
    </p>
    <CreateLogin />
  </section>
</template>

<script>
import CreateLogin from "@/components/CreateLogin.vue";
export default {
  components: {
    bane: "Login",
    CreateLogin
  },
  data() {
    return {
      login: {
        email: "",
        pass: ""
      }
    };
  }
};
</script>

<style scoped>
h1 {
  margin-top: 40px;
  text-align: center;
  font-size: 2rem;
  color: #87f;
}
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

.form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.lostPass {
  text-align: center;
  margin: 20px auto 0 auto;
}

.lostPass a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
