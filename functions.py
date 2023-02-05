import openai

openai.api_key = "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"

# Set the model and prompt
model_engine = "text-ada-001"
prompt = "I thought your name was Wesley?"

# Set the maximum number of tokens to generate in the response
max_tokens = 1024

# Generate a response
completion = openai.Completion.create(
    engine=model_engine,
    prompt=prompt,
    max_tokens=max_tokens,
    temperature=0.5,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
)

# Print the response
print(completion.choices[0].text)
