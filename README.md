## Worlde API

A simple API designed to run as a serverless function that you can use for your Wordle clone. The whole point of this API is to allow you to create a Wordle clone that keeps the answer OFF of the user's computer. This enables you, the developer, to completely prevent users from cheating by looking for the locally-stored answer to the day's word puzzle.

### Usage

A live version of this application is currently hosted on Vercel. The answer to the the day's Wordle is located [here](https://wordle-api.vercel.app/). To consume the API, Send a `POST` request to `https://wordle-api.vercel.app/api/wordle` with the request body:

```json
{
    "guess":"words"
}
```

, where `"words"` is whatever word you'd like to guess. A guess yields an API response that looks like this:

```json
{
	"guess": "cross",
	"was_correct": true
}
```

while an incorrect guess yields an API response that looks like this:

```json
{
	"guess": "beans",
	"was_correct": false,
	"character_info": [
		{
			"char": "b",
			"scoring": {
				"in_word": false,
				"correct_idx": false
			}
		},
		{
			"char": "e",
			"scoring": {
				"in_word": false,
				"correct_idx": false
			}
		},
		{
			"char": "a",
			"scoring": {
				"in_word": false,
				"correct_idx": false
			}
		},
		{
			"char": "n",
			"scoring": {
				"in_word": false,
				"correct_idx": false
			}
		},
		{
			"char": "s",
			"scoring": {
				"in_word": true,
				"correct_idx": true
			}
		}
	]
}
```

### Limitations

- Currently, the word bank only consits of 5-letter words. Eventually, shorter (4-letter) and longer (6-, 7-, 8- letter) words will be added
- The API does not currently check to see if a guess is in the word bank, which is a feature of many Wordle clones, as well as Wordle itself.
