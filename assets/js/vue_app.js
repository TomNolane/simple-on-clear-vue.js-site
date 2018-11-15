Vue.component('vc-header', {
  template: '<a href="/" class="logo"><img src="images/loremipsumlogo.jpg" alt="logo" /></a>'
});

Vue.component('vc-which-page-home', {
  template: '<ul class="links">' +
    '<li class="active"><a href="/">Главная</a></li>' +
    '<li><a href="/contact.html">Контакты</a></li>' +
    '</ul>'
});
Vue.component('vc-which-page-contact', {
  template: '<ul class="links">' +
    '<li><a href="/">Главная</a></li>' +
    '<li class="active"><a href="/contact.html">Контакты</a></li>' +
    '</ul>'
});

Vue.component('vc-social-icons', {
  template: '<ul class="icons">' +
    '<li><a href="mailto:admin@linezaim.ru?subject=Yo&body=FAQ!" class="icon fa-envelope-o"><span class="label">Email</span></a></li>' +
    '</ul>'
});

Vue.component('vc-copyright', {
  template: '<div id="copyright">&copy;' + ' linezaim.ru 2018' + '</div>'
});


var app = new Vue({
  el: '#app',
  data: {
    name: 'LineZAIM.ru 2018',
    motto: 'LineZAIM.ru 2018',
    name_motto: 'LineZAIM.ru 2018',
    pages: [{
      name: 'Главная',
      link: 'index.html'
    }, {
      name: 'Контакты',
      link: 'contact.html'
    }],
    article: {
      id: '',
      name: '',
      link: '',
      imgs: ['']
    },
    articles: [{
        id: 1,
        name: 'Займер ',
        price: '30 000',
        procent: '0.63',
        age: '18 до 75',
        link: '//pxl.leads.su/click/4913c6dba4e609f7e6e739d29342349b?aff_sub1=linezaim.ru&aff_sub2=linezaim.ru&aff_sub3=linezaim.ru&aff_sub4=linezaim.ru',
        img: 'images/zaymer.png'
      },
      {
        id: 2,
        name: 'Веббанкир ',
        price: '15 000',
        procent: '0.00',
        age: '19 до 100',
        link: 'https://pxl.leads.su/click/72c0cb6b29fa68ebdaa08ecc50e1cbfa?aff_sub1=linezaim.ru&aff_sub2=linezaim.ru&aff_sub3=linezaim.ru&aff_sub4=linezaim.ru',
        img: 'images/webbankir.png'
      },
      {
        id: 3,
        name: 'Смарткредит ',
        price: '14 000',
        procent: '1.90',
        age: '21 до 68',
        link: 'https://pxl.leads.su/click/2ca77373a074a8ad2e431ff55134a5b8?aff_sub1=linezaim.ru&aff_sub2=linezaim.ru&aff_sub3=linezaim.ru&aff_sub4=linezaim.ru&aff_sub2=linezaim.ru&aff_sub3=linezaim.ru&aff_sub4=linezaim.ru',
        img: 'images/smartcredit.png'
      },
      {
        id: 4,
        name: 'Kviku ',
        price: '300 000',
        procent: '0.00',
        age: '18 до 65',
        link: 'https://kviku.ru/cards/?promo=nb&utm_source=linezaim.ru&aff_sub2=linezaim.ru&aff_sub3=linezaim.ru&aff_sub4=linezaim.ru',
        img: 'images/kviku.png'
      }
    ],
    lnk: [{
      twitter: '#',
      fb: '#',
      instagram: '#'
    }]

  },
  methods: {
    getName: function() {
      console.log(this.name);
    },
    getNameAndMotto: function() {
      console.log(this.name + ' ' + this.motto);
    },
    setPageTitle : function(pageTitle){
      console.log(pageTitle);
      window.document.title(pageTitle);
    }
  }

});
