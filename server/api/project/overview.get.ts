import { mediaLibrary, pageContent, projectInfo, vietnameseLandingStyle } from '../../data/project'

export default defineEventHandler(() => {
  return {
    project: projectInfo,
    pageContent,
    mediaLibrary,
    vietnameseLandingStyle
  }
})
