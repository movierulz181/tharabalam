const names = [
    "అశ్విని", "భరణి", "కృత్తిక", "రోహిణి", "మృగశిర", "ఆరుద్ర", 
    "పునర్వసు", "పుష్య", "ఆశ్లేష", "మఖ", "పుబ్బ", "ఉత్తర", 
    "హస్త", "చిత్త", "స్వాతి", "విశాఖ", "అనూరాధ", "జ్యేష్ఠ", 
    "మూల", "పూర్వాషాఢ", "ఉత్తరాషాఢ", "శ్రవణ", "ధనిష్ఠ", "శతభిషం", 
    "పూర్వాభాద్ర", "ఉత్తరాభాద్ర", "రేవతి"
];

const dropdown1 = document.getElementById('dropdown1');
const dropdown2 = document.getElementById('dropdown2');

// Populate dropdowns
names.forEach((name, index) => {
    const option1 = document.createElement('option');
    option1.value = index + 1;
    option1.text = `${index + 1} ${name}`;
    dropdown1.add(option1);
    
    const option2 = document.createElement('option');
    option2.value = index + 1;
    option2.text = `${index + 1} ${name}`;
    dropdown2.add(option2);
});

function calculateResult() {
    const value1 = parseInt(dropdown1.value);
    const value2 = parseInt(dropdown2.value);

    let result = 0;

    if (value1 <= value2) {
        result = value2 - value1 + 1;
    } else {
        result = (27 - value1 + 1) + value2;
    }

    const finalValue = ((result - 1) % 9) + 1;

    const messages = {
        1: "జన్మతార = దేహనాశనము",
        2: "సంపత్తార = సంపద",
        3: "విపత్తార = కార్యనాశనము",
        4: "క్షేమతార = క్షేమము",
        5: "ప్రత్యకార = ప్రయోజనహోని",
        6: "సాధనతార = కార్యసాధనము",
        7: "నిధనతార = మరణ ప్రదము",
        8: "మిత్రతార = సుఖిసంపద",
        9: "పరమమైత్రతార = సుఖము కలుగజేయును"
    };

    document.getElementById('result').textContent = messages[finalValue];
}
