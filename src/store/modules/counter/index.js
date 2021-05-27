import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const counterModule = {
    namespaced: true,
    state() {
        return {
            count: 0,
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions
}

export default counterModule;
