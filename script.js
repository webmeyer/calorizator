var weight = prompt('Какой у Вас вес (в кг)', '');
var length = prompt('Какой у Вас рост (в см)', '');
var age = prompt('Сколько Вам лет', '');
var activityRate = prompt('Ваш индекс активности', '');

// Метаболизм
var meta = 88.362 + (13.397 * weight) + (4.799 * length) - (5.677 * age);
    console.log('Метаболизм: ' + meta);

// Норма калорий
var calorieRate = Math.round(meta * activityRate);
    console.log('Норма калорий - ' + calorieRate);

// Норма Б - Ж - У
var proteins = Math.round(calorieRate * 0.40);
var fats = Math.round(calorieRate * 0.25);
var carbohydrates = Math.round(calorieRate * 0.35);
    console.log('Белки: ' + proteins);
    console.log('Жиры: ' + fats);
    console.log('Углеводы: ' + carbohydrates);