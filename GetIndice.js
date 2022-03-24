
//Type1 : (x^n)(x^m)/(y^k), 2=<n=<8, 2=<m=<8 and -9=<k=<-2, m!=n
function IndicesQuestionType1(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var powerK = getRndInteger(-9, -2);
  var powerN = getRndInteger(2, 8);
  do{
    var powerM = getRndInteger(2, 8);
  }while(powerM==powerN);
  var sum = powerM + powerN;

  document.getElementById("Q1").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^" + powerN + unknowns[unknownNumber][0] + "^" + powerM + "}" + "\\over{" + unknowns[unknownNumber][1] + "^{" + powerK + "}" + "}$";
  document.getElementById("Ans_1").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + sum + "}" + unknowns[unknownNumber][1] + "^" + (-powerK) + "}$";
}

//Type2 : (x^n)(y^k)/(x^m), 5=<n=<11, 2=<m=<8 and -9=<k=<-2, n>m
function IndicesQuestionType2(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var powerK = getRndInteger(-9, -2);
  var powerN = getRndInteger(5, 11);
  do{
    var powerM = getRndInteger(2, 8);
  }while(powerM>=powerN);

  document.getElementById("Q2").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + powerN + "}" + unknowns[unknownNumber][1] + "^{" + powerK + "}}" + "\\over{" + unknowns[unknownNumber][0] + "^{" + powerM + "}" + "}$";
  document.getElementById("Ans_2").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN - powerM) + "}" + "\\over{" + unknowns[unknownNumber][1] + "^{" + (-powerK) + "}" + "}}$";
}

//Type3 : (x^n)/(x^m)(y^k), -9=<n=<-2, 2=<m=<8 and -9=<k=<-2
function IndicesQuestionType3(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var powerK = getRndInteger(-9, -2);
  var powerN = getRndInteger(-9, -2);
  var powerM = getRndInteger(2, 8);

  document.getElementById("Q3").innerHTML = "&nbsp"+ "${" + unknowns[unknownNumber][0] + "^{" + powerN + "}\\over{" + unknowns[unknownNumber][0] + "^{" + powerM + "}"  + unknowns[unknownNumber][1] + "^{" + powerK + "}}}$";
  document.getElementById("Ans_3").innerHTML = "&nbsp${" + unknowns[unknownNumber][1] + "^{" + (-powerK) + "}" + "\\over{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerM - powerN) + "}" + "}}$";
}

//Type4 : (x^n)(y^k)/(x^m), 2=<n=<6, -7=<m=<-1 and -9=<k=<-2
function IndicesQuestionType4(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var powerK = getRndInteger(-9, -2);
  var powerN = getRndInteger(2, 6);
  var powerM = getRndInteger(-7, -1);

  document.getElementById("Q4").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^" + powerN + unknowns[unknownNumber][1] + "^{" + powerK + "}}" + "\\over{" + unknowns[unknownNumber][0] + "^{" + powerM + "}}$";
  document.getElementById("Ans_4").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + (powerN-powerM) + "}" + "\\over{" + unknowns[unknownNumber][1] + "^{" + value2Indice(-powerK) + "}" + "}}$";
}

//Type5 : (x^n)(y^k)/(x^m)(y^t), -9=<n=<-1, 1=<m=<8, 2=<k=<13 and 1=<t=<10, t<k
function IndicesQuestionType5(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var powerN = getRndInteger(-9, -1);
  var powerM = getRndInteger(1, 8);
  var powerK = getRndInteger(2, 13);
  do{
    var powerT = getRndInteger(1, 10);
  }while(powerT>=powerK);

  document.getElementById("Q5").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + powerN + "}" + unknowns[unknownNumber][1] + "^{" + powerK + "}}" + "\\over{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerM) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerT) + "}}$";
  document.getElementById("Ans_5").innerHTML = "&nbsp${" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK-powerT) + "}" + "\\over{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerM-powerN) + "}" + "}}$";
}

