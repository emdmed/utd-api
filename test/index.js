
async function run(){
    let words = ["sepsis"];
    let results = await utdWordApi.getLinks(words);
    console.log(results);
}


let processed_text = utdWordApi.processText("Texto de prueba");
console.log(processed_text);

//utdWordApi.watchWords();

$("#getLinks_button").click(async function(){
    let result = await utdWordApi.getLinks_fromArray();
    console.log(result);
});







