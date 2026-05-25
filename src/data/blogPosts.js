const articleModules = import.meta.glob('./blogArticles/*.js', {
  eager: true,
})

export const blogPosts = Object.values(articleModules)
  .map((module) => module.default)
  .filter(Boolean)
  .sort(
    (firstPost, secondPost) => new Date(secondPost.date) - new Date(firstPost.date),
  )
