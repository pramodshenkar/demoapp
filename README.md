# Register component :
    1. Globally :
        in main.js -
            import SinglePost from './components/SinglePost.vue'
            Vue.component('SinglePost', SinglePost)
        in App.vue : 
            <template>
                <single-post></single-post>
            </template>
    2. Locally  :
        in App.vue -
            <template>
                <single-post></single-post>
            </template>

            <script>
            import SinglePost from "./components/SinglePost.vue";

            export default {
            components: {
                SinglePost,
            },
            };
            </script>

# Props : 
    - One way data flow : Parent --> child
    - can't change props value in Child : err
    - If we change props value in Parent then props value in child also automatically get changed.
    - name must be a smallcase string with "". We cant use "userData" however we can use "user-data" as prop name

    - syntax : 
        in app.vue - <mycomponent :user:"'Pramod'" :age="22"></mycomponent>
        in comp.vue - 
            <script>
                export default {
                    props : ["user","age"]
                }
            </script>

# props validation
 types :
  - required
  - Type
  - validator : takes function that checks value & if condition is false give error in console.
  NOTE : this is console error only. No error on cmd or page. Page will show passed props value even it is invalid
 in conp.vue
    - props: {
        username: {
        type: String,
        required: true,
        },
        designation: {
        type: String,
        required: false,
        default: "IT Employee",
        },
        age: {
        type: Number,
        required: true,
        validator: function (value) {
            return value > 0 && value < 150;
        },
        },
    },
