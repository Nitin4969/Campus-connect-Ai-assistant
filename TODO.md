# Deployment TODO for Campus Connect + AI Assistant

## Approved Plan Steps:

### 1. [✅] GitHub Repo Setup - https://github.com/Nitin4969/Campus-connect-Ai-assistant
- Init git repo if needed: `git init`
- Add remote/origin: `git remote add origin https://github.com/USERNAME/campus-connect-ai.git` (create repo first)
- Commit & push: `git add . && git commit -m "Initial commit" && git push -u origin main`

### 2. [ ] MongoDB Atlas Setup
- Create free cluster at mongodb.com/atlas
- Get MONGODB_URI (with IP whitelist 0.0.0.0/0)
- Generate JWT_SECRET (openssl rand -base64 32)

### 3. [ ] Backend Deploy - Render.com
- render.com → New Web Service → Connect GitHub repo
- Runtime: Node, Build: `npm install`, Start: `npm start`
- Env vars: MONGODB_URI, JWT_SECRET
- Note Render URL (e.g., https://campus-backend.onrender.com)

### 4. [ ] Frontend Deploy - Vercel
- vercel.com → New Project → Import GitHub repo (select frontend/ root if monorepo)
- Framework: Create React App (auto-detect)
- Env: REACT_APP_API_URL=https://campus-backend.onrender.com (post-backend)
- Note Vercel URL (e.g., https://campus-connect.vercel.app)

### 5. [ ] Updates & Test
- Update README.md with live URLs
- Test auth/posts/AI chat end-to-end
- Mark complete

**Progress:** GitHub repo: https://github.com/Nitin4969/Campus-connect-Ai-assistant ✅ | MongoDB: Pending MONGODB_URI & JWT_SECRET 📝 | Backend/Frontend: Pending | Test: Pending\n\n**Progress will be updated after each step.**

