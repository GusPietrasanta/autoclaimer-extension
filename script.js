// Function to click the "Claim" button
async function clickClaimButton() {
	try{
		console.log("Looking for a Claim button...");

        var allButtons = document.querySelectorAll("button");

        for (var i = 0; i < allButtons.length; i++){
            if (allButtons[i].innerText == "Claim"){
                console.log("Extension: Claim button found!");
                allButtons[i].click();
                console.log("Extension: Claim button clicked!");
                break;
            }
            else{
                console.log("Extension: Not a Claim button, next.");
            }
        }
	}
	catch(error){
		console.log("Extension: No Claim button found");
	}
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',afterDOMLoaded);
}
else {
    if (window.location.href.indexOf("/tasks/work/") > -1){
        setTimeout(function(){
            console.log("Extension: Currently in a task description.")
            console.log("Extension: Waiting 2 seconds to go back.")
            history.back();
         }, 2000);
         afterDOMLoaded();
    }
    else{
        console.log("Extension: Not in a task description.")
        afterDOMLoaded();
    }
}

function afterDOMLoaded(){		
	console.log("Extension: Extension running.")

    setTimeout(function(){
        console.log("Extension: 1 second passed.")
        clickClaimButton();
     }, 1000);

    setTimeout(function(){
        console.log("Extension: Reloading page");
        window.location.reload();
     }, getRandomTimeLong());
}

function getRandomTimeLong(){
    var randomTime = Math.random() * (7000 - 5000) + 5000;
    randomTime = Math.round(randomTime);
    console.log("Extension: Waiting " + randomTime + " ms to refresh.");
    return randomTime;
}