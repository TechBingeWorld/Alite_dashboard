// // open Task
// fetch("assets/js/open-task.json")
//     .then((response) => response.json())
//     .then((response) => {
//         for (var i in response) {
//             open_task(response[i]);
//             // console.log(response[i]);
//         }
//     });
// var tab_display = document.getElementById("open_task");

// function open_task(response) {
//     var total_open_task = response.length;
//     // tab_display.innerHTML = total_open_task;
//     let open_task_display = response.map(function(task) {
//         console.log(task.project.name);

//         return `<tr>
//         <td>${task.project.name}</td>
//         </tr>`;
//     });
//     open_task_display = open_task_display.join("");
//     document.getElementById("openTask").innerHTML = open_task_display
// }