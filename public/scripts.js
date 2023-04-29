// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver


function homeNav() {
    document.getElementById("homenav").className = "active";
    document.getElementById("home").className = "active";
    document.getElementById("rpsnav").className = "";
    document.getElementById("rps").className = "inactive";
    document.getElementById("rpslsnav").className = "";
    document.getElementById("rpsls").className = "inactive";
    document.getElementById("resultDiv").className = "inactive";
    document.getElementById("rpsrulesnav").className = "";
    document.getElementById("rpsrules").className = "inactive";
    document.getElementById("rpslsrulesnav").className = "";
    document.getElementById("rpslsrules").className = "inactive";
}
function rpsNav() {
    document.getElementById("homenav").className = "";
    document.getElementById("home").className = "inactive";
    document.getElementById("rpsnav").className = "active";
    document.getElementById("rps").className = "active";
    document.getElementById("rpslsnav").className = "";
    document.getElementById("rpsls").className = "inactive";
    document.getElementById("resultDiv").className = "inactive";
    document.getElementById("rpsrulesnav").className = "";
    document.getElementById("rpsrules").className = "inactive";
    document.getElementById("rpslsrulesnav").className = "";
    document.getElementById("rpslsrules").className = "inactive";
}
function rpslsNav() {
    document.getElementById("homenav").className = "";
    document.getElementById("home").className = "inactive";
    document.getElementById("rpsnav").className = "";
    document.getElementById("rps").className = "inactive";
    document.getElementById("rpslsnav").className = "active";
    document.getElementById("rpsls").className = "active";
    document.getElementById("resultDiv").className = "inactive";
    document.getElementById("rpsrulesnav").className = "";
    document.getElementById("rpsrules").className = "inactive";
    document.getElementById("rpslsrulesnav").className = "";
    document.getElementById("rpslsrules").className = "inactive";
}
function rpsrulesNav() {
    document.getElementById("homenav").className = "";
    document.getElementById("home").className = "inactive";
    document.getElementById("rpsnav").className = "";
    document.getElementById("rps").className = "inactive";
    document.getElementById("rpslsnav").className = "";
    document.getElementById("rpsls").className = "inactive";
    document.getElementById("resultDiv").className = "inactive";
    document.getElementById("rpsrulesnav").className = "active";
    document.getElementById("rpsrules").className = "active";
    document.getElementById("rpslsrulesnav").className = "";
    document.getElementById("rpslsrules").className = "inactive";
}
function rpslsrulesNav() {
    document.getElementById("homenav").className = "";
    document.getElementById("home").className = "inactive";
    document.getElementById("rpsnav").className = "";
    document.getElementById("rps").className = "inactive";
    document.getElementById("rpslsnav").className = "";
    document.getElementById("rpsls").className = "inactive";
    document.getElementById("resultDiv").className = "inactive";
    document.getElementById("rpsrulesnav").className = "";
    document.getElementById("rpsrules").className = "inactive";
    document.getElementById("rpslsrulesnav").className = "active";
    document.getElementById("rpslsrules").className = "active";
}

function rpsCheckHandler() {
    let checkbox = document.getElementById("rpsoppo");
    if (checkbox.checked) {
        document.getElementById('rpsoppoDiv').className = "active";
    }
    else {
        document.getElementById('rpsoppoDiv').className = "inactive";
    }
}

function rpslsCheckHandler() {
    let checkbox = document.getElementById("rpslsoppo");
    if (checkbox.checked) {
        document.getElementById('rpslsoppoDiv').className = "active";
    }
    else {
        document.getElementById('rpslsoppoDiv').className = "inactive";
    }
}

async function rpsShoot() {
    let checkbox = document.getElementById("rpsoppo");
    if (checkbox.checked) {
        let shot = document.getElementById("rpschoice").value;
        const url = document.baseURI+`app/rps/play/?shot=${shot}`;
        const response = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("shot").setAttribute("src", `img/${data.player}.jpg`)
            document.getElementById("result").innerHTML = `<img src="img/${data.opponent}.jpg" id="opposhot"><p><h2>Result</h2><p>${data.result.toUpperCase()}</p>`
            document.getElementById("resultOppoDiv").className = "active";
            document.getElementById("resultDiv").className = "active";
            document.getElementById("rpsnav").className="";
            document.getElementById("rps").className="inactive";
        });
    }
    else {
        const url = document.baseURI+'app/rps/'
        const response = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("shot").setAttribute("src", `img/${data.player}.jpg`)
            document.getElementById("result").innerHTML = '';
            document.getElementById("resultOppoDiv").className = "inactive";
            document.getElementById("resultDiv").className = "active";
            document.getElementById("rpsnav").className="";
            document.getElementById("rps").className="inactive";
        });
    }
}
async function rpslsShoot() {
    let checkbox = document.getElementById("rpslsoppo");
    if (checkbox.checked) {
        let shot = document.getElementById("rpslschoice").value;
        const url = document.baseURI+`app/rpsls/play/?shot=${shot}`;
        const response = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("shot").setAttribute("src", `img/${data.player}.jpg`)
            document.getElementById("result").innerHTML = `<img src="img/${data.opponent}.jpg" id="opposhot"><p><h2>Result</h2><p>${data.result.toUpperCase()}</p>`
            document.getElementById("resultOppoDiv").className = "active";
            document.getElementById("resultDiv").className = "active";
            document.getElementById("rpslsnav").className="";
            document.getElementById("rpsls").className="inactive";
        });
    }
    else {
        const url = document.baseURI+'app/rpsls/'
        const response = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("shot").setAttribute("src", `img/${data.player}.jpg`)
            document.getElementById("result").innerHTML = '';
            document.getElementById("resultOppoDiv").className = "inactive";
            document.getElementById("resultDiv").className = "active";
            document.getElementById("rpslsnav").className="";
            document.getElementById("rpsls").className="inactive";
        });
    }
}

