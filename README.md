# Vuex :
    cmd :

    - Access data directy :     $store.state.count 
    - access via computed Property :
        computed: {
            count() {
            return this.$store.state.count;
            },
        }
    - we can update this data by 2 ways 
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
                    





        - in component methods :
            onIncrement() {
                this.$store.state.count++;
            },
    - 

