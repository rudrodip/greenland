import Hero from "@/components/header/hero";
import { CardGroup } from "@/components/features/feature-collection";
import { allPosts } from "@.contentlayer/generated";
import { compareDesc } from "date-fns";
import { formatDate } from "@src/lib/utils";
import Image from "next/image";
import Link from "next/link";
import GenerateFact from "@/components/fact/generate-fact";
import ContactPage from "@/components/contact/contact";

export default function App() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <main className="">
      <Hero />
      <div
        id="features"
        className="min-h-screen flex justify-center items-center"
      >
        <CardGroup />
      </div>
      <h1 className="head-text lg:text-left text-center">Articles</h1>
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-3">
          {posts.slice(0, 6).map((post, index) => (
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
                <p className="text-muted-foreground">{post.description}</p>
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
      <GenerateFact />
      <ContactPage />
    </main>
  );
}
