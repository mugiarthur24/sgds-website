import xml.etree.ElementTree as ET
from html.parser import HTMLParser

with open("scripts/nav_0.html", "r", encoding="utf-8") as f:
    nav_html = f.read()

class MenuParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.depth = 0
        self.in_a = False
        self.current_href = ""
        self.current_text = ""
        self.classes = []

    def handle_starttag(self, tag, attrs):
        attr_dict = dict(attrs)
        if tag == "ul":
            self.depth += 1
        elif tag == "a":
            self.in_a = True
            self.current_href = attr_dict.get("href", "")
            self.current_text = ""

    def handle_endtag(self, tag):
        if tag == "ul":
            self.depth -= 1
        elif tag == "a":
            self.in_a = False
            text = self.current_text.strip()
            if text:
                indent = "  " * (self.depth - 1)
                print(f"{indent}- {text} ({self.current_href})")

    def handle_data(self, data):
        if self.in_a:
            self.current_text += data

parser = MenuParser()
parser.feed(nav_html)
