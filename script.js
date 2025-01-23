const daveAscii = `
██████╗  █████╗ ██╗   ██╗███████╗
██╔══██╗██╔══██╗██║   ██║██╔════╝
██║  ██║███████║██║   ██║█████╗  
██║  ██║██╔══██║╚██╗ ██╔╝██╔══╝  
██████╔╝██║  ██║ ╚████╔╝ ███████╗
╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚══════╝`;

const dinoAscii = `
           █████
          ██████
         ███████           ████
        ████████          █████
       █████████         ██████
      ██████████        ███████
     ███████████       ████████
    ████████████      █████████
   █████████████     ██████████
  ██████████████    ███████████
 ███████████████   ████████████
████████████████  █████████████`;

document.getElementById('dave-ascii').textContent = daveAscii;

const input = document.getElementById('terminal-input');
const output = document.getElementById('output');
let showSumfetch = false;
let riddleMode = false;
let currentRiddle = 0;
let showBeginPrompt = false;

// Update time in prompt
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: false });
    document.querySelector('.time').textContent = `[${timeString}]`;
}
setInterval(updateTime, 1000);
updateTime();

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleCommand(this.value);
        this.value = '';
    }
});

function handleCommand(command) {
    command = command.toLowerCase().trim();
    let response = '';

    switch(command) {
        case 'secretdev':
            response = `DAVE'S LOST KEYS
-------------------------------
Are you one of the 410? Prove it! Have a crack and solve all the 12 Questions. The prize at the end will grant you a magical phrase – a powerful key. Type 'begin' to start the journey.`;
            showBeginPrompt = true;
            break;
        case 'help':
            response = `Type 'sumfetch' to display summary.
Type 'tokenomics' to understand the distribution.
Type 'start' to start the web
Type 'analytics' to know the progress of your competitors`;
            break;
        case 'tokenomics':
            response = `Token Name: Dave
Total Supply: 1,000,000,000 $DAVE
Decimals: 18
Initial Market Cap: $10,000`;
            break;
        case 'analytics':
            response = `RIDDLE 1  - 88 users have solved this riddle!
RIDDLE 2  - 54 users have solved this riddle!
RIDDLE 3  - 32 users have solved this riddle!
RIDDLE 4  - 22 users have solved this riddle!
RIDDLE 5  - 18 users have solved this riddle!
RIDDLE 6  - 10 users have solved this riddle!
RIDDLE 7  - 3 users have solved this riddle!
RIDDLE 8  - 1 users have solved this riddle!
RIDDLE 9  - 0 users have solved this riddle!
RIDDLE 10 - 0 users have solved this riddle!
RIDDLE 11 - 0 users have solved this riddle!
RIDDLE 12 - be the first one to solve!`;
            break;
        case 'sumfetch':
            response = `${dinoAscii}
-----------------------------
WHO AM I?
-----------------------------
Am I the creator of the memes or just a part of them?
Am I the protocol or the transactions within it?
If I exist on the blockchain, am I immutable?
-----------------------------
WHERE WE ARE?
-----------------------------
Error:410`;
            break;
        case '':
            response = '';
            break;
        default:
            response = `Command not found: ${command}`;
    }

    output.textContent = response;
}
