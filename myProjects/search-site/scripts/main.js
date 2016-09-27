document.getElementById("sbtBtn").addEventListener("click", function(event){
    event.preventDefault()
    form.reset();
});


function addTitle() {
    var input = document.getElementById("log").value;
    gameTitle.unshift(input);

    document.getElementById('added-title').innerHTML = 
    '<p>You have added ' + gameTitle[0] + '</p>';   
}

function list() {
document.getElementById('list').innerHTML =
'<p>Your games:' + gameTitle + '</p>';
}