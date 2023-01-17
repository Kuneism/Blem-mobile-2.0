import os
import openai
import argparse
import re

MAX_INPUT_LENGTH = 33


def main():

    parser = argparse.ArgumentParser()
    parser.add_argument("--input", "-i", type=str, required=True)
    args= parser.parse_args()
    user_input = args.input

    print(f"User input: {user_input}")
    if validate_length(user_input):
       generate_branding_snippet(user_input)
       generate_keywords(user_input)
      

    else: 
        raise ValueError("Input length is too long. must be under {MAX_INPUT_LENGTH}. Submitted input is {user_input} "
        )   

def validate_length(prompt: str) ->bool:
    return len(prompt) <= MAX_INPUT_LENGTH    
    
def generate_keywords(prompt: str) -> list[str]:
    openai.api_key = os.getenv("OPENAI_API_KEY")

    enriched_prompt= f"Generate upbeat branding keywords for {prompt}:"
    print(enriched_prompt)


    response = openai.Completion.create(
    engine = "text-davinci-003" , prompt=enriched_prompt, max_tokens=32
    )

    #Extract output test
    keywords_text = response["choices"][0]["text"]

    #strip whitespace
    keywords_text = keywords_text.strip()
    keywords_array = re.split(",|\n|;|-", keywords_text)
    keywords_array = [k.lower().strip() for k in keywords_array]
    keywords_array = [k for k in keywords_array if len(k) > 0]

    print(f"keywords: {keywords_text}")
    return keywords_text    

def generate_branding_snippet(prompt: str) -> str:
    openai.api_key = os.getenv("OPENAI_API_KEY")

    enriched_prompt= f"Generate upbeat branding snippet for {prompt}:"
    print(enriched_prompt)

    response = openai.Completion.create(
    engine = "text-davinci-003" , prompt=enriched_prompt, max_tokens=32
    )

    #Extract output test
    branding_text = response["choices"][0]["text"]

    #strip whitespace
    branding_text = branding_text.strip()

    #add to truncated statement
    last_char = branding_text[-1]
    if last_char not in {".",  "!", "?"}:
        branding_text += "..." 

    print(f"Snippet: {branding_text}") 
    return branding_text

if __name__ == "__main__":
    main()
