function switchTab(tabName) {
    // Remove active classes
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.kpi-view').forEach(view => view.classList.remove('active'));

    // Find current elements
    const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(btn => btn.textContent.toLowerCase().includes(tabName));
    
    // Set active states
    if (tabName === 'tech') {
        document.getElementById('tech-kpi-view').classList.add('active');
        if (activeBtn) activeBtn.classList.add('active');
    } else if (tabName === 'ops') {
        document.getElementById('ops-kpi-view').classList.add('active');
        if (activeBtn) activeBtn.classList.add('active');
    }
}