//Type6 : (x^n)(y^k)/(x^m)(y^t), 5=<n=<14, 1=<m=<12, -12=<k=<-4 and -8=<t=<-1
function IndicesQuestionType6(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var powerN = getRndInteger(5, 14);
  do{
    var powerM = getRndInteger(1, 12);
  }while(powerM>=powerN);
  var powerK = getRndInteger(-12, -4);
  do{
    var powerT = getRndInteger(-8, -1);
  }while(powerT<=powerK);

  document.getElementById("Q6").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + powerN + "}" + unknowns[unknownNumber][1] + "^{" + powerK + "}}" + "\\over{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerM) + "}" + unknowns[unknownNumber][1] + "^{" + powerT + "}}$";
  document.getElementById("Ans_6").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN-powerM) + "}" + "\\over{" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerT-powerK) + "}" + "}}$";
}

//Type7 : (x^n)(y^k)/(x^m)(y^t), 3=<n=<15, -8=<m=<-2, -8=<k=<-2 and 2=<t=<15
function IndicesQuestionType7(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var powerN = getRndInteger(3, 15);
  var powerM = getRndInteger(-8, -2);
  var powerK = getRndInteger(-8, -2);
  var powerT = getRndInteger(2, 15);

  document.getElementById("Q7").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + powerN + "}" + unknowns[unknownNumber][1] + "^{" + powerK + "}}" + "\\over{" + unknowns[unknownNumber][0] + "^{" + powerM + "}" + unknowns[unknownNumber][1] + "^{" + powerT + "}}$";
  document.getElementById("Ans_7").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN-powerM) + "}" + "\\over{" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerT-powerK) + "}" + "}}$";
}

//Type8 : [(x^n)(y^k)]^p/(x^m)(y^t), -1=<n=<-6, 1=<m=<8, 1=<k=<6, 2=<t=<15 and 2=<p=<3, pk!=t
function IndicesQuestionType8(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var powerN = getRndInteger(-1, -6);
  var powerM = getRndInteger(1, 8);
  var powerK = getRndInteger(1, 6);
  var powerP = getRndInteger(2, 3);
  do{
    var powerT = getRndInteger(2, 15);
  }while(powerP*powerK==powerT);

  document.getElementById("Q8").innerHTML = "&nbsp$({" + unknowns[unknownNumber][0] + "^{" + powerN + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK) + "}})^{" + powerP + "}\\over{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerM) + "}" + unknowns[unknownNumber][1] + "^{" + powerT + "}}$";
  if(powerP*powerK>powerT)
    document.getElementById("Ans_8").innerHTML = "&nbsp${" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerP*powerK-powerT) + "}" + "\\over{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerM-powerP*powerN) + "}" + "}}$";
  else
    document.getElementById("Ans_8").innerHTML = "&nbsp${" + "{1}" + "\\over{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerM-powerP*powerN) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerT-powerP*powerK)  + "}" + "}}$";
}

//Type9 : x^n[x^m/y^k]^t, 2=<n=<12, -6=<m=<-1, -8=<k=<-1 and 2=<t=<3
function IndicesQuestionType9(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var powerM = getRndInteger(-6, -1);
  do{
   var powerK = getRndInteger(-8, -1);
  }while(powerK==powerM);
  var powerT = getRndInteger(2, 3);
  do{
    var powerN = getRndInteger(2, 12);
  }while(powerN+powerM*powerT==0)


  document.getElementById("Q9a").innerHTML = "&nbsp$" + unknowns[unknownNumber][0] + "^{" + powerN + "}$";
  document.getElementById("Q9b").innerHTML = "${(\\frac{" + unknowns[unknownNumber][0] + "^{" + powerM + "}}{" + unknowns[unknownNumber][1] + "^{" + powerK + "}})}^{" + powerT + "}$";
  if(powerN+powerM*powerT>0){
    document.getElementById("Ans_9").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN+powerM*powerT) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(-powerK*powerT) + "}}$";
    document.getElementById("Ans_9").style.fontSize = "14px";
  }
  else{
    document.getElementById("Ans_9").innerHTML = "&nbsp${" + unknowns[unknownNumber][1] + "^{" + value2Indice(-powerK*powerT) + "}" + "\\over{" + unknowns[unknownNumber][0] + "^{" + value2Indice(-powerT*powerM-powerN) + "}" + "}}$";
    document.getElementById("Ans_9").style.fontSize = "20px";
  }
}

