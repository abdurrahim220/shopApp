#!/bin/bash

# Get the current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "Current branch: $CURRENT_BRANCH"
echo "--------------------------------"
echo "Do you want to create a new branch?"
echo "1: Yes"
echo "0: No"
read -p "Enter choice (1/0): " CHOICE

if [ "$CHOICE" == "1" ]; then
    read -p "Enter new branch name: " NEW_BRANCH
    if [ -z "$NEW_BRANCH" ]; then
        echo "Error: Branch name cannot be empty."
        exit 1
    fi
    
    # Create and checkout new branch
    git checkout -b "$NEW_BRANCH"
    CURRENT_BRANCH="$NEW_BRANCH"
    echo "Switched to new branch: $CURRENT_BRANCH"
else
    echo "Continuing with current branch: $CURRENT_BRANCH"
fi

echo "--------------------------------"
read -p "Enter commit message: " COMMIT_MESSAGE

if [ -z "$COMMIT_MESSAGE" ]; then
    echo "Error: Commit message cannot be empty."
    exit 1
fi

# Stage all changes
git add .

# Commit changes
git commit -m "$COMMIT_MESSAGE"

# Push to origin
echo "Pushing to GitHub..."
git push origin "$CURRENT_BRANCH"

echo "--------------------------------"
echo "Successfully pushed to $CURRENT_BRANCH!"
