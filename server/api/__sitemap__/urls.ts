export default defineSitemapEventHandler(() => {
  const links = [
    '/',
    '/tong-quan',
    '/vi-tri',
    '/bang-gia',
    '/chinh-sach',
    '/phap-ly',
    '/blog'
  ]

  return links.map((path) => ({
    loc: path,
    changefreq: path === '/' ? 'daily' : 'weekly',
    priority: path === '/' ? 1.0 : 0.8
  }))
})
