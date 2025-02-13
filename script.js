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

// Function to convert Quill Delta to Markdown
function quillToMarkdown(delta) {
    const tempContainer = document.createElement('div');
    (new Quill(tempContainer)).setContents(delta);
    return toMarkdown(tempContainer.innerHTML);
}

// Function to convert Markdown to HTML
function markdownToHtml(markdownText) {
    return marked(markdownText);
}

// Event listener for the convert button
document.getElementById('convert-button').addEventListener('click', function() {
    const delta = quill.getContents();
    const markdownText = quillToMarkdown(delta);
    const html = markdownToHtml(markdownText);
    document.getElementById('html-output').textContent = html;
});
