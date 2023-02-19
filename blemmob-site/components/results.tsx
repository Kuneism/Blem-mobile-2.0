interface ResultsProps {
  prompt: string;
  snippet: string;

  onBack: any;
}


const Results: React.FC<ResultsProps>=(props) => {

  const resultSection = (label: string,body: any) => {
    return(
      <div className="bg-blue-400 p-3 my-2 rounded-md">
      <div className="text-blue-300 text-sm font-bold">{label}</div>
      <div>{body}</div>
     </div>
    ); 
  };

  return (
    <>
      <div>
        {resultSection("Input", <div className="text-2xl font-bold mb-1">{props.prompt}</div>)}
        {resultSection("End result",props.snippet)}
      </div>  
      <button
      className="bg-gradient-to-r from-teal-400 to-blue-500 disabled:opacity-50 w-full p-2 rounded-md text-lg"
      onClick={props.onBack}>Back</button>
    </>
  );
};

export default Results;