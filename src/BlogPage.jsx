import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from './data/blogPosts'

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog cuisine vietnamienne à Strasbourg | Maman Hà</title>
        <meta
          name="description"
          content="Découvrez le blog de Maman Hà : cuisine vietnamienne, plats traditionnels, spécialités familiales, conseils et histoires autour du Vietnam à Strasbourg."
        />
        <link rel="canonical" href="https://maman-ha.com/blog" />
        <meta property="og:title" content="Blog cuisine vietnamienne à Strasbourg | Maman Hà" />
        <meta
          property="og:description"
          content="Découvrez le blog de Maman Hà : cuisine vietnamienne, plats traditionnels et histoires autour du Vietnam à Strasbourg."
        />
        <meta property="og:url" content="https://maman-ha.com/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="flex-1 bg-[#f7ead8] text-[#3b2416]">
        <section className="px-6 py-20 md:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#9b3d1f]">
              Blog
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              Cuisine vietnamienne, histoires familiales et saveurs du Vietnam
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5c4030]">
              Retrouvez ici des articles autour de la cuisine vietnamienne, des plats emblématiques,
              des traditions culinaires et de l’univers de Maman Hà à Strasbourg.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="overflow-hidden rounded-3xl bg-white/70 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-64 w-full object-cover"
                    />

                    <div className="p-7">
                      <p className="mb-3 text-sm text-[#8b5a3c]">
                        {post.date} · {post.readingTime}
                      </p>

                      <h2 className="text-2xl font-bold">{post.title}</h2>

                      <p className="mt-4 leading-relaxed text-[#5c4030]">
                        {post.excerpt}
                      </p>

                      <span className="mt-6 inline-block font-semibold text-[#9b3d1f]">
                        Lire l’article →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
