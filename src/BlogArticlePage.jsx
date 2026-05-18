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

const dishTagStyles = {
  Nord: 'bg-[#dceafe] text-[#24518a]',
  Centre: 'bg-[#ffe8b8] text-[#8a4b12]',
  Sud: 'bg-[#d9f3df] text-[#21643c]',
  'Street food': 'bg-[#ffe0c7] text-[#91400f]',
  Dessert: 'bg-[#fce0ed] text-[#8f2556]',
  Boisson: 'bg-[#e6ddff] text-[#5a3aa4]',
}

function DishGuideContent({ post }) {
  return (
    <div className="mt-12 space-y-14">
      <section className="rounded-3xl bg-white/70 p-7 shadow-sm ring-1 ring-[#8d473e]/10 md:p-8">
        <p className="text-xl leading-relaxed text-[#4c3324]">
          {post.guideIntro}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {Object.keys(dishTagStyles).map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] ${dishTagStyles[tag]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {post.dishGroups.map((group) => (
        <section key={group.title}>
          <div className="mb-5 flex items-center gap-4">
            <h2 className="shrink-0 text-sm font-bold uppercase tracking-[0.22em] text-[#9b3d1f]">
              {group.title}
            </h2>
            <div className="h-px flex-1 bg-[#8d473e]/20" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {group.items.map((dish) => (
              <article
                key={dish.number}
                className={`overflow-hidden rounded-2xl bg-[#fff8ef] shadow-sm ring-1 ring-[#8d473e]/10 transition hover:shadow-md hover:shadow-[#8d473e]/10 ${
                  dish.image ? '' : 'p-4'
                }`}
              >
                {dish.image && (
                  <img
                    src={dish.image}
                    alt={dish.imageAlt || dish.title}
                    className="h-40 w-full object-cover"
                  />
                )}

                <div className={dish.image ? 'p-4' : undefined}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-sans text-2xl font-black leading-none text-[#d5aa83]">
                      {dish.number}
                    </span>

                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${
                        dishTagStyles[dish.tag] || 'bg-[#f2dcc2] text-[#9b3d1f]'
                      }`}
                    >
                      {dish.tag}
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-bold leading-none text-[#3b2416]">
                    {dish.title}
                  </h3>

                  {dish.vietnamese && (
                    <p className="mt-1 font-sans text-xs font-semibold text-[#9b3d1f]">
                      {dish.vietnamese}
                    </p>
                  )}

                  <p className="mt-3 font-sans text-sm leading-6 text-[#5c4030]">
                    {dish.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <section className="rounded-3xl bg-[#3b2416] p-8 text-[#f7ead8] shadow-lg shadow-[#3b2416]/10">
        <h2 className="text-3xl font-bold">Une cuisine à découvrir plat après plat</h2>
        <p className="mt-4 font-sans text-[17px] leading-8 text-[#f7ead8]/90">
          {post.guideConclusion}
        </p>
      </section>
    </div>
  )
}

function DishGuideHero({ post }) {
  return (
    <header className="relative mt-8 overflow-hidden rounded-2xl bg-[#143f2c] px-6 py-10 text-white shadow-lg shadow-[#3b2416]/10 md:px-10 md:py-12">
      <div className="relative z-10 max-w-3xl">
        <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.24em] text-[#68d39c]">
          Guide gastronomique · Vietnam
        </p>

        <h1 className="max-w-4xl text-4xl font-black leading-[0.95] md:text-5xl lg:text-6xl">
          {post.title}
        </h1>

        <p className="mt-6 max-w-2xl font-sans text-base font-semibold leading-8 text-[#bfe4ce] md:text-lg">
          Du nord montagneux aux rives du delta du Mékong, la cuisine vietnamienne
          est l’une des plus nuancées et des plus équilibrées au monde. Voici
          l’essentiel de ce patrimoine culinaire.
        </p>
      </div>
    </header>
  )
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
          <div className={`mx-auto ${post.dishGroups ? 'max-w-5xl' : 'max-w-3xl'}`}>
            <Link to="/blog" className="mb-8 inline-block font-semibold text-[#9b3d1f]">
              ← Retour au blog
            </Link>

            {post.dishGroups ? (
              <DishGuideHero post={post} />
            ) : (
              <>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#9b3d1f]">
                  Blog Maman Hà
                </p>

                <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                  {post.title}
                </h1>
              </>
            )}

            <p className="mt-5 text-sm text-[#8b5a3c]">
              {post.date} · {post.readingTime}
            </p>

            <ShareArticleButton post={post} />

            {!post.dishGroups && (
              <img
                src={post.image}
                alt={post.title}
                className="mt-10 h-[420px] w-full rounded-3xl object-cover shadow-sm"
              />
            )}

            <div className="mt-12 space-y-10 text-lg leading-relaxed text-[#4c3324]">
              {post.dishGroups ? (
                <DishGuideContent post={post} />
              ) : (
                renderArticleContent(post.content)
              )}
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
