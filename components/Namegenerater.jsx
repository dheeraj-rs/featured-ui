import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AppNameGenerator = () => {
  const [name, setName] = useState("Dheeraj");
  const [appType, setAppType] = useState("superadmin website app");
  const [features, setFeatures] = useState("product management, portfolio");
  const [generatedNames, setGeneratedNames] = useState([]);

  const generateNames = () => {
    const prefixes = ["Dev", "Tech", "Pro", "Admin", "Stack", "Web"];
    const suffixes = ["Hub", "Central", "Sphere", "Master", "Suite", "Control"];
    const concepts = ["Dashboard", "Command", "Nexus", "Portal", "Axis"];

    const newNames = [];
    for (let i = 0; i < 5; i++) {
      const randomPrefix =
        prefixes[Math.floor(Math.random() * prefixes.length)];
      const randomSuffix =
        suffixes[Math.floor(Math.random() * suffixes.length)];
      const randomConcept =
        concepts[Math.floor(Math.random() * concepts.length)];

      if (Math.random() > 0.5) {
        newNames.push(`${name}'s ${randomPrefix}${randomSuffix}`);
      } else {
        newNames.push(`${randomPrefix}${randomConcept}`);
      }
    }

    setGeneratedNames(newNames);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>App Name Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="App Type"
            value={appType}
            onChange={(e) => setAppType(e.target.value)}
          />
          <Input
            placeholder="Key Features"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
          />
          <Button onClick={generateNames}>Generate Names</Button>
          {generatedNames.length > 0 && (
            <div className="mt-4">
              <h3 className="font-bold mb-2">Generated Names:</h3>
              <ul className="list-disc pl-5">
                {generatedNames.map((genName, index) => (
                  <li key={index}>{genName}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AppNameGenerator;
