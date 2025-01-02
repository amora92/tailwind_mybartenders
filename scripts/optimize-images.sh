#!/bin/bash

# Install sharp if not already installed
npm install -g sharp-cli

# Create optimized directory if it doesn't exist
mkdir -p public/optimized

# Optimize all images in the public directory
for file in public/*.{jpg,jpeg,png,webp}; do
  if [ -f "$file" ]; then
    filename=$(basename -- "$file")
    name="${filename%.*}"
    
    # Create grid thumbnail (600px wide)
    sharp \
      "$file" \
      --resize 600 \
      --webp \
      --webp-quality 75 \
      "public/optimized/${name}-600.webp"
    
    # Create optimized full size (max 1920px wide)
    sharp \
      "$file" \
      --resize 1920 \
      --webp \
      --webp-quality 85 \
      "public/optimized/${name}.webp"
  fi
done 