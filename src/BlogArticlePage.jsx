import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useMemo, useState } from 'react'
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

const shareIcons = {
  share: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.6 12.8 15.4 16.7M15.4 7.3 8.6 11.2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 9.2a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4ZM6 14.7a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4ZM18 20.2a2.7 2.7 0 1 0 0-5.4 2.7 2.7 0 0 0 0 5.4Z" />
    </svg>
  ),
  whatsapp: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M12.04 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.45 1.33 4.96L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.48 0 9.93-4.45 9.93-9.93S17.53 2 12.04 2Zm0 18.16h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 1 1 6.97 3.85Zm4.49-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.16-.29.19-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.22.9 2.41 1.02 2.57.12.17 1.76 2.69 4.26 3.77.6.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  ),
  facebook: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.9h2.78l-.44 2.91h-2.34V22A10.03 10.03 0 0 0 22 12.06Z" />
    </svg>
  ),
  x: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M13.72 10.62 20.45 3h-1.59l-5.85 6.62L8.35 3H2.96l7.06 10.02L2.96 21h1.59l6.17-6.98L15.65 21h5.39l-7.32-10.38Zm-2.18 2.46-.72-1L5.14 4.17h2.45l4.59 6.38.72 1 5.97 8.3h-2.45l-4.88-6.77Z" />
    </svg>
  ),
  email: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm8 7.35L4.35 7.2A.45.45 0 0 0 4 7.64v.48l8 5.38 8-5.38v-.48a.45.45 0 0 0-.35-.44L12 12.35Z" />
    </svg>
  ),
  copy: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h10v12H8z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </svg>
  ),
  check: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 12.5 4.2 4.2L19 7" />
    </svg>
  ),
}

function ShareArticleButton({ post }) {
  const [hasCopied, setHasCopied] = useState(false)

  const articleUrl = useMemo(() => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/blog/${post.slug}`
    }

    return `https://maman-ha.com/blog/${post.slug}`
  }, [post.slug])

  const encodedUrl = encodeURIComponent(articleUrl)
  const encodedTitle = encodeURIComponent(post.title)
  const encodedText = encodeURIComponent(post.excerpt)

  const shareLinks = [
    {
      label: 'WhatsApp',
      icon: shareIcons.whatsapp,
      className: 'hover:bg-[#25d366] hover:text-white',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      label: 'Facebook',
      icon: shareIcons.facebook,
      className: 'hover:bg-[#1877f2] hover:text-white',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: 'X',
      icon: shareIcons.x,
      className: 'hover:bg-[#111111] hover:text-white',
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      label: 'Email',
      icon: shareIcons.email,
      className: 'hover:bg-[#9b3d1f] hover:text-white',
      href: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`,
    },
  ]

  async function handleCopyLink() {
    if (!navigator.clipboard) {
      return
    }

    await navigator.clipboard.writeText(articleUrl)
    setHasCopied(true)
    setTimeout(() => setHasCopied(false), 1800)
  }

  return (
    <aside
      className="mt-7 flex flex-wrap items-center gap-3 rounded-2xl border border-[#8d473e]/15 bg-white/60 px-3 py-3 shadow-sm shadow-[#8d473e]/5 backdrop-blur"
      aria-label="Partager cet article"
    >
      <div className="flex items-center gap-2 pr-1 text-sm font-semibold text-[#5c4030]">
        <span className="grid size-9 place-items-center rounded-full bg-[#f2dcc2] text-[#9b3d1f]">
          {shareIcons.share}
        </span>
        <span>Partager</span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {shareLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            title={link.label}
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
            className={`grid size-11 place-items-center rounded-full bg-white text-[#9b3d1f] shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#9b3d1f]/25 ${link.className}`}
            aria-label={`Partager sur ${link.label}`}
          >
            {link.icon}
          </a>
        ))}

        <button
          type="button"
          onClick={handleCopyLink}
          title={hasCopied ? 'Lien copié' : 'Copier le lien'}
          className="grid size-11 place-items-center rounded-full bg-[#3b2416] text-[#f7ead8] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#2d1a10] focus:outline-none focus:ring-2 focus:ring-[#9b3d1f]/25"
          aria-label={hasCopied ? 'Lien copié' : 'Copier le lien'}
        >
          {hasCopied ? shareIcons.check : shareIcons.copy}
        </button>
      </div>
    </aside>
  )
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

            <ShareArticleButton post={post} />

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
