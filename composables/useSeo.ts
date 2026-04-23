interface SeoPayload {
  title: string
  description: string
  path?: string
  image?: string
}

export const useSeo = (payload: SeoPayload) => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl
  const canonical = new URL(payload.path || '/', siteUrl).toString()

  useSeoMeta({
    title: payload.title,
    description: payload.description,
    ogTitle: payload.title,
    ogDescription: payload.description,
    ogType: 'website',
    ogUrl: canonical,
    ogImage: payload.image || `${siteUrl}/og-default.jpg`,
    twitterCard: 'summary_large_image'
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }]
  })
}
