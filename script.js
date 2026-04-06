// --- Sophisticated Light Theme Chart Configs ---
Chart.defaults.color = '#64748B'; // Slate text
Chart.defaults.font.family = "'Outfit', sans-serif";
Chart.defaults.scale.grid.color = 'rgba(0, 0, 0, 0.05)'; // Light grid
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(255, 255, 255, 0.95)';
Chart.defaults.plugins.tooltip.titleColor = '#1E293B';
Chart.defaults.plugins.tooltip.bodyColor = '#10B981';
Chart.defaults.plugins.tooltip.borderColor = 'rgba(0, 0, 0, 0.05)';
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.padding = 12;

const COLORS = {
    brandEmerald: '#10B981',
    brandSky: '#0EA5E9',
    brandAmber: '#F59E0B',
    brandRed: '#EF4444'
};

document.addEventListener('DOMContentLoaded', () => {
    initKPIs();
    initLiveTracker();
    initCharts();
    initMap();
    initInteractions();
});

function initKPIs() {
    document.getElementById('val-water').innerText = '1,452';
    document.getElementById('val-renew').innerText = '64.8';
    document.getElementById('val-waste').innerText = '8,920';
}

function initLiveTracker() {
    let offset = 450.2; 
    const trackerEl = document.getElementById('tracker-val');
    setInterval(() => {
        offset += (Math.random() * 0.5); 
        trackerEl.innerText = offset.toFixed(2);
    }, 2000);
}

