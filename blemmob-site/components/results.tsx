interface ResultsProps {
  prompt: string;
  snippet: string;

  onBack: any;
}
const Results: React.FC<ResultsProps>=(props) => {
  return (
    <>
     <div>
       <div><b>Prompt</b></div>
       <div>{props.prompt}</div>
      </div>
      <div>
       <div><b>Snippet</b></div>
       <div>{props.snippet}</div>
      </div>
      <button onClick={props.onBack}>Back</button>
    </>
  );
};

export default Results;