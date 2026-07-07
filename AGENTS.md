# Agent Instructions

This repo is a step-by-step Angular + .NET lab.

## Goals
- Use .NET 10 for the backend.
- Use Angular for the frontend.
- Use Azure SQL container for local development.
- Prefer clean, teachable steps over clever shortcuts.
- Keep the lab document aligned with the actual working repo.

## Rules
- Do not commit secrets.
- Do not hard-code machine-specific paths.
- Preserve devcontainer compatibility.
- After changes, run relevant build/test commands and summarize results.
- Prefer small focused changes over large sweeping rewrites.

## Validation
Run these when relevant:
- dotnet build
- npm install
- npm run build
- docker compose config