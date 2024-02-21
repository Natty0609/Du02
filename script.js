const firstName = prompt("Zadej jméno:", "Nataliya")
const surname = prompt("Zadej přijmení", "Tahova");
const mailDomain = "@fit.cvut.cz ";
const login = surname.slice(0, 5) + firstName.slice(0, 3);
const email = `${login}${mailDomain}`;

document.body.innerHTML += email.toLowerCase();

console.log(email.toLowerCase());
console.log(email);