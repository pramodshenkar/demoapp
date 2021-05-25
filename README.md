# Vuex :

# state & Mutations
    cmd :

    - Access data directy :     $store.state.count 
    - access via computed Property :
        computed: {
            count() {
            return this.$store.state.count;
            },
        }
    - we can update this data by 2 ways 
        - in component methods :
            onIncrement() {
                this.$store.state.count++;
            },

        - in mutations: 
            - in main.js :
                mutations: {
                    increment(state) {
                    state.count++
                    }
                }
            - for calling this increament mutation in component method
              we uses commit keyword
              calling can done by 2 ways :
                1.Simple way calling :
                    onIncrement() {
                        this.$store.commit("increment")
                    }

                    - passing params (in vuex we called it payload) to mutations :
                    - 2 ways :
                        1. Direct : 
                            call : this.$store.commit("increment", 5)
                            defination : increment(state, n) {  state.count = n }
                        
                        2. Pass Object :
                            call : this.$store.commit("increment", { amount: 3 });
                            defination : increment(state, obj) {  state.count = obj.amount }

                2. calling by object style :
                     this.$store.commit({
                        type: "increment",
                        amount: 3,
                    });

# getters :
    - Same as computed property ie return data & changes as per data get changes:
    - define :
        getters: {
            doneTodosCount(state) { 
            return state.todos.filter((todo) => todo.done).length;
            }
        },
        returns todo count from todo array whose todo.done == true
    - call it in computed property:
        doneCount() {
        return this.$store.getters.doneTodosCount;
        },

# Getters Inside Getters :
    - just simplly pass getter as param & call getter func.
    - state param is optional param in getters However if we are using getters inside getter & child getter accepting state as param then we must have to pass state as param to parent getter.



# Actios To run Async code (ie http call)
    - Similar to mutations 
    - diff in mutation We shouldn't perform async task ie http calls
      but in actions we can perform async tasks
    
    - Why in mutation we shouldn't perform http call?
    --> coz it is sync type. ie mutations get peroformed line by line without waiting. now we can ask why mutation couldn't wait? its because mutation gives latest states. if it wait then it cant give latest state. thats why mutations shouldn't wait. and that why we couldn't make http call. & thats why we need actions.

    - How to use action for http call?
    --> write mutation inside actions. ie.

    NOTE: actions cannot mutate(change) state. Instead of it it will commit(call) mutations.
    
    - eg:
    - define :
        mutations: {
            increment(state, obj) {
            state.count = state.count + obj.amount
            }
        },
        actions: {
            increment(context, obj) {
            context.commit('increment', obj)
            }
        }

    - call to mutation :    [write dispatch instead of commit]
        onIncrement() {
        //for mutation call :
        // this.$store.commit({

        //for action call
        this.$store.dispatch({
            type: "increment",
            amount: 3,
        });
        },

    

