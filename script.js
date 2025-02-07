// Initialize Quill Editor
const quill = new Quill('#editor-container', {
    theme: 'snow',
    modules: {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
            [{ align: [] }],
            [{ direction: 'rtl' }]
        ]
    }
});

// Get references to elements
const previewFrame = document.getElementById('preview-frame');

// Live preview functionality
quill.on('text-change', function () {
    const content = quill.root.innerHTML;
    const previewDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    previewDoc.open();
    previewDoc.write(content);
    previewDoc.close();
});

// Download HTML functionality
function downloadHTML() {
    const content = quill.root.innerHTML;
    const blob = new Blob([content], { type: 'text/html' });
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
    quill.setText('');
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
    const sourceCode = quill.root.innerHTML;
    const htmlBlob = new Blob([sourceCode], { type: 'text/html' });
    const url = URL.createObjectURL(htmlBlob);
    window.open(url, '_blank');
}
