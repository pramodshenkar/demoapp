import getters from "./getters";

const todosModule = {
    state() {
        return {
            todos: [
                { id: 1, task: "wakeup early", done: true },
                { id: 2, task: "do breakfast", done: true },
                { id: 3, task: "end  task", done: true },
                { id: 4, task: "goto office", done: false },
                { id: 5, task: "submit project", done: false },
            ]
        }
    },
    getters: getters
}

export default todosModule;