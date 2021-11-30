<template>
  <div class="flex justify-center w-full">
    <div class="flex justify-center w-screen shadow-2xl login-zone mt-10">
      <div
        class="
          rounded-4xl
          bg-white
          card
          w-full
          flex
          justify-center
          items-center
        "
      >
        <div style="background-color: #43362d" class="w-full px-3 py-7">
          <p style="color: #faf2c5" class="ml-4 font-bold text-2xl">
            Welcome To Meow~!
          </p>
        </div>
        <div class="bg-white mb-5 px-5">
          <form class="flex flex-col w-80" @submit.prevent="userLogin">
            <input
              v-model="login.username"
              type="text"
              placeholder="Username"
              class="m-5 p-4 mt-6 mb-3 rounded-4xl"
            />
            <input
              v-model="login.password"
              type="text"
              placeholder="Password"
              class="m-5 p-4 my-3 rounded-4xl"
            />
            <div class="flex justify-center">
              <button
                class="login-button py-3 my-3 w-2/5 rounded-4xl btn text-md"
                type="submit"
              >
                Log in
              </button>
            </div>
          </form>

          <div class="flex justify-center">
            <nuxt-link
              to="register"
              class="sign-up ml-16 my-3 w-2/5 rounded-4xl text-md"
            >
              Sign up
            </nuxt-link>
          </div>
          <button
            class="login-button py-3 my-3 w-2/5 rounded-4xl btn text-md"
            type="submit"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // middleware: "auth",
  layout: "noAuth",

  data() {
    return {
      login: {
        username: "",
        password: "",
      },
      errors: false,
    };
  },
  mounted() {
    console.log(this.$auth.user);
    console.log(this.$auth.loggedIn);
  },
  methods: {
    async userLogin() {
      const payloads = {
        username: this.login.username,
        password: this.login.password,
      };
      try {
        console.log(payloads);
        // await this.$auth.loginWith("local", { data: this.login });
        await this.$auth.loginWith("local", { data: payloads });
        this.$router.push("/cat");

        // console.log(response);

        console.log(this.login);
        console.log(this.$auth.user);
        console.log(this.$auth.loggedIn);
      } catch (e) {
        if (e) {
          this.errors = true;
        }
      }
    },
  },
  async logout() {
    await this.$auth.logout();
  },
};
</script>

<style scoped>
@media (min-width: 320px) {
  .login-zone {
    width: 90%;
  }
}

@media (min-width: 375px) {
  .login-zone {
    width: 80%;
  }
}

@media (min-width: 425px) {
  .login-zone {
    width: 70%;
  }
}

@media (min-width: 768px) {
  .login-zone {
    width: 40%;
  }
}

@media (min-width: 1024px) {
  .login-zone {
    width: 30%;
  }
}
input[type="text"] {
  border: 2px solid #bbbbbb;
  color: #9e5f43;
}

.login-button {
  border: transparent;
  background-color: #c34f7c;
}

.login-button:hover {
  border: transparent;
  background-color: #a55521;
}
.sign-up {
  text-decoration: underline;
  color: #43362d;
}

.sign-up:hover {
  color: #c34f7c;
}
html {
  background: no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* ไม่ติดดดด */
  background-image:url("https://i.pinimg.com/564x/69/ca/7c/69ca7cd269e752eba1b869e83937b64b.jpg");
}
</style>
