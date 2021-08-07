$(document).ready(function(){
                $("#one").click(function(){
                    document.forms.calc.value += 1;
                });
                $("#two").click(function(){
                    document.forms.calc.value += 2;
                });
                $("#three").click(function(){
                    document.forms.calc.value += 3;
                });
                $("#four").click(function(){
                    document.forms.calc.value += 4;
                });
                $("#five").click(function(){
                    document.forms.calc.value += 5;
                });
                $("#six").click(function(){
                    document.forms.calc.value += 6;
                });
                $("#seven").click(function(){
                    document.forms.calc.value += 7;
                });
                $("#eight").click(function(){
                    document.forms.calc.value += 8;
                });
                $("#nine").click(function(){
                    document.forms.calc.value += 9;
                });
                $("#zero").click(function(){
                    document.forms.calc.value += 0;
                });
                $("#plus").click(function(){
                    document.forms.calc.value += '+';
                });
                $("#minus").click(function(){
                    document.forms.calc.value += '-';
                });
                $("#divide").click(function(){
                    document.forms.calc.value += '/';
                });
                $("#multi").click(function(){
                    document.forms.calc.value += '*';
                });
                $("#dot").click(function(){
                    document.forms.calc.value += '.';
                });
                $("#equal").click(function(){
                   if(display.value==""){
                       alert("Please enter number to calculate");
                   }else{
                       document.forms.calc.value = 
                       eval(document.forms.calc.value);
                   }
                });
                $("#clear").click(function(){
                    document.forms.calc.value = '';
                });
            });