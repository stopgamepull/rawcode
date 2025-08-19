// Select the input field and terminal content area
const inputField = document.querySelector('.input');
const terminalContent = document.querySelector('.content');

// Commands and their corresponding outputs
const commands = {
    help: `
Available commands:
- help: Display this help message.
- about: Learn more about this site.
- projects: See my assembly projects.
- clear: Clear the terminal screen.
- contact: Get in touch.
    `,
    about: `
ABOUT ASSEMBLY.TECH:
This website is a tribute to the raw power of assembly language.
Created by an assembly enthusiast to showcase creativity and technical skill.
    `,
    projects: `
PROJECTS:
- Bare-Metal Calculator (Written in x86 Assembly)
- Minimalist Operating System (ARM Assembly)
- Retro Gaming Emulator (6502 Assembly)
    `,
    contact: `
CONTACT ME:
- Email: assembly@techmail.com
- GitHub: github.com/assembly-tech
- Twitter: @AssemblyTech
    `,
    clear: 'CLEAR', // Special case to clear the terminal
};

// Function to process the command
function processCommand(command) {
    const commandLower = command.toLowerCase();
    let response = commands[commandLower] || `Command not found: ${command}`;
    
    // Handle 'clear' command
    if (commandLower === 'clear') {
        terminalContent.innerHTML = '';
        return;
    }

    // Append the command and response to the terminal content
    appendToTerminal(`> ${command}`);
    appendToTerminal(response);
}

// Function to append text to the terminal
function appendToTerminal(text) {
    const preElement = document.createElement('pre');
    preElement.textContent = text;
    terminalContent.appendChild(preElement);
    terminalContent.scrollTop = terminalContent.scrollHeight; // Auto-scroll to the bottom
}

// Event listener for input field
inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const command = inputField.value.trim();
        if (command) {
            processCommand(command);
        }
        inputField.value = ''; // Clear input field
    }
});

// No event listeners are added for the control buttons to make them functionless.
