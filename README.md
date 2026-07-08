# Nitro Sloth Games Corporate Website

Official corporate website repository for **Nitro Sloth Games**, an independent game studio creating polished mobile puzzle and narrative experiences. 

> **Sloth energy. Nitro speed.**
> *Thoughtful planning. Rapid execution. Consistent quality.*

Nitro Sloth Games operates as a branded studio venture under parent holding entity **Klyph OPC** (Chennai, Tamil Nadu, India).

---

## Website Structure

The website is designed with a premium, responsive dark cosmic aesthetic using Vanilla HTML, Custom CSS variables, and native JavaScript. It is fully search engine optimized (SEO), lightweight, and accessible.

### Core Pages
* **`index.html`** – Home landing page displaying the studio overview, latest news/announcements, newsletter signup, and flagship game showcase.
* **`games.html`** – Active game portfolio. Showcases **Crayon Sorter** and provides teasers/signups for upcoming concepts like *Project Jetpack Sloth* and *Sloth Academy*.
* **`studio.html`** – About the company, co-founders profiles (Codex, Shyam, Hiresh), mission, vision, and tagline explanation.
* **`b2b.html`** – Overview of interactive marketing services, event activations, gamification, and web mini-game engineering services.
* **`press.html`** – Press Kit hub offering downloadable logos, banners, watermarks, game screenshots, and official factsheets for media coverage.
* **`blog.html`** – Development logs and milestone chronicling.
* **`careers.html`** – Studio hiring culture and speculative application portals.
* **`contact.html`** – Business consultation inquiry form and direct support handles.
* **`support.html`** – Common troubleshooting steps and gameplay FAQ accordions.
* **`privacy.html`** & **`terms.html`** – Required app store legal documentation templates.

### Styling & Script Files
* **`styles.css`** – Central CSS design system containing HSL color tokens, typography configurations (Space Grotesk & Inter), glassmorphism cards, layout grids, and scroll entrance keyframes.
* **`script.js`** – Responsive navigation toggling, FAQ toggling, contact validations, and an interactive background canvas rendering drifting, hover-interactive glowing cosmic particles.

### Verification Assets
To maintain active mobile ad networks and domain indexing verification, these files are preserved in the root:
* **`app-ads.txt`** – Authorized digital seller listing for AdMob and programmatic networks.
* **`googleca586a44f4b6ec63.html`** – Google Search Console domain ownership validation.

---

## Local Development & Preview

Since the site is built on pure static pages with no database dependencies, you can preview the website locally using any standard static file server:

### Option A: Python HTTP Server (Recommended)
Open a terminal in the root folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option B: VS Code Live Server
1. Open the repository in VS Code.
2. Install the **Live Server** extension.
3. Click the **Go Live** button in the status bar.

---

## Deployment Guide

### Deploying to GitHub Pages
1. Go to your repository settings on GitHub.
2. Navigate to the **Pages** menu (under Code and Automation).
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Set the branch to `main` and the folder to `/ (root)`.
5. Click **Save**. Your site will be live at `https://<organization>.github.io/<repository-name>/` within minutes.