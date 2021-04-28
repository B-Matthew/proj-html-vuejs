function initVue() {
  new Vue({
    el: '.vue',
    data: {
      ind: 0,
      showSearch: true,
      projects: 0,
      comments: 0,
      clients: 0,

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
      // MOSTRO la SEARCH SECTION 
      searchBar: function () {
        this.showSearch = !this.showSearch;
      },
      nextJumbo: function () {
        this.ind++
        if (this.ind >= 3) {
          this.ind = 0;
        }
      },
      // INCREMENTO NUMERI NELLA SEZION3 CLIENTS
      setTime: function () {
        if (this.projects < 280) {
        this.projects++
        }
        if (this.comments < 3500) {
          this.comments++
        }
        if (this.clients < 100) {
          this.clients++
        }
      },
    },
    // SWITCH JUMBOTRON OGNI 5 SEC
    mounted:  function() {
      setInterval(this.nextJumbo,5000);
    },
    // INCREMENTO NUMERI NELLA SEZION3 CLIENTS
    mounted: function() {
      setInterval(this.setTime,0)
    }
  });
}

function init() {
  initVue();
}

$(document).ready(init);
