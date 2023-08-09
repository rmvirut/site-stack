

chrome.storage.local.set({ key: value }).then(() => {
    console.log("Value is set");
});

chrome.storage.local.get(["key"]).then((result) => {
    console.log("Value currently is " + result.key);
});

chrome.storage.sync.set({ key: value }).then(() => {
    console.log("Value is set");
});

chrome.storage.sync.get(["key"]).then((result) => {
    console.log("Value currently is " + result.key);
});

function saveOptions() {
    const whatCMSapi = document.getElementById("api-key").value;
    alert(whatCMSapi);
    chrome.storage.local.set({ "whatCMSApi": whatCMSapi }).then(() => {
        console.log("Value is set");
    });
}

