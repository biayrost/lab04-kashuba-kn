// Аптека: облік залишків ліків і термінів придатності
const TODAY = new Date('2026-10-22');
const DAY_MS = 24 * 60 * 60 * 1000;

const shop = {
    name: "Аптека Здоров'я",
};
const hours = {open: 8, close: 20, days: 7, phone: '044-123-45-67'};

const limits = {'max-items': 5, maxPrice: 500, minStock: 20, warnDays: 30, currency: 'грн'};

const rounding = {
    digits: 2,
    mode: 'fixed',
};
const categories = ['знеболювальне', 'антибіотик', 'вітаміни'];

const medicines = [
    {
        id: 1,
        name: 'Парацетамол',
        category: 'знеболювальне',
        price: 45.5,
        quantity: 120,
        expires: '2027-03-15',
    },
    {id: 2, name: 'Ібупрофен', category: 'знеболювальне', price: 78, quantity: 60, expires: '2026-11-10'},
    {
        id: 3,
        name: 'Амоксицилін',
        category: 'антибіотик',
        price: 132.4,
        quantity: 15,
        expires: '2027-01-20',
    },
    {id: 4, name: 'Цитрамон', category: 'знеболювальне', price: 28, quantity: 200, expires: '2026-10-01'},
    {id: 5, name: 'Вітамін C', category: 'вітаміни', price: 95, quantity: 80, expires: '2028-05-30'},
    {id: 6, name: 'Аспірин', category: 'знеболювальне', price: 52.8, quantity: 0, expires: '2027-08-12'},
    {
        id: 7,
        name: 'Лоратадин',
        category: 'антигістамінне',
        price: 110,
        quantity: 35,
        expires: '2026-12-05',
    },
    {id: 8, name: 'Омепразол', category: 'шлункове', price: 156.9, quantity: 25, expires: '2026-11-18'},
];

function daysUntil(dateStr) {
    const diff = new Date(dateStr) - TODAY;
    return Math.round(diff / DAY_MS);
}

function isExpired(med) {
    return daysUntil(med.expires) < 0;
}

const isExpiringSoon = med => daysUntil(med.expires) >= 0 && daysUntil(med.expires) <= limits.warnDays;

const findByName = (list, name) => list.find(m => m.name === name);

const getStatusCode = med => {
    const days = daysUntil(med.expires);
    if (days < 0) return 'expired';
    if (days <= limits.warnDays) return 'soon';
    return 'ok';
};

const discountPrice = med => med.price * 0.9; // знижка 10 % для ліків із коротким терміном

function getStatusText(code) {
    let text;
    switch (code) {
        case 'ok':
            text = 'у наявності';
            break;
        case 'soon':
            text = 'термін спливає';
            break;
        case 'expired':
            text = 'прострочено';
            break;
        case 'discount':
            text = 'діє знижка';
            break;
        default:
            text = 'невідомо';
    }
    return text;
}

function needsAttention(med) {
    if (
        med.quantity < limits.minStock ||
        (daysUntil(med.expires) < 0 && med.price > 0) ||
        (med.category === 'антибіотик' && med.quantity < 50)
    ) {
        return true;
    }
    return false;
}

function stockLevel(qty) {
    if (qty === 0) {
        return 'немає';
    }
    return qty < limits.minStock ? 'мало' : 'достатньо';
}

function priceCategory(price) {
    if (price > 100) {
        return 'дорогий';
    }
    return 'доступний';
}

function stockValue(list) {
    let total = 0;
    for (const med of list) {
        total += med.price * med.quantity;
    }
    return total;
}

function countUnits(list) {
    let units = 0;
    for (let i = 0; i < list.length; i++) {
        units += list[i].quantity;
    }
    return units;
}

function findCheapest(list) {
    let cheapest;
    for (const med of list) {
        if (cheapest === undefined || med.price < cheapest.price) cheapest = med;
    }
    return cheapest;
}

function findLatest(list) {
    let latest;
    list.forEach(m => {
        if (!latest || m.expires > latest.expires) latest = m;
    });
    return latest;
}

function formatLine(text, prefix = '-') {
    return `${prefix} ${text}`;
}

function printRow(name, category, price, quantity, status, expires) {
    return `${name} | ${category} | ${price} | ${quantity} | ${status} | ${expires}`;
}

function createOrder(medName, qty, customer, urgent) {
    const med = findByName(medicines, medName);
    if (!med) return null;
    const price = med.price * qty;
    return {
        customer: customer,
        medicine: med.name,
        qty: qty,
        total: urgent ? price * 1.1 : price,
        urgent: urgent,
    };
}

function restock(med, amount) {
    if (!med) return null;
    if (amount < 0) {
        throw new Error('Кількість поповнення не може бути від’ємною');
    }
    med.quantity += amount;
    return med.quantity;
}

const countByCategory = list =>
    list.reduce((acc, m) => {
        acc[m.category] = (acc[m.category] || 0) + 1;
        return acc;
    }, {});

let lowCount = 0;
let soonCount = 0;
console.log('Запуск звіту');
console.log(`Назва: ${shop.name}, працює ${hours.open}:00-${hours.close}:00`);
console.log(`Дата: ${TODAY.toISOString().slice(0, 10)}`);

const sampleRow = printRow(
    'Парацетамол знеболювальний у таблетках',
    'знеболювальне засіб',
    45.5,
    120,
    'у наявності на складі',
    '2027-03-15'
);
console.log(sampleRow);

for (const med of medicines) {
    if (needsAttention(med)) lowCount += 1;
    if (isExpiringSoon(med)) soonCount += 1;
}

const expired = medicines.filter(isExpired);
const soonList = medicines.filter(m => isExpiringSoon(m));
const discounted = soonList.map(m => ({name: m.name, price: discountPrice(m)}));

console.log(`Усього позицій: ${medicines.length}`);
console.log(`Одиниць на складі: ${countUnits(medicines).toFixed(rounding.digits)}`);
console.log(`Вартість залишків: ${stockValue(medicines).toFixed(rounding.digits)} ${limits.currency}`);
console.log(`Прострочено: ${expired.length}`);
console.log(`Скоро спливає: ${soonCount}`);
console.log(`Потребують уваги: ${lowCount}`);
if (soonCount > 0) console.log(`Знижки діють на ${soonCount} позиції`);
for (const item of discounted) {
    console.log(formatLine(`${item.name}: ${item.price.toFixed(rounding.digits)}`, '%'));
}

const counts = countByCategory(medicines);
Object.entries(counts).forEach(([cat, n]) => console.log(formatLine(`${cat}: ${n}`, '#')));
console.log(`Ключові категорії: ${categories.join(', ')}`);
const cheapest = findCheapest(medicines);
const latest = findLatest(medicines);
console.log(`Найдешевший: ${cheapest.name}, ${priceCategory(cheapest.price)}`);
console.log(`Найдовший термін: ${latest.name} (${latest.expires})`);
medicines.slice(0, limits['max-items']).forEach(med => {
    console.log(
        formatLine(`${med.name}: ${getStatusText(getStatusCode(med))}, ${stockLevel(med.quantity)}`, '*')
    );
});

const order = createOrder('Ібупрофен', 3, 'Іваненко', true);
console.log(
    `Замовлення: ${order.customer}, ${order.medicine} x${order.qty}, сума ${order.total.toFixed(rounding.digits)}`
);
console.log(`Аспірин після поповнення: ${restock(findByName(medicines, 'Аспірин'), 40)}`);
