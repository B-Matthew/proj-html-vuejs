function initVue() {
  new Vue({
    el: 'header',
    data: {
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
      ciao: function() {
        console.log(this.iconArr[1]);
      }
    }
  });
}

function init() {
  initVue();
}

$(document).ready(init);
