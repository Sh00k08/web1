import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TOOLS } from '@shared/tools';
import { Copy, Loader2, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { toast } from 'sonner';

export default function ToolDetail() {
  const [location, setLocation] = useLocation();
  
  // Extract tool slug from URL
  const slug = location.split('/tool/')[1];
  const tool = TOOLS.find(t => t.slug === slug);

  const [inputMode, setInputMode] = useState<'paste' | 'preset'>('paste');
  const [linkInput, setLinkInput] = useState('');
  const [selectedPreset, setSelectedPreset] = useState('');
  const [userInput, setUserInput] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!tool) {
      setLocation('/catalog');
    }
  }, [tool, setLocation]);

  if (!tool) {
    return null;
  }

  const handleGenerate = async () => {
    if (!userInput.trim()) {
      toast.error('Please fill in the input field');
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Call LLM API to generate output
      // For now, show a placeholder
      setOutput(`Generated output for: ${userInput}\n\nThis is a placeholder. LLM integration coming soon.`);
      
      toast.success('Content generated successfully');
    } catch (error) {
      toast.error('Failed to generate content');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(output);
    toast.success('Output copied to clipboard');
  };

  const getInputPlaceholder = () => {
    if (tool.inputType === 'textarea') {
      return `Enter your ${tool.name.toLowerCase()} details here...`;
    }
    return `Enter ${tool.name.toLowerCase()}...`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="border-b border-border py-12">
        <div className="container">
          <Button
            variant="ghost"
            onClick={() => setLocation('/catalog')}
            className="mb-6"
          >
            ← Back to Catalog
          </Button>
          <h1 className="mb-4">{tool.name}</h1>
          <p className="text-lg text-muted-foreground">{tool.description}</p>
        </div>
      </section>

      {/* Tool Interface */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="card-premium p-6">
              <h2 className="text-xl font-semibold mb-6">Input</h2>

              {/* Link Input Toggle */}
              {tool.quickPickPresets && tool.quickPickPresets.length > 0 && (
                <div className="mb-6">
                  <div className="flex gap-2 mb-4">
                    <Button
                      variant={inputMode === 'paste' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setInputMode('paste')}
                    >
                      Paste Link
                    </Button>
                    <Button
                      variant={inputMode === 'preset' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setInputMode('preset')}
                    >
                      Quick Pick
                    </Button>
                  </div>

                  {inputMode === 'paste' ? (
                    <Input
                      placeholder="Paste your link here..."
                      value={linkInput}
                      onChange={(e) => setLinkInput(e.target.value)}
                      className="mb-4"
                    />
                  ) : (
                    <select
                      value={selectedPreset}
                      onChange={(e) => setSelectedPreset(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg mb-4"
                    >
                      <option value="">Select a preset...</option>
                      {tool.quickPickPresets.map(preset => (
                        <option key={preset} value={preset}>
                          {preset}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              )}

              {/* Main Input */}
              {tool.inputType === 'textarea' ? (
                <Textarea
                  placeholder={getInputPlaceholder()}
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="min-h-40 mb-6"
                />
              ) : (
                <Input
                  placeholder={getInputPlaceholder()}
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="mb-6"
                />
              )}

              <Button
                onClick={handleGenerate}
                disabled={isLoading}
                className="button-primary w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Generate
                  </>
                )}
              </Button>
            </div>

            {/* Output Section */}
            <div className="card-premium p-6">
              <h2 className="text-xl font-semibold mb-6">Output</h2>

              {output ? (
                <>
                  <Textarea
                    value={output}
                    readOnly
                    className="min-h-40 mb-4"
                  />
                  <Button
                    onClick={handleCopyOutput}
                    variant="outline"
                    className="w-full"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Output
                  </Button>
                </>
              ) : (
                <div className="min-h-40 flex items-center justify-center text-muted-foreground border border-dashed border-border rounded-lg">
                  <p className="text-center">
                    Your generated content will appear here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
