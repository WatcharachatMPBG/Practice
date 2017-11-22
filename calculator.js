function alarm()
{
    alert(document.getElementById("ipAddress").value);
}
function deleteTables()
{
    var tables= document.getElementsByTagName('table');
    while (tables.length>0)
        tables[0].parentNode.removeChild(tables[0]);
}
function convertNumToMask(tackle)
{
    var box = ""
    var i=0;
    for (;i<tackle;i++)
        box = box+"1";
    for (;j<32;i++)
        box = box+"0";
    return box;
}
function convertNumToIPMask(tackle)
{
    var box = ""
    var i=0;
    for (;i<tackle;i++)
        box = box+"1";
    for (;i<32;i++)
        box = box+"0";
    var ans = "";
    for(var n=0;n<32;n++)
    {
        ans = ans+box[n];
        if(((n+1)%8 == 0) && n != 31)
            ans=ans+".";
    }
    return ans;
}

function convertIPToInt(tackle)
{
    var box = tackle.split(".");
    var ans = parseInt(box[0])*(Math.pow(2, 24));
    ans = ans+(parseInt(box[1])*(Math.pow(2, 16)));
    ans = ans+(parseInt(box[2])*(Math.pow(2, 8)));
    ans = ans+parseInt(box[3]);
    return ans;
}

function convertIntoBinary(tackle)
{
    var ans = ""
    for (var n=31;n >= 0;n--)
    {
        if(tackle >=  (Math.pow(2, n)))
        {
            tackle = tackle - (Math.pow(2, n));
            ans = ans+"1";
        }
        else
            ans = ans+"0";
    }
    return ans;
}

function convertIntToIP(tackle)
{
    return ((tackle>>>24)+'.'+(tackle>>16 & 255)+'.'+(tackle>>8 & 255)+'.'+(tackle & 255));
}


function getIPAddress()
{
    return document.getElementById('ipAddress').value;
}
function getReverseLookUp()
{
    
    var ip = document.getElementById('ipAddress').value;
    var num = ip.split(".");
    var first = parseInt(num[0]);
    var second = parseInt(num[1]);
    var third = parseInt(num[2]);
    var fourth = parseInt(num[3]);

    return fourth+"."+third+"."+second+"."+first+".in-addr.arpa";
}
function getNetworkAddress()
{
    
    var ip = document.getElementById('ipAddress').value;
    var num = ip.split(".");
    var first = parseInt(num[0]);
    var second = parseInt(num[1]);
    var third = parseInt(num[2]);
    var fourth = parseInt(num[3]);

    var subnet = document.getElementById("subnet").value;

    var bitnumber = subnet.split(",");
    var bitnum = bitnumber[0].split(".");
    var bitfirst = parseInt(bitnum[0]);
    var bitsecond = parseInt(bitnum[1]);
    var bitthird = parseInt(bitnum[2]);
    var bitfourth = parseInt(bitnum[3]);
    first = first & bitfirst;
    second = second & bitsecond;
    third = third & bitthird;
    fourth = fourth & bitfourth;
    return first+"."+second+"."+third+"."+fourth;
}
function getUsableHostIPRange()
{
    var start = getNetworkAddress();
    var box = start.split(".");
    box[3] = parseInt(box[3])+1;
    start = box[0]+"."+box[1]+"."+box[2]+"."+box[3];
    var finish = convertIPToInt(start);
    var num = 32-((document.getElementById("subnet").value).split(","))[1];
    finish = finish+(Math.pow(2, num))-2;
    if(finish <= 0)
        finish = 0;
    finish = convertIntToIP(finish);
    if(((document.getElementById("subnet").value).split(","))[1] >= 31)
        return "NA"
    return start+" - "+finish;
}
function getBroadcastAddress()
{
    var ip = convertIPToInt(document.getElementById('ipAddress').value);
    var mask = convertIPToInt(((document.getElementById("subnet").value).split(","))[0]);
    var ans = ip | (~mask);
    var box = convertIntToIP(ans);
    return box;
}
function getTotalNumberofHost()
{
    var num = 32-((document.getElementById("subnet").value).split(","))[1];
    if(num > 0)
        num = Math.pow(2, num);
    else
        num = 0;
    return num;
}
function getTotalNumberofUsableHost()
{
    var num = 32-((document.getElementById("subnet").value).split(","))[1];
    num = Math.pow(2, num);
    if(num > 2)
        num = num-2;
    else
        num = 0;
    return num;
}
function getWildCardMask()
{
    var num = 32-((document.getElementById("subnet").value).split(","))[1];
    num = Math.pow(2, num);
    if(num >= 1)
        var ans = convertIntToIP(num-1);
    else
        var ans = convertIntToIP(0);
    return ans;
}
function getIPCLASS()
{
    var num = ((document.getElementById("subnet").value).split(","))[1];
    if(num >= 24)
        var ans = "C";
    else if(num >= 16)
        var ans = "B";
    else if(num >= 8)
        var ans = "A";
    else
        var ans = "Classless"
    return ans;
}
function getIPType()
{
    var num = convertIPToInt(getIPAddress());
    if((num >= convertIPToInt("10.0.0.0") && num <= convertIPToInt("10.255.255.255")) || 
    (num >= convertIPToInt("172.16.0.0") && num <= convertIPToInt("172.31.255.255")) ||
    (num >= convertIPToInt("192.168.0.0") && num <= convertIPToInt("192.168.255.255")))
        return "Private";
    else//(num >= convertIPToInt("1.0.0.0") && num < convertIPToInt("192.0.0.0"))
        return "Public";
    //else
     //   return "Private"
}
function getIPv4MappedAddress()
{
    var box = (convertIPToInt(getIPAddress())).toString(16);
    var ans = "";
    for(var i = 0;i<box.length;i++)
    {
        ans = ans+box[i];
        if(i==3)
            ans = ans + ".";
    }
    return ans;
}

