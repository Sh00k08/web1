export interface Tool {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  featured: boolean;
  isNew: boolean;
  inputType: 'text' | 'textarea' | 'number' | 'multi-input';
  outputType: string;
  quickPickPresets?: string[];
}

export const CATEGORIES = [
  { name: 'YouTube', icon: 'Youtube', slug: 'youtube' },
  { name: 'Instagram', icon: 'Instagram', slug: 'instagram' },
  { name: 'TikTok', icon: 'Music', slug: 'tiktok' },
  { name: 'LinkedIn', icon: 'Linkedin', slug: 'linkedin' },
  { name: 'AI Writing', icon: 'Sparkles', slug: 'ai-writing' },
  { name: 'SEO', icon: 'Search', slug: 'seo' },
  { name: 'Thumbnail', icon: 'Image', slug: 'thumbnail' },
  { name: 'Creator Utilities', icon: 'Zap', slug: 'utilities' },
];

export const TOOLS: Tool[] = [
  // YouTube Tools (20)
  { id: 'yt-1', slug: 'youtube-title-generator', name: 'YouTube Title Generator', description: 'Generate compelling YouTube titles that boost CTR', category: 'YouTube', icon: 'Sparkles', featured: true, isNew: true, inputType: 'textarea', outputType: 'text', quickPickPresets: ['Tech Review', 'Tutorial', 'Vlog', 'Gaming'] },
  { id: 'yt-2', slug: 'youtube-description-generator', name: 'Description Generator', description: 'Create engaging video descriptions with keywords', category: 'YouTube', icon: 'FileText', featured: true, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'yt-3', slug: 'youtube-script-generator', name: 'Script Generator', description: 'Write compelling video scripts in minutes', category: 'YouTube', icon: 'BookOpen', featured: false, isNew: true, inputType: 'textarea', outputType: 'text' },
  { id: 'yt-4', slug: 'youtube-outline-generator', name: 'Video Outline Generator', description: 'Structure your video content effectively', category: 'YouTube', icon: 'List', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'yt-5', slug: 'youtube-thumbnail-text', name: 'Thumbnail Text Generator', description: 'Generate attention-grabbing thumbnail text', category: 'YouTube', icon: 'Type', featured: false, isNew: false, inputType: 'text', outputType: 'text' },
  { id: 'yt-6', slug: 'youtube-thumbnail-headline', name: 'Thumbnail Headline Generator', description: 'Create impactful thumbnail headlines', category: 'YouTube', icon: 'Heading2', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'yt-7', slug: 'youtube-intro-generator', name: 'Intro Generator', description: 'Write engaging video intros', category: 'YouTube', icon: 'Play', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'yt-8', slug: 'youtube-outro-generator', name: 'Outro Generator', description: 'Create memorable video outros', category: 'YouTube', icon: 'SkipForward', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'yt-9', slug: 'youtube-hook-generator', name: 'Hook Generator', description: 'Generate powerful video hooks', category: 'YouTube', icon: 'Zap', featured: true, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'yt-10', slug: 'youtube-idea-generator', name: 'Video Idea Generator', description: 'Get fresh video ideas for your channel', category: 'YouTube', icon: 'Lightbulb', featured: false, isNew: true, inputType: 'text', outputType: 'text' },
  { id: 'yt-11', slug: 'youtube-tag-generator', name: 'Tag Generator', description: 'Generate SEO-optimized YouTube tags', category: 'YouTube', icon: 'Tags', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'yt-12', slug: 'youtube-keyword-generator', name: 'Keyword Generator', description: 'Find high-volume keywords for your videos', category: 'YouTube', icon: 'Key', featured: false, isNew: false, inputType: 'text', outputType: 'text' },
  { id: 'yt-13', slug: 'youtube-shorts-idea', name: 'Shorts Idea Generator', description: 'Generate viral YouTube Shorts ideas', category: 'YouTube', icon: 'Video', featured: false, isNew: true, inputType: 'text', outputType: 'text' },
  { id: 'yt-14', slug: 'youtube-playlist-name', name: 'Playlist Name Generator', description: 'Create catchy playlist names', category: 'YouTube', icon: 'ListMusic', featured: false, isNew: false, inputType: 'text', outputType: 'text' },
  { id: 'yt-15', slug: 'youtube-channel-name', name: 'Channel Name Generator', description: 'Generate unique YouTube channel names', category: 'YouTube', icon: 'Users', featured: false, isNew: false, inputType: 'text', outputType: 'text' },
  { id: 'yt-16', slug: 'youtube-channel-description', name: 'Channel Description Generator', description: 'Write compelling channel descriptions', category: 'YouTube', icon: 'FileText', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'yt-17', slug: 'youtube-community-post', name: 'Community Post Generator', description: 'Create engaging community posts', category: 'YouTube', icon: 'MessageCircle', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'yt-18', slug: 'youtube-chapter-generator', name: 'Video Chapter Generator', description: 'Generate video chapters for better UX', category: 'YouTube', icon: 'Clock', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'yt-19', slug: 'youtube-summary-generator', name: 'Video Summary Generator', description: 'Create concise video summaries', category: 'YouTube', icon: 'Minimize2', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'yt-20', slug: 'youtube-cta-generator', name: 'CTA Generator', description: 'Generate effective call-to-actions', category: 'YouTube', icon: 'Send', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },

  // Instagram Tools (12)
  { id: 'ig-1', slug: 'instagram-caption-generator', name: 'Caption Generator', description: 'Write engaging Instagram captions', category: 'Instagram', icon: 'MessageSquare', featured: true, isNew: false, inputType: 'textarea', outputType: 'text', quickPickPresets: ['Product Launch', 'Lifestyle', 'Behind-the-Scenes', 'Announcement'] },
  { id: 'ig-2', slug: 'instagram-hashtag-generator', name: 'Hashtag Generator', description: 'Generate trending hashtags for posts', category: 'Instagram', icon: 'Hash', featured: true, isNew: false, inputType: 'text', outputType: 'text' },
  { id: 'ig-3', slug: 'instagram-bio-generator', name: 'Bio Generator', description: 'Create a compelling Instagram bio', category: 'Instagram', icon: 'User', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ig-4', slug: 'instagram-username-generator', name: 'Username Generator', description: 'Generate unique Instagram usernames', category: 'Instagram', icon: 'AtSign', featured: false, isNew: false, inputType: 'text', outputType: 'text' },
  { id: 'ig-5', slug: 'instagram-reel-hook', name: 'Reel Hook Generator', description: 'Create viral reel hooks', category: 'Instagram', icon: 'Zap', featured: false, isNew: true, inputType: 'textarea', outputType: 'text' },
  { id: 'ig-6', slug: 'instagram-carousel-generator', name: 'Carousel Generator', description: 'Plan engaging carousel posts', category: 'Instagram', icon: 'Grid', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ig-7', slug: 'instagram-story-idea', name: 'Story Idea Generator', description: 'Get creative Instagram story ideas', category: 'Instagram', icon: 'Image', featured: false, isNew: false, inputType: 'text', outputType: 'text' },
  { id: 'ig-8', slug: 'instagram-comment-generator', name: 'Comment Generator', description: 'Generate engaging comments', category: 'Instagram', icon: 'MessageCircle', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ig-9', slug: 'instagram-dm-generator', name: 'DM Generator', description: 'Write effective direct messages', category: 'Instagram', icon: 'Mail', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ig-10', slug: 'instagram-cta-generator', name: 'CTA Generator', description: 'Create conversion-focused CTAs', category: 'Instagram', icon: 'Send', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ig-11', slug: 'instagram-giveaway-caption', name: 'Giveaway Caption Generator', description: 'Write giveaway captions that drive engagement', category: 'Instagram', icon: 'Gift', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ig-12', slug: 'instagram-pitch-generator', name: 'Influencer Pitch Generator', description: 'Create compelling influencer pitches', category: 'Instagram', icon: 'Megaphone', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },

  // TikTok Tools (7)
  { id: 'tt-1', slug: 'tiktok-hook-generator', name: 'Hook Generator', description: 'Generate viral TikTok hooks', category: 'TikTok', icon: 'Zap', featured: true, isNew: false, inputType: 'textarea', outputType: 'text', quickPickPresets: ['Comedy', 'Educational', 'Trending', 'Challenge'] },
  { id: 'tt-2', slug: 'tiktok-caption-generator', name: 'Caption Generator', description: 'Write engaging TikTok captions', category: 'TikTok', icon: 'MessageSquare', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'tt-3', slug: 'tiktok-hashtag-generator', name: 'Hashtag Generator', description: 'Generate trending TikTok hashtags', category: 'TikTok', icon: 'Hash', featured: false, isNew: false, inputType: 'text', outputType: 'text' },
  { id: 'tt-4', slug: 'tiktok-idea-generator', name: 'Video Idea Generator', description: 'Get viral TikTok video ideas', category: 'TikTok', icon: 'Lightbulb', featured: false, isNew: true, inputType: 'text', outputType: 'text' },
  { id: 'tt-5', slug: 'tiktok-script-generator', name: 'Script Generator', description: 'Write TikTok video scripts', category: 'TikTok', icon: 'BookOpen', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'tt-6', slug: 'tiktok-trending-planner', name: 'Trending Content Planner', description: 'Plan trending content strategies', category: 'TikTok', icon: 'TrendingUp', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'tt-7', slug: 'tiktok-sound-idea', name: 'Sound Idea Generator', description: 'Find trending sounds for your videos', category: 'TikTok', icon: 'Music', featured: false, isNew: true, inputType: 'text', outputType: 'text' },

  // LinkedIn Tools (7)
  { id: 'li-1', slug: 'linkedin-post-generator', name: 'LinkedIn Post Generator', description: 'Write professional LinkedIn posts', category: 'LinkedIn', icon: 'Linkedin', featured: true, isNew: false, inputType: 'textarea', outputType: 'text', quickPickPresets: ['Thought Leadership', 'Company News', 'Personal Update', 'Industry Insight'] },
  { id: 'li-2', slug: 'linkedin-headline-generator', name: 'Headline Generator', description: 'Create compelling LinkedIn headlines', category: 'LinkedIn', icon: 'Heading1', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'li-3', slug: 'linkedin-about-generator', name: 'About Section Generator', description: 'Write professional about sections', category: 'LinkedIn', icon: 'User', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'li-4', slug: 'linkedin-connection-request', name: 'Connection Request Generator', description: 'Write personalized connection requests', category: 'LinkedIn', icon: 'UserPlus', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'li-5', slug: 'linkedin-cold-message', name: 'Cold Message Generator', description: 'Create effective cold messages', category: 'LinkedIn', icon: 'Mail', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'li-6', slug: 'linkedin-comment-generator', name: 'Comment Generator', description: 'Write engaging LinkedIn comments', category: 'LinkedIn', icon: 'MessageCircle', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'li-7', slug: 'linkedin-poll-generator', name: 'Poll Generator', description: 'Create engaging LinkedIn polls', category: 'LinkedIn', icon: 'BarChart3', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },

  // AI Writing Tools (12)
  { id: 'ai-1', slug: 'blog-title-generator', name: 'Blog Title Generator', description: 'Generate SEO-friendly blog titles', category: 'AI Writing', icon: 'Sparkles', featured: true, isNew: false, inputType: 'textarea', outputType: 'text', quickPickPresets: ['How-to', 'List Post', 'Case Study', 'Opinion'] },
  { id: 'ai-2', slug: 'blog-outline-generator', name: 'Blog Outline Generator', description: 'Create structured blog outlines', category: 'AI Writing', icon: 'List', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ai-3', slug: 'article-generator', name: 'Article Generator', description: 'Write full-length articles', category: 'AI Writing', icon: 'BookOpen', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ai-4', slug: 'email-generator', name: 'Email Generator', description: 'Write professional emails', category: 'AI Writing', icon: 'Mail', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ai-5', slug: 'cold-email-generator', name: 'Cold Email Generator', description: 'Create effective cold emails', category: 'AI Writing', icon: 'Send', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ai-6', slug: 'sales-copy-generator', name: 'Sales Copy Generator', description: 'Write persuasive sales copy', category: 'AI Writing', icon: 'DollarSign', featured: true, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ai-7', slug: 'landing-page-generator', name: 'Landing Page Generator', description: 'Create landing page copy', category: 'AI Writing', icon: 'Globe', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ai-8', slug: 'ad-copy-generator', name: 'Ad Copy Generator', description: 'Write high-converting ad copy', category: 'AI Writing', icon: 'Megaphone', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ai-9', slug: 'product-description-generator', name: 'Product Description Generator', description: 'Write compelling product descriptions', category: 'AI Writing', icon: 'Package', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ai-10', slug: 'website-copy-generator', name: 'Website Copy Generator', description: 'Create website copy', category: 'AI Writing', icon: 'Globe', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ai-11', slug: 'press-release-generator', name: 'Press Release Generator', description: 'Write professional press releases', category: 'AI Writing', icon: 'Newspaper', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'ai-12', slug: 'proposal-generator', name: 'Business Proposal Generator', description: 'Create business proposals', category: 'AI Writing', icon: 'FileText', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },

  // SEO Tools (10)
  { id: 'seo-1', slug: 'meta-title-generator', name: 'Meta Title Generator', description: 'Generate SEO-optimized meta titles', category: 'SEO', icon: 'Sparkles', featured: true, isNew: false, inputType: 'textarea', outputType: 'text', quickPickPresets: ['E-commerce', 'Blog', 'SaaS', 'Local'] },
  { id: 'seo-2', slug: 'meta-description-generator', name: 'Meta Description Generator', description: 'Create compelling meta descriptions', category: 'SEO', icon: 'FileText', featured: true, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'seo-3', slug: 'keyword-research-generator', name: 'Keyword Research Generator', description: 'Find high-value keywords for your niche', category: 'SEO', icon: 'Search', featured: false, isNew: false, inputType: 'text', outputType: 'text' },
  { id: 'seo-4', slug: 'heading-tag-generator', name: 'Heading Tag Generator', description: 'Generate SEO-optimized heading tags', category: 'SEO', icon: 'Heading1', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'seo-5', slug: 'schema-markup-generator', name: 'Schema Markup Generator', description: 'Create structured data for search engines', category: 'SEO', icon: 'Code', featured: false, isNew: true, inputType: 'textarea', outputType: 'text' },
  { id: 'seo-6', slug: 'internal-linking-generator', name: 'Internal Linking Generator', description: 'Generate internal linking strategies', category: 'SEO', icon: 'Link', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'seo-7', slug: 'content-gap-analyzer', name: 'Content Gap Analyzer', description: 'Identify content opportunities', category: 'SEO', icon: 'BarChart3', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'seo-8', slug: 'slug-generator', name: 'URL Slug Generator', description: 'Generate SEO-friendly URL slugs', category: 'SEO', icon: 'Link2', featured: false, isNew: false, inputType: 'text', outputType: 'text' },
  { id: 'seo-9', slug: 'alt-text-generator', name: 'Alt Text Generator', description: 'Create descriptive alt text for images', category: 'SEO', icon: 'Image', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'seo-10', slug: 'faq-schema-generator', name: 'FAQ Schema Generator', description: 'Generate FAQ structured data', category: 'SEO', icon: 'HelpCircle', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },

  // Thumbnail Tools (8)
  { id: 'thumb-1', slug: 'thumbnail-headline-generator', name: 'Thumbnail Headline Generator', description: 'Create eye-catching thumbnail headlines', category: 'Thumbnail', icon: 'Type', featured: true, isNew: false, inputType: 'textarea', outputType: 'text', quickPickPresets: ['Shocking', 'Curiosity', 'Benefit-driven', 'Question'] },
  { id: 'thumb-2', slug: 'thumbnail-color-palette', name: 'Color Palette Generator', description: 'Generate contrasting color palettes for thumbnails', category: 'Thumbnail', icon: 'Palette', featured: false, isNew: true, inputType: 'text', outputType: 'text' },
  { id: 'thumb-3', slug: 'thumbnail-text-generator', name: 'Thumbnail Text Generator', description: 'Generate short, punchy thumbnail text', category: 'Thumbnail', icon: 'MessageSquare', featured: false, isNew: false, inputType: 'text', outputType: 'text' },
  { id: 'thumb-4', slug: 'thumbnail-emotion-generator', name: 'Emotion Generator', description: 'Generate emotion-driven thumbnail concepts', category: 'Thumbnail', icon: 'Smile', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'thumb-5', slug: 'thumbnail-layout-generator', name: 'Layout Generator', description: 'Suggest effective thumbnail layouts', category: 'Thumbnail', icon: 'Grid', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'thumb-6', slug: 'thumbnail-icon-generator', name: 'Icon Suggestion Generator', description: 'Suggest icons for your thumbnails', category: 'Thumbnail', icon: 'Zap', featured: false, isNew: false, inputType: 'text', outputType: 'text' },
  { id: 'thumb-7', slug: 'thumbnail-contrast-checker', name: 'Contrast Checker', description: 'Ensure your thumbnail has high contrast', category: 'Thumbnail', icon: 'Eye', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'thumb-8', slug: 'thumbnail-ab-test-generator', name: 'A/B Test Generator', description: 'Generate thumbnail variations for A/B testing', category: 'Thumbnail', icon: 'Columns', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },

  // Creator Utilities (8)
  { id: 'util-1', slug: 'content-calendar-generator', name: 'Content Calendar Generator', description: 'Plan your content strategy with AI', category: 'Creator Utilities', icon: 'Calendar', featured: true, isNew: false, inputType: 'textarea', outputType: 'text', quickPickPresets: ['Monthly', 'Weekly', 'Daily', 'Campaign'] },
  { id: 'util-2', slug: 'posting-time-optimizer', name: 'Posting Time Optimizer', description: 'Find the best times to post on each platform', category: 'Creator Utilities', icon: 'Clock', featured: false, isNew: false, inputType: 'text', outputType: 'text' },
  { id: 'util-3', slug: 'engagement-booster', name: 'Engagement Booster', description: 'Generate engagement-driving prompts', category: 'Creator Utilities', icon: 'Heart', featured: false, isNew: true, inputType: 'textarea', outputType: 'text' },
  { id: 'util-4', slug: 'brand-voice-generator', name: 'Brand Voice Generator', description: 'Define and generate your brand voice', category: 'Creator Utilities', icon: 'Mic', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'util-5', slug: 'audience-analysis-generator', name: 'Audience Analysis Generator', description: 'Generate audience insights and strategies', category: 'Creator Utilities', icon: 'Users', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'util-6', slug: 'collaboration-brief-generator', name: 'Collaboration Brief Generator', description: 'Create briefs for brand collaborations', category: 'Creator Utilities', icon: 'Handshake', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'util-7', slug: 'growth-strategy-generator', name: 'Growth Strategy Generator', description: 'Generate growth strategies for your channel', category: 'Creator Utilities', icon: 'TrendingUp', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
  { id: 'util-8', slug: 'monetization-optimizer', name: 'Monetization Optimizer', description: 'Optimize your monetization strategy', category: 'Creator Utilities', icon: 'DollarSign', featured: false, isNew: false, inputType: 'textarea', outputType: 'text' },
];
