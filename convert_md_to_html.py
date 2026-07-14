import os

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css">
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
    <style>
        body {{ box-sizing: border-box; min-width: 200px; max-width: 980px; margin: 0 auto; padding: 45px; background: #0d1117; color: #c9d1d9; }}
        @media (max-width: 767px) {{ body {{ padding: 15px; }} }}
        /* Force dark mode styling for github-markdown-css */
        .markdown-body {{ color: #c9d1d9; background-color: #0d1117; }}
        .markdown-body table tr {{ background-color: #0d1117; }}
        .markdown-body table tr:nth-child(2n) {{ background-color: #161b22; }}
    </style>
</head>
<body class="markdown-body">
    <div id="content"></div>
    <script type="text/markdown" id="markdown-source">
{markdown_content}
    </script>
    <script>
        const rawMd = document.getElementById('markdown-source').textContent;
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = marked.parse(rawMd);
        
        contentDiv.querySelectorAll('pre code.language-mermaid').forEach(el => {{
            const div = document.createElement('div');
            div.className = 'mermaid';
            div.textContent = el.textContent;
            el.parentElement.replaceWith(div);
        }});
        mermaid.initialize({{ startOnLoad: true, theme: 'dark' }});
        mermaid.init(undefined, document.querySelectorAll('.mermaid'));
    </script>
</body>
</html>
"""

def convert(md_path, html_path, title):
    with open(md_path, 'r', encoding='utf-8') as f:
        md_content = f.read()
    
    html_content = HTML_TEMPLATE.format(title=title, markdown_content=md_content.replace('</script>', '<\\/script>'))
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html_content)

base_dir = "/Volumes/MacintoshData/Work/MY/Project/Product/THLWeb"
convert(os.path.join(base_dir, "PRD", "product_concept_prd.md"), 
        os.path.join(base_dir, "public", "product_concept_prd.html"), 
        "产品概念 PRD - HSBBrowser")

convert(os.path.join(base_dir, "PRD", "detailed_prd.md"), 
        os.path.join(base_dir, "public", "detailed_prd.html"), 
        "详细产品 PRD - HSBBrowser")

print("Conversion complete.")
