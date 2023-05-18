module.exports = function () {
  return {
    url: process.env.SITE_URL || 'https://localhost:8080',
    name: 'Lility',
    author: {
      name: 'Lili',
      twitterHandle: '<your-twitter-here>'
    },
    defaultFeaturedImage: '/assets/images/ogImage.webp',
    logo: '/assets/images/logo.webp'
  }
}