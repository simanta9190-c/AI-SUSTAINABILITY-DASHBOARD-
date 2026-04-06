<div align="center">
  <img src="assets/sustainedge_logo.png" alt="SustainEdge Logo" width="150" />
</div>

# SustainEdge Analytics | Sustainability Dashboard

🟢 **LIVE DASHBOARD:** [View the Dashboard Online](https://simanta9190-c.github.io/AI-SUSTAINABILITY-DASHBOARD-/)

> [!TIP]
> **To add the "View Live" option to your GitHub Repo:**
> 1. Go to your repo home page: [SustainEdge Repo](https://github.com/simanta9190-c/AI-SUSTAINABILITY-DASHBOARD-)
> 2. Look at the **"About"** section on the right side.
> 3. Click the ⚙️ icon.
> 4. Check the box **"Use your GitHub Pages website"**.
> 5. Click **Save changes**.

![SustainEdge Banner](https://img.shields.io/badge/Project-Sustainability_Analytics-10B981?style=for-the-badge)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

A premium, AI-driven sustainability analytics dashboard designed to analyze and address critical global environmental challenges. Built with a sophisticated **Light Theme** and a modern glassmorphism UI, this application visualizes complex data relating to resource depletion, global climate impact, and provides actionable optimization insights.

## 🗂 Project Structure
```text
📦 AI-SUSTAINABILITY-DASHBOARD-
 ┣ 📂 assets
 ┃ ┗ 📜 sustainedge_logo.png
 ┣ 📂 data
 ┃ ┣ 📜 global_emissions_data.csv
 ┃ ┗ 📜 microgrid_capacity.json
 ┣ 📜 index.html
 ┣ 📜 script.js
 ┣ 📜 style.css
 ┗ 📜 README.md
```

## 🌍 Problem Domain Addressed

Despite growing awareness, societies continue to face critical sustainability issues. This dashboard targets five key problem domains:
- **Resource Depletion:** Overuse of water and deforestation.
- **Climate Impact:** Industrial carbon emissions and environmental degradation.
- **Waste Management Challenges:** Inefficient recycling patterns and increasing plastic/e-waste.
- **Energy Inefficiency:** Dependence on non-renewable energy sources.
- **Social Inequality:** Disproportionate environmental risk exposure faced by marginalized communities.

## ✨ Core Features

* **Global Impact Summary:** Live-updating widgets tracking real-time carbon offsets, clean water saved, and renewable energy coverage.
* **EDA Insights Tab:** In-depth Exploratory Data Analysis featuring Polar Area charts (energy sources), Bubble charts (deforestation density), and Doughnut charts (waste categorization).
* **ML Predictions Tab:** Predictive AI forecasting models projecting optimal recycling limits, AI integrity radar charts, and social equity bar charts.
* **Regional Diagnostics (Maps):** Interactive light-mode Leaflet maps featuring simulated live pulses for deforestation alerts and detailed plotting of urban micro-grids.
* **Resource Optimization:** Actionable data-driven insights with progress tracking to tackle industrial water waste, shift to solar capacity, and subsidize clean energy access.

## 🚀 How to Run Locally

This dashboard uses Vanilla JS, HTML, and CSS and requires absolutely no build steps. 

1. Clone the repository:
```bash
git clone https://github.com/simanta9190-c/AI-SUSTAINABILITY-DASHBOARD-.git
cd AI-SUSTAINABILITY-DASHBOARD-
```
2. Serve the directory so that external map scripts load correctly. (e.g. using Python):
```bash
python3 -m http.server 8000
```
3. Open your browser and navigate to `http://localhost:8000`

## 🛠 Technology Stack
- **Structure:** HTML5
- **Styling:** Vanilla CSS (Refined Light Theme, Glassmorphism design)
- **Logic:** Vanilla JavaScript 
- **Data Visualization:** Chart.js
- **Mapping:** Leaflet.js with CartoDB Positron Light Layer
