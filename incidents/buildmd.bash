#!/bin/bash
set -e

echo "##"
echo "# building examples"
echo "##"
echo ""


# loop all files in the current folder
for f in *.md; do
		echo "building '$f'"
    echo "    - running pandoc build script"
    pandoc "$f" -o "$f.pdf" --from markdown --template eisvogel.tex --listings
    echo "    - generating preview"
    pdftoppm -r 150 -png "document.pdf" > "preview.png"
    echo ""
    	
done
