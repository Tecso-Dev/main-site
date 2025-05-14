#!/bin/bash

# Function to convert jpg to webp
convert_to_webp() {
    local file="$1"
    local output="${file%.jpg}.webp"
    
    # Check if cwebp is available
    if command -v cwebp >/dev/null 2>&1; then
        cwebp -q 80 "$file" -o "$output"
    else
        echo "Error: cwebp not found. Please install webp tools."
        exit 1
    fi
}

# Find all jpg files and convert them
find . -type f -name "*.jpg" | while read -r file; do
    echo "Converting: $file"
    convert_to_webp "$file"
done

echo "Conversion complete!"
