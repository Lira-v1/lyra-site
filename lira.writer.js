<!-- 📁 File Creator UI and JS logic --><div class="file-creator">
  <h2>Создать новый файл</h2>
  <input id="filename" type="text" placeholder="Название файла (например, index.html)" />
  <textarea id="filecontent" placeholder="Содержимое файла"></textarea>
  <button onclick="createFile()">Создать</button>
  <p id="resultMessage"></p>
</div><style>
  .file-creator {
    padding: 1rem;
    background: #f9f9f9;
    border: 1px solid #ddd;
    max-width: 700px;
    margin: 20px auto;
    border-radius: 8px;
    font-family: sans-serif;
  }
  .file-creator input, .file-creator textarea {
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    font-family: monospace;
  }
  .file-creator button {
    padding: 10px 16px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  #resultMessage {
    margin-top: 10px;
    color: #333;
  }
</style><script>
  const allowedExtensions = [
    // Web formats
    'html', 'htm', 'php', 'xml', 'jsx',
    // Styles
    'css', 'scss', 'sass', 'less',
    // Logic
    'js', 'ts', 'json', 'yml', 'yaml',
    // Images
    'jpg', 'jpeg', 'png', 'svg', 'webp', 'ico',
    // Video and animation
    'mp4', 'webm', 'gif', 'json',
    // Fonts
    'ttf', 'otf', 'woff', 'woff2',
    // Docs
    'doc', 'docx', 'xls', 'xlsx', 'csv', 'pdf',
    // Configs
    'env', 'config.js', 'tsconfig.json', 'package.json'
  ];

  function getExtension(filename) {
    return filename.split('.').pop().toLowerCase();
  }

  function createFile() {
    const filename = document.getElementById('filename').value.trim();
    const content = document.getElementById('filecontent').value;
    const result = document.getElementById('resultMessage');

    if (!filename) {
      result.innerText = '❌ Укажите имя файла.';
      return;
    }

    const ext = getExtension(filename);
    if (!allowedExtensions.includes(ext)) {
      result.innerText = ❌ Расширение ".${ext}" не поддерживается.;
      return;
    }

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    result.innerText = ✅ Файл "${filename}" создан.;
  }
</script>