function generate_table1() 
{
    // get the reference for the body
    var body = document.getElementById("table1");   
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

    var cellText0_0 = document.createTextNode("IP Address:");
    var cellText0_1 = document.createTextNode(getIPAddress());

    var cellText1_0 = document.createTextNode("Network Address:");
    var cellText1_1 = document.createTextNode(getNetworkAddress());
    
    var cellText2_0 = document.createTextNode("Usable Host IP Range:");
    var cellText2_1 = document.createTextNode(getUsableHostIPRange());

    var cellText3_0 = document.createTextNode("Broadcast Address:");
    var cellText3_1 = document.createTextNode(getBroadcastAddress());
    
    var cellText4_0 = document.createTextNode("Total Number of Hosts:");
    var cellText4_1 = document.createTextNode(getTotalNumberofHost());
    
    var cellText5_0 = document.createTextNode("Number of Usable Hosts:");
    var cellText5_1 = document.createTextNode(getTotalNumberofUsableHost());
    
    var cellText6_0 = document.createTextNode("Subnet Mask:");
    var cellText6_1 = document.createTextNode(((document.getElementById("subnet").value).split(","))[0]);
    
    var cellText7_0 = document.createTextNode("Wildcard Mask:");
    var cellText7_1 = document.createTextNode(getWildCardMask());
    
    var cellText8_0 = document.createTextNode("Binary Subnet Mask:");
    var cellText8_1 = document.createTextNode(convertNumToIPMask(((document.getElementById("subnet").value).split(","))[1]));

    var cellText9_0 = document.createTextNode("IP Class:");
    var cellText9_1 = document.createTextNode(getIPCLASS());
    
    var cellText10_0 = document.createTextNode("CIDR Notation:");
    var cellText10_1 = document.createTextNode("/"+((document.getElementById("subnet").value).split(","))[1]);
    
    var cellText11_0 = document.createTextNode("IP Type:");
    var cellText11_1 = document.createTextNode(getIPType());

        
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

function generate_table2() 
{
    // get the reference for the body
    var body = document.getElementById("table2");   
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

    var cellText0_0 = document.createTextNode("Short:");
    var cellText0_1 = document.createTextNode(getIPAddress()+" /"+((document.getElementById("subnet").value).split(","))[1]);

    var cellText1_0 = document.createTextNode("Binary ID:");
    var cellText1_1 = document.createTextNode(convertIntoBinary(convertIPToInt(getIPAddress())));
    
    var cellText2_0 = document.createTextNode("Integer ID:");
    var cellText2_1 = document.createTextNode(convertIPToInt(getIPAddress()));

    var cellText3_0 = document.createTextNode("Hex ID:");
    var cellText3_1 = document.createTextNode("0x"+(convertIPToInt(getIPAddress())).toString(16));
    
    var cellText4_0 = document.createTextNode("in-addr.arpa:");
    var cellText4_1 = document.createTextNode(getReverseLookUp());
    
    var cellText5_0 = document.createTextNode("IPv4 Mapped Address:");
    var cellText5_1 = document.createTextNode("::ffff:"+getIPv4MappedAddress());
    
    var cellText6_0 = document.createTextNode("6to4 Prefix:");
    var cellText6_1 = document.createTextNode("2002:"+getIPv4MappedAddress()+"::/48");
        
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

    tblBody.appendChild(row0);
    tblBody.appendChild(row1);
    tblBody.appendChild(row2);
    tblBody.appendChild(row3);
    tblBody.appendChild(row4);
    tblBody.appendChild(row5);
    tblBody.appendChild(row6);

    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
}


function generate_tables()
{
    if(getIPAddress() == '')
        alert("Please Input Your IP Address");
    else
    {
        deleteTables();
        generate_table1();
        generate_table2();
    }
} 