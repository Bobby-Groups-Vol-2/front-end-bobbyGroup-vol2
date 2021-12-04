<template>
  <div class="flex justify-center w-full">
    <div class="flex justify-center w-screen shadow-2xl login-zone mt-10">
      <div class="rounded-4xl bg-white card w-full flex justify-center">
        <div style="background-color: #43362d" class="w-full px-3 py-7">
          <p style="color: #faf2c5" class="ml-4 font-bold text-2xl">
            Welcome To Meow~!
          </p>
        </div>
        <div class="bg-white mb-5 px-5 flex flex-col">
          <form
            class="flex flex-col justify-center text-black"
            @submit.prevent="
              register(user.username, user.password, user.address, user.tel)
            "
          >
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              class="flex flex-col"
            >
              <input
                v-model="user.username"
                type="text"
                placeholder="Username"
                class="p-4 mt-6 mb-3 rounded-4xl"
              />
              <span class="text-red-600">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="Password"
              rules="required|min:8"
              vid="confirmation"
              class="flex flex-col"
            >
              <input
                v-model="user.password"
                type="password"
                placeholder="Password"
                class="p-4 my-3 rounded-4xl border-gray-400 border-2"
              />
              <span class="text-red-600">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              name="ConfirmPassword"
              rules="required|confirmed:confirmation"
              class="flex flex-col"
            >
              <input
                v-model="confirmation"
                type="password"
                placeholder="Confirm Password"
                class="p-4 my-3 rounded-4xl border-gray-400 border-2"
              />
              <span class="text-red-600">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              class="flex flex-col"
            >
              <input
                v-model="user.address"
                type="text"
                placeholder="Address"
                class="p-4 my-3 rounded-4xl"
              />
              <span class="text-red-600">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|phone:10"
              class="flex flex-col"
            >
              <input
                v-model="user.tel"
                type="number"
                placeholder="Tel."
                class="p-4 my-3 rounded-4xl border-gray-400 border-2"
              />
              <span class="text-red-600">{{ errors[0] }}</span>
            </ValidationProvider>

            <div class="flex justify-center">
              <button
                class="login-button py-3 my-3 w-2/5 rounded-4xl btn text-md"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </form>
          <div class="flex justify-center"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationProvider,
  },
  auth: false,
  layout: "noAuth",

  data() {
    return {
      user: {
        username: "",
        password: "",
        role: "user",
        address: "",
        tel: "",
      },
      confirmation: "",
    };
  },
  methods: {
    async register(userName, userPassword, userAddress, userTel) {
      const user = {
        username: userName,
        password: userPassword,
        role: this.user.role,
        address: userAddress,
        tel: parseInt(userTel),
      };
      // console.log(user);
      try {
        const res = await this.callApi("post", "/api/users", user);
        if (res.status >= 200) {
          this.$toast.success("Register success", {
            position: "bottom-center",
            duration: 500,
          });
          this.$router.push("/");
        }
      } catch (err) {}
    },
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
</style>
