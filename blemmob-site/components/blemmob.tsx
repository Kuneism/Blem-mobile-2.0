import React from "react";
import Form from "./form";
import Results from "./results";
const BlemMob: React.FC = () => {
  const CHARACTER_LIMIT: number = 33
  const ENDPOINT: string =
  "https://d8w2rpfetb.execute-api.ap-south-1.amazonaws.com/prod/generate_snippet";
  const [prompt, setPrompt] = React.useState("");
  const [snippet, setSnippet] = React.useState("");
  const [hasResult, setHasResults] = React.useState(false);
  const[isLoading, setIsLoading] = React.useState(false);

  const onSubmit = () => {
   console.log("Submitting: " + prompt);
   setIsLoading(true);
   fetch(`${ENDPOINT}?prompt=${prompt}`)
    .then((res) => res.json()) .then(onResult);
  }; 
  
  const onResult = (data: any) => {
    setSnippet(data.snippet);
    setHasResults(true);
    setIsLoading(false);
  };

  const onReset = () => {
    setPrompt("");

    setHasResults(false);
    setIsLoading(false);    
  };


  let resultsElement = null;

  if (hasResult) {
    resultsElement = <Results snippet={snippet} onBack={onReset} prompt={prompt} />;
      
   
  }
  
  const formElement = <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} isLoading={isLoading} characterLimit={CHARACTER_LIMIT} />;

  return (
    <>
      <h1>Blem Mob</h1>
      {formElement}
      {resultsElement}
    </>
  );
};

export default BlemMob;
