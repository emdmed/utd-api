async function onload(){
    let text = $("#test-text").text();
    let proc_text  = await utdWordApi.processText(text);

    $("#test-text-response").html(proc_text);
}

async function run(){
    let words = ["sepsis"];
    let results = await utdWordApi.getLinks(words);
    console.log(results);
}


utdWordApi.watchWords();

$("#search_button").click(async function(){

    let result = await utdWordApi.getLinks_fromArray();

    console.log(result);
});







