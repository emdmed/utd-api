# utd-api.js

## English

**1** - Add **utd-api.js** file to html (file in /test folder) <br>
**2** - **utdWordApi.processText(*String*)** returns the text with each word as `<a class="word">word</a>`.<br>
**3** - Use **utdWordApi.watchWords()** to start listening for clicks on the "word" class. This pushes the text to an array.<br>
**4** - Use **utdWordApi.getLinks_fromArray()** to hit the API with the word array, it will search UpToDate site for relevant links and return an array of objects.<br>
**5** - Use **utdWordApi.clearWordArray()** to empty the word array<br>

## Español
**1** - Agregar el archivo **utd-api.js** al html (archivo en la carpeta /test)<br>
**2** - **utdWordApi.processText(*String*)** devuelve cada palabra del texto como `<a class="word">palabra</a>`.<br>
**3** - **utdWordApi.watchWords()** comienza a escuchar clicks sobre la clase "word". Esto agrega la palabra a un array.<br>
**4** - **utdWordApi.getLinks_fromArray()** le envia a la api el array de palabras, la API busca en UpToDate los enlaces relevantes y los devuelve como un array de objetos.<br>
**5** - **utdWordApi.clearWordArray()** vacía el array de palabras<br>

Returned array object: `[{a: link name, link: link path}]`<br>

**utdWordApi.processText(*String*)**<br>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/N9DQzML/textodeprueba.png" alt="textodeprueba" border="0"></a><br /><a target='_blank' href='https://es.imgbb.com/'></a><br />

**utdWordApi.getLinks_fromArray()**<br>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/LdGvXD9/getlinks.png" alt="getlinks" border="0"></a><br /><a target='_blank' href='https://es.imgbb.com/'></a><br />