//Type10 : (y^k)/[(x^n)(y^t)]^(p), -1=<n=<-5, 3=<k=<12, 1=<t=<6 and -3=<p=<-1
function IndicesQuestionType10(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var powerN = getRndInteger(-1, -5);
  var powerK = getRndInteger(3, 12);
  var powerT = getRndInteger(1, 6);
  var powerP = getRndInteger(-3, -1);

  document.getElementById("Q10").innerHTML = "&nbsp$\\frac{" + unknowns[unknownNumber][1] + "^{" + powerK + "}}{{(" + unknowns[unknownNumber][0] + "^{" + powerN + "}" + unknowns[unknownNumber][1] +  "^{" + value2Indice(powerT) + "})}^{" + powerP + "}}" + "$";
  document.getElementById("Ans_10").innerHTML = "&nbsp${" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK-powerP*powerT) + "}" + "\\over{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN*powerP) + "}" + "}}$";
}

//Type11 : [(x^n)(y^k)]^p/(x^m)(y^t), 1=<n=<6, -8=<k=<-1, -12<=m<=12 -8=<t=<-1 and 2=<p=<3
function IndicesQuestionType11(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  do{
    var powerN = getRndInteger(1, 6);
    var powerK = getRndInteger(-8, -1);
    do{
      var powerM = getRndInteger(-12, 12);
    }while(powerM==0);
    do{
      var powerT = getRndInteger(-8, -1);
    }while(powerT==powerM);
    var powerP = getRndInteger(2, 3);
  }while((powerN*powerP-powerM==0)||(powerK*powerP-powerT==0));

  document.getElementById("Q11").innerHTML = "&nbsp$\\frac{{(" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN) + "}" + unknowns[unknownNumber][1] + "^{" + powerK + "})}^{" + powerP + "}}{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerM) + "}" + unknowns[unknownNumber][1] + "^{" + powerT + "}}" + "$";
  if((powerN*powerP-powerM>0)&&(powerK*powerP-powerT>0)){
    document.getElementById("Ans_11").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN*powerP-powerM) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK*powerP-powerT) + "}}$";
    document.getElementById("Ans_11").style.fontSize = "14px";
  }else if((powerN*powerP-powerM>0)&&(powerK*powerP-powerT<0)){
    document.getElementById("Ans_11").innerHTML = "&nbsp$\\frac{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN*powerP-powerM) + "}}{{" + unknowns[unknownNumber][1] + "^{" + value2Indice(-powerK*powerP+powerT) + "}}}$";
    document.getElementById("Ans_11").style.fontSize = "20px";
  }else if((powerN*powerP-powerM<0)&&(powerK*powerP-powerT>0)){
    document.getElementById("Ans_11").innerHTML = "&nbsp$\\frac{" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK*powerP-powerT) + "}}{{" + unknowns[unknownNumber][0] + "^{" + value2Indice(-powerN*powerP+powerM) + "}}}$";
    document.getElementById("Ans_11").style.fontSize = "20px";
  }else if((powerN*powerP-powerM<0)&&(powerK*powerP-powerT<0)){
    document.getElementById("Ans_11").innerHTML = "&nbsp$\\frac{1}{{" + unknowns[unknownNumber][0] + "^{" + value2Indice(-powerN*powerP+powerM) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(-powerK*powerP+powerT) + "}}}$";
    document.getElementById("Ans_11").style.fontSize = "20px";
  }
}

