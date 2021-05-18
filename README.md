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
