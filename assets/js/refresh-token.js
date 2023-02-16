// Active Projects
fetch("assets/js/data.json")
    .then((response) => response.json())
    .then((response) => {
        for (var i in response) {
            active(response[i]);
        }
    });

fetch("assets/js/data.json")
    .then((response) => response.json())
    .then((response) => {
        for (var i in response) {
            group_report(response[i]);
        }
    });


fetch("assets/js/completed.json")
    .then((res) => res.json())
    .then((res) => {
        for (var i in res) {
            completed(res[i]);
        }
    });

function active(data) {
    let active = data.length;
    var Act = "";
    var Completed = "";
    var hold = "";
    var progress = "";
    var ownerName = "";
    var ownerRange = "";
    var ownerName1 = "";
    var ownerRange1 = "";
    var act = data.length;
    data.map(function(item) {
        if (item.custom_status_name == "Active") {
            Act = item.custom_status_name.length;
        } else if (item.custom_status_name == "Completed") {
            Completed = item.custom_status_name.length;
        } else if (item.custom_status_name == "On Hold") {
            hold = item.custom_status_name.length;
        } else if (item.custom_status_name == "In Progress") {
            progress = item.custom_status_name.length;
        }
        if (item.owner_name != "Zoho Projects") {
            ownerRange = item.owner_name.length;
            ownerName = item.owner_name;
        }
        if (item.owner_name == "Zoho Projects") {
            ownerRange1 = item.owner_name.length;
            ownerName1 = item.owner_name;
        }
        // console.log(item.custom_status_name.length)
    });
    echarts.init(document.querySelector("#donutChart")).setOption({
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center'
        },
        series: [{
            // name: 'Projects Status',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '18',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                value: Act,
                name: 'Active'
            }, {
                value: Completed,
                name: 'Completed'
            }, {
                value: progress,
                name: 'In Progress'
            }, {
                value: hold,
                name: 'On Hold'
            }]
        }]
    });
    echarts.init(document.querySelector("#Ownership")).setOption({
        title: {
            // text: 'Referer of a Website',
            // subtext: 'Fake Data',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [{
            // name: 'Access From',
            type: 'pie',
            radius: '65%',
            data: [{
                value: ownerRange,
                name: ownerName
            }, {
                value: 1,
                name: ownerName1
            }],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    });
}



// completed api call

function completed(data) {
    let displaTable = data.map(function(taskItem, index) {
        let startDate = new Date(taskItem.start_date);
        let endDate = new Date(taskItem.end_date);
        var Difference_In_Time = endDate.getTime() - startDate.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        // console.log(Difference_In_Days)


        var startdateString = `${taskItem.start_date}`;
        var dateComponents = startdateString.split("-");
        var newstartDateString = dateComponents[2] + "-" + dateComponents[0] + "-" + dateComponents[1];

        var enddateString = `${taskItem.end_date}`;
        var dateComponents = enddateString.split("-");
        var newendDateString = dateComponents[2] + "-" + dateComponents[0] + "-" + dateComponents[1];

        var completeddateString = `${taskItem.completed_on}`;
        var dateComponents = completeddateString.split("-");
        var newcompletedDateString = dateComponents[2] + "-" + dateComponents[0] + "-" + dateComponents[1];



        if (taskItem.custom_status_name == "Completed") {
            // console.log(taskItem.custom_status_name)
            
            return ` <tr>
            <td>#</td>
        <td>${taskItem.name}</td>
        <td>${taskItem.owner_name}</td>
        <td><span class="status" style="background-color:${taskItem.custom_status_color}">${taskItem.custom_status_name}</span></td>
        <td>${taskItem.task_count.open}</td>
        <td>${taskItem.milestone_count.open}</td>
        <td>${taskItem.bug_count.open}</td>
        <td><input class="input" type="date" value=${newstartDateString}></td>
        <td><input class="input" type="date" value=${newendDateString}></td>
        <td><input class="input" type="date" value=${newcompletedDateString}></td>
        <td>${taskItem.planned_cost}</td>
        <td>${taskItem.actual_cost}</td>
        <td>${taskItem.balance}</td>
        <td>NA</td>
        <td>NA</td>
        <td>NA</td>
        <td>    
            <button type="button" class="input" data-toggle="modal" data-target="#exampleModal" id=${taskItem.budget_value} value=${taskItem.budget_value}>
             ${taskItem.currency_symbol} ${taskItem.budget_value}
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Project Budget</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                   ${taskItem.currency_symbol} <input type="text" value=${taskItem.budget_value}>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
        </td>
        <td>Based on Project ${taskItem.budget_type}</td>
        <td>${taskItem.billing_type}</td>
        <td>${taskItem.layout_details.task.name}</td>
        <td>${taskItem.forecasted_revenue}</td>
        <td>${taskItem.forecasted_cost}</td>
        <td>${taskItem.group_name}</td>
        <td>-</td>
        <td>${taskItem.created_date_format}</td>
        <td>${taskItem.planned_revenue}</td>
        <td>${taskItem.updated_date_format}</td>
        <td>${taskItem.planned_revenue}</td>
        <td>${taskItem.created_by}</td>
        <td>${taskItem.actual_revenue}</td>
        <td>${taskItem.updated_by}</td>
        <td>${taskItem.forecasted_revenue}</td>
    </tr>`;
        }

    })
    displaTable = displaTable.join("");
    document.getElementById("completedTask").innerHTML = displaTable
}


function group_report(data) {
    var groupName = ""
    for (let i = 0; i < data.length; i++) {
        if (data[i].group_name != null) {
            console.log("Group", data[i].group_name)
        }
    }
    // let groupData = data.map(function(groupItem) {
    //     // console.log(groupItem.group_name)
    //     groupName = groupItem.group_name
    // });
    new ApexCharts(document.querySelector("#groupReport"), {
        series: [44, 55, 13, 43, 22],
        chart: {
            height: 350,
            type: 'donut',
            toolbar: {
                show: true
            }
        },
        // labels: [],
    }).render();
}


// Date on arrow function

// let arrow = document.getElementById('date_arrow');
const on = ()=>{
    console.log('click');
    $(function(){
        $('#date_arrow').datetimepicker();
    });
}

