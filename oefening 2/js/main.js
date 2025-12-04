"use strict";

function modifyString(sentence, callback) {

    const sentenceLength = sentence.length;

    callback(sentenceLength);
};

function sentencePrint(sentenceLength) {
    console.log(`De lengte van de string is: ${sentenceLength}`)
}

modifyString("Dit is een hele grote string", sentencePrint);
modifyString("Dit is een test", sentencePrint);