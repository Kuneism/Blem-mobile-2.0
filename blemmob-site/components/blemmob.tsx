import React from "react";
import Form from "./form";
import Results from "./results";
import Image from "next/image";
import logo from "../public/bigblem.svg";

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


  let displayedElement = null;

  if (hasResult) {
    displayedElement =( <Results snippet={snippet} onBack={onReset} prompt={prompt} />);
  } else {
    displayedElement = (
    <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} isLoading={isLoading} characterLimit={CHARACTER_LIMIT} />);
  }
  
  const gradientTextStyle =
    "text-white text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 w-fit mx-auto";
  return (
    <div className="h-screen flex">
    <div className="max-w-md m-auto p-4">      
      <div className="bg-gray-100 p-4 rounded-md text-white">
        <div className="text-center my-6">
        <h1 className={gradientTextStyle + " text-3xl font-med w-fit mx-auto"}>Blem Mob
        </h1>
        <div className={gradientTextStyle}>Your personal AI branding assistant</div>
        </div>
        {displayedElement}
      </div>
      </div>
    </div>
  );
}  

export default BlemMob;
