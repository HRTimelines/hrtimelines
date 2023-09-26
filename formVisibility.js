const demographicQuestions = document.getElementById('section1')
const mascQuestions = document.getElementById('section2')
const mascSexQuestions = document.getElementById('section3')
const femQuestions = document.getElementById('section4')
const femSexQuestions = document.getElementById('section5')
const healthQuestions = document.getElementById('section6')
const feedbackQuestions = document.getElementById('section7')

mascQuestions.style.display = "none";
mascSexQuestions.style.display = "none";
femQuestions.style.display = "none";
femSexQuestions.style.display = "none";
healthQuestions.style.display = "none";
feedbackQuestions.style.display = "none";

function showMascFem() {
    var type = document.querySelector('input[name="hormone-type"]:checked').value;
    
    if (type == "masculinizing") {
        mascQuestions.style.display = ""
        femQuestions.style.display = "none"
        femSexQuestions.style.display = "none"
    }
    if (type == "feminizing") {
        femQuestions.style.display = ""
        mascQuestions.style.display = "none"
        mascSexQuestions.style.display = "none"
    }
}

function showMascSex() {
    var response = document.querySelector('input[name="masc-sex-questions-permission"]:checked').value;

    if (response == "yes") {
        mascSexQuestions.style.display = ""
    }
    if (response == "no") {
        mascSexQuestions.style.display = "none"
        healthQuestions.style.display = ""
    }
}

function showFemSex() {
    var response = document.querySelector('input[name="fem-sex-questions-permission"]:checked').value;

    if (response == "yes") {
        femSexQuestions.style.display = ""
    }
    if (response == "no") {
        femSexQuestions.style.display = "none"
        healthQuestions.style.display = ""
    }
}

function showHealth() {
    healthQuestions.style.display = ""
}

function showFeedback() {
    feedbackQuestions.style.display = ""
}