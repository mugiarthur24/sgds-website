import urllib.request
import re

url = "https://sdgs.unismuh.ac.id/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
try:
    with urllib.request.urlopen(req, timeout=15) as resp:
        html = resp.read().decode("utf-8", errors="ignore")
        
    with open("scripts/unismuh.html", "w", encoding="utf-8") as f:
        f.write(html)
        
    print("HTML saved, length:", len(html))
    
    # Extract menu items
    # WordPress Elementor nav menu items usually look like: <li ... class="menu-item ..."><a href="...">Text</a>
    menu_items = re.findall(r'<li[^>]*class="[^"]*menu-item[^"]*"[^>]*>\s*<a[^>]*href="([^"]*)"[^>]*>(.*?)</a>', html, re.DOTALL)
    for href, text in menu_items:
        clean = re.sub(r'<[^>]+>', '', text).strip()
        print(f"{clean} => {href}")
except Exception as e:
    print("Error:", e)
