const WHAT_CMS_URL = "https://whatcms.org/API/Tech"
const WHAT_CMS_KEY = "wu12rotrm2ylstoaso5ybzsk2agvc48rh50a2a9gr7ppuc5uuxfc4li1xjcp6odzmbk2bn"

function createResultRow(name, categories) {
    let categoryItems = "";
    for (let i = 0; i < categories.length; i++) {
        categoryItems += `<span>${categories[i]}</span>`;
    }

    let row = `<tr><td>${categories.toString()}</td><td>${name}</td></tr>`;
    return row;
}

function tabulateResults(whatRes) {
    let table = "<table class='u-full-width'><thead><tr><th>Category</th><th>Software</th></tr></thead><tbody>";

    let results = whatRes.results;

    for (var i = 0; i < results.length; i++) {
        table += createResultRow(results[i].name, results[i].categories)
    }

    //close table
    table += "</tbody></table>"

    return table;

}

function createTemplate() {

}

function main() {

    //get url of current active tab
    chrome.tabs.query({ active: true, lastFocusedWindow: true }).then(res => {
        if (res != "undefined") {
            let currentTabUrl = res[0].url
            console.log(currentTabUrl)

            //build query string
            let REQUEST_STRING = `${WHAT_CMS_URL}?key=${WHAT_CMS_KEY}&url=${currentTabUrl}`;
            console.log(REQUEST_STRING);

            fetch(REQUEST_STRING, {
                method: "GET"
            }).then(res => res.json()).then(res => {
                if (res.result.code == "200") {
                    console.log(res);
                    document.getElementById("results").innerHTML = `${new Date(res.last_checked).toString()}`
                    document.getElementById("results").innerHTML = tabulateResults(res);
                } else {
                    document.getElementById("results").innerHTML = `Error ${res.result.code} - ${res.result.msg}`
                }

            }).catch(err => console.log(err));
        }
    })

}

main();

//TODO - add error handling for when no API key present
//TODO - add ability to get and store api key in options page
//TODO - design options page
//TODO - add links to whatcms.org