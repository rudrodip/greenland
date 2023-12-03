import { marketingConfig } from "@/config/marketing";
import { MainNav } from "@/components/navbar/main-nav";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import SiteFooter from "@/components/footer/SiteFooter";
import ThemeToggleDropDown from "@/components/theme/ThemeToggleDropDown";
import { UserAccountNav } from "@/components/navbar/user-account-nav";
import { getCurrentUser } from "@/lib/session";
import { Button } from "@/components/ui/button";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const user = await getCurrentUser();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 mx-2 lg:mx-0 sticky top-0">
        <div className="flex h-15 lg:h-15 items-center justify-between lg:justify-evenly py-6 border-none border-gradient border-gradient-primary only-bottom mb-1 backdrop-blur-sm">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.logo />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <MainNav items={marketingConfig.mainNav} />
          <div className="flex justify-center items-center gap-3">
            <ThemeToggleDropDown />
            {user ? (
              <UserAccountNav
                user={{
                  name: user.name,
                  image: user.image,
                  email: user.email,
                }}
              />
            ) : (
              <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1 app overflow-x-hidden">{children}</main>
      <SiteFooter />
    </div>
  );
}
