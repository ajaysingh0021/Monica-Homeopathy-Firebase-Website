import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS_DATA } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import { SITE_TITLE } from '@/lib/constants';
import { format } from 'date-fns';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';

type Props = {
  params: { postSlug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = BLOG_POSTS_DATA.find(p => p.slug === params.postSlug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
    keywords: [...(post.keywords || []), 'blog', SITE_TITLE],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS_DATA.map((post) => ({
    postSlug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const { postSlug } = params;
  const post = BLOG_POSTS_DATA.find((p) => p.slug === postSlug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-4xl">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>

      <article className="bg-card p-6 sm:p-8 rounded-xl shadow-xl">
        <header className="mb-8">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-md mb-6">
            <Image
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              priority // Prioritize loading hero image for LCP
              data-ai-hint={post.dataAiHint || 'article main image'}
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1.5" />
              Published on {format(new Date(post.date), 'MMMM d, yyyy')}
            </div>
            <div className="flex items-center">
              <UserCircle className="h-4 w-4 mr-1.5" />
              By {post.author}
            </div>
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.keywords && post.keywords.length > 0 && (
          <footer className="mt-10 pt-6 border-t">
            <h3 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center">
              <Tag className="h-4 w-4 mr-2" />
              Related Topics:
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((keyword) => (
                <Badge key={keyword} variant="secondary" className="transition-colors hover:bg-primary/20">
                  {keyword.charAt(0).toUpperCase() + keyword.slice(1)}
                </Badge>
              ))}
            </div>
          </footer>
        )}
      </article>

      {/* Simple "Next/Previous Post" navigation could be added here if desired */}
      <div className="mt-12 flex justify-between">
        {/* Example: Find previous post */}
        { BLOG_POSTS_DATA.indexOf(post) > 0 && 
          <Button variant="outline" asChild>
            <Link href={`/blog/${BLOG_POSTS_DATA[BLOG_POSTS_DATA.indexOf(post)-1].slug}`}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous Post
            </Link>
          </Button>
        }
        { BLOG_POSTS_DATA.indexOf(post) < BLOG_POSTS_DATA.length - 1 &&
          <Button variant="outline" asChild className="ml-auto">
            <Link href={`/blog/${BLOG_POSTS_DATA[BLOG_POSTS_DATA.indexOf(post)+1].slug}`}>
              Next Post <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
            </Link>
          </Button>
        }
      </div>
    </div>
  );
}
