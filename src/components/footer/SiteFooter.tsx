import MobileFooter from "./MobileFooter";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site";
import { ExternalLink } from "@/components/chat/external-link";

export default async function SiteFooter() {
  return (
    <main className="border-t mt-6 backdrop-blur-sm">
      <section
        id="footer"
        className="container mx-auto hidden p-4 md:p-6 lg:p-10 lg:grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <div className="flex flex-col items-start ml-10">
          <div className="flex justify-start items-center gap-3 mb-3">
            <Icons.logo />
            <h1 className="font-heading text-center">{siteConfig.name}</h1>
          </div>
          <p className="max-w-sm text-sm">{siteConfig.description}</p>
        </div>
        <div id="support" className="flex flex-col items-start ml-10">
          <h1 className="font-heading primary-gradient mb-3">Socials</h1>
          {Object.keys(siteConfig.links).map((key) => {
            const typedKey = key as keyof typeof siteConfig.links;
            const capitalizedKey =
              typedKey.charAt(0).toUpperCase() + typedKey.slice(1);

            return (
              <ExternalLink
                key={typedKey}
                href={siteConfig.links[typedKey]}
              >
                {capitalizedKey}
              </ExternalLink>
            );
          })}
        </div>
      </section>
      <div className="block lg:hidden">
        <MobileFooter />
      </div>
    </main>
  );
}
