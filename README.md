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

# mapState, mapGetters, mapMutation, mapAction :
    - we always have to write this.$store.state to acces state,getter,mutation & action.
    - to avoid lengthy syntax mapState, mapGetters, mapMutation, mapAction comes in existance
    - Note: They mapstate, mapGetters should written in computed property
    & mapMutations , mapActions should written in methods.
    - Syntax :
        - they should be imported from vuex
        - before these all three we should write ... ie as like ...mapState
   
    - eg :
        import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

        computed: {
            ...mapState({
            count: (state) => state.count,
            }),
            ...mapGetters({
            counterPercent: "counterPercent",
            }),
        },
        methods: {
            ...mapMutations({
            onIncrementByMutation: "incrementMutation",
            }),
            ...mapActions({
            onIncrementByAction: "incrementAction",
            }),

# Modules :
    - we will seprate all data using modules.
    ie all counter data,getter,mutations & actions in counterModule module
       all todos data,getter,mutations & actions in todosModule module

    - Syntax :
    create a const object & put all data in that module.
    register that object variable in store

    - Eg :
        const counterModule = {
            state() {
                return {
                count: 0,
                }
            },
            getters: {
                counterPercent(state) {
                return state.count / 10
                }
            },
            mutations: {
                incrementMutation(state, obj) {
                state.count = state.count + obj.amount
                }
            },
            actions: {
                incrementAction(context, obj) {
                context.commit('incrementMutation', obj)
                }
            }
        }
    
    const store = new Vuex.Store({
        modules: {
            counter: counterModule,
            todos: todosModule
        }
    })

    this is about creating module.
    now access modules data in project :
    - All data accesible using mapState, mapGetters, mapMutations & mapActions.
    - mapGetters, mapMutatiosn & mapAction syntax will remained same
      But in mapState we will use moduleName.statename
      eg  :
      ...mapState({
            todos: (state) => state.todos.todos,
        }),                           ^     ^
                                      |     |- this is statename.
                                      |-this is modulename.

    
# Namespaces for modules :
    - What if 2 modules have same named 
        - getters --> Error : Dupllicate
        - Mutation & Actions --> called both mutations & actions

    - To avoid this we uses a namespacing for modules 

    - Eg :
      add this in module : namespaced: true,
      now namespace name is module name which is defined in store :
        modules: {
            counter: counterModule,
        }
      now accessing getters mutation & action in component as  :
        computed: {
            ...mapState({
            count: (state) => state.counter.count,
            }),
            ...mapGetters({
            counterPercent: "counter/counterPercent",
            }),
        },
        methods: {
            ...mapMutations({
            onIncrementByMutation: "counter/incrementMutation",
            }),
            ...mapActions({
            onIncrementByAction: "counter/incrementAction",
            }),
        },

    - if we have multiple getters , mutation or actions in single module then we avoid counter word each time we can write :
        ...mapGetters("counter/", {
            counterPercent: "counterPercent",
        }),

# Folder structure for store
- In src folder :
    - src
        - store
            - store.js  : create store & export it in main.js
            - modules  
                - ModuleName
                    - index.js          // Export module to store.js
                    - getters.js        // Export these three files in index.js
                    - mutations.js      //
                    - actions.js        //



