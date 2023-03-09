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
            console.log(dangers)

            // document.getElementById("illness").innerHTML = hikeInfo.id;
        }
    )
}
displayHikeInformation();