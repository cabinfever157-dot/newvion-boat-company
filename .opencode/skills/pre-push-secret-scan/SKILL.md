---
name: pre-push-secret-scan
description: Mandatory pre-push protocol that scans for leaked secrets (API keys, tokens, passwords) in staged files and git history before any git push. Triggers on "git push", "push to github", "deploy". Prevents GitHub Push Protection rejections.
---

# Pre-Push Secret Scan Protocol

## Trigger
Any time a `git push` command is about to be executed.

## Mandatory Steps

### 1. Scan Staged Files
Before executing `git push`, run the following scan on ALL staged files:
```powershell
git diff --cached --name-only | ForEach-Object { Select-String -Path $_ -Pattern "sk-proj|sk-live|ghp_|AKIA|password|secret|token" -ErrorAction SilentlyContinue }
```
If ANY matches are found, **HALT immediately** and report the findings to the user.

### 2. Scan Full History (First Push Only)
On the very first push of a repo, or after a history rewrite, scan the full commit log:
```powershell
git log --all -p | Select-String "sk-proj|sk-live|ghp_|AKIA"
```
If matches are found, use `git-filter-repo` to scrub them before pushing.

### 3. Verify .gitignore
Ensure these entries exist in `.gitignore`:
```
# Secret files - NEVER commit
.env
.env.*
*.key
*.pem
opencode.json
test_openai.js
```

### 4. Sanitization Pattern
When secrets are found in history, use:
```powershell
# Install if needed
pip install git-filter-repo

# Create replacements file
echo "SECRET_VALUE==>PLACEHOLDER" > replacements.txt

# Rewrite history
git filter-repo --replace-text replacements.txt --force

# Re-add remote (filter-repo removes it)
git remote add origin <REPO_URL>

# Clean up
Remove-Item replacements.txt
```

## Anti-Patterns (NEVER DO)
- Never commit `opencode.json` (contains MCP API keys)
- Never commit `test_*.js` files that hardcode API keys
- Never use `git push --force` without running Steps 1-3 first
- Never embed API keys directly in source code; use `.env` + `process.env`
