"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        logoAlt="DogMemecoin"
        navItems={[
          { name: "Hero", id: "hero" },
          { name: "About", id: "about" },
          { name: "How to Buy", id: "how-to-buy" },
          { name: "Tokenomics", id: "tokenomics" },
          { name: "Footer", id: "footer" }
        ]}
        buttonText="Get Meme"
        className="bg-white shadow"
        buttonClassName="bg-FF6B6B text-white"
      />

      <div id="hero" data-section="hero" className="scroll-mt-24 bg-gradient-to-r from-FF6B6B to-FFD166">
        <TokenBillboardHero
          title="Welcome to DogMemecoin!"
          subtitle="Join the fun in meme-inspired cryptocurrency"
          contractAddress="0x1234567890abcdef"
          copyButtonText="Copy Address"
          copiedText="Address copied!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24 bg-white">
        <SplitAbout
          description="Discover the playfulness of our DogMemecoin and what makes us unique in the crypto world!"
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24 bg-white">
        <HowToBuy2D variant="simple" />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24 bg-FBFDFF">
        <NumberGridTokenomics
          title="Tokenomics Overview"
          description="Understanding our token's economy is key!"
          kpiItems={[
            { value: "100M", description: "Total Supply" },
            { value: "50M", description: "Circulating Supply" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24 bg-white">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="DogMemecoin"
          logoText="DogMemecoin"
          columns={[
            { items: [
              { label: "Home", onClick: () => {} },
              { label: "About", onClick: () => {} }
            ] },
            { items: [
              { label: "Tokenomics", onClick: () => {} }
            ] }
          ]}
          copyrightText="© 2023 DogMemecoin"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}