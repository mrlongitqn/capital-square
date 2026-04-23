export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const ghostUrl = config.public.ghostUrl
  const key = config.public.ghostContentKey

  if (!key) {
    return { posts: [] }
  }

  const endpoint = `${ghostUrl}/ghost/api/content/posts/?key=${key}&fields=title,slug,excerpt,published_at&limit=9`

  const response = await $fetch<{ posts: Array<Record<string, string>> }>(endpoint)
  return response
})