//Type12 : (x^n)(y^k)/[(x^m)(y^t)]^p, -12=<n=<12, -12=<k=<12, -6<=m<=-2 2=<t=<8 and 2=<p=<3
function IndicesQuestionType12(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  do{
    do{
      var powerN = getRndInteger(-12, 12);
    }while(powerN==0);
    do{
      var powerK = getRndInteger(-12, 12);
    }while(powerK==0 || powerK==powerN);
    var powerM = getRndInteger(-6, -2);
    var powerT = getRndInteger(2, 8);
    var powerP = getRndInteger(2, 3);
  }while((powerN-powerM*powerP==0)||(powerK-powerT*powerP==0));

  document.getElementById("Q12").innerHTML = "&nbsp$\\frac{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK) + "}}{{(" + unknowns[unknownNumber][0] + "^{" + powerM + "}" + unknowns[unknownNumber][1] + "^{" + powerT + "})}^{" + powerP + "}}" + "$";
  if((powerN-powerM*powerP>0)&&(powerK-powerT*powerP>0)){
    document.getElementById("Ans_12").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN-powerM*powerP) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK-powerT*powerP) + "}}$";
    document.getElementById("Ans_12").style.fontSize = "14px";
  }else if((powerN-powerM*powerP>0)&&(powerK-powerT*powerP<0)){
    document.getElementById("Ans_12").innerHTML = "&nbsp$\\frac{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN-powerM*powerP) + "}}{{" + unknowns[unknownNumber][1] + "^{" + value2Indice(-powerK+powerT*powerP) + "}}}$";
    document.getElementById("Ans_12").style.fontSize = "20px";
  }else if((powerN-powerM*powerP<0)&&(powerK-powerT*powerP>0)){
    document.getElementById("Ans_12").innerHTML = "&nbsp$\\frac{" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK-powerT*powerP) + "}}{{" + unknowns[unknownNumber][0] + "^{" + value2Indice(-powerN+powerM*powerP) + "}}}$";
    document.getElementById("Ans_12").style.fontSize = "20px";
  }else if((powerN-powerM*powerP<0)&&(powerK-powerT*powerP<0)){
    document.getElementById("Ans_12").innerHTML = "&nbsp$\\frac{1}{{" + unknowns[unknownNumber][0] + "^{" + value2Indice(-powerN+powerM*powerP) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(-powerK+powerT*powerP) + "}}}$";
    document.getElementById("Ans_12").style.fontSize = "20px";
  }
}

//Type13 : [(x^n)(y^k)]^p/(x^m)(y^t), -6=<n=<6, 1=<k=<6, 1<=m<=18 1=<t=<18 and -3=<p=<-1
function IndicesQuestionType13(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  do{
    do{
      var powerN = getRndInteger(-6, 6);
    }while(powerN==0);
    do{
      var powerK = getRndInteger(1, 6);
    }while(powerK==powerN);
    var powerM = getRndInteger(1, 18);
    do{
      var powerT = getRndInteger(1, 18);
    }while(powerT==powerM);
    var powerP = getRndInteger(-3, -1);
  }while(powerN*powerP-powerM==0);

  document.getElementById("Q13").innerHTML = "&nbsp$\\frac{{(" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK) + "})}^{" + powerP + "}}{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerM) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerT) + "}}" + "$";
  if(powerN*powerP-powerM>0)
    document.getElementById("Ans_13").innerHTML = "&nbsp$\\frac{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN*powerP-powerM) + "}}{{" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerT-powerK*powerP) + "}}}$";
  else
    document.getElementById("Ans_13").innerHTML = "&nbsp$\\frac{1}{{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerM-powerN*powerP) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerT-powerK*powerP) + "}}}$";
}

