import { Navigation } from '@/components/Navigation';
import { ToolCard } from '@/components/ToolCard';
import { WaveDivider } from '@/components/WaveDivider';
import { Button } from '@/components/ui/button';
import { CATEGORIES, TOOLS } from '@shared/tools';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Home() {
  const [, setLocation] = useLocation();

  // Get featured tools
  const featuredTools = TOOLS.filter(tool => tool.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden blueprint-grid py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                AI-Powered Marketing Tools
              </span>
            </div>

            <h1 className="gradient-text mb-6">
              Everything You Need to Grow
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              100+ free marketing tools for creators, businesses, and agencies. Generate titles, scripts, captions, hashtags, and more across YouTube, Instagram, TikTok, LinkedIn, and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="button-primary text-base"
                onClick={() => setLocation('/catalog')}
              >
                Explore Tools
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setLocation('/about')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider className="h-16 md:h-24" />

      {/* Categories Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="mb-4">Tools by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized tools for every platform and content type
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {CATEGORIES.map((category, idx) => {
              const categoryTools = TOOLS.filter(t => t.category === category.name);
              const Icon = require('lucide-react')[category.icon];

              return (
                <div
                  key={category.slug}
                  className="animate-slide-up group cursor-pointer"
                  style={{ animationDelay: `${idx * 30}ms` }}
                  onClick={() => setLocation(`/catalog?category=${category.slug}`)}
                >
                  <div className="card-premium p-6 text-center h-full flex flex-col items-center justify-center">
                    <div className="gradient-primary rounded-lg p-4 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {categoryTools.length} tools
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WaveDivider className="h-16 md:h-24" flip />

      {/* Featured Tools Section */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="mb-4">Featured Tools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start with our most popular tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool, idx) => (
              <div
                key={tool.id}
                className="animate-slide-up"
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setLocation('/catalog')}
            >
              View All Tools
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 gradient-primary">
        <div className="container text-center">
          <h2 className="text-white mb-6">Ready to Create Better Content?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join creators worldwide using our AI-powered tools to save time and create amazing content.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            onClick={() => setLocation('/catalog')}
          >
            Get Started Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 Marketing Toolkit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
