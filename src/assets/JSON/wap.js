export default {
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
      id: 'wc02',
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
        classes: ['omnifood-main', 'flex'],
        cmps: [
          {
            id: 'wc04',
            classes: ['omnifood-card', 'flex'],
            type: 'wap-card',
            info: {
              num: '',
              imgUrl: '',
              heading: 'Japanese Gyozas',
              subheading: '',
              list: [
                { icon: '', txt: '650 calories' },
                { icon: '', txt: 'NutriScore ® 74' },
                { icon: '', txt: '4.9 rating (537)' },
              ],
            },
            style: {},
          },
          {
            id: 'wc04',
            classes: ['omnifood-card', 'flex'],
            type: 'wap-card',
            info: {
              num: '',
              imgUrl: '',
              heading: 'Avocado Salad',
              subheading: '',
              list: [
                { icon: '', txt: '400 calories' },
                { icon: '', txt: 'NutriScore ® 92' },
                { icon: '', txt: '4.9 rating (441)' },
              ],
            },
          },
          {
            id: 'wc04',
            classes: ['omnifood-list', 'flex'],
            type: 'wap-list',
            heading: 'Works with any diet',
            info: {
              'list-icon': '',
              list: ['Vegeterian', 'Vegan', 'Pescatarian', 'Gluten-free', 'Lactose-free', 'Keto', 'Paleo', 'Low FODMAP', 'Kid-friendly'],
              link: '',
            },
            style: {},
          },
        ]
      }
    },
    {
      id: 'wc06',
      classes: ['omnifood-reviews', 'flex'],
      type: 'wap-reviews',
      cmps: [
        {
          id: 'wc05',
          classes: ['omnifood-txt'],
          type: 'wap-txt',
          heading: "Once you try it, you can't go back",
          subheading: "TESTIMONIALS",
        },
        {
          id: 'wc08',
          classes: ['omnifood-review'],
          type: 'wap-review',
          info: {
            imgUrl: "",
            heading: 'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
            subheading: '— Dave Bryson',
          }
        },
        {
          id: 'wc015',
          classes: ['omnifood-review'],
          type: 'wap-review',
          info: {
            imgUrl: "",
            heading: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
            subheading: '— Ben Hadley',
          }
        },
        {
          id: 'wc017',
          classes: ['omnifood-review'],
          type: 'wap-review',
          info: {
            imgUrl: "",
            heading: "Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!",
            subheading: '— Steve Miller',
          }
        },
        {
          id: 'wc018',
          classes: ['omnifood-review'],
          type: 'wap-review',
          info: {
            imgUrl: "",
            heading: "I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic.",
            subheading: '— Hannah Smith',
          }
        },
        {
          id: 'wc019',
          classes: ['omnifood-review-gallery'],
          type: 'wap-imgs',
          imgs: ['food1.jpg', 'food2.jpg......'],

        }
      ]
    },
    {
      id: 'wc0789',
      type: 'wap-container',
      classes: [],
      info: {
        cmps: [
          {
            id: 'wc695',
            classes: [],
            type: 'wap-card',
            info: {
              heading: 'STARTER',
              subheading: "per month. That's just 13$ per meal!",
              price: 399,
              list: [
                { icon: '', txt: '1 meal per day' },
                { icon: '', txt: 'Order from 11am to 9pm' },
                { icon: '', txt: 'Delivery is free' },
              ],
              btn: { label: 'Start Eating Well!', link: '#wc03' },
            }
          },
          {
            id: 'wc6956',
            classes: [],
            type: 'wap-card',
            info: {
              heading: 'COMPLETE',
              subheading: "per month. That's just 11$ per meal!",
              price: 649,
              list: [
                { icon: '', txt: '2 meals per day' },
                { icon: '', txt: 'Order 24/7' },
                { icon: '', txt: 'Delivery is free' },
                { icon: '', txt: 'Get access to latest recipes' },
              ],
              btn: { label: 'Start Eating Well!', link: '#wc03' },
            }
          }
        ]
      }
    }
  ],
  isPublic: true,
}
