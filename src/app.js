function initVue() {
  new Vue({
    el: '.vue',
    data: {
      ind: 0,
      showSearch: true,
      projects: 0,
      comments: 0,
      clients: 0,
      zommed: false,
      test: 0,
      scrollArrow: false,
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
      ],
      linksArr: [
        {
          link: "Careers"
        },
        {
          link: "News"
        },
        {
          link: "Term of use"
        },
        {
          link: "Privacy Projects"
        },
        {
          link: "About"
        },
        {
          link: "Contact"
        },
      ],
      contactArr: [
        {
          info: "Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051"
        },
        {
          info: "info@yourdomain.com"
        },
        {
          info: "+99 (0) 101 0000 888"
        },
      ]
    },
      // SWITCH JUMBOTRON OGNI 5 SEC
    created: function() {
      setInterval(this.nextJumbo,5000);
    },

    methods: {
      // FUNZIONE PER NASCONDERE LA FRECCIA SCROLL
      scrollShow: function () {
        if(window.scrollY > 500){
          this.scrollArrow = true;
        }else {
          this.scrollArrow = false;
        }
        if (window.scrollY > 4800) {
          setInterval(this.setTime,400);
        }
      },
      clickJumbo: function(elem) {
        const active = elem - 1;
        console.log(active);
        return this.ind = active;
      },
      // MOSTRO la SEARCH SECTION
      searchBar: function () {
        this.showSearch = !this.showSearch;
      },
      // ZOOM SULLA MAPPA
      mapZoom: function() {
        this.zommed = !this.zommed;
      },
      // SCROLLPAGE
      scrollUpPage: function() {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      },
      // INCREMENTO IND
      nextJumbo: function () {
        this.ind++
        if (this.ind >= 3) {
          this.ind = 0;
        }
      },
      // INCREMENTO NUMERI NELLA SEZION3 CLIENTS
      setTime: function () {
        if (this.projects < 280) {
          this.projects = this.projects + 2;
        }
        if (this.comments < 3500) {
          this.comments = this.comments + 25;
        }
        if (this.clients < 100) {
          this.clients++;
        }
      },
    },
    // INCREMENTO NUMERI NELLA SEZION3 CLIENTS
    mounted: function() {
      document.addEventListener('scroll', this.scrollShow);
    }

  });
}



function init() {
  initVue();
}

$(document).ready(init);
