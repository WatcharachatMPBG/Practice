function alarm()
{
    alert(document.getElementById("ipAddress").value);
}

function generate_table1() 
{
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
   
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
   
    // creating all cells
    var row0 = document.createElement("tr");
    var row1 = document.createElement("tr");
    var row2 = document.createElement("tr");
    var row3 = document.createElement("tr");
    var row4 = document.createElement("tr");
    var row5 = document.createElement("tr");
    var row6 = document.createElement("tr");
    var row7 = document.createElement("tr");
    var row8 = document.createElement("tr");
    var row9 = document.createElement("tr");
    var row10 = document.createElement("tr");
    var row11 = document.createElement("tr");

    var cell0_0 = document.createElement("td");
    var cell0_1 = document.createElement("td");
    var cell1_0 = document.createElement("td");
    var cell1_1 = document.createElement("td");
    var cell2_0 = document.createElement("td");
    var cell2_1 = document.createElement("td");
    var cell3_0 = document.createElement("td");
    var cell3_1 = document.createElement("td");
    var cell4_0 = document.createElement("td");
    var cell4_1 = document.createElement("td");
    var cell5_0 = document.createElement("td");
    var cell5_1 = document.createElement("td");
    var cell6_0 = document.createElement("td");
    var cell6_1 = document.createElement("td");
    var cell7_0 = document.createElement("td");
    var cell7_1 = document.createElement("td");
    var cell8_0 = document.createElement("td");
    var cell8_1 = document.createElement("td");
    var cell9_0 = document.createElement("td");
    var cell9_1 = document.createElement("td");
    var cell10_0 = document.createElement("td");
    var cell10_1 = document.createElement("td");
    var cell11_0 = document.createElement("td");
    var cell11_1 = document.createElement("td");

    var cellText0_0 = document.createTextNode("IP Adress:");
    var cellText0_1 = document.createTextNode("");

    var cellText1_0 = document.createTextNode("Network Adress:");
    var cellText1_1 = document.createTextNode("");
    
    var cellText2_0 = document.createTextNode("Usable Host IP Range:");
    var cellText2_1 = document.createTextNode("");

    var cellText3_0 = document.createTextNode("Broadcast Address:");
    var cellText3_1 = document.createTextNode("");
    
    var cellText4_0 = document.createTextNode("Total Number of Hosts:");
    var cellText4_1 = document.createTextNode("");
    
    var cellText5_0 = document.createTextNode("Number of Usable Hosts:");
    var cellText5_1 = document.createTextNode("");
    
    var cellText6_0 = document.createTextNode("Subnet Mask:");
    var cellText6_1 = document.createTextNode("");
    
    var cellText7_0 = document.createTextNode("Wildcard Mask:");
    var cellText7_1 = document.createTextNode("");
    
    var cellText8_0 = document.createTextNode("Binary Subnet Mask:");
    var cellText8_1 = document.createTextNode("");

    var cellText9_0 = document.createTextNode("IP Class:");
    var cellText9_1 = document.createTextNode("");
    
    var cellText10_0 = document.createTextNode("CIDR Notation:");
    var cellText10_1 = document.createTextNode("");
    
    var cellText11_0 = document.createTextNode("IP Type:");
    var cellText11_1 = document.createTextNode("");

        
    cell0_0.appendChild(cellText0_0);
    cell0_1.appendChild(cellText0_1);
    cell1_0.appendChild(cellText1_0);
    cell1_1.appendChild(cellText1_1);
    cell2_0.appendChild(cellText2_0);
    cell2_1.appendChild(cellText2_1);
    cell3_0.appendChild(cellText3_0);
    cell3_1.appendChild(cellText3_1);
    cell4_0.appendChild(cellText4_0);
    cell4_1.appendChild(cellText4_1);
    cell5_0.appendChild(cellText5_0);
    cell5_1.appendChild(cellText5_1);
    cell6_0.appendChild(cellText6_0);
    cell6_1.appendChild(cellText6_1);
    cell7_0.appendChild(cellText7_0);
    cell7_1.appendChild(cellText7_1);
    cell8_0.appendChild(cellText8_0);
    cell8_1.appendChild(cellText8_1);
    cell9_0.appendChild(cellText9_0);
    cell9_1.appendChild(cellText9_1);
    cell10_0.appendChild(cellText10_0);
    cell10_1.appendChild(cellText10_1);
    cell11_0.appendChild(cellText11_0);
    cell11_1.appendChild(cellText11_1);

    
    row0.appendChild(cell0_0);
    row0.appendChild(cell0_1);
    row1.appendChild(cell1_0);
    row1.appendChild(cell1_1);
    row2.appendChild(cell2_0);
    row2.appendChild(cell2_1);
    row3.appendChild(cell3_0);
    row3.appendChild(cell3_1);
    row4.appendChild(cell4_0);
    row4.appendChild(cell4_1);
    row5.appendChild(cell5_0);
    row5.appendChild(cell5_1);
    row6.appendChild(cell6_0);
    row6.appendChild(cell6_1);
    row7.appendChild(cell7_0);
    row7.appendChild(cell7_1);
    row8.appendChild(cell8_0);
    row8.appendChild(cell8_1);
    row9.appendChild(cell9_0);
    row9.appendChild(cell9_1);
    row10.appendChild(cell10_0);
    row10.appendChild(cell10_1);
    row11.appendChild(cell11_0);
    row11.appendChild(cell11_1);

    tblBody.appendChild(row0);
    tblBody.appendChild(row1);
    tblBody.appendChild(row2);
    tblBody.appendChild(row3);
    tblBody.appendChild(row4);
    tblBody.appendChild(row5);
    tblBody.appendChild(row6);
    tblBody.appendChild(row7);
    tblBody.appendChild(row8);
    tblBody.appendChild(row9);
    tblBody.appendChild(row10);
    tblBody.appendChild(row11);
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
}