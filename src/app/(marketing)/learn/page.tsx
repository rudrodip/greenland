import Image from "next/image";
import Link from "next/link";
import { allPosts } from "@.contentlayer/generated";
import { compareDesc } from "date-fns";

import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <main>
      <section id="blogs">
        <h1 className="head-text text-center my-5 lg:my-16">Learn about <span className="primary-gradient">Climate Change</span></h1>
        <Link href="/blog">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl primary-gradient underline-animation mb-5">
            GreenLand Blog
          </h1>
        </Link>
        {posts?.length ? (
          <div className="grid gap-10 sm:grid-cols-4">
            {posts.slice(0, 8).map((post, index) => (
              <article
                key={post._id}
                className="group relative flex flex-col space-y-2"
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={804}
                    height={452}
                    className="rounded-md border bg-muted transition-colors"
                    priority={index <= 1}
                  />
                )}
                <h2 className="text-2xl font-extrabold">{post.title}</h2>
                {post.description && (
                  <p className="text-muted-foreground">{post.description.slice(0, 70)}...</p>
                )}
                {post.date && (
                  <p className="text-sm text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                )}
                <Link href={post.slug} className="absolute inset-0">
                  <span className="sr-only">View Article</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>No articles published.</p>
        )}
      </section>
    </main>
  );
}
