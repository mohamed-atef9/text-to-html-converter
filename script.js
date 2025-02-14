// Initialize Quill editor
var quill = new Quill('#editor-container', {
    theme: 'snow',
    modules: {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'image'],
            [{ 'align': [] }],
            [{ 'color': [] }, { 'background': [] }],
            ['clean']
        ]
    }
});

// Function to update the live HTML preview
function updatePreview() {
    const htmlContent = quill.root.innerHTML;
    document.getElementById('html-output').textContent = htmlContent;
}

// Update preview on text change
quill.on('text-change', function() {
    updatePreview();
});

// Initial preview update
updatePreview();
