Vue.component("UserCard", {
  template: `
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">{{title}}</h4>
              <p class="card-text">{{post}}</p>
            </div>
          </div>
        </div>`,
  props: ['title', 'post']
});

new Vue({
  el: "#app",
  data: {
    title: "App",
  },
});
