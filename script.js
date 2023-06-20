//1st quest
const result = 5+5+"5";
console.log("1.result >>>", result);
console.log("1.typeof(result) >>>", typeof(result));

//2nd quest
const email = prompt("enter your Email");
if (email.includes("@")) {
    alert("register complited");
} else if (!email.includes("@")) {
    alert("eror, email will have '@'");
};

//3th quest
const words = ["My", "name", "is"];
const name = "Viktor";
const fullName = `${words[0]} ${words[1]} ${words[2]} ${name}`;
console.log("3.fullName >>>", fullName);

//4th quest
const userName = "Ivan";
const summa = 300;
alert(`Thank you, ${userName} to the splaty ${summa} UAH`);