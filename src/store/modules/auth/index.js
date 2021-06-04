import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const authModule = {
    namespaced: true,
    state() {
        return {
            name: "Pramod",
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions
}

export default authModule;
