import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VueFire, VueFireAuth } from "vuefire";

import { firebaseApp } from "@/helpers/firebase";

createApp(App)
  .use(router)
  .use(store)
  .use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })
  .mount("#app");
