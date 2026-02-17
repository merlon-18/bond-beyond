import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CalendarDays, User, Search, ArrowRight, Tag } from 'lucide-react';
import { getBlogPosts, getCategories, BlogPost, Category } from '@/lib/payload';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const PostCard = ({ post }: { post: BlogPost }) => {
    const formattedDate = post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString('hu-HU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
          })
        : null;

    return (
        <Link
            to={`/blog/${post.slug}`}
            className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)]"
        >
            {/* Image */}
            <div className="relative h-52 overflow-hidden bg-background">
                {post.heroImage?.url ? (
                    <img
                        src={post.heroImage.url}
                        alt={post.heroImage.alt || post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl font-black text-primary/20">B&B</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                {post.categories && post.categories.length > 0 && (
                    <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                        {post.categories.slice(0, 2).map((cat) => (
                            <Badge key={cat.id} variant="gold" className="rounded-full text-[10px] px-3 py-0.5">
                                {cat.title}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h2 className="text-lg font-black text-foreground mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                </h2>
                {post.excerpt && (
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                )}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-muted-foreground/60 text-[11px] font-semibold uppercase tracking-wider">
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
                    <span className="text-primary text-[11px] font-bold uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                        Tovább <ArrowRight size={12} />
                    </span>
                </div>
            </div>
        </Link>
    );
};

const SkeletonCard = () => (
    <div className="bg-card border border-border rounded-2xl overflow-hidden animate-pulse">
        <div className="h-52 bg-background" />
        <div className="p-6 space-y-3">
            <div className="h-5 bg-border rounded w-3/4" />
            <div className="h-4 bg-border rounded w-full" />
            <div className="h-4 bg-border rounded w-2/3" />
        </div>
    </div>
);

const Blog = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>('');
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true);
                const [postsData, catsData] = await Promise.all([getBlogPosts(), getCategories()]);
                setPosts(postsData);
                setCategories(catsData);
            } catch {
                setError('A blog bejegyzések betöltése sikertelen. Kérjük próbálja újra.');
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            const matchesCategory =
                !activeCategory ||
                post.categories?.some((c) => c.slug === activeCategory);
            const q = searchQuery.toLowerCase();
            const matchesSearch =
                !q ||
                post.title.toLowerCase().includes(q) ||
                post.excerpt?.toLowerCase().includes(q);
            return matchesCategory && matchesSearch;
        });
    }, [posts, activeCategory, searchQuery]);

    return (
        <>
            <Helmet>
                <title>Blog — Bond & Beyond</title>
                <meta name="description" content="Rendezvényszervezési tippek, inspiráció és szakmai tudás a Bond & Beyond csapatától." />
            </Helmet>

            <div className="min-h-screen bg-background">
                {/* Hero */}
                <div className="relative pt-32 pb-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-20 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="max-w-7xl mx-auto px-6 relative">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-12 bg-primary" />
                            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em]">Blog</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight mb-6">
                            Rendezvény<br />
                            <span className="gradient-text">Inspiráció</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
                            Tippek, trendek és szakmai tudás a tökéletes rendezvény megvalósításához — a Bond & Beyond csapatától.
                        </p>
                    </div>
                </div>

                {/* Filters */}
                <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-md border-b border-border/50">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        {/* Category badges */}
                        <div className="flex gap-2 flex-wrap">
                            <button
                                onClick={() => setActiveCategory('')}
                                className={cn(
                                    'px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border transition-all',
                                    !activeCategory
                                        ? 'bg-primary text-black border-primary'
                                        : 'bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                                )}
                            >
                                Összes
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(activeCategory === cat.slug ? '' : cat.slug)}
                                    className={cn(
                                        'px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider border transition-all',
                                        activeCategory === cat.slug
                                            ? 'bg-primary text-black border-primary'
                                            : 'bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                                    )}
                                >
                                    {cat.title}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full sm:w-64 shrink-0">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
                            <input
                                type="text"
                                placeholder="Keresés..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-card border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                            />
                        </div>
                    </div>
                </div>

                {/* Posts grid */}
                <div className="max-w-7xl mx-auto px-6 py-16">
                    {loading && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Array.from({ length: 6 }).map((_, i) => (
                                <SkeletonCard key={i} />
                            ))}
                        </div>
                    )}

                    {error && (
                        <div className="text-center py-24">
                            <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-6">
                                <Tag size={24} className="text-muted-foreground" />
                            </div>
                            <p className="text-muted-foreground">{error}</p>
                        </div>
                    )}

                    {!loading && !error && filteredPosts.length === 0 && (
                        <div className="text-center py-24">
                            <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-6">
                                <Search size={24} className="text-muted-foreground" />
                            </div>
                            <p className="text-foreground font-semibold mb-2">Nincs találat</p>
                            <p className="text-muted-foreground text-sm">
                                Próbáljon más keresési feltételeket, vagy törölje a szűrőket.
                            </p>
                        </div>
                    )}

                    {!loading && !error && filteredPosts.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Blog;
