export default defineNuxtConfig({
  modules: ['@nuxtjs/seo'],
  app: {
    head: {
      htmlAttrs: { lang: 'vi' },
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | Capital Square Đà Nẵng',
      meta: [
        { name: 'theme-color', content: '#0f172a' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  site: {
    url: process.env.SITE_URL || 'https://capital-square-danang.vn',
    name: 'Capital Square Đà Nẵng',
    description: 'Website SEO chuyên biệt cho dự án Capital Square Đà Nẵng.',
    defaultLocale: 'vi'
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  ogImage: {
    enabled: false
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls']
  },
  robots: {
    disallow: [],
    sitemap: ['/sitemap.xml']
  },
  runtimeConfig: {
    ghostAdminKey: process.env.GHOST_ADMIN_KEY,
    public: {
      siteUrl: process.env.SITE_URL || 'https://capital-square-danang.vn',
      ghostUrl: process.env.GHOST_URL || 'https://your-ghost-domain.com',
      ghostContentKey: process.env.GHOST_CONTENT_KEY || ''
    }
  },
  nitro: {
    prerender: {
      routes: ['/', '/tong-quan', '/vi-tri', '/bang-gia', '/chinh-sach', '/phap-ly', '/blog']
    }
  },
  routeRules: {
    '/': { prerender: true },
    '/tong-quan': { prerender: true },
    '/vi-tri': { prerender: true },
    '/bang-gia': { prerender: true },
    '/chinh-sach': { prerender: true },
    '/phap-ly': { prerender: true },
    '/blog': { swr: 300 }
  },
  compatibilityDate: '2025-01-01'
})
