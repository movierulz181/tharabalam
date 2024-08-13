const names = [
    "అశ్విని (చు, చే, చో, ల)", "భరణి (లీ, లూ, లే, లో)", "కృత్తిక (అ, ఈ, ఉ, ఏ)", 
    "రోహిణి (ఓ, వ, వి, వు)", "మృగశిర (వే, వో, కా, కీ)", "ఆరుద్ర (కూ, ఘ, ఙ, చ)", 
    "పునర్వసు (కే, కో, హ, హి)", "పుష్యమి (హు, హే, హో, డ)", "ఆశ్లేష (డి, డూ, డే, డో)", 
    "మఖ (మా, మి, ము, మే)", "పుబ్బ (మో, టా, టి, టూ)", "ఉత్తర (టే, టో, ప, ణ)", 
    "హస్త (పూ, ష, ణ, ఠ)", "చిత్త (పే, స, రు, రే)", "స్వాతి (రు, రే, రో, త)", 
    "విశాఖ (తీ, తూ, తే, తో)", "అనూరాధ (న, నీ, నూ, నే)", "జ్యేష్ఠ (నో, య, యి, యూ)", 
    "మూల (యే, యో, బా, బి)", "పూర్వాషాఢ (బూ, డ, ష, ణ)", "ఉత్తరాషాఢ (బే, బో, జ, జీ)", 
    "శ్రవణ (జూ, జే, జో, ఘ)", "ధనిష్ఠ (గ, గీ, గు, గే)", "శతభిషం (గో, సా, సి, సూ)", 
    "పూర్వాభాద్ర (సే, సో, ద, ఢ)", "ఉత్తరాభాద్ర (దే, దో, ఛ, జ)", "రేవతి (ద, ఢ, చ, చి)"
];

const dropdown1 = document.getElementById('dropdown1');
const dropdown2 = document.getElementById('dropdown2');

// Populate dropdowns
names.forEach((name, index) => {
    const nakshatraName = name.split(' ')[0]; // Extract only the Nakshatra name

    // Dropdown 1 with full names
    const option1 = document.createElement('option');
    option1.value = index + 1;
    option1.text = `${index + 1} ${name}`;
    dropdown1.add(option1);
    
    // Dropdown 2 with Nakshatra names only
    const option2 = document.createElement('option');
    option2.value = index + 1;
    option2.text = `${index + 1} ${nakshatraName}`;
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
