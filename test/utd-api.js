let test_url = "http://localhost:3000";
let prod_url = "https://utdapi.herokuapp.com";
let text_done;
let word_search_array = [];
let link_results;
let utd_results;
let utd_obj;

const utdWordApi = {
    processText: function(text){
        let txt_array = text.split(" ");
        for(let i = 0; i < txt_array.length; i++){
            txt_array[i] = `<a class="word">${txt_array[i]}</a> `;
        }
        return txt_array;
    },
    clearWordArray: function(){
        word_search_array = [];
    },
    getLinks: async function(word_search_array){
        link_results = await $.ajax({
            url: prod_url + "/text/utd_links",
            method: "POST",
            data: {data: word_search_array},
            success: function(res){
                let data = res;
                return data;
            }
        });
        return link_results;
    },
    getLinks_fromArray: async function(){
        link_results = await $.ajax({
            url: prod_url + "/text/utd_links",
            method: "POST",
            data: {data: word_search_array},
            success: function(res){
                let data = res;
                return data;
            }
        });
        return link_results;
    },
    watchWords: async function(){
        $("body").on("click", ".word", async function(){  
            if($(this).attr("class") === "word"){
                //add to array
                word_search_array.push($(this).text());
                $(this).css({
                    "textDecoration": "underline"
                })
                $(this).attr("class", "word clicked");
                console.log(word_search_array);
            } else{
                //remove from array
                let remove_this_index = word_search_array.indexOf($(this).text());
                word_search_array.splice(remove_this_index, 1);
                $(this).css({
                    "textDecoration": "none"
                })
                $(this).attr("class", "word");
                console.log("removed", $(this).text(), " - ", word_search_array);
                
            }
        });
    }
}




