import re

with open("scripts/unismuh.html", "r", encoding="utf-8") as f:
    html = f.read()

# Check topbar or elements inside header
header_match = re.search(r'<header[^>]*>(.*?)</header>', html, re.DOTALL)
if header_match:
    header_content = header_match.group(1)
    print("Header length:", len(header_content))
    # Look for text, buttons, flags, languages, social icons
    socials = re.findall(r'<a[^>]*class="[^"]*elementor-social-icon[^"]*"[^>]*href="([^"]*)"', header_content)
    print("Social links:", socials)
    gtranslate = "gtranslate" in header_content
    print("Has Google Translate/flags:", gtranslate)
    search = "search" in header_content.lower()
    print("Has search:", search)
