const editor = document.getElementById('editor');
const previewFrame = document.getElementById('preview-frame');

// Live preview functionality
editor.addEventListener('input', function () {
    const content = editor.value;
    const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    previewDoc.open();
    previewDoc.write(content);
    previewDoc.close();
});

// Download HTML functionality
function downloadHTML() {
    const text = editor.value;
    const blob = new Blob([text], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'output.html';
    document.body.appendChild(a);
    a.click();
    a.remove();
}

// Clear Editor
function clearEditor() {
    editor.value = '';
    resetPreview();
}

// Reset Preview
function resetPreview() {
    const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    previewDoc.open();
    previewDoc.write('');
    previewDoc.close();
}

// View Source Code in a new tab
function viewSourceCode() {
    const sourceCode = editor.value;
    const htmlBlob = new Blob([sourceCode], { type: 'text/html' });
    const url = URL.createObjectURL(htmlBlob);
    window.open(url, '_blank');
}