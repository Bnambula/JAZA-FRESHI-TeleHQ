import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCard from "@/components/ProductCard";
import ComboBaskets from "@/components/ComboBaskets";
import BrandPartners from "@/components/BrandPartners";
import RecipesSection from "@/components/RecipesSection";
import { products } from "@/data/products";

const Index = () => {
  const featured = products.filter((p) => p.status === "featured" || p.status === "flash_sale");
  const popular = products.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <CategoryGrid />

      {featured.length > 0 && (
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">FEATURED & DEALS</h2>
              <p className="text-muted-foreground">Don't miss these special offers</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {featured.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      <ComboBaskets />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">POPULAR PRODUCTS</h2>
            <p className="text-muted-foreground">Most loved by our customers</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {popular.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <RecipesSection />
      <BrandPartners />
    </div>
  );
};

export default Index;
