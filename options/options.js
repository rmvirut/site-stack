const regex = /^[a-zA-Z0-9]{70}$/gm;



/**
 * Saves options to chrome.storage
 * 
 */
function saveOptions() {
    const apiKey = document.getElementById("api-key").value;
    if (regex.exec(apiKey)) {
        // chrome.storage.local.set({ whatApi: apiKey }).then(() => {
        //     console.log("This is working")
        //     console.log(apiKey);
        // })

        let temp = "1239i2093u90x12e09mu1209u1092ezu09128e09182809ex80912z09z23890e82309e8";
        chrome.storage.local.set({ whatApiKey: apiKey }).then(() => {
            showStatus("Success!", 2000);
            chrome.storage.local.get(["whatApiKey"]).then((result) => {
                console.log("I stored the value of " + result.whatApiKey)
            })
        })

        chrome.storage.sync.set({ key: apiKey }).then(() => {
            console.log("Sync worked")
        })
    } else {
        showStatus("Failed - Key is not valid", 3000)
    }
}

function showStatus(message, timeInMilliSeconds) {
    const status = document.getElementById("status");
    status.innerHTML = message;
    status.style.display = "block";
    setTimeout(() => {
        status.style.display = "none";
        status.innerHTML = "";
    }, timeInMilliSeconds)
}

function insertKey() {
    chrome.storage.local.get(["whatApiKey"]).then((result) => {
        if (regex.exec(result.whatApiKey)) {
            document.getElementById("api-key").value = result.whatApiKey;
        }
    })
}


document.addEventListener('DOMContentLoaded', insertKey);
document.getElementById("save").addEventListener("click", saveOptions)
chrome.storage.onChanged.addListener((changes, namespace) => {
    console.log("I have a new value")
})