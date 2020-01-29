class Email {
    constructor(subject, body) {
        this.subject = subject;
        this.body = body;
    }
}

class SpamDetector {
    constructor() { }
    isSpam(email) {
        return checkUpperCaseCharacterCount(email) || isOffensive(email) || isHelloOnly(email.subject);
    }
}

function checkUpperCaseCharacterCount(email) {
    let percentage = 0;
    let countUpper = 0;

    let newStr = (email.subject + email.body).toLowerCase();

    for(let i=0; i<newStr.length; i++) {
        let char = newStr[i];

        if(char == " " || parseInt(char))
            continue;
        else if(char == char.toUpperCase()) { 
            countUpper++;
        }        
    }
    percentage = (countUpper /  newStr.length) * 100;

    return percentage > 60 ? true : false;
}

function isOffensive(email) {
    const offensiveWords = ["Viagra", "Offer", "Free", "Business Proposal"];
    let newStr = (email.subject + email.body).toLowerCase();
    
    for(let word of offensiveWords) {
        word = word.toLowerCase();

        if(newStr.includes(word))   
            return true;
    }
    return false;
}

function isHelloOnly(subject) {
    let subj = subject.trim();
    
    return subj == "Hello" || subj == "hello" ? true : false;
}

const emailFromOldFriend = new Email('Hello old friend', 'Long time no see, when should we hang out again??');
const anotherEmail = new Email("Hey buddy","THIS IS A VERY greattttviagra");
const spamDetector = new SpamDetector();
const spam2 = new SpamDetector();
console.log("Is this Spam? ", spamDetector.isSpam(emailFromOldFriend)); // false
console.log("Is this Spam? ", spam2.isSpam(anotherEmail)); //


