import { useParams, Link } from "wouter";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/lib/seo-data";
import PageHead from "@/components/PageHead";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CallToActionBanner from "@/components/CallToActionBanner";

function BlogIndex() {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Painting Tips & Expert Guides | Ted Croft Painting LLC Blog"
        description="Expert painting advice, color trends, and home improvement tips from Omaha's premier painting contractor. 25+ years of professional insights."
        canonical="https://tedcroftpainting.com/blog"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Ted Croft Painting Blog",
          "description": "Expert painting tips, color trends, and home improvement guides for Omaha homeowners",
          "url": "https://tedcroftpainting.com/blog",
          "publisher": { "@type": "Organization", "name": "Ted Croft Painting LLC" }
        }}
      />
      <Navigation />

      <section className="pt-24 pb-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-red-600 hover:text-red-500 mb-6 text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
          </Link>
          <span className="text-red-600 font-semibold uppercase tracking-wider text-sm block mb-4">
            Expert Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Painting Tips & Guides</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Professional painting advice from Omaha's most experienced painting contractor
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-red-600 cursor-pointer h-full">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <span className="bg-gray-100 text-red-700 px-3 py-1 rounded-full font-medium">{post.category}</span>
                      <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center text-red-600 font-semibold">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CallToActionBanner />
    </div>
  );
}

function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog"><button className="bg-black text-white px-6 py-3 rounded-lg">Back to Blog</button></Link>
        </div>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.date,
    "author": { "@type": "Person", "name": "Ted Croft" },
    "publisher": { "@type": "Organization", "name": "Ted Croft Painting LLC", "url": "https://tedcroftpainting.com" },
    "url": `https://tedcroftpainting.com/blog/${post.slug}`,
    "keywords": post.tags.join(", ")
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen">
      <PageHead
        title={`${post.title} | Ted Croft Painting LLC`}
        description={post.metaDescription}
        canonical={`https://tedcroftpainting.com/blog/${post.slug}`}
        schema={schema}
      />
      <Navigation />

      <section className="pt-24 pb-12 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-red-600 hover:text-red-500 mb-6 text-sm">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Link>
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
            <span className="bg-red-600/20 text-red-600 px-3 py-1 rounded-full font-medium">{post.category}</span>
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" />{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
        </div>
      </section>

      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-6 text-lg">{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                <Tag className="w-3 h-3 mr-1" />{tag}
              </span>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Start Your Painting Project?</h3>
            <p className="text-gray-600 mb-6">Contact Ted Croft Painting LLC for a free, no-obligation estimate.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:4028123445" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Call (402) 812-3445
              </a>
              <Link href="/#contact" className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Get Free Estimate
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">More Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {otherPosts.slice(0, 2).map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block border border-gray-200 rounded-lg p-6 hover:border-red-600 hover:shadow-md transition-all">
                  <span className="text-sm text-red-600 font-medium">{p.category}</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-1 mb-2">{p.title}</h4>
                  <span className="text-red-600 text-sm font-semibold">Read More →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <CallToActionBanner />
    </div>
  );
}

export { BlogIndex, BlogPost };
