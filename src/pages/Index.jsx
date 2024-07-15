import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

const Index = () => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsLoading(true);
    // Simulating file analysis
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setAnalysisResult("File analysis complete. This is a placeholder result.");
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-center h-16 border-b">
        <h1 className="text-2xl font-semibold">File Upload</h1>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Upload your file</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input type="file" onChange={handleFileChange} />
              <Button
                onClick={handleUpload}
                disabled={!file || isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Upload"
                )}
              </Button>
              {analysisResult && (
                <div className="mt-4 p-3 bg-secondary rounded-md">
                  <p>{analysisResult}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="flex items-center justify-center h-16 border-t">
        <p className="text-sm text-muted-foreground">Powered by Claude 3.5</p>
      </footer>
    </div>
  );
};

export default Index;