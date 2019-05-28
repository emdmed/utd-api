
const phantom = require("phantom");
const cheerio = require("cheerio");

const API = {
    getLinks: async function(data){
        let array = [];
  
        for(x in data){
            array.push(data[x]);
        }
    
        let words = await array[0];
    
        let web_page;
        let a_array = [];
    
        //let fetched_url = await fetch_url(`https://www.uptodate.com/contents/search?search=${words}`);
    
        let result = (async function() {
          const instance = await phantom.create();
          const page = await instance.createPage();
          await page.on('onResourceRequested', function(requestData) {
            //console.info('Requesting', requestData.url);
          });
        
          const status = await page.open(`https://www.uptodate.com/contents/search?search=${words}`);
          const content = await page.property('content');
          //console.log("CONTENT ",content);
    
          web_page = content;
    
          $ = cheerio.load(web_page);
          $(".searchResultLink").each((i, element)=>{
      
            let $element = $(element);
            let a_dom = $(element).text();
            let a_link = $element.attr("href");
    
            a_array.push({a: a_dom, link: a_link});
    
          });
          
          await instance.exit();
          return a_array;
        })();
        return result;
    }
}

module.exports = API;