export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const ghostUrl = config.public.ghostUrl
  const key = config.public.ghostContentKey
  const { slug } = getQuery(event)

  if (!key || !slug || typeof slug !== 'string') {
    return { post: null }
  }

  const endpoint = `${ghostUrl}/ghost/api/content/posts/slug/${slug}/?key=${key}&formats=html`

  const response = await $fetch<{ posts: Array<Record<string, string>> }>(endpoint)
  return { post: response.posts[0] || null }
})