function initCharts() {
    // --- 1. POLAR AREA: Renewable vs Non-Renewable ---
    const ctxPolar = document.getElementById('energyPolarChart').getContext('2d');
    new Chart(ctxPolar, {
        type: 'polarArea',
        data: {
            labels: ['Solar', 'Wind', 'Hydro', 'Coal', 'Natural Gas'],
            datasets: [{
                data: [35, 25, 15, 40, 30],
                backgroundColor: [
                    'rgba(0, 230, 118, 0.7)',  // Solar (Green)
                    'rgba(0, 212, 255, 0.7)',  // Wind (Blue)
                    'rgba(2, 132, 199, 0.7)',  // Hydro (Deep Blue)
                    'rgba(255, 61, 0, 0.7)',   // Coal (Red)
                    'rgba(255, 214, 0, 0.7)'   // Gas (Yellow)
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { r: { ticks: { display: false }, grid: { color: 'rgba(255,255,255,0.05)' } } },
            plugins: { legend: { position: 'right', labels: { color: '#fff' } } }
        }
    });

    // --- 2. BUBBLE: Resource Depletion ---
    const ctxBubble = document.getElementById('depletionBubbleChart').getContext('2d');
    const bubbleData = Array.from({length: 20}, () => ({
        x: Math.random() * 100, // Forest Loss
        y: Math.random() * 100, // Water Usage
        r: Math.random() * 15 + 5 // Carbon Output
    }));
    
    new Chart(ctxBubble, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Global Industrial Centers',
                data: bubbleData,
                backgroundColor: 'rgba(2, 132, 199, 0.5)',
                borderColor: COLORS.brandSky,
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(0, 230, 118, 0.8)',
                hoverBorderColor: COLORS.brandEmerald
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: {
                x: { title: { display: true, text: 'Deforestation Index', color: '#94A3B8' } },
                y: { title: { display: true, text: 'Water Extraction Volume (GL)', color: '#94A3B8' } }
            },
            plugins: { legend: { display: false } }
        }
    });

    // --- 3. ML FORECASTING (Mixed) ---
    const ctxML = document.getElementById('mlForecastingChart').getContext('2d');
    const mlChart = new Chart(ctxML, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025 (P)', '2026 (P)', '2027 (P)'],
            datasets: [
                {
                    type: 'line',
                    label: 'Predicted Optimal Recycling Limit (Tons)',
                    data: [50, 55, 60, 68, 75, 82, 90, 100],
                    borderColor: COLORS.brandEmerald,
                    borderWidth: 3,
                    tension: 0.4,
                    borderDash: [5, 5],
                    fill: false
                },
                {
                    type: 'bar',
                    label: 'Actual E-Waste Generated',
                    data: [80, 85, 95, 105, 110, null, null, null],
                    backgroundColor: 'rgba(255, 61, 0, 0.4)',
                    borderColor: COLORS.brandRed,
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: {
                x: { grid: { display: false } },
                y: { title: {display: true, text: 'Volume (Thousands of Tons)'} }
            }
        }
    });

    // Simulate real-time ML live feed tweaking predictions
    setInterval(() => {
        const lastPredictedIdx = 7;
        const currentData = mlChart.data.datasets[0].data[lastPredictedIdx];
        mlChart.data.datasets[0].data[lastPredictedIdx] = currentData + (Math.random() * 2 - 1);
        mlChart.update('none'); // Update without animation to look like live stream
    }, 3000);

    // --- 4. RADAR: AI Integrity ---
    const ctxRadar = document.getElementById('sustainabilityRadarChart').getContext('2d');
    new Chart(ctxRadar, {
        type: 'radar',
        data: {
            labels: ['Waste Classification', 'Emission Tracking', 'Deforestation Alert', 'Renewable Propensity', 'Social Equity Index', 'Resource Optim'],
            datasets: [{
                label: 'Model Confidence Levels',
                data: [92, 88, 95, 78, 65, 85],
                backgroundColor: 'rgba(0, 212, 255, 0.2)',
                borderColor: COLORS.brandSky,
                pointBackgroundColor: COLORS.brandEmerald,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { r: { angleLines: { color: 'rgba(255,255,255,0.1)' }, grid: { color: 'rgba(255,255,255,0.1)' }, pointLabels: { font: {size: 12}, color: '#fff' } } }
        }
    });

    // --- 5. AREA: Global Carbon Emissions ---
    const ctxCarbon = document.getElementById('carbonAreaChart').getContext('2d');
    new Chart(ctxCarbon, {
        type: 'line',
        data: {
            labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Global CO2 Emissions (Mt)',
                data: [32000, 32500, 33000, 33200, 33800, 34200, 32500, 34800, 35500, 36000],
                backgroundColor: 'rgba(255, 61, 0, 0.2)',
                borderColor: COLORS.brandRed,
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { x: { grid: { display: false } }, y: { title: { display: true, text: 'Megatons (Mt)' } } },
            plugins: { legend: { display: false } }
        }
    });

    // --- 6. DOUGHNUT: Waste Generation ---
    const ctxWaste = document.getElementById('wasteDoughnutChart').getContext('2d');
    new Chart(ctxWaste, {
        type: 'doughnut',
        data: {
            labels: ['Plastic', 'E-Waste', 'Organic', 'Metal', 'Glass'],
            datasets: [{
                data: [45, 20, 15, 12, 8],
                backgroundColor: [
                    'rgba(255, 61, 0, 0.8)',
                    'rgba(0, 212, 255, 0.8)',
                    'rgba(0, 230, 118, 0.8)',
                    'rgba(255, 214, 0, 0.8)',
                    'rgba(2, 132, 199, 0.8)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            cutout: '70%',
            plugins: { legend: { position: 'right', labels: { color: '#fff' } } }
        }
    });

    // --- 7. LINE: Inefficiency ---
    const ctxIneff = document.getElementById('inefficiencyLineChart').getContext('2d');
    new Chart(ctxIneff, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Grid Transmission Losses (%)',
                data: [12.4, 12.1, 11.8, 11.9, 11.5, 11.2, 10.9, 11.1, 10.8, 10.5, 10.2, 9.8],
                borderColor: COLORS.brandAmber,
                borderWidth: 3,
                tension: 0.2
            }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { x: { grid: { display: false } } },
            plugins: { legend: { display: false } }
        }
    });

    // --- 8. BAR: Social Equity ---
    const ctxEquity = document.getElementById('socialEquityBarChart').getContext('2d');
    
    const gradExposure = ctxEquity.createLinearGradient(0, 0, 0, 400);
    gradExposure.addColorStop(0, 'rgba(255, 61, 0, 0.9)');
    gradExposure.addColorStop(1, 'rgba(255, 61, 0, 0.2)');

    const gradAccess = ctxEquity.createLinearGradient(0, 0, 0, 400);
    gradAccess.addColorStop(0, 'rgba(0, 230, 118, 0.9)');
    gradAccess.addColorStop(1, 'rgba(0, 230, 118, 0.2)');

    new Chart(ctxEquity, {
        type: 'bar',
        data: {
            labels: ['North America', 'Europe', 'South Asia', 'Sub-Saharan Africa', 'Latin America'],
            datasets: [
                {
                    label: 'Pollution Exposure Index',
                    data: [30, 25, 85, 75, 60],
                    backgroundColor: gradExposure,
                    borderColor: COLORS.brandRed,
                    borderWidth: 1,
                    borderRadius: 4
                },
                {
                    label: 'Clean Resource Access Index',
                    data: [90, 95, 45, 30, 50],
                    backgroundColor: gradAccess,
                    borderColor: COLORS.brandEmerald,
                    borderWidth: 1,
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            scales: { x: { grid: { display: false } }, y: { title: { display: true, text: 'Index Score (0-100)', color: '#94A3B8' } } }
        }
    });
}

function initMap() {
    const mapOptions = {
        attributionControl: false,
        zoomControl: false
    };

    const globalMap = L.map('globalMapObj', mapOptions).setView([20, 0], 2);
    // Switch to Light tile layer for "lite" theme
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd', maxZoom: 20
    }).addTo(globalMap);

    const emissionZones = [
        { name: "Amazon Basin", coords: [-3, -60], size: 4000, color: COLORS.brandRed, msg: "High Deforestation Alert" },
        { name: "Nordic Grid", coords: [60, 10], size: 2000, color: COLORS.brandEmerald, msg: "100% Renewable Transition" },
        { name: "East Asian Hub", coords: [35, 110], size: 5000, color: COLORS.brandAmber, msg: "High Emission, Transitioning" }
    ];

    const mapCircles = [];
    emissionZones.forEach(zone => {
        const circle = L.circle(zone.coords, { color: zone.color, fillColor: zone.color, fillOpacity: 0.5, radius: zone.size * 200 }).addTo(globalMap)
         .bindPopup(`<strong style="color:black;">${zone.name}</strong><br><span style="color:#555;">${zone.msg}</span>`);
        mapCircles.push(circle);
    });

    // Simulate real-time emission tracking pulsing
    let toggleRadius = true;
    setInterval(() => {
        toggleRadius = !toggleRadius;
        mapCircles[0].setRadius((toggleRadius ? 4200 : 3800) * 200);
        mapCircles[2].setRadius((toggleRadius ? 5200 : 4800) * 200);
    }, 1500);

    const localMap = L.map('localMapObj', mapOptions).setView([40.7128, -74.0060], 11);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd', maxZoom: 20
    }).addTo(localMap);
    
    const microGrids = [
        { coords: [40.7128, -74.0060], size: 3000, color: COLORS.brandSky, label: 'Downtown Active Grid Central' },
        { coords: [40.7831, -73.9712], size: 1500, color: COLORS.brandEmerald, label: 'UWS Solar Coalition' },
        { coords: [40.6782, -73.9442], size: 2200, color: COLORS.brandAmber, label: 'Brooklyn Solar Node' }
    ];

    microGrids.forEach(grid => {
        L.circle(grid.coords, { color: grid.color, fillColor: grid.color, fillOpacity: 0.4, radius: grid.size }).addTo(localMap)
            .bindPopup(`<strong style="color:black;">${grid.label}</strong>`);
    });
}

function initInteractions() {
    const navItems = document.querySelectorAll('.nav-links li');
    const tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            const targetId = item.getAttribute('data-target');
            if(targetId) {
                tabContents.forEach(tab => tab.classList.remove('active'));
                const targetSection = document.getElementById(targetId);
                if(targetSection) targetSection.classList.add('active');
            }
        });
    });
}
