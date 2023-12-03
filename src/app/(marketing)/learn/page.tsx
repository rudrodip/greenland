import Image from "next/image";
import Link from "next/link";
import { allPosts } from "@.contentlayer/generated";
import { compareDesc } from "date-fns";
import { formatDate } from "@/lib/utils";
import { ExternalLink } from "@/components/chat/external-link";

export const metadata = {
  title: "Learn",
};

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <main className="space-y-10 overflow-hidden">
      <section id="blogs">
        <h1 className="head-text text-center my-5 lg:my-16">
          Learn about <span className="primary-gradient">Climate Change</span>
        </h1>
        <Link href="/blog">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl primary-gradient underline-animation mb-5">
            GreenLander Blog
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
                  <p className="text-muted-foreground">
                    {post.description.slice(0, 70)}...
                  </p>
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
      <section id="videos">
        <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl primary-gradient underline-animation mb-5">
          Video Contents
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <iframe
            className="w-full h-60"
            src="https://www.youtube.com/embed/fOtChVfzpCI"
            title="#LIVE COP28 Reaching the Last Mile - Pledging Session"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-60"
            src="https://www.youtube.com/embed/ipkPcrNsCv8"
            title="How we’re doing on the path to zero emissions"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-60"
            src="https://www.youtube.com/embed/yiw6_JakZFc"
            title="Can YOU Fix Climate Change?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-60"
            src="https://www.youtube.com/embed/cTQ3Ko9ZKg8"
            title="Our Planet | Frozen Worlds | FULL EPISODE | Netflix"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-60"
            src="https://www.youtube.com/embed/LxgMdjyw8uw"
            title="We WILL Fix Climate Change!"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-60"
            src="https://www.youtube.com/embed/ipVxxxqwBQw"
            title="Who Is Responsible For Climate Change? – Who Needs To Fix It?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-60"
            src="https://www.youtube.com/embed/EhAemz1v7dQ"
            title="Do we Need Nuclear Energy to Stop Climate Change?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-60"
            src="https://www.youtube.com/embed/CaLOiGEDPJQ"
            title="Why you don’t hear about the ozone layer anymore"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-60"
            src="https://www.youtube.com/embed/wbR-5mHI6bo"
            title="Is It Too Late To Stop Climate Change? Well, it&#39;s Complicated."
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section id="resources">
        <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl primary-gradient underline-animation mb-5">
          Resources
        </h1>
        <div className="flex flex-col space-y-4 items-start">
          <ExternalLink href="https://www.ipcc.ch/">
            Intergovernmental Panel on Climate Change (IPCC)
          </ExternalLink>
          <ExternalLink href="https://climate.nasa.gov/">
            NASA Climate Change
          </ExternalLink>
          <ExternalLink href="https://www.climate.gov/">
            NOAA Climate
          </ExternalLink>
          <ExternalLink href="https://public.wmo.int/en/our-mandate/climate">
            World Meteorological Organization (WMO)
          </ExternalLink>
          <ExternalLink href="https://www.carbonbrief.org/">
            Carbon Brief
          </ExternalLink>
          <ExternalLink href="https://www.yaleclimateconnections.org/">
            Yale Climate Connections
          </ExternalLink>
          <ExternalLink href="https://www.climatecentral.org/">
            Climate Central
          </ExternalLink>
          <ExternalLink href="https://www.theguardian.com/environment">
            The Guardian - Environment
          </ExternalLink>
          <ExternalLink href="https://www.nature.com/nclimate/">
            Nature Climate Change
          </ExternalLink>
          <ExternalLink href="https://www.scientificamerican.com/climate/">
            Scientific American - Climate
          </ExternalLink>
        </div>
      </section>
    </main>
  );
}
