function initVue() {
  new Vue({
    el: '.vue',
    data: {
      ind: 0,
      showSearch: true,
      // ARRAY
      sectionWebsiteArr: [
        {
          imgs: 'fas fa-tachometer-alt',
          title:"Speed Optimization",
          txt:"Far far away, behind the word mountains, far  from the countries Vokalia Separated...",
        },
        {
          imgs:'fas fa-cloud',
          title:"Cloud Solutions",
          txt:"Far far away, behind the word mountains, far from the countries Vokalia Separated...",
        },
        {
          imgs:'fas fa-tablet-alt',
          title:"Website Design",
          txt:"Far far away, behind the word mountains, far from the countries Vokalia Separated...",
        },
        {
          imgs:'fas fa-stopwatch',
          title:"Online Marketing",
          txt:"Far far away, behind the word mountains, far from the countries Vokalia Separated...",
        },
      ],
      iconArr: [
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
      },
      nextJumbo: function () {
        this.ind++
        if (this.ind >= 3) {
          this.ind = 0;
        }
      },

    },
    mounted: function() {
      setInterval(this.nextJumbo,5000);
    }
  });
}

function init() {
  initVue();
}

$(document).ready(init);
