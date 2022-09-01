function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/F1yi-BI9F/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        rnr = Math.floor(Math.random() * 225) + 1;
        rng = Math.floor(Math.random() * 225) + 1;
        rnb = Math.floor(Math.random() * 225) + 1;
        document.getElementById("result_label").innerHTML = 'I Can Hear  '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -' + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("+rnr+","+rng+","+rnb+")";
        document.getElementById("result_confidence").style.color = "rgb("+rnr+","+rng+","+rnb+")";    

        img0 = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');

        if(results[0].label == "clapping"){
            img0.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        } else if(results[0].label == "drumming"){
            img0.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        } else  if(results[0].label == "snapping"){
            img0.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';
        } else{
            img0.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';
        }
    }
}