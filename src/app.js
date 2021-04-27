function initVue() {
  new Vue({
    el: '.vue',
    data: {

      showSearch: true,
      // ARRAY
      iconArr:
      [
        {
          icon :  "fab fa-facebook-f",
        },
        {
          icon: "fab fa-twitter"
        },
        {
          icon: "fab fa-pinterest-p"
        }
      ],
      navArr: [
        {
          links: "HOME"
        },
        {
          links:"ABOUT"
        },
        {
          links:"SERVICES"
        },
        {
          links:"SHOWCASE"
        },
        {
          links:"BLOG"
        },
        {
          links:"CONTACT"
        },
      ]
    },
    methods: {
      searchBar: function () {
      this.showSearch = !this.showSearch;
      }
    }
  });
}

function init() {
  initVue();
}

$(document).ready(init);
