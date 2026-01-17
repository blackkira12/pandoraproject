---
description: How to deploy the Pandora Project to Vercel
---

# Deploy to Vercel

This workflow guides you through deploying the static site to Vercel.

1.  **Install Vercel CLI** (if not already installed)
    Running this command will install the Vercel CLI globally using npm.
    ```bash
    npm install -g vercel
    ```

2.  **Login to Vercel**
    You will need to authenticate with your Vercel account.
    ```bash
    vercel login
    ```

3.  **Deploy to Production**
    This command builds the project locally and deploys the `dist` folder.
    
    // turbo
    ```bash
    npm run build && vercel deploy --prod
    ```

    *   When asked `Set up and deploy?`, say **Y**.
    *   Select the scope (your account).
    *   Link to existing project? **N**.
    *   Project Name: `pandora-project` (or default).
    *   Directory to deploy: `dist` (Important! Vite builds to `dist`).
