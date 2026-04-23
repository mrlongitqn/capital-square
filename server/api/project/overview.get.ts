import { pageContent, projectInfo } from '../../data/project'

export default defineEventHandler(() => {
  return {
    project: projectInfo,
    pageContent
  }
})
