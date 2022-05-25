function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/spVuMkNHH/model.json', modelLoaded);
}
function modelLoaded() {
    classifier.classify(gotResults);
}

var lion = 0;
var dolphin = 0;
var horse = 0;
var background_noise = 0;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_r = Math.floor(Math.random() * 255) + 1;
        random_g = Math.floor(Math.random() * 255) + 1;
        random_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("name_animal_sound").innerHTML = "Name of the Animal Sound:" + results[0].label;
        document.getElementById("sound").innerHTML = "Number of Times Animal Sound Detected: " + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("sound").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";
    }

    img = document.getElementById("img_display");

    if (results[0].label == "Roaring") {
        img.src = "lion.jpeg";
    }
    else if (results[0].label == "whistles") {
        img.src = "dolphin.jpeg";
    }
    else if (results[0].label == "neighing") {
        img.src = "horse.jpeg";
    }
    else {
        img.src = "Background Noise.jpeg";
    }


}
