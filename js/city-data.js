const APPID ="5d7ca0ee2552ad81834842d1a61b5052cee12272";
const apiURL = "https://api.census.gov/data/2020/dec/responserate?get=NAME,GEO_ID,DRRALL,CRRINT,RESP_DATE,CRRALL,DRRINT&for=county:003&in=state:12&key=${APPID}";


fetch(apiURL) 
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  })