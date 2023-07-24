// Object는 Map과 유사
// Map.entrySet -> Map.Entry (Key:Value) 반환
const person = {
    firstName: 'Jeeho',
    lastName: 'Park',
    'phone number': '010-1234-5678'
};

const numbers = [10, 20, 30];

for (const key in person) {
    console.log(key);
    console.log(person[key]);
}

for (const number of numbers) {
    console.log(number);
}