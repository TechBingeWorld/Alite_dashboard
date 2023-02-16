// Open Task


fetch("assets/js/open.json")
    .then((data) => data.json())
    .then((data) => {
        for (var i in data) {
            open(data[i]);
        }
    });




function open(data) {
    let displaTable = data.map(function(item, key) {
        var sn = key
        let startDate = new Date(item.start_date);
        let endDate = new Date(item.end_date);
        var Difference_In_Time = endDate.getTime() - startDate.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        // console.log(Difference_In_Days)
        if (Difference_In_Days > 0) {
            let correctData = Difference_In_Days;
            // <td>${sn}</td>
            return `<tr>
            <td>#</td>
        <td><div class="open-task">
        <span>${item.tasklist.name}</span>
        <span><i class="fa fa-angle-right" aria-hidden="true"></i></span>
        <span>  <i class="bi bi-briefcase"></i> ${item.project.name}</span>
        </div></td>
        <td>${item.details.owners[0].first_name} ${item.details.owners[0].last_name}</td>
        <td><span class="status" style="background-color:${item.status.color_code}">${item.status.name}</span></td>
        <td>-</td>
        <td>${item.start_date}</td>
        <td><span style="color:red">${item.end_date}</span></td>
        <td>-</td>
        <td>${correctData} ${item.duration_type}</td>
        <td>${item.priority}</td>
                <td>${item.created_person}</td>
                <td><div class="progress">
                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                aria-valuemin="0" aria-valuemax="100" style="width:${item.percent_complete}%">
                <span>${item.percent_complete}% Complete (success)</span>
                </div>
              </div></td>
                <td>-</td>
                <td>-</td>
                <td>${item.work}</td>
                <td>-</td>
                <td>${item.work}</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
               <td>-</td>
                <td>-</td>
                <td>${item.billingtype}</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
        </tr>`;
        }
    })
    displaTable = displaTable.join("");
    document.getElementById("openTask").innerHTML = displaTable
}