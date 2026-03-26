#!/usr/bin/env bash
set -euo pipefail

# AI-First Template Scaffolding Script
# Usage: ./scaffold.sh <project-name> [target-dir]
#
# Creates a new project from the ai-first-template with all references
# renamed to the new project scope (@<project-name>).

OLD_SCOPE="ai-first"
OLD_TEMPLATE_NAME="ai-first-template"

if [[ $# -lt 1 ]]; then
  echo "Usage: ./scaffold.sh <project-name> [target-dir]"
  echo ""
  echo "  project-name   Name for the new project (used as @<name> scope)"
  echo "  target-dir     Where to create it (default: ../<project-name>)"
  echo ""
  echo "Example: ./scaffold.sh houseguessr"
  exit 1
fi

NEW_NAME="$1"
TARGET_DIR="${2:-$(dirname "$0")/../$NEW_NAME}"
TEMPLATE_DIR="$(cd "$(dirname "$0")" && pwd)"

# Validate project name (lowercase, hyphens, no spaces)
if [[ ! "$NEW_NAME" =~ ^[a-z][a-z0-9-]*$ ]]; then
  echo "Error: Project name must be lowercase, start with a letter, and contain only letters, numbers, and hyphens."
  exit 1
fi

if [[ -d "$TARGET_DIR" ]]; then
  echo "Error: Directory '$TARGET_DIR' already exists."
  exit 1
fi

echo "Scaffolding '@${NEW_NAME}' from ai-first-template..."
echo "  Source:  $TEMPLATE_DIR"
echo "  Target:  $TARGET_DIR"
echo ""

# 1. Copy template (exclude .git and node_modules)
echo "[1/5] Copying template..."
rsync -a \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='.nx' \
  "$TEMPLATE_DIR/" "$TARGET_DIR/"

# 2. Rename all @ai-first scoped references to @<new-name>
echo "[2/5] Renaming @${OLD_SCOPE} -> @${NEW_NAME}..."
find "$TARGET_DIR" -type f \( \
  -name "*.ts" -o -name "*.tsx" -o -name "*.json" -o -name "*.md" \
  -o -name "*.yml" -o -name "*.yaml" -o -name "*.txt" -o -name "*.js" \
  -o -name "*.mjs" -o -name "*.template" -o -name "*__template__" \
\) -not -path "*/node_modules/*" -not -path "*/.git/*" \
  -exec sed -i '' "s/@${OLD_SCOPE}/@${NEW_NAME}/g" {} +

# 3. Rename non-scoped template name references
echo "[3/5] Renaming '${OLD_TEMPLATE_NAME}' -> '${NEW_NAME}'..."
find "$TARGET_DIR" -type f \( \
  -name "*.ts" -o -name "*.tsx" -o -name "*.json" -o -name "*.md" \
  -o -name "*.yml" -o -name "*.yaml" -o -name "*.txt" -o -name "*.js" \
  -o -name "*.mjs" \
\) -not -path "*/node_modules/*" -not -path "*/.git/*" \
  -exec sed -i '' "s/${OLD_TEMPLATE_NAME}/${NEW_NAME}/g" {} +

# 4. Fix workspace:* protocol for npm compatibility
echo "[4/5] Fixing workspace protocol for npm..."
find "$TARGET_DIR" -name "package.json" -not -path "*/node_modules/*" \
  -exec sed -i '' 's/"workspace:\*"/"*"/g' {} +

# 5. Initialize git and install dependencies
echo "[5/5] Initializing git and installing dependencies..."
cd "$TARGET_DIR"
git init -q
npm install --silent 2>/dev/null || npm install
git add -A
git commit -q -m "chore: scaffold ${NEW_NAME} from ai-first-template"

echo ""
echo "Done! Project created at: $TARGET_DIR"
echo ""
echo "Next steps:"
echo "  cd $TARGET_DIR"
echo "  npm exec nx serve web    # Start Next.js dev server"
echo "  npm exec nx serve api    # Start NestJS dev server"
echo "  npm exec nx graph        # Visualize dependency graph"
