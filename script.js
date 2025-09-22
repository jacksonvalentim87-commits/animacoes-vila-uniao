
function copyCommand(command) {
    navigator.clipboard.writeText(command).then(() => {
        alert("Comando copiado: " + command);
    });
}
