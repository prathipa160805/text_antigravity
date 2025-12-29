document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calcBmiBtn = document.getElementById('calculate-bmi-btn');
    const bmiResult = document.getElementById('bmi-result');
    const waterResult = document.getElementById('water-result');

    const pushupsInput = document.getElementById('pushups');
    const checkFitnessBtn = document.getElementById('check-fitness-btn');
    const fitnessResult = document.getElementById('fitness-result');

    // BMI & Water Calculation
    calcBmiBtn.addEventListener('click', () => {
        const h = parseFloat(heightInput.value);
        const w = parseFloat(weightInput.value);

        if (!h || !w || h <= 0 || w <= 0) {
            alert("Please enter valid height and weight!");
            return;
        }

        // BMI Formula: kg / (m^2)
        const heightM = h / 100;
        const bmi = (w / (heightM * heightM)).toFixed(1);

        let category = '';
        let color = '';

        if (bmi < 18.5) {
            category = 'Underweight';
            color = 'var(--warning-color)';
        } else if (bmi < 25) {
            category = 'Normal';
            color = 'var(--success-color)';
        } else if (bmi < 30) {
            category = 'Overweight';
            color = 'var(--warning-color)';
        } else {
            category = 'Obese';
            color = 'var(--danger-color)';
        }

        bmiResult.classList.remove('hidden');
        bmiResult.querySelector('.value').textContent = bmi;
        const catSpan = bmiResult.querySelector('.category');
        catSpan.textContent = category;
        catSpan.style.color = color;

        // Water Recommendation: Weight (kg) * 0.033
        const waterLitres = (w * 0.033).toFixed(1);
        waterResult.querySelector('.value').textContent = waterLitres;
    });

    // Fitness Level Logic
    checkFitnessBtn.addEventListener('click', () => {
        const p = parseInt(pushupsInput.value);

        if (isNaN(p) || p < 0) {
            alert("Please enter a valid pushup count!");
            return;
        }

        let level = '';

        if (p < 10) {
            level = 'Beginner';
        } else if (p < 30) {
            level = 'Intermediate';
        } else if (p < 50) {
            level = 'Advanced';
        } else {
            level = 'Elite';
        }

        fitnessResult.classList.remove('hidden');
        fitnessResult.querySelector('.value').textContent = level;
    });
});
