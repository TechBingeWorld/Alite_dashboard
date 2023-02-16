// Active Projects
fetch("assets/js/issue.json")
    .then((response) => response.json())
    .then((response) => {
        for (var i in response) {
            issue(response[i]);
        }
    });

function issue(response) {
    console.log(response);
}