const PARENT_APPLICATION_URL = 'http://localhost:7000'

window.sendMessage = (message, number, bool) => {
    window.postMessage(
        { message, targetApp: number, clear: bool },
        PARENT_APPLICATION_URL
    );
}