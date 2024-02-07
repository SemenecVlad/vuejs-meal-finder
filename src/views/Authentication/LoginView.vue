<script setup lang="ts">
import { TitleText, SpinnerCircle, AppInput } from "@components";
import { ref } from "vue";
import {
  signInWithEmailAndPassword,
  Auth,
  UserCredential,
} from "firebase/auth";
import { validateEmail } from "@helpers/validateEmail";
import { useFirebaseAuth } from "vuefire";
import { useRouter } from "vue-router";
import { foodImg } from "@assets/img";

const auth: Auth | null = useFirebaseAuth();
const router = useRouter();

let email = ref<string>("");
let password = ref<string>("");
let loading = ref<boolean>(false);

const onLogin = async (): Promise<void> => {
  let isValidEmail = validateEmail(email.value);
  if (!isValidEmail) {
    alert("Please enter a valid email address");
    return;
  }
  loading.value = true;
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth!,
      email.value,
      password.value
    );
    const user = userCredential.user;
    console.log("User: ", user);
    router.push({ name: "home" });
  } catch (error: any) {
    alert(`Failed to login because of error: ${error.code} ${error.message}`);
    error.value = error.message;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="flex items-center justify-center h-screen p-8">
    <div
      class="flex flex-col w-1/3 items-center justify-center bg-orange-400 px-20 py-20 rounded-xl shadow-lg"
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
      <TitleText class="text-white self-start">Login:</TitleText>
      <h3 class="text-white self-start mb-8">Let's get started!</h3>
      <AppInput type="email" placeholder="Email" v-model="email" class="mb-5" />
      <AppInput type="password" placeholder="Password" v-model="password" />
      <div class="self-end">
        <router-link
          :to="{ name: 'forgotPassword' }"
          class="text-white hover:underline hover:cursor-pointer"
          >Forgot Password?</router-link
        >
      </div>
      <button
        @click="onLogin"
        type="submit"
        :disabled="!email || !password"
        class="flex justify-center items-center my-8 rounded w-full h-14 bg-white text-orange-500 text-center hover:opacity-80 disabled:opacity-80 disabled:cursor-not-allowed hover:cursor-pointer"
      >
        <SpinnerCircle v-if="loading" />
        <span v-else>Login</span>
      </button>
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
