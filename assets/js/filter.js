const data = [{
        id: "1",
        filter: "Title",
        sub_filter: {
            subId: "1",
            subFilter: "sub_filter_1"
        }
    },
    {
        id: "2",
        filter: "Task Status",
        sub_filter: {
            subId: "2",
            subFilter: "sub_filter_2"
        }

    },
    {
        id: "3",
        filter: "Priority",
        sub_filter: {
            subId: "3",
            subFilter: "sub_filter_3"
        }
    },
    {
        id: "4",
        filter: "Start Date",
        sub_filter: {
            subId: "4",
            subFilter: "sub_filter_4"
        }
    },
    {
        id: "5",
        filter: "Due Date",
        sub_filter: {
            subId: "5",
            subFilter: "sub_filter_5"
        }
    },
    {
        id: "6",
        filter: "Time Span",
        sub_filter: {
            subId: "6",
            subFilter: "sub_filter_6"
        }
    },
    {
        id: "7",
        filter: "Created Time",
        sub_filter: {
            subId: "7",
            subFilter: "sub_filter_7"
        }
    },
    {
        id: "8",
        filter: "Completion Date",
        sub_filter: {
            subId: "8",
            subFilter: "sub_filter_8"
        }
    },
    {
        id: "9",
        filter: "Last Modified Time",
        sub_filter: {
            subId: "9",
            subFilter: "sub_filter_9"
        }
    },
    {
        id: "10",
        filter: "Created By",
        sub_filter: {
            subId: "10",
            subFilter: "sub_filter_1o"
        }
    },
    {
        id: "11",
        filter: "MileStone",
        sub_filter: {
            subId: "10",
            subFilter: "sub_filter_1o"
        }
    },
    {
        id: "12",
        filter: "Tags",
        sub_filter: {
            subId: "10",
            subFilter: "sub_filter_1o"
        }
    },

]


const searchInput = document.querySelector(".filter-search-input");
const listGroup = document.querySelector(".list-group");

// Display Filter Item
const displayFilterItem = (filterItem) => {
    listGroup.innerHTML = filterItem.map(
        (item) =>
        `
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" >
        ${item.filter}
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div class="dropdown d-f">
      
      <button class="btn border-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
      </div>
    </div>
  </div>
    `

    ).join("");
}

displayFilterItem(data);

// Search Input
searchInput.addEventListener('keyup', (e) => {
    const searchValue = (e.target.value).toLowerCase();

    if (searchValue) {
        displayFilterItem(
            data.filter((item) => item.filter.toLowerCase().indexOf(searchValue) !== -1)
        )
    } else {
        console.log(displayFilterItem(data));
    }
});





//  Color 


function changeColor(event) {
    var red = document.getElementById(red);
    var green = document.getElementById(green);
    var blue = document.getElementById(blue);

    if (event.target.value == red) {
        red.style.color = "red";
    } else if (event.target.value == green) {
        green.style.color = "green";
    } else if (event.target.value == blue) {
        blue.style.color = "blue";
    } else {
        alert("There was an error!");
    }
};

console.log(changeColor)