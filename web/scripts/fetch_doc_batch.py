import os
import re
import urllib.request
import urllib.parse

APPS = [
    {
        'id': 'screen',
        'md_url': 'https://raw.githubusercontent.com/never88gone/HSBTVGithubAppStore/main/README_ZH.md',
        'raw_base': 'https://raw.githubusercontent.com/never88gone/HSBTVGithubAppStore/main/',
        'assets_dir': 'src/assets/screen',
        'component_path': 'src/components/ScreenReadme.vue'
    },
    {
        'id': 'tv',
        'md_url': 'https://raw.githubusercontent.com/never88gone/XHLIPTV/main/README_ZH.md',
        'raw_base': 'https://raw.githubusercontent.com/never88gone/XHLIPTV/main/',
        'assets_dir': 'src/assets/tv',
        'component_path': 'src/components/TvReadme.vue'
    },
    {
        'id': 'pdf',
        'md_url': 'https://raw.githubusercontent.com/never88gone/XHLPDF/main/README_ZH.md',
        'raw_base': 'https://raw.githubusercontent.com/never88gone/XHLPDF/main/',
        'assets_dir': 'src/assets/pdf',
        'component_path': 'src/components/PdfReadme.vue'
    }
]

def download_file(url, tgt_path):
    print(f"Downloading {url} to {tgt_path}")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response, open(tgt_path, 'wb') as out_file:
            data = response.read()
            out_file.write(data)
    except Exception as e:
        print(f"Failed to download {url}: {e}")

def process_app(app):
    if not os.path.exists(app['assets_dir']):
        os.makedirs(app['assets_dir'])
        
    print(f"Fetching MD for {app['id']}...")
    req = urllib.request.Request(app['md_url'], headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as response:
            content = response.read().decode('utf-8')
    except Exception as e:
        print(f"Failed to fetch MD {app['md_url']}: {e}")
        return

    images = set()
    for m in re.finditer(r'(?:src="|\()((?:screenshot|images|img)/[^"\')\n\r]+)(?:"|\))', content):
        images.add(m.group(1))

    for img_path in images:
        filename = os.path.basename(img_path)
        tgt_img = os.path.join(app['assets_dir'], filename)
        if not os.path.exists(tgt_img):
            # Parse quote parts of the URL components
            img_url = app['raw_base'] + urllib.parse.quote(img_path)
            download_file(img_url, tgt_img)
            
    for img_path in images:
        filename = os.path.basename(img_path)
        content = content.replace(img_path, f"../assets/{app['id']}/{filename}")
    
    html_lines = []
    
    for line in content.split('\n'):
        if line.startswith('## '):
            html_lines.append(f'<h2>{line[3:]}</h2>')
        elif line.startswith('### '):
            html_lines.append(f'<h3>{line[4:]}</h3>')
        elif line.startswith('# '):
            html_lines.append(f'<h1>{line[2:]}</h1>')
        elif line.startswith('> '):
            html_lines.append(f'<blockquote class="doc-quote">{line[2:]}</blockquote>')
        elif re.match(r'^\d+\.\s', line):
            text = re.sub(r'^\d+\.\s*(.*)', r'\1', line)
            text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', text)
            html_lines.append(f'<div class="doc-list-item"><span>&bull;</span> {text}</div>')
        elif line.startswith('- '):
            text = line[2:]
            text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', text)
            text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<a href="\2" target="_blank">\1</a>', text)
            html_lines.append(f'<div class="doc-list-item"><span>-</span> {text}</div>')
        elif line.strip() == '':
            html_lines.append('<br/>')
        elif line.startswith('<p') or line.startswith('<img') or line.startswith('</p>'):
            html_lines.append(line)
        elif line.startswith('[!['):
            html_lines.append('<div class="badges">' + line + '</div>')
        else:
            text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', line)
            text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)', r'<a href="\2" target="_blank" class="doc-link">\1</a>', text)
            html_lines.append(f'<p class="doc-text">{text}</p>')

    final_html = "\n".join(html_lines)
    
    vue_component = f"""
<template>
  <div class="{app['id']}-documentation glass-card">
    <div class="doc-container">
      {final_html}
    </div>
  </div>
</template>

<style scoped>
.{app['id']}-documentation {{
  margin-top: 4rem;
  padding: 3rem;
  text-align: left;
  border-radius: 20px;
  background: var(--card-bg, rgba(20, 20, 25, 0.4));
}}
.doc-container h1, .doc-container h2, .doc-container h3 {{
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-family: 'Space Grotesk', sans-serif;
}}
.doc-container h2 {{
  font-size: 1.8rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 0.5rem;
}}
.doc-text {{
  line-height: 1.8;
  color: var(--text-secondary);
  font-size: 1.1rem;
}}
.doc-quote {{
  border-left: 4px solid var(--text-accent, #4f46e5);
  padding-left: 1rem;
  margin: 1.5rem 0;
  color: var(--text-secondary);
  font-style: italic;
  background: rgba(255, 255, 255, 0.02);
  padding: 1rem;
  border-radius: 0 8px 8px 0;
}}
.doc-list-item {{
  margin: 0.5rem 0;
  color: var(--text-secondary);
  display: flex;
  gap: 10px;
  line-height: 1.6;
}}
.doc-list-item span {{
  color: var(--text-accent, #4f46e5);
  font-weight: bold;
}}
.doc-link {{
  color: var(--text-accent, #4f46e5);
  text-decoration: none;
}}
.doc-link:hover {{
  text-decoration: underline;
}}
:deep(img) {{
  max-width: 100%;
  border-radius: 12px;
  margin: 1rem 0;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
}}
:deep(p[align="center"]) {{
  text-align: center;
}}
</style>
"""
    with open(app['component_path'], 'w') as f:
        f.write(vue_component)
    print(f"Generated {app['component_path']}")


def main():
    for app in APPS:
        process_app(app)
        
if __name__ == '__main__':
    main()
