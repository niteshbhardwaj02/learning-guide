import glob, re

files = sorted(glob.glob("*.html"))
updated = 0

for f in files:
    if f == "index.html":
        continue
    with open(f, "r", encoding="utf-8") as fp:
        content = fp.read()

    changed = False

    # 1. Inject site-nav.css before </head> if not already present
    if "site-nav.css" not in content:
        content = re.sub(r'(</head>)', r'<link rel="stylesheet" href="site-nav.css">\n\1', content, count=1, flags=re.IGNORECASE)
        changed = True

    # 2. Inject site-nav.js before </body> if not already present
    if "site-nav.js" not in content:
        content = re.sub(r'(</body>)', r'<script src="site-nav.js"></script>\n\1', content, count=1, flags=re.IGNORECASE)
        changed = True

    if changed:
        with open(f, "w", encoding="utf-8") as fp:
            fp.write(content)
        updated += 1
        print(f"Updated: {f}")
    else:
        print(f"Already updated: {f}")

print(f"Done! {updated} files updated.")
