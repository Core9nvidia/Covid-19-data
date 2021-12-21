url ="https://api.covid19api.com/summary";

//let specific_tbody = document.getElementById(tbody_id);
//let row = specific_tbody.insertRow(index)


var G_TotalConfirmed=document.getElementById("G_TotalConfirmed");
var G_TotalDeaths=document.getElementById("G_TotalDeaths");
var G_TotalRecovered=document.getElementById("G_TotalRecovered");
fetch(url)
    .then(function(req){
        return req.json();
    })
        .then(function(data){
            console.log("rohit");
            console.log(data);
            G_TotalConfirmed.innerHTML=data.Global.TotalConfirmed;
            G_TotalDeaths.innerHTML=data.Global.TotalDeaths;
            G_TotalRecovered.innerHTML=data.Global.TotalRecovered;
            console.log(data.Countries.length);
            for(var i=0;i<data.Countries.length;i++){
                var dataTable = document.getElementById("dataTable");
                console.log("reached");
                var row = dataTable.insertRow(-1);
                console.log("done");
                //console.log(row);
                console.log(data.Countries[i]);
                //////
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                // // Add some text to the new cells:
                cell1.innerHTML = data.Countries[i].Country;
                cell2.innerHTML = data.Countries[i].TotalConfirmed;
                cell3.innerHTML = data.Countries[i].TotalDeaths;
                cell4.innerHTML = data.Countries[i].TotalRecovered;


                //row["country"]=data.Countries[i].country;
            }
        });