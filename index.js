function CheckInput(){
    let n=document.getElementById("box1").value;
    if(n=="" || n==null || n==" "){
        alert("Enter the number");
    }else{
        n=Number(n);
        let di_count=n.toString().length;
        if(!isNaN(n)&& di_count==5){
            var digit1=n.toString().split("");
            var digit2=digit1.map(Number);
            let sum=0;
            for(let i=0;i<digit2.length;i++){
                sum+=digit2[i];
            }
            document.getElementById("createShape").style.width=sum + "px";
            document.getElementById("createShape").style.height=sum + "px";
            document.getElementById("createShape").style.backgroundColor="#002e47";
            document.getElementById("createShape").style.borderRadius=sum / 5 + "px";
        }else{
            alert("Enter a number/digit");
        }
    }

}