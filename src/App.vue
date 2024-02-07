<script setup lang="ts">
import { watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCurrentUser } from "vuefire";

const user = useCurrentUser();
const router = useRouter();
const route = useRoute();

watch(user, async (currentUser, previousUser) => {
  // redirect to login if they logout and the current
  // route is only for authenticated users
  if (!currentUser && previousUser) {
    console.log("Redirect to login");
    return router.push({ name: "login" });
  }
  // redirect the user if they are logged in but were
  // rejected because the user wasn't ready yet, logged in
  // then got back to this page
  if (currentUser && typeof route.query.redirect === "string") {
    console.log("Redirect to", route.query.redirect);
    return router.push(route.query.redirect);
  }
});
</script>

<template>
  <router-view />
</template>
