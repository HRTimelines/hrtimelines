function constructCheckboxQuestion(id, name, questionString, optionsArray) {
    section = document.getElementById(id)
    let s = ""
    for (e of optionsArray){
        s = '<input type="checkbox" name=' + name + 'value=' + e + '>' + e + '<br>'
        questionString += s
    }
    section.innerHTML = questionString
}

function constructEffectsQuestion(id, name, effectsString, effectsArray){
    section = document.getElementById(id)
    effectsString += "<table><tr> <th>Effect</th> <th>Start Date</th> <th>End Date</th> <th>Ongoing?</th> </tr>"
    
    let effect = ""
    let start = ""
    let end = ""
    let ongoing = ""
    for (e of effectsArray){
        //construct start, end, ongoing, reason for stopping
        effect = '<td><input type="checkbox" name=' + name + 'value=' + e + 'Bool>' + e + '</input></td>'
        start = '<td><input type="date" name=' + name + 'value=' + e + 'Start></input></td>'
        end = '<td><input type="date" name=' + name + 'value=' + e + 'End></input></td>'
        ongoing = '<td><input type="checkbox" name=' + name + 'value=' + e + 'Ongoing></input></td>'
        effectsString += '<tr>' + effect + start + end + ongoing + '</tr>'
    }

    section.innerHTML = effectsString + "</table>"
}

function addDoseQuestionRow(name, tableId) {
    table = document.getElementById(tableId)
    
    row = table.insertRow(-1)
    method = row.insertCell(0)
    area = row.insertCell(1)
    medication = row.insertCell(2)
    amount = row.insertCell(3)
    frequency = row.insertCell(4)
    startDate = row.insertCell(5)
    endDate = row.insertCell(6)
    ongoing = row.insertCell(7)
    termination = row.insertCell(8)
    
    method.innerHTML = '<input type="text" name=' + name + '></input>'
    area.innerHTML = '<input type="text" name=' + name + '></input>'
    medication.innerHTML = '<input type="text" name=' + name + '></input>'
    amount.innerHTML = '<input type="text" name=' + name + '></input>'
    frequency.innerHTML = '<input type="text" name=' + name + '></input>'
    startDate.innerHTML = '<input type="date" name=' + name + '></input>'
    endDate.innerHTML = '<input type="date" name=' + name + '></input>'
    ongoing.innerHTML = '<input type="checkbox" name=' + name + '></input>'
    termination.innerHTML = '<input type="text" name=' + name + '></input>'
}

function constructDoseQuestion(id, name, tableId) {
    section = document.getElementById(id)
    header = "<table id=" + tableId + "><tr> <th>Method</th> <th>Application Area</th> <th>Medication</th> <th>Amount</th> <th>Frequency</th> <th>Start Date</th> <th>End Date</th> <th>Ongoing?</th> <th>Reason for terminating<th> </tr>"

    section.innerHTML = header
    addDoseQuestionRow(name, tableId)
}

function onButtonClick(name, tableId) {
    addDoseQuestionRow(name, tableId)
}


let genderId = 'genderQuestion'
let genderName = 'gender'
let genderQuestionString = '<label for="gender">Which category(s) best describe you?  Select all that apply</label><br>'
let genderArray = ["Male", 
    "Female", 
    "Genderfluid", 
    "Genderqueer", 
    "Non-Binary", 
    "Agender", 
    "Demiboy", 
    "Demigirl", 
    "Questioning"]

constructCheckboxQuestion(genderId, genderName, genderQuestionString, genderArray)

let raceId = 'raceQuestion'
let raceName = 'race'
let raceQuestionString = '<label for="race">What category(s) best describe you?</label><br>'
let raceArray = ["East Asian", 
    "Black or African American", "Hispanic, Latino, or Spanish origin",
    "Middle Eastern or North African", 
    "Native American or Alaska Native", 
    "Native Hawaiian or Other Pacific Islander", 
    "South Asian", 
    "South East Asian", 
    "Sub-Saharan African", 
    "White/European Descent"]

constructCheckboxQuestion(raceId, raceName, raceQuestionString, raceArray)

