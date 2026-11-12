const button = document.getElementById("scanBtn");

const input = document.getElementById("userInput");

const results = document.getElementById("results");



button.addEventListener("click", function () {

    let text = input.value;

    
    text = text.toLowerCase();



    text = text.replaceAll("4", "a");
    text = text.replaceAll("3", "e");
    text = text.replaceAll("1", "i");
    text = text.replaceAll("0", "o");
    text = text.replaceAll("5", "s");
    text = text.replaceAll("7", "t");



    let goblinScore = 0;

    let villainScore = 0;

    let sleepScore = 0;



    if (text.includes("chaos")) {

        goblinScore += 25;
    }

    if (text.includes("lmao")) {

        goblinScore += 20;
    }

    if (text.includes("hehe")) {

        goblinScore += 15;
    }

    if (text.includes("sleep")) {

        sleepScore += 30;
    }

    if (text.includes("coffee")) {

        sleepScore += 20;
    }

    if (text.includes("power")) {

        villainScore += 25;
    }

    if (text.includes("revenge")) {

        villainScore += 40;
    }



    let specialCount = 0;

    for (let char of text) {

        if (
            char === "!" ||
            char === "@" ||
            char === "#" ||
            char === "$" ||
            char === "%" ||
            char === "&"
        ) {

            specialCount++;
        }
    }



    goblinScore += specialCount * 5;



    let uppercaseCount = 0;

    for (let char of input.value) {

        if (char >= "A" && char <= "Z") {

            uppercaseCount++;
        }
    }



    villainScore += uppercaseCount * 2;



    let vowelCount = 0;

    for (let char of text) {

        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {

            vowelCount++;
        }
    }



    let vowelRatio = vowelCount / text.length;



    if (vowelRatio < 0.25) {

        goblinScore += 30;
    }



    goblinScore += Math.floor(Math.random() * 15);

    villainScore += Math.floor(Math.random() * 10);

    sleepScore += Math.floor(Math.random() * 20);



    if (goblinScore > 100) {

        goblinScore = 100;
    }

    if (villainScore > 100) {

        villainScore = 100;
    }

    if (sleepScore > 100) {

        sleepScore = 100;
    }



    results.innerHTML = `

        <h2>SCAN COMPLETE</h2>

        <p>Goblin Energy: ${goblinScore}%</p>

        <p>Villain Probability: ${villainScore}%</p>

        <p>Sleep Deprivation Index: ${sleepScore}%</p>

    `;
});