// Saves options to chrome.storage
const saveOptions = () => {
    const color = document.getElementById('color').value;
    const likesColor = document.getElementById('like').checked;
    const apiKey = document.getElementById('api-key').value;

    chrome.storage.sync.set(
        { favoriteColor: color, likesColor: likesColor },
        () => {
            // Update status to let user know options were saved.
            const status = document.getElementById('status');
            status.textContent = 'Options saved.';
            setTimeout(() => {
                status.textContent = '';
            }, 750);
        }
    );
};



function saveOptions() {
    const whatCMSapi = document.getElementById("api-key").value;
    alert(whatCMSapi);
    chrome.storage.local.set({ "whatCMSApi": whatCMSapi }).then(() => {
        let status = document.getElementById("status");
        status.property
    });
}




document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);