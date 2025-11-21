## NeuroCram – The Exam Intelligence Console

![NeuroCram Hero Screenshot](screenshots/hero.png)  
*Rewrite the science of last-minute studying. Turn exam chaos into calm, prioritized victory.*

NeuroCram is a single-screen "mission-control" dashboard that analyzes your exam details (subjects, days left, difficulty, confidence) and generates a smart, dynamic revision plan. It's not a basic planner—it's an AI-like system that feels like prepping for a high-stakes mission, blending performance analytics, stress predictions, and focus strategies with stunning visuals and smooth interactions.

Built for the NeuroCram Code Challenge, this project delivers a visually immersive yet functionally simple interface. Students don't fail exams because they don't study—they fail because they study blindly. NeuroCram fixes that.

## 🚀 Features
- **Hero Section + CTA**: Bold intro with easy inputs (sliders for difficulty/confidence, add subjects dynamically) and a "Generate Plan" button that triggers everything.
- **Intelligent Modules** (2–3 key insights):
  - **CramHeat Map**: Color-coded bar chart sorting subjects by urgency (formula: `(difficulty - confidence) / days * 10`), red-hot for high priority.
  - **Stress Level Prediction**: Radial gauge showing predicted stress % (total urgency * days factor), with personalized tips (e.g., "High: Insert breaks").
  - **BrainEnergy Gauge**: Smooth line timeline predicting burnout windows over days left (sinusoidal peaks, adjusted for hours/stress).
- **Dynamic Plan Output**: Prioritized daily schedule below modules, e.g., "Day 1: 3h Math (High Urgency) + 1h Physics."
- **Visual Polish**: Reactive backgrounds (particle field + neon grid scan), micro-animations (staggers, hovers), GPU-friendly with Framer Motion.
- **Easter Egg**: Hover footer for "Exam Survival Probability" (100 - stress % with emojis like 🚀 or ⚠️).
- **Responsive & Calm**: Works on mobile/desktop, dark neon theme (#0A0A0A base, cyan/magenta accents), minimal clutter despite richness.

This feels powerful—like a command center—not messy. Clarity over noise.

## 📋 Quick Start
### Prerequisites
- Node.js (v18+)
- Git

### Installation
1. Clone the repo:
   ```
   git clone https://github.com/sophonie-1/round_7.git
   cd neurocram  # Or adjust to your folder
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Run locally:
   ```
   npm run dev
   ```
   - Opens at http://localhost:5173. Add subjects, generate a plan, and explore!

## Build & Deploy
- Build: `npm run build` (outputs to `/dist`).
- Deploy to GitHub Pages: `npm run deploy` (auto-builds and pushes).

## 🎮 Usage
1. **Input Your Intel**: In the hero, add subjects (e.g., "Math"), set difficulty/confidence sliders (1–10), days left (1–14), and daily hours (1–12).
2. **Generate Plan**: Hit the CTA – unlocks modules and plan.
3. **Review Insights**:
   - Heat Map: See urgency-sorted subjects (high = focus first).
   - Stress Gauge: Get % + tips (e.g., "Medium: Alternate subjects").
   - Energy Gauge: Timeline of peak/burnout windows.
4. **Mission Plan**: Scroll to bottom for daily schedule.
5. **Easter Egg**: Hover footer for survival odds.

Example: 3 days left, Math (diff 9/conf 2), Physics (7/6) → Math prioritized, stress ~65% ("Medium"), energy peaks mornings.

## 🛠 Tech Stack
- **Frontend**: React (19.2.0) + Vite (fast bundler).
- **Styling**: Tailwind CSS (utility-first, dark/neon theme).
- **Animations**: Framer Motion (reactive BGs, staggers, hovers – GPU-friendly).
- **Charts**: Chart.js + react-chartjs-2 (heat map bars, radial gauge, line timeline).
- **State**: Custom hook (`useExamState.js`) for exam data & logic.
- **Deployment**: GitHub Pages (static host via gh-pages).

Component-driven architecture: Clean folders (`components/`, `hooks/`) for reusability. No clutter – bold Orbitron font, concise typography.

## 📸 Screenshots
| Hero & Inputs | Modules Grid | Mission Plan |
|---------------|--------------|--------------|
| ![Hero](screenshots/hero.png) | ![Modules](screenshots/modules.png) | ![Plan](screenshots/plan.png) |

*(Add your own screenshots here – capture from localhost:5173.)*

## 🎥 Demo Video
Watch the 5-minute walkthrough: [Loom Video](https://www.loom.com/share/YOUR_LOOM_LINK)  
Covers: Design process, component structure, animations, and module intelligence (e.g., urgency calc).

Live Demo: [https://sophonie-1.github.io/round_7/](https://sophonie-1.github.io/round_7)

## 💡 Design & Innovation Notes
- **Thought Process**: Drew from mission-control interfaces (e.g., NASA dashboards) – single screen for immersion, neon accents for exam "pressure" without overwhelm.
- **Innovations**: Urgency sorting in hook, conditional tips, burnout prediction via mock sinusoidal math. Prioritized calm: Animations <1s, reduced-motion support.
- **Constraints Met**: 2+ reactive BGs, micro-anims, clean React structure, Tailwind. No noise – sharp priorities.

## 🤝 Contributing
Fork, PRs welcome! Focus on accessibility (e.g., ARIA labels) or new modules (e.g., Question Pattern Emulator).

## 📄 License
MIT – Free to use/fork.

Built with ❤️ for the NeuroCram Challenge. Questions? Open an issue. Exam survival probability: 100% with NeuroCram! 🚀

## author
--Bukira sophonie