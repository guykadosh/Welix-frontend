var wap = {
  _id: '5e28393890dd7201a06d4e44',
  name: 'Lukas Rudrof – Funktionales Webdesign, Webflow & SEO',
  imgUrl:
    'http://res.cloudinary.com/webify/image/upload/v1580021948/coffe_yi0yzf.png',
  createdBy: {
    _id: '5e26e0b718a0891d4c995527',
    fullname: 'Lukas Rudrof',
    imgUrl: 'img.jpg',
  },
  usersData: {
    contacts: [
      { email: 'user@user.com', msg: 'Please send me stuff', at: 123 },
    ],
    signups: [{ email: 'user@user.com', at: 123 }],
  },
  theme: 'vivid',
  cmps: [
    {
      _id: 'wc02',
      type: 'wap-header',
      classes: [
        'omnifood-header',
        'flex',
        'justify-between',
        'full',
        'main-layout',
      ],
      info: {
        logo: {
          img: '',
          title: '',
          style: {},
        },
        nav: {
          _id: 'wc05',
          type: 'wap-nav',
          info: {
            links: [
              { title: 'How it works', href: '#how' },
              { title: 'Meals', href: '#meals' },
              { title: 'Reviews', href: '#reviews' },
              { title: 'Pricing', href: '#pricing' },
              { title: 'Try for free', href: '#cta' },
            ],
          },
          style: {},
        },
      },
      style: {},
    },
    {
      id: 'wc01',
      type: 'wap-hero',
      classes: ['omnifood-hero'],
      info: {
        heading: {
          title: 'A healthy meal delivered to your door, every single day',
          style: {},
        },
        'sub-heading': {
          title:
            'The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.',
          style: {},
        },
        btns: [
          { label: 'Start Eating Well!', link: '#wc03' },
          { label: 'Learn more', link: '#wc03' },
        ],
        imgUrl: 'hero-img.jpg',
      },
      style: {},
    },
    {
      id: 'wc04',
      classes: ['omnifood-brand', 'flex'],
      type: 'wap-imgs',
      info: {
        title: 'as featured in',
        imgs: ['brandname1.jpg', 'brandname2.jpg'],
      },
      style: {},
    },
    {
      id: 'wc03',
      type: 'wap-container',
      info: {
        dir: 'row',
        cmps: [
          {
            id: 'wc04',
            classes: ['omnifood-brand', 'flex'],
            type: 'wap-card',
            info: {
              num: '',
              imgUrl: '',
              heading: '',
              subheading: '',
              list: [
                { icon: '', txt: '' },
                { icon: '', txt: '' },
                { icon: '', txt: '' },
              ],
            },
            style: {},
          },
          ,
          {
            id: 'wc04',
            classes: ['omnifood-brand', 'flex'],
            type: 'wap-card',
            info: {
              num: '',
              imgUrl: '',
              heading: '',
              subheading: '',
              list: [
                { icon: '', txt: '' },
                { icon: '', txt: '' },
                { icon: '', txt: '' },
              ],
            },
            style: {},
          },
          {
            id: 'wc04',
            classes: ['omnifood-brand', 'flex'],
            type: 'wap-list',
            info: {
              'list-icon': '',
              list: ['Vegeterian', 'Vegan'],
              link: '',
            },
            style: {},
          },
          ,
        ],
      },
      style: {},
    },
  ],
  isPublic: true,
}
