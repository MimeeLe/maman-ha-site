const articleModules = import.meta.glob('./blogArticles/*.js', {
  eager: true,
  import: 'default',
})

export const blogPosts = Object.values(articleModules).sort(
  (firstPost, secondPost) => new Date(secondPost.date) - new Date(firstPost.date),
)
