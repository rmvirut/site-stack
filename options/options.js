/**
 * Saves options to chrome.storage
 * 
 */
function saveOptions() {
    const apiKey = document.getElementById("api-key").value;
    const regex = /^[a-zA-Z0-9]{70}$/gm;
    if (regex.exec(apiKey)) {
        chrome.storage.local.set({ "whatApiKey": apiKey }).then(() => {
            showStatus("Success!", 2000);
        }).catch((err) => {
            console.log(err);
            showStatus("Failed", 2000);
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

//document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions)
console.log(document.getElementById("save"))
console.log("options loaded")
