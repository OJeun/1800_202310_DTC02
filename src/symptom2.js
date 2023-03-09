function displayHikeInformation() {
    //retreive the document id from the url
    // let params = new URL(window.location.href) //get the url from the searbar
    let ID = "Heat Stroke"
    console.log(ID);

    db.collection("Heat Illnesses").doc(ID).get().then(illness => {
            hikeInfo = illness.data();
            hikeInfo.id = illness.id
            console.log(hikeInfo)

            dangers = hikeInfo.Dangers;
            remedies = hikeInfo.Remedies;
            console.log(dangers)
            console.log(remedies)

            document.getElementById("illness").innerHTML = hikeInfo.id;
            dangers.forEach(danger => {
                const bulletPoint = document.createElement("li");
                bulletPoint.textContent = danger;
                $("#danger").append(bulletPoint);
            });

            remedies.forEach(remedy => {
                const bulletPoint2 = document.createElement("li");
                bulletPoint2.textContent = remedy;
                $("#remedy").append(bulletPoint2);
            });
        })    
}

displayHikeInformation();