import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CalendarDays, User, Share2, Facebook, Linkedin, Twitter } from 'lucide-react';
import { getBlogPost, getBlogPosts, BlogPost as BlogPostType } from '@/lib/payload';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const ShareButton = ({
    icon: Icon,
    label,
    onClick,
    color,
}: {
    icon: React.ElementType;
    label: string;
    onClick: () => void;
    color: string;
}) => (
    <button
        onClick={onClick}
        aria-label={label}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all text-xs font-semibold uppercase tracking-wider ${color}`}
    >
        <Icon size={14} />
        {label}
    </button>
);

const RelatedCard = ({ post }: { post: BlogPostType }) => (
    <Link
        to={`/blog/${post.slug}`}
        className="group flex gap-4 items-start p-4 rounded-xl border border-border hover:border-primary/30 transition-all bg-card/50"
    >
        <div className="w-20 h-16 rounded-lg overflow-hidden bg-background shrink-0">
            {post.heroImage?.url ? (
                <img
                    src={post.heroImage.url}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <span className="text-lg font-black text-primary/20">B</span>
                </div>
            )}
        </div>
        <div className="min-w-0">
            <p className="text-xs text-muted-foreground/60 font-semibold uppercase tracking-wider mb-1">
                {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString('hu-HU', { month: 'long', day: 'numeric' })
                    : ''}
            </p>
            <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                {post.title}
            </h4>
        </div>
    </Link>
);

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPostType | null>(null);
    const [related, setRelated] = useState<BlogPostType[]>([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (!slug) return;
        const load = async () => {
            setLoading(true);
            setNotFound(false);
            try {
                const data = await getBlogPost(slug);
                if (!data) {
                    setNotFound(true);
                    return;
                }
                setPost(data);

                // Load related posts (same category, exclude current)
                if (data.categories && data.categories.length > 0) {
                    const catSlug = data.categories[0].slug;
                    const relatedData = await getBlogPosts(catSlug);
                    setRelated(relatedData.filter((p) => p.slug !== slug).slice(0, 3));
                }
            } catch {
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [slug]);

    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

    const share = (platform: 'facebook' | 'twitter' | 'linkedin') => {
        const urls: Record<string, string> = {
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
            twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post?.title || '')}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
        };
        window.open(urls[platform], '_blank', 'noopener,noreferrer,width=600,height=400');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-background pt-32">
                <div className="max-w-4xl mx-auto px-6 animate-pulse space-y-8">
                    <div className="h-[40vh] bg-card rounded-2xl" />
                    <div className="h-10 bg-card rounded w-3/4" />
                    <div className="space-y-3">
                        <div className="h-4 bg-card rounded" />
                        <div className="h-4 bg-card rounded" />
                        <div className="h-4 bg-card rounded w-2/3" />
                    </div>
                </div>
            </div>
        );
    }

    if (notFound || !post) {
        return (
            <div className="pt-32 min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h2 className="text-3xl font-black text-foreground mb-4">A bejegyzés nem található</h2>
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-foreground transition-colors"
                    >
                        <ArrowLeft size={14} /> Vissza a blogra
                    </Link>
                </div>
            </div>
        );
    }

    const formattedDate = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString('hu-HU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
          })
        : null;

    const seoTitle = post.seoTitle || `${post.title} — Bond & Beyond Blog`;
    const seoDescription = post.seoDescription || post.excerpt || '';

    return (
        <>
            <Helmet>
                <title>{seoTitle}</title>
                <meta name="description" content={seoDescription} />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDescription} />
                {post.heroImage?.url && <meta property="og:image" content={post.heroImage.url} />}
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDescription} />
                {post.heroImage?.url && <meta name="twitter:image" content={post.heroImage.url} />}
            </Helmet>

            <div className="min-h-screen bg-background">
                {/* Hero Image */}
                <div className="relative h-[45vh] md:h-[55vh] w-full overflow-hidden">
                    {post.heroImage?.url ? (
                        <img
                            src={post.heroImage.url}
                            alt={post.heroImage.alt || post.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-card flex items-center justify-center">
                            <span className="text-8xl font-black text-primary/10">B&B</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />

                    {/* Breadcrumb + title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="max-w-4xl mx-auto">
                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest mb-4 text-muted-foreground/60">
                                <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                                {post.categories && post.categories.length > 0 && (
                                    <>
                                        <span>/</span>
                                        <span className="text-primary">{post.categories[0].title}</span>
                                    </>
                                )}
                                <span>/</span>
                                <span className="text-foreground/60 truncate max-w-[200px]">{post.title}</span>
                            </nav>

                            <h1 className="text-3xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
                                {post.title}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Main */}
                        <article className="lg:flex-1 min-w-0">
                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border">
                                {post.categories?.map((cat) => (
                                    <Badge key={cat.id} variant="gold" className="rounded-full px-3 py-0.5 text-[10px]">
                                        {cat.title}
                                    </Badge>
                                ))}
                                <div className="flex items-center gap-4 text-muted-foreground/60 text-xs font-semibold uppercase tracking-wider ml-auto">
                                    {formattedDate && (
                                        <span className="flex items-center gap-1.5">
                                            <CalendarDays size={12} />
                                            {formattedDate}
                                        </span>
                                    )}
                                    {post.author && (
                                        <span className="flex items-center gap-1.5">
                                            <User size={12} />
                                            {post.author}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Excerpt */}
                            {post.excerpt && (
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-light">
                                    {post.excerpt}
                                </p>
                            )}

                            {/* Rich text body */}
                            {post.body?.html && (
                                <div
                                    className="prose-blog"
                                    dangerouslySetInnerHTML={{ __html: post.body.html }}
                                />
                            )}

                            {/* Share */}
                            <div className="mt-16 pt-8 border-t border-border">
                                <div className="flex items-center gap-4 flex-wrap">
                                    <div className="flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase tracking-widest">
                                        <Share2 size={14} />
                                        Megosztás
                                    </div>
                                    <ShareButton
                                        icon={Facebook}
                                        label="Facebook"
                                        onClick={() => share('facebook')}
                                        color="hover:text-[#1877F2]"
                                    />
                                    <ShareButton
                                        icon={Twitter}
                                        label="X / Twitter"
                                        onClick={() => share('twitter')}
                                        color="hover:text-foreground"
                                    />
                                    <ShareButton
                                        icon={Linkedin}
                                        label="LinkedIn"
                                        onClick={() => share('linkedin')}
                                        color="hover:text-[#0A66C2]"
                                    />
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:w-80 shrink-0">
                            {/* Back to blog */}
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-widest hover:text-foreground transition-colors mb-10 group"
                            >
                                <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
                                Vissza a blogra
                            </Link>

                            {/* Related posts */}
                            {related.length > 0 && (
                                <Card className="p-6 sticky top-28">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
                                        Kapcsolódó bejegyzések
                                    </h3>
                                    <div className="flex flex-col gap-3">
                                        {related.map((r) => (
                                            <RelatedCard key={r.id} post={r} />
                                        ))}
                                    </div>
                                </Card>
                            )}
                        </aside>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPost;
