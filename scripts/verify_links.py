#!/usr/bin/env python3
"""
Automated Link & Repository Verification Script for Learning Guide Hub
Validates that:
1. All expected core files exist (.gitignore, package.json, README.md, index.html, site-nav.css, site-nav.js).
2. All 16 guide/quiz files exist on disk.
3. All internal HTML hyperlinks in index.html and all 16 files resolve to real local files.
4. No broken links or 404 targets exist in any document.
"""

import os
import sys
import glob
import re
from urllib.parse import urlparse

REQUIRED_ROOT_FILES = [
    ".gitignore",
    "package.json",
    "README.md",
    "index.html",
    "site-nav.css",
    "site-nav.js"
]

EXPECTED_MODULES = [
    "Interview_Quiz_100.html",
    "Interview_Study_Guide.html",
    "ai_interview_guide.html",
    "ai_interview_quiz_100.html",
    "fullstack_interview_visual_guide.html",
    "nodejs_100_question_quiz.html",
    "nodejs_interview_guide.html",
    "nodejs_visual_atlas.html",
    "react_interview_guide.html",
    "react_interview_quiz.html",
    "senior_backend_devops_quiz_illustrated.html",
    "senior_backend_devops_study_guide_illustrated.html",
    "senior_frontend_interview_100.html",
    "senior_javascript_quiz_100.html",
    "senior_javascript_study_guide.html",
    "system_design_guide.html",
    "system_design_quiz.html"
]

def main():
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(root_dir)
    print("=" * 60)
    print("  ENGINEERING LEARNING HUB: REPOSITORY & LINK AUDIT")
    print("=" * 60)
    print(f"Working Directory: {root_dir}\n")

    errors = []

    # 1. Check Required Root Files
    print("[1/4] Checking required root files...")
    for f in REQUIRED_ROOT_FILES:
        if not os.path.isfile(f):
            errors.append(f"Missing required root file: {f}")
        else:
            size = os.path.getsize(f)
            print(f"  [OK] {f} ({size:,} bytes)")

    # 2. Check Expected Modules
    print("\n[2/4] Checking 16 learning guide/quiz modules...")
    for f in EXPECTED_MODULES:
        if not os.path.isfile(f):
            errors.append(f"Missing expected learning module: {f}")
        else:
            size = os.path.getsize(f)
            print(f"  [OK] {f} ({size:,} bytes)")

    # 3. Check that index.html references all 16 modules
    print("\n[3/4] Verifying index.html references all 16 modules...")
    if os.path.isfile("index.html"):
        with open("index.html", "r", encoding="utf-8", errors="ignore") as fp:
            index_content = fp.read()
        for f in EXPECTED_MODULES:
            if f not in index_content:
                errors.append(f"index.html does not contain link to: {f}")
            else:
                print(f"  [OK] index.html links to {f}")

    # 4. Check all internal HTML links across all HTML files
    print("\n[4/4] Verifying all internal hyperlinks across all HTML files...")
    html_files = sorted(glob.glob("*.html"))
    total_links_checked = 0

    link_pattern = re.compile(r'href=[\'"]([^\'"]+)[\'"]', re.IGNORECASE)

    for html_file in html_files:
        with open(html_file, "r", encoding="utf-8", errors="ignore") as fp:
            content = fp.read()

        # Strip script tags to avoid checking template string interpolations in JS code
        content_no_scripts = re.sub(r'<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>', '', content, flags=re.IGNORECASE)

        matches = link_pattern.findall(content_no_scripts)
        for target in matches:
            target_clean = target.strip()
            # Skip empty, anchors, external URLs, mailto, javascript, data URIs, or template variables
            if (not target_clean or
                target_clean.startswith("#") or
                target_clean.startswith("javascript:") or
                target_clean.startswith("mailto:") or
                target_clean.startswith("data:") or
                "${" in target_clean):
                continue
            if (target_clean.startswith("http://") or
                target_clean.startswith("https://") or
                target_clean.startswith("//")):
                continue

            parsed = urlparse(target_clean)
            target_path = parsed.path

            if not target_path:
                continue

            total_links_checked += 1
            # Check local file existence
            if not os.path.isfile(target_path):
                errors.append(f"Broken link in {html_file}: '{target_clean}' -> file '{target_path}' does not exist!")

    print(f"  Total internal links verified: {total_links_checked}")

    # Summary
    print("\n" + "=" * 60)
    print("  AUDIT SUMMARY")
    print("=" * 60)
    if errors:
        print(f"  FAILED with {len(errors)} error(s):")
        for err in errors:
            print(f"    - {err}")
        sys.exit(1)
    else:
        print("  ALL CHECKS PASSED: 0 broken links, all 16 modules verified!")
        print("=" * 60)
        sys.exit(0)

if __name__ == "__main__":
    main()
