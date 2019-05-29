# utd-api


**1** - Add **utd-api.js** file to html <br>
**2** - **utdWordApi.processText(*String*)** returns the text with each word as `<a class="word">word</a>`.<br>
**3** - Use **utdWordApi.watchWords()** to start listening for clicks on the "word" class. This pushes the text to an array.<br>
**4** - Use **utdWordApi.getLinks_fromArray()** to hit the API with the word array, it will search UpToDate site for relevant links and return an array of objects.<br>

Returned array object: `[{a: link name, link: link path}]`<br>

<a href="https://ibb.co/hVS3fsR"><img src="https://i.ibb.co/fHsjvMY/utd-api.png" alt="utd-api" border="0" /></a>
