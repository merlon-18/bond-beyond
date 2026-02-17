const PAYLOAD_URL = import.meta.env.VITE_PAYLOAD_URL || 'https://bond-beyond-cms.vercel.app';

export interface Category {
    id: string;
    title: string;
    slug: string;
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    heroImage?: {
        url: string;
        alt?: string;
    };
    excerpt?: string;
    body?: {
        html: string;
    };
    publishedAt?: string;
    author?: string;
    categories?: Category[];
    status: 'draft' | 'published';
    seoTitle?: string;
    seoDescription?: string;
}

interface PayloadResponse<T> {
    docs: T[];
    totalDocs: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    page: number;
    totalPages: number;
}

export async function getBlogPosts(category?: string): Promise<BlogPost[]> {
    const params = new URLSearchParams({
        where: JSON.stringify({
            status: { equals: 'published' },
            ...(category ? { 'categories.slug': { equals: category } } : {}),
        }),
        sort: '-publishedAt',
        depth: '1',
        limit: '100',
    });

    const res = await fetch(`${PAYLOAD_URL}/api/blog-posts?${params}`);
    if (!res.ok) throw new Error('Failed to fetch blog posts');
    const data: PayloadResponse<BlogPost> = await res.json();
    return data.docs;
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
    const params = new URLSearchParams({
        where: JSON.stringify({ slug: { equals: slug } }),
        depth: '2',
        limit: '1',
    });

    const res = await fetch(`${PAYLOAD_URL}/api/blog-posts?${params}`);
    if (!res.ok) throw new Error('Failed to fetch blog post');
    const data: PayloadResponse<BlogPost> = await res.json();
    return data.docs[0] ?? null;
}

export async function getCategories(): Promise<Category[]> {
    const res = await fetch(`${PAYLOAD_URL}/api/categories?limit=50`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    const data: PayloadResponse<Category> = await res.json();
    return data.docs;
}
