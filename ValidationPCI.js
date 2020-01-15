var birthday, age, year, currentYear, stats1, stats2, dd, mm , yyyy;
var allowed = 0, dontAllowed = 0, hit = 0, wrong = 0, ahead = 0, fault = 0;
var cYear = false, agree = false, myDate = false;

while(agree === false){
    
    while(cYear === false){
        currentYear = prompt("Please, type here your current year:");
        year = 2019;
        if(currentYear != year){
            alert("Sorry! But incorrect year!");
        }else{
            wrong = (wrong + 1);
        }
        
        if(currentYear == year){
            alert("Well done! Go ahead and click OK!");
            
            hit = (hit + 1);
            
            if(hit == 1){
                
                cYear = true;
            }
        }
    }
    
    
    while(myDate === false){
        birthday = prompt("Type your birthday date, at this format: ddmmyyyy");
        
        if(birthday == 00000000){
            alert("Required to type your birthday date!");
        }else{
            fault = (fault + 1);
        }
        
        if(birthday != 00000000){
            
            ahead = (ahead + 1);
            
            if (ahead === 1){
                myDate = true;
            }
        }
    }
    
    dd =  parseInt(birthday / 1000000);
    mm = parseInt((birthday % 1000000) / 10000);
    yyyy = (birthday % 10000);
    
    age = (currentYear - yyyy);
    
    if (mm == 01){
        mm = ("January");
    }else if(mm == 02){
        mm = ("February");
    }else if(mm  == 03){
        mm = ("March");
    }else if(mm == 04){
        mm = ("April");
    }else if(mm == 05){
        mm = ("May");
    }else if(mm == 06){
        mm = ("June");
    }else if(mm == 07){
        mm = ("July");
    }else if(mm == 08){
        mm = ("August");
    }else if(mm == 09){
        mm = ("September");
    }else if(mm == 10){
        mm = ("October");
    }else if(mm == 11){
        mm = ("November");
    }else if(mm == 12){
        mm = ("December");
    }
    
    
    stats1 = ("Your birthday date is " + mm + "/" + dd + "/" + yyyy + " with age " + age);
    
    if(age <= 17){
        alert("Forgive us, but you're under age!");
        alert(stats1);
    }else{
        dontAllowed = (dontAllowed + 1);
    }
    
    if (age >= 18){
        alert("Welcome to the PCI!");
        alert(stats1);
        
        allowed = (allowed + 1);
        
        if(allowed == 1){
            
            agree = true;
        }
    }
    
}