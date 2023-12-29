// checking push method again in function file
const animals = ['cow', 'dogs', 'cats'];
const AddAnimals = animals.push('pigs');
console.log(animals);
console.log(AddAnimals);
// simple function
function showMsg() {
    console.log('hello from function ')
}
showMsg();

const promise = new promise(function () {
    setTimeout(function () {
        console.log('hello world');
    }, 2000)
})
console.log(promise);
// one_objecet_method
<h2 class="demo"></h2>
const person = {
    first_name: 'sarkar_gee',
    last_name: 'web_simple',
    experience: 'five_year',
    get exper() {
        return this.experience;
    }
}
document.querySelector('.demo').innerHTML = person.experience;
//simple function with paramater
function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2);
// function with call
const detail = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}


detail.fullName();
const info = {
    firstName: 'mali',
    lastName: 'jeee',
    address: 'alamdar-chock',
    info_detail: function () {
        return this.firstName + "" + this.lastName;
    }
}