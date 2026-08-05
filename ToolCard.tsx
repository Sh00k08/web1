import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { TiltCard } from '@/components/TiltCard';
import type { Tool } from '@shared/tools';
import * as Icons from 'lucide-react';
import { useLocation } from 'wouter';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const [, setLocation] = useLocation();
  
  // Get the icon component dynamically
  const IconComponent = (Icons as Record<string, any>)[tool.icon] || Icons.Zap;

  const handleClick = () => {
    setLocation(`/tool/${tool.slug}`);
  };

  return (
    <TiltCard
      className="h-full"
      intensity={10}
    >
      <Card
        className="h-full p-6 cursor-pointer hover-lift group"
        onClick={handleClick}
      >
        {/* Icon and Badges */}
        <div className="flex items-start justify-between mb-4">
          <div className="gradient-primary rounded-lg p-3 group-hover:shadow-lg transition-shadow">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <div className="flex gap-2">
            {tool.isNew && (
              <Badge variant="secondary" className="text-xs">
                New
              </Badge>
            )}
            {tool.featured && (
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs">
                Featured
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {tool.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {tool.description}
        </p>

        {/* Category Tag */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
            {tool.category}
          </span>
        </div>
      </Card>
    </TiltCard>
  );
}
