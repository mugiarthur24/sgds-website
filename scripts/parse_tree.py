import re

with open("scripts/unismuh.html", "r", encoding="utf-8") as f:
    html = f.read()

all_navs = re.findall(r'<nav[^>]*>(.*?)</nav>', html, re.DOTALL)
print(f"Total <nav> elements found: {len(all_navs)}")
for i, nav in enumerate(all_navs):
    print(f"Nav {i} length: {len(nav)}")
    with open(f"scripts/nav_{i}.html", "w", encoding="utf-8") as f:
        f.write(nav)
