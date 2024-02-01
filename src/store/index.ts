//@ts-ignore
import { createStore } from "vuex";
import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import { Store } from "vuex/types/index.js";

const store: Store<any> = createStore({
  actions,
  mutations,
  state,
});

export default store;
