fetch("https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json")
    .then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("NETWORK RESPONSE ERROR");
    }
    })
    .then((data) => {
    let k = Object.values(data)[0]
    console.table(k)
    document.write("Employees with Salary above 50000 are:<br>")
    k.forEach((Element)=>{
        if(Element.Salary>50000){
            document.writeln(Element["Name"]+'<br>')
        }
    })
    document.write("<br><br>Employees who joined in December are:<br>")
    k.forEach((Element)=>{
        if(Element.DateOfJoining.slice(3,5)=="12"){
            
            document.writeln(Element["Name"]+'<br>')
        }
    })
    
    document.write("<br><br>OPEN CONSOLE TO CHECK TABLE AND REFRESH THE PAGE")
    })
    .catch((error) => console.error("FETCH ERROR"));