//Type14 : [(x^n)(y^k)]^p/(x^m)(y^t), -6=<n=<6, 1=<k=<6, -18<=m<=-1 -18=<t=<-1 and -3=<p=<-1
function IndicesQuestionType14(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  do{
    do{
      var powerN = getRndInteger(-6, 6);
    }while(powerN==0);
    do{
      var powerK = getRndInteger(1, 6);
    }while(powerK==powerN);
     var powerM = getRndInteger(-18, -1);
    do{
      var powerT = getRndInteger(-18, -1);
    }while(powerT==powerM);
    var powerP = getRndInteger(-3, -1);
  }while((powerN*powerP-powerM==0)||(powerK*powerP-powerT==0));

  document.getElementById("Q14").innerHTML = "&nbsp$\\frac{{(" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK) + "})}^{" + powerP + "}}{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerM) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerT) + "}}" + "$";
  if((powerN*powerP-powerM>0)&&(powerK*powerP-powerT>0)){
    document.getElementById("Ans_14").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN*powerP-powerM) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK*powerP-powerT) + "}}$";
    document.getElementById("Ans_14").style.fontSize = "14px";
  }else if((powerN*powerP-powerM>0)&&(powerK*powerP-powerT<0))
    document.getElementById("Ans_14").innerHTML = "&nbsp$\\frac{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN*powerP-powerM) + "}}{{" + unknowns[unknownNumber][1] + "^{" + value2Indice(-powerK*powerP+powerT) + "}}}$";
  else if((powerN*powerP-powerM<0)&&(powerK*powerP-powerT>0))
    document.getElementById("Ans_14").innerHTML = "&nbsp$\\frac{" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK*powerP-powerT) + "}}{{" + unknowns[unknownNumber][0] + "^{" + value2Indice(-powerN*powerP+powerM) + "}}}$";
  else if((powerN*powerP-powerM<0)&&(powerK*powerP-powerT<0))
    document.getElementById("Ans_14").innerHTML = "&nbsp$\\frac{1}{{" + unknowns[unknownNumber][0] + "^{" + value2Indice(-powerN*powerP+powerM) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(-powerK*powerP+powerT) + "}}}$";
}
//Type15 : (x^n)(y^k)/[(x^m)(y^t)]^p, -15=<n=<15, -15=<k=<15, -6<=m<=6 -6=<t=<6 and -4=<p=<-2
function IndicesQuestionType15(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  do{
    do{
      var powerN = getRndInteger(-15, 15);
    }while(powerN==0);
    do{
      var powerK = getRndInteger(-15, 15);
    }while(powerK==0 || powerK==powerN);
    do{
      var powerM = getRndInteger(-6, 6);
    }while(powerM==0);
    do{
      var powerT = getRndInteger(-6, 6);
    }while(powerT==0 || powerT==powerM);
    var powerP = getRndInteger(-4, -2);
  }while((powerN-powerM*powerP==0)||(powerK-powerT*powerP==0));

  document.getElementById("Q15").innerHTML = "&nbsp$\\frac{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK) + "}}{{(" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerM) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerT) + "})}^{" + powerP + "}}" + "$";
  if((powerN-powerM*powerP>0)&&(powerK-powerT*powerP>0)){
    document.getElementById("Ans_15").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN-powerM*powerP) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK-powerT*powerP) + "}}$";
    document.getElementById("Ans_15").style.fontSize = "14px";
  }else if((powerN-powerM*powerP>0)&&(powerK-powerT*powerP<0))
    document.getElementById("Ans_15").innerHTML = "&nbsp$\\frac{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN-powerM*powerP) + "}}{{" + unknowns[unknownNumber][1] + "^{" + value2Indice(-powerK+powerT*powerP) + "}}}$";
  else if((powerN-powerM*powerP<0)&&(powerK-powerT*powerP>0))
    document.getElementById("Ans_15").innerHTML = "&nbsp$\\frac{" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK-powerT*powerP) + "}}{{" + unknowns[unknownNumber][0] + "^{" + value2Indice(-powerN+powerM*powerP) + "}}}$";
  else if((powerN-powerM*powerP<0)&&(powerK-powerT*powerP<0))
    document.getElementById("Ans_15").innerHTML = "&nbsp$\\frac{1}{{" + unknowns[unknownNumber][0] + "^{" + value2Indice(-powerN+powerM*powerP) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(-powerK+powerT*powerP) + "}}}$";
}

//Type16 : [(x^n)(y^k)]^q/[(x^m)(y^t)]^p, -6=<n=<6, -6=<k=<6, -6<=m<=6, -6=<t=<6, -4=<p=<4 and -4=<q=<4
function IndicesQuestionType16(){

  var unknowns = [
    ["a", "b"], ["m", "n"], ["x", "y"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  do{
    do{
      var powerN = getRndInteger(-6, 6);
    }while(powerN==0);
    do{
      var powerK = getRndInteger(-6, 6);
    }while(powerK==0 || powerK==powerN);
    do{
      var powerM = getRndInteger(-6, 6);
    }while(powerM==0);
    do{
      var powerT = getRndInteger(-6, 6);
    }while(powerT==0 || powerT==powerM);
    do{
     var powerP = getRndInteger(-4, 4);
    }while(powerP==0 || powerP==1);
    do{
     var powerQ = getRndInteger(-4, 4);
    }while(powerQ==0 || powerQ==1 || powerQ==powerP);
  }while((powerN*powerQ-powerM*powerP==0)||(powerK*powerQ-powerT*powerP==0));
  document.getElementById("Q16").innerHTML = "&nbsp$\\frac{{(" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK) + "})}"+ "^{" + powerQ + "}}{{(" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerM) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerT) + "})}^{" + powerP + "}}" + "$";
  if((powerN*powerQ-powerM*powerP>0)&&(powerK*powerQ-powerT*powerP>0)){
    document.getElementById("Ans_16").innerHTML = "&nbsp${" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN*powerQ-powerM*powerP) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK*powerQ-powerT*powerP) + "}}$";
    document.getElementById("Ans_16").style.fontSize = "14px";
  }else if((powerN*powerQ-powerM*powerP>0)&&(powerK*powerQ-powerT*powerP<0))
    document.getElementById("Ans_16").innerHTML = "&nbsp$\\frac{" + unknowns[unknownNumber][0] + "^{" + value2Indice(powerN*powerQ-powerM*powerP) + "}}{{" + unknowns[unknownNumber][1] + "^{" + value2Indice(-powerK*powerQ+powerT*powerP) + "}}}$";
  else if((powerN*powerQ-powerM*powerP<0)&&(powerK*powerQ-powerT*powerP>0))
    document.getElementById("Ans_16").innerHTML = "&nbsp$\\frac{" + unknowns[unknownNumber][1] + "^{" + value2Indice(powerK*powerQ-powerT*powerP) + "}}{{" + unknowns[unknownNumber][0] + "^{" + value2Indice(-powerN*powerQ+powerM*powerP) + "}}}$";
  else if((powerN*powerQ-powerM*powerP<0)&&(powerK*powerQ-powerT*powerP<0))
    document.getElementById("Ans_16").innerHTML = "&nbsp$\\frac{1}{{" + unknowns[unknownNumber][0] + "^{" + value2Indice(-powerN*powerQ+powerM*powerP) + "}" + unknowns[unknownNumber][1] + "^{" + value2Indice(-powerK*powerQ+powerT*powerP) + "}}}$";
}

// returns a random integer between min and max (both included)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function value2Indice(n){
  if(n<0)
    return n;
  else if(n>0)
    if(n!=1)
      return n;
    else
      return "";
}

function value2Constant(n){
  if(n>0)
    return "+" + n;
  else if(n<0)
    return "-" + Math.abs(n);
  else
    return "";
}

function value2Coe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return "+" + n;
    else
      return "+";
}
