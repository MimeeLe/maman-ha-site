import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from './data/blogPosts'

function renderInlineText(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }

    return part
  })
}

function renderArticleContent(content) {
  if (Array.isArray(content)) {
    return content.map((section) => (
      <section key={section.heading}>
        <h2 className="mb-4 text-2xl font-bold text-[#3b2416]">
          {section.heading}
        </h2>
        <p>{section.body}</p>
      </section>
    ))
  }

  return content
    .trim()
    .split('\n')
    .map((line, index) => {
      const trimmedLine = line.trim()

      if (!trimmedLine) {
        return null
      }

      if (trimmedLine.startsWith('# ')) {
        return null
      }

      if (trimmedLine === '---') {
        return <hr key={index} className="border-[#8d473e]/15" />
      }

      const imageMatch = trimmedLine.match(/^!\[(.+)]\((.+)\)$/)

      if (imageMatch) {
        const [, alt, src] = imageMatch

        return (
          <img
            key={index}
            src={src}
            alt={alt}
            className="my-10 h-auto w-full rounded-3xl object-cover shadow-sm"
          />
        )
      }

      if (trimmedLine.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-bold text-[#3b2416]">
            {renderInlineText(trimmedLine.replace('### ', ''))}
          </h3>
        )
      }

      if (trimmedLine.startsWith('## ')) {
        return (
          <h2 key={index} className="pt-4 text-2xl font-bold text-[#3b2416]">
            {renderInlineText(trimmedLine.replace('## ', ''))}
          </h2>
        )
      }

      return <p key={index}>{renderInlineText(trimmedLine)}</p>
    })
}

export default function BlogArticlePage() {
  const { slug } = useParams()
  const post = blogPosts.find((article) => article.slug === slug)

  if (!post) {
    return (
      <main className="flex-1 bg-[#f7ead8] px-6 py-20 text-[#3b2416]">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold">Article introuvable</h1>

          <Link to="/blog" className="mt-6 inline-block font-semibold text-[#9b3d1f]">
            Retour au blog
          </Link>
        </div>
      </main>
    )
  }

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: `https://maman-ha.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Maman Hà',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Maman Hà',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://maman-ha.com/blog/${post.slug}`,
    },
  }

  return (
    <>
      <Helmet>
        <title>{post.metaTitle || `${post.title} | Maman Hà`}</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />

        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
      </Helmet>

      <main className="flex-1 bg-[#f7ead8] text-[#3b2416]">
        <article className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-3xl">
            <Link to="/blog" className="mb-8 inline-block font-semibold text-[#9b3d1f]">
              ← Retour au blog
            </Link>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9b3d1f]">
              Blog Maman Hà
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {post.title}
            </h1>

            <p className="mt-5 text-sm text-[#8b5a3c]">
              {post.date} · {post.readingTime}
            </p>

            <img
              src={post.image}
              alt={post.title}
              className="mt-10 h-[420px] w-full rounded-3xl object-cover shadow-sm"
            />

            <div className="mt-12 space-y-10 text-lg leading-relaxed text-[#4c3324]">
              {renderArticleContent(post.content)}
            </div>

            <div className="mt-14 rounded-3xl bg-white/70 p-8">
              <h2 className="text-2xl font-bold">
                Envie de goûter la cuisine vietnamienne de Maman Hà ?
              </h2>

              <p className="mt-4 text-[#5c4030]">
                Découvrez notre menu et nos spécialités vietnamiennes à Strasbourg.
              </p>

              <Link
                to="/menu"
                className="mt-6 inline-block rounded-full bg-[#9b3d1f] px-6 py-3 font-semibold text-[#f7ead8] transition hover:opacity-90"
              >
                Voir le menu
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
