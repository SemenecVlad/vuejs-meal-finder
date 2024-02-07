<script setup lang="ts">
import { TitleText, SpinnerCircle, AppInput } from "@components";
import { ref } from "vue";
import { foodImg } from "@assets/img";
import { validateEmail } from "@/helpers/validateEmail";

let email = ref<string>("");
let loading = ref<boolean>(false);

const onPasswordRestore = () => {
  let isValidEmail = validateEmail(email.value);
  if (!isValidEmail) {
    alert("Please enter a valid email address");
    return;
  }
  alert("Password restore link sent to your email (not really)");
};
</script>

<template>
  <div class="flex items-center justify-center h-screen p-8">
    <div
      class="flex flex-col md:w-1/3 items-center justify-center bg-orange-400 p-20 rounded-xl shadow-lg"
    >
      <div class="flex flex-row self-start items-center mb-14">
        <img :src="foodImg" alt="logo" class="w-20 h-20 mr-5 object-contain" />
        <TitleText
          class="text-white text-center mb-0"
          style="text-shadow: rgba(0, 0, 0, 0.4) 2px 2px 2px"
        >
          Meal Finder App
        </TitleText>
      </div>
      <TitleText class="text-white self-start">Forgot Password:</TitleText>
      <h3 class="text-white self-start mb-8">
        Enter your email, if everything fine we will send you a link for
        password restore
      </h3>
      <AppInput type="email" placeholder="Email" v-model="email" />

      <button
        @click="onPasswordRestore"
        type="submit"
        :disabled="!email"
        class="flex justify-center items-center my-4 rounded w-full h-14 bg-white text-orange-500 text-center hover:opacity-80 disabled:opacity-80 disabled:cursor-not-allowed hover:cursor-pointer"
      >
        <SpinnerCircle v-if="loading" />
        <span v-else>Send</span>
      </button>
      <div>
        <router-link
          :to="{ name: 'login' }"
          class="text-white hover:underline hover:cursor-pointer"
          >Login</router-link
        >
      </div>
      <div>
        <router-link
          :to="{ name: 'register' }"
          class="text-white hover:underline hover:cursor-pointer"
          >Don't have an account? Register</router-link
        >
      </div>
    </div>
  </div>
</template>
