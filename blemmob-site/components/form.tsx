interface FormProps {
    prompt:string;
    setPrompt: any;
    onSubmit: any;
    isLoading: boolean;
    characterLimit: number;
}


const Form: React.FC<FormProps> =(props) => {

  const isPromptAtLimit = props.prompt.length <= props.characterLimit;
  const updatePromptValue = (text: string) => {
    if (text.length <= props.characterLimit) {
      props.setPrompt(text);
    }
  };

    return <> <p>Write down your product and we will generate branding description</p>
    
    <input
      type= "text" placeholder="coffee" value={props.prompt} onChange={(e) =>updatePromptValue(e.currentTarget.value)}>
    </input>
    <div>{props.prompt.length}/{ props.characterLimit}</div>
    <button onClick={props.onSubmit} disabled={props.isLoading || !isPromptAtLimit}>Submit</button></>;
};

export default Form;