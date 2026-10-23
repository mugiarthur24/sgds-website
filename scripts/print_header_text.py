import re

with open("scripts/unismuh.html", "r", encoding="utf-8") as f:
    html = f.read()

header_match = re.search(r'<header[^>]*>(.*?)</header>', html, re.DOTALL)
if header_match:
    lines = header_match.group(1).splitlines()
    for l in lines:
        cleaned = re.sub(r'<[^>]+>', ' ', l).strip()
        if cleaned and not cleaned.startswith((".", "var", "window", "function")):
            print(cleaned)
