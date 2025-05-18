const weight = document.getElementById('weight');
const height = document.getElementById('height');
const warningMsg = document.getElementById('warningMsg');
const calculateBtn = document.getElementById('calculateBtn');
const resetBtn = document.getElementById('resetBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const weightValue = parseFloat(weight.value);
    const heightValue = parseFloat(height.value) / 100;

    if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
        warningMsg.textContent = 'Please enter valid values for weight and height';
        warningMsg.classList.remove('d-none');

        return;
    }

    warningMsg.classList.add('d-none');

    let bmi = weightValue / (heightValue * heightValue);
    bmi = Number.isInteger(bmi) ? bmi : bmi.toFixed(1);

    let category = '';
    let description = '';
    let theme = '';

    if (bmi < 16.0) {
        category = "Severe Underweight";
        description = "Indicates significant undernutrition, which may lead to health issues such as weakened immunity, infertility, or organ dysfunction. Medical evaluation is strongly recommended.";
        theme = 'danger';
    }
    else if (16.0 <= bmi && bmi <= 16.9) {
        category = "Moderate Underweight";
        description = "Suggests undernutrition, potentially causing fatigue, reduced muscle mass, or hormonal imbalances. Medical consultation may be needed if any health issues are suspected.";
        theme = 'warning';
    }
    else if (17.0 <= bmi && bmi <= 18.4) {
        category = "Mild Underweight";
        description = "May indicate slight undernutrition. While less severe, it could still pose risks like reduced energy or compromised immune function.";
        theme = 'warning';
    }
    else if (18.5 <= bmi && bmi <= 24.9) {
        category = "Normal Weight";
        description = "Associated with the lowest risk of adverse health effects. It's considered healthy for most adults, supporting optimal physical function.";
        theme = 'success';
    }
    else if (25.0 <= bmi && bmi <= 29.9) {
        category = "Overweight";
        description = "Indicates excess body weight, increasing the risk of conditions like hypertension, type 2 diabetes, and cardiovascular disease. Lifestyle changes may be recommended to reduce the risk.";
        theme = 'warning';
    }
    else if (30.0 <= bmi && bmi <= 34.9) {
        category = "Obesity Class I";
        description = "Moderate obesity, with a moderate risk of health issues like heart disease, diabetes, and joint problems. Medical advice is often warranted.";
        theme = 'danger';
    }
    else if (35.0 <= bmi && bmi <= 39.9) {
        category = "Obesity Class II";
        description = "Severe obesity, significantly elevating high risk of serious health conditions like stroke, sleep apnea, and certain cancers. Intervention is typically needed.";
        theme = 'danger';
    }
    else if (40.0 <= bmi) {
        category = "Obesity Class III";
        description = "Extremely high risk; often referred to as morbid or severe obesity. This carries the highest risk for life-threatening conditions, including heart failure and severe mobility issues. Urgent medical attention is advised.";
        theme = 'danger';
    }

    result.innerHTML = `
            <section class="w-100 card rounded-3 bg-${theme}-subtle text-${theme}-emphasis border-${theme}-subtle">
                <div class="card-header lead text-bg-${theme}">
                    BMI Result
                </div>

                <div class="card-body">
                    <h2 class="mb-4">BMI: ${bmi}</h2>
                    <p><span class="fw-bolder">Category:</span> ${category}</p>
                    <p><span class="fw-bolder">Description:</span> ${description}</p>
                </div>
            </section>
    `;

    result.classList.remove('d-none');
});

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    input.addEventListener('input', () => {
        result.textContent = '';
    });
});

resetBtn.addEventListener('click', (e) => {
    e.preventDefault();

    weight.value = '';
    height.value = '';
    warningMsg.classList.add('d-none');
    result.textContent = '';
});