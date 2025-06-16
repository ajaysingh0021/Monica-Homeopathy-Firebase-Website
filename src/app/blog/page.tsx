import { BlogPostCard } from '@/components/BlogPostCard';
import { BLOG_POSTS_DATA } from '@/lib/data';
import type { Metadata } from 'next';
import { SITE_TITLE, DEFAULT_KEYWORDS } from '@/lib/constants';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wellness Blog',
  description: `Discover insightful articles on homeopathy, naturopathy, wellness tips, and healthcare advice from Dr. Monica at ${SITE_TITLE}. Relevant for US and Indian audiences.`,
  keywords: ['homeopathy blog', 'naturopathy articles', 'wellness tips', ...DEFAULT_KEYWORDS],
};

// This is a server component, so search functionality would require client component interaction or query params.
// For simplicity, a visual search bar is added, but actual filtering is not implemented here.
export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Wellness Insights Blog
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore articles on homeopathic treatments, wellness tips, and healthcare advice to empower your health journey.
        </p>
      </div>
      
      {/* Placeholder Search Bar - non-functional in this static generation */}
      <div className="mb-10 max-w-xl mx-auto">
        <div className="relative">
          <Input type="search" placeholder="Search articles..." className="pl-10 h-12 text-base" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        {/* <Button className="mt-2 w-full sm:w-auto">Search</Button> */}
      </div>


      <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS_DATA.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Placeholder for Pagination if many posts */}
      {BLOG_POSTS_DATA.length > 9 && (
        <div className="mt-16 text-center">
          <Button variant="outline">Load More Posts</Button>
        </div>
      )}
    </div>
  );
}
