import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AnalysisResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between h-16 border-b px-4">
        <h1 className="text-2xl font-semibold">Analysis Result</h1>
        <Button onClick={() => navigate("/")} variant="outline">
          Back
        </Button>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Claude 3.5 Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap bg-muted p-4 rounded-md">
              {JSON.stringify(result, null, 2)}
            </pre>
          </CardContent>
        </Card>
      </main>

      <footer className="flex items-center justify-center h-16 border-t">
        <p className="text-sm text-muted-foreground">Powered by Claude 3.5</p>
      </footer>
    </div>
  );
};

export default AnalysisResult;