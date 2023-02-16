const menu = [{
        id: "1",
        taskName: "open",
        color: "red",
    },
    {
        id: "2",
        taskName: "In progress",
        color: "red",
    },
    {
        id: "3",
        taskName: "In Review",
        color: "red",
    },
    {
        id: "4",
        taskName: "To be Tested",
        color: "red",
    },
    {
        id: "5",
        taskName: "On Hold",
        color: "red",
    },
    {
        id: "6",
        taskName: "Delayed",
        color: "red",
    },
];


const priorty = [{
        id: "1",
        setpriorty: "None"
    },
    {
        id: "2",
        setpriorty: "Low"
    },
    {
        id: "3",
        setpriorty: "Medium"
    },
    {
        id: "4",
        setpriorty: "High"
    }
]

const milestone = [{
        id: "1",
        milestoneList: "None"
    },
    {
        id: "2",
        milestoneList: "Planing"
    },
    {
        id: "3",
        milestoneList: "Design"
    },
    {
        id: "4",
        milestoneList: "Content"
    },
    {
        id: "5",
        milestoneList: "Testing and Release"
    }
]


const tags = [{
        id: "1",
        tags: "None"
    },
    {
        id: "2",
        tags: "Tag1"
    },
    {
        id: "3",
        tags: "Tag2"
    },
    {
        id: "4",
        tags: "Tag3"
    },
    {
        id: "5",
        tags: "Tag4"
    }
]


window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    ownern(owner);
    priortyList(priorty);
    milestoneList(milestone);
    tagsList(tags);
    boxList(projectlist)
});

function displayMenuItems(menu) {
    let display = menu.map(function(e) {
        return `
        <div class="task-box">
       <div class="left-bar">
    <input type="checkbox" name="" value="${e.taskName}" class="check">
      <label for="red">${e.taskName}</label>
  </div>
 <span>${e.color}</span></div>
      `;
    });

    displayMenu = display.join("");
    document.getElementById("taskList").innerHTML = displayMenu;

    let check = document.querySelector("#slected_task");
    var arr = [];

    let checkBox = document.querySelectorAll(".check");

    for (checkboxes of checkBox) {
        checkboxes.addEventListener("click", function() {
            if (this.checked == true) {
                arr.push(this.value);
                check.innerHTML = arr.join();
            } else {
                arr = arr.filter((e) => e !== this.value);
                check.innerHTML = arr.join();
            }
        });
    }
}


// Owner

const owner = [
    { id: "1", owner: "Ranjan", ownerIcon: "../img/alite-favicon.png" },
    { id: "2", owner: "Meena", ownerIcon: "../img/alite-favicon.png" },
    { id: "3", owner: "TechBinge", ownerIcon: "../img/alite-favicon.png" },
];

function ownern(owner) {
    let displayowner = owner.map(function(e) {
        // console.log(e)
        return `
        <div class="own-details">
            <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle">
            <span>${e.owner}</span>
        </div>`;
    });

    displayMenu = displayowner.join("");
    document.getElementById("owner").innerHTML = displayMenu;

    let check = document.querySelector("#slected_task");
    var arr = [];

    let checkBox = document.querySelectorAll(".check");

    for (checkboxes of checkBox) {
        checkboxes.addEventListener("click", function() {
            if (this.checked == true) {
                arr.push(this.value);
                check.innerHTML = arr.join();
            } else {
                arr = arr.filter((e) => e !== this.value);
                check.innerHTML = arr.join();
            }
        });
    }
}



// priorty
function priortyList(priorty) {
    let display = priorty.map(function(e) {
        // console.log(e)
        return ` 
        <div class="border-bottom">
        <input type="checkbox" name="" value="${e.setpriorty}" class="checked">
        <span>${e.setpriorty}</span></div>`;
    });

    displayMenu = display.join("");
    document.getElementById("priorityList").innerHTML = displayMenu;

    let checked = document.querySelector("#pri_list");
    var arrList = [];

    var priortyStore = document.querySelectorAll(".checked");

    for (priortyStores of priortyStore) {
        priortyStores.addEventListener("click", function() {
            if (this.checked == true) {
                arrList.push(this.value);
                checked.innerHTML = arrList.join();
            } else {
                arrList = arrList.filter((e) => e !== this.value);
                checked.innerHTML = arrList.join();
            }
        });
    }
}




// milestone
function milestoneList(milestone) {
    let display = milestone.map(function(e) {
        // console.log(e)
        return ` <div class="border-bottom">
        <input type="checkbox" name="" value="${e.milestoneList}" class="checked_milestone">
        <span>${e.milestoneList}</span>
        </div>`;
    });

    displayMenu = display.join("");
    document.getElementById("checked_milestone").innerHTML = displayMenu;

    let checked = document.querySelector("#mile_list");
    var arrList = [];
    var priortyStore = document.querySelectorAll(".checked_milestone");
    for (priortyStores of priortyStore) {
        priortyStores.addEventListener("click", function() {
            if (this.checked == true) {
                arrList.push(this.value);
                checked.innerHTML = arrList.join();
            } else {
                arrList = arrList.filter((e) => e !== this.value);
                checked.innerHTML = arrList.join();
            }
        });
    }
}



// tags

function tagsList(tags) {
    let display = tags.map(function(e) {
        // console.log(e)
        return `  <div class="border-bottom"><input type="checkbox" name="" value="${e.tags}" class="checked_tags">
        <span>${e.tags}</span></div>`;
    });

    displayMenu = display.join("");
    document.getElementById("checked_tags").innerHTML = displayMenu;

    let checked = document.querySelector("#tags_list");
    var arrList = [];
    var priortyStore = document.querySelectorAll(".checked_tags");
    for (priortyStores of priortyStore) {
        priortyStores.addEventListener("click", function() {
            if (this.checked == true) {
                arrList.push(this.value);
                checked.innerHTML = arrList.join();
            } else {
                arrList = arrList.filter((e) => e !== this.value);
                checked.innerHTML = arrList.join();
            }
        });
    }
}



// dynamic box in project
const projectlist = [
    { id: "1", task1: "Open", task2: "Close", taskBox: "open" },
    { id: "2", task1: "Open", task2: "Close", taskBox: "open" },
    { id: "3", task1: "Open", task2: "Close", taskBox: "open" },
    { id: "4", task1: "Open", task2: "Close", taskBox: "open" },
    { id: "5", task1: "Open", task2: "Close", taskBox: "open" },
    { id: "6", task1: "Open", task2: "Close", taskBox: "open" },
    { id: "7", task1: "Open", task2: "Close", taskBox: "open" }
]

const mainBox = document.querySelector("#mainbox");

function boxList(projectlist) {
    let display = projectlist.map(function(e) {
        // console.log(e)
        return `   <div class="custom-box">
        <div class="custome-color">
            <span class="custome-span">
            <div class="main-button" onclick="btn();">
                <span class="color-dots"></span>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
            </div>
            </span>
            <div class="color-selection">
            <span onclick="selectcolor(statuscolor)" class="light-green">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="yellow">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="aqua">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="red">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="blue">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="noise">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="royal-blue">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="lavender">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="rose-pink">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="quite-blue">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="ferm-gree">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="corn-yellow">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="brown">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="orange">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="tan-brown">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="cabana">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="blue-fog">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="purple">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="orchid-pink">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            <span onclick="selectcolor(statuscolor)" class="grey">
            <input type="radio" class="">
            <label for="olive"></label>
          </span>
            </div>
        </div>
        <div class="custome-task">
            <input type="text">
        </div>
        <div class="custome-status">
            <input type="radio">
            <label for="open_task">${e.task1}</label>
            <input type="radio">
            <label for="close_task">${e.task2}</label>
        </div>
    </div>`;
    });

    displayMenu = display.join("");
    mainBox.innerHTML = displayMenu;

}

const colorBox = document.querySelector(".btniu");
console.log(colorBox)

function btn() {
    console.log("btnClick");
    if (colorBox.style.display !== "none") {
        colorBox.style.display = "none";
    } else {
        colorBox.style.display = "block";
    }
}