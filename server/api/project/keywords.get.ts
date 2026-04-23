import { keywordClusters } from '../../data/project'

export default defineEventHandler(() => {
  return {
    updatedAt: new Date().toISOString(),
    clusters: keywordClusters
  }
})