mascEffectsId = "mascEffectsId"
mascEffectsName = "masc-effects"
mascEffectsString = ""
mascEffectsArray = ["Deeper voice",
    "Cessation of menstruation",
    "Facial and/or body hair",
    "Thicker skin",
    "Weight gain",
    "Acne/oily skin",
    "Male-pattern baldness",
    "Sleep apnea",
    "Rise in cholesterol",
    "High blood pressure",
    "Polycythemia (excess red blood cell production",
    "Pelvic pain",
    "Body odour",
    "Fat redistribution",
    "Increased appetite",
    "Dulled taste or smell",
    "Emotional changes (such as getting angrier quicker, or an increase development of a mental health issue",
    "Changes in perspiration",
    "Thicker/stronger nails",
    "Increased muscle mass",
    "Facial feature changes",
    "Increased tolerance for caffeine/alcohol",
    "Change in sexual orientation",
    "Changes in ADHD symptoms (if applicable)"]

constructEffectsQuestion(mascEffectsId, mascEffectsName, mascEffectsString, mascEffectsArray)

mascEffectsSexId = "mascEffectsSexId"
mascEffectsSexName = "mascEffectsSex" // need a label for this in the html probably
mascEffectsSexString = ""
mascEffectsSexArray = ["Bottom Growth",
    "Vaginal atrophy",
    "Increased libido",
    "Change in orgasm",
    "change in genital sensitivity and/or response"]

constructEffectsQuestion(mascEffectsSexId, mascEffectsSexName, mascEffectsSexString, mascEffectsSexArray)

femEffectsId = "femEffectsId"
femEffectsName = "fem-effects"
femEffectsString = ""
femEffectsArray = ["Skin softening",
    "Less oily skin",
    "Increased flexibility",
    "Slimmer hands & wrists",
    "Smaller feet",
    "Thinner or softer fingernails",
    "Reduced body hair",
    "changes in body temperature",
    "Changes in perspiration",
    "Changes in body odour",
    "Fat redistribution",
    "Breast growth",
    "Reduced muscle mass",
    "changes in facial features or shape",
    "Changes in scalp hair",
    "Reduced tolerance to caffeine, alcohol, or psychotropics",
    "Changes in sexual orientation",
    "Increased emotional capacity",
    "Increase in appetite",
    "Decrease in appetite",
    "Imrpoved sleep",
    "Improved sense of smell",
    "Improved colour perception",
    "Improved spatial awareness",
    "Changes in taste",
    "Changes in ADHD symptoms (if applicable)"]

constructEffectsQuestion(femEffectsId, femEffectsName, femEffectsString, femEffectsArray)

femEffectsPeriodId = "femEffectsPeriodId"
femEffectsPeriodName = "fem-effects-period"
femEffectsPeriodString = ""
femEffectsPeriodArray = ["Cramping in intestine or abdomen",
    "Bloating or increased water retention",
    "Gas or other intestinal issues",
    "Emotional instability (any of mood swings, irrational thoughts, heightened depression and/or dysmporphia, depersonalization or dissociation, increased dysphoria, increased irritability)",
    "Muscle or joint aches and pains",
    "Breast engorgement or nipple tenderness",
    "Acne",
    "Fatigue",
    "Appetite changes or spontaneous cravings (ex. chocolate cravings)",
    "Migraines"]

constructEffectsQuestion(femEffectsPeriodId, femEffectsPeriodName, femEffectsPeriodString, femEffectsPeriodArray)

femEffectsSexId = "femEffectsSexId"
femEffectsSexName = "fem-effects-sex"
femEffectsSexString = ""
femEffectsSexArray = ["Increased Genital Sensitivity",
    "Changes in moisture and odor of genetalia",
    "Changes in colour or texture of genetalia",
    "Fewer erections",
    "Clear ejaculate",
    "Testicluar atrophy",
    "Increased arousing response to touch",
    "Changes in orgasm",
    "Reduced libido"]

constructEffectsQuestion(femEffectsSexId, femEffectsSexName, femEffectsSexString, femEffectsSexArray)

mascAdministrationId = "mascAdministrationId"
mascAdministrationName = "masc-administration"
mascTableId = "mascTable"

constructDoseQuestion(mascAdministrationId, mascAdministrationName, mascTableId)