// INPUT L: User nhập vào số điểm chuẩn, điểm thi và chọn đối tượng, khu vực
// PROCESS : DOM và viết điều kiện của đối tượng, khu vực trong hàm 
// PROCESS : Viết hàm tính tổng 3 môn, và tổng tất cả các input theo như đề bài 
// PROCESS : viết so sánh total với điểm chuẩn và dom ra kết quả 
// OUTPUT : user nhận được kết quả đậu hay rớt 

// function getResult ( benchMark, subjectA, subjectB, subjectC, object, area ) {
//     const absoluteMark = +document.getElementById ("benchMark").value ; 
//     const subjectA = +document.getElementById ("subjectA").value ; 
//     const subjectB = +document.getElementById ("subjectB").value ; 
//     const subjectC = +document.getElementById ("subjectC").value ; 
//     const object = document.getElementById ("object").value ; 
//     const area = document.getElementById ("area").value ; 
//     const calcObject = calcObject (object) ;
//     const calcArea = calcArea (area) ;
//     const calcSubject = calcSubject (subjectA, subjectB, subjectC) ; 
//     const calcTotal = calcObject + calcArea + calcSubject ;
//     showMess (subjectA,subjectB,subjectC, calcSubject)

// }
// function calcObject (object) {
//     if (object === "A") {
//         return 2.5 ; 
//     } else if ( object === "B") {
//         return 1.5 ; 
//     } else if (object === "C") {
//         return 1 ; 
//     }
// }
// const object = document.getElementById ("object").value ; 
// console.log (calcObject(object))
// function calcArea (area) {
//     switch(area) {
//         case "A":
//             return 2;
            
//         case "B" :
//             return 1;
            
//         case "C" :
//             return 0.5;
            
//         default:
//             break;
//     }
// }
// // const calcSubject = (subjectA, subjectB, subjectC) => subjectA + subjectB + subjectC ; 
// function  showMess (subjectA,subjectB,subjectC, calcSubject) {
//     if (subjectA === 0 || subjectB === 0 || subjectC === 0) {
//         document.getElementById("showMess").style.display = "block"; 
//         document.getElementById("showResult").style.display = `Rớt rồi `; 
//     } else {
//         document.getElementById("showMess").style.display = "block"; 
//         document.getElementById("showResult").style.display = calcTotal ; 
//     }
// }
// const admissionScore = +document.getElementById("admissionScore").value ; 
// const subjectA = +document.getElementById("subjectA").value ; 
// const subjectB = +document.getElementById("subjectB").value ; 
// const subjectC = +document.getElementById("subjectC").value ; 
// const object = document.getElementById("object").value;
// const area = document.getElementById("area").value;

// calcSubject = (subjectA , subjectB, subjectC ) => subjectA + subjectB + subjectC; 
// calcSubject (subjectA, subjectB, subjectC); 
// const calcSubject = calcSubject (subjectA, subjectB, subjectC);
// console.log (calcSubject(4,4,4)) ;
// function calcArea(area) {
//     if (area === "A") {
//         return 2;
//     } else if (area === "B") {
//         return 1;
//     } else if (area === "C") {
//         return 0.5
//     }
// }

// function calcObject (object) {
//     switch(object) {
//         case "A":
//             return 2.5;
            
//         case "B" :
//             return 1.5;
            
//         case "C" :
//             return 1;
            
//         default:
//             break;
//     }
// }

// function  showMess (subjectA,subjectB,subjectC, calcTotal) {
//     if (subjectA === 0 || subjectB === 0 || subjectC === 0) {
//         document.getElementById("showMess").style.display = "block"; 
//         document.getElementById("showResult").style.display = `Rớt rồi `; 
//     } else {
//         document.getElementById("showMess").style.display = "block"; 
//         document.getElementById("showResult").style.display = calcTotal ; 
//     }
// }

function showResult () {
    const admissionScore = +document.getElementById("admissionScore").value ; 
    const subjectA = +document.getElementById("subjectA").value ; 
    const subjectB = +document.getElementById("subjectB").value ; 
    const subjectC = +document.getElementById("subjectC").value ; 
    const target = document.getElementById("object").value;
    const area = document.getElementById("area").value;
   
   
    const targetScore = calcTarget (target) ; 
    const areaScore = calcArea (area);
    const subjectScore = calcSubject (subjectA, subjectB, subjectC);
    const totalScore = calcTotalScore (targetScore,areaScore,subjectScore)
    // showInfo (subjectA,subjectB,subjectC,totalScore,admissionScore)

    if (subjectA === 0 || subjectB === 0 || subjectC === 0) {
                document.getElementById("showMess").style.display = "block"; 
                document.getElementById("showInfo").innerHTML = `You failed !! One of your subjects got ZERO `; 
            } else if (totalScore >= admissionScore) {
                document.getElementById("showMess").style.display = "block"; 
                document.getElementById("showInfo").innerHTML = `Congratulations !!! You passed with ${totalScore} score` ; 
            } else {
                document.getElementById("showMess").style.display = "block"; 
                document.getElementById("showInfo").innerHTML = `You failed !! Try better next time `; 
            }
}


function calcArea(area) {
    if (area === "A") {
        return 2;
    } else if (area === "B") {
        return 1;
    } else if (area === "C") {
        return 0.5
    }
}
// console.log(calcArea("B"));worked

function calcTarget (target) {
    switch(target) {
        case "A":
            return 2.5;
            
        case "B" :
            return 1.5;
            
        case "C" :
            return 1;
            
        default:
            break;
    }
}
console.log(calcTarget("A"));
function calcSubject (subjectA,subjectB,subjectC,) {
    return subjectA + subjectB + subjectC
}
// console.log(calcSubject(7,7,7)) worked 
// function showInfo (subjectA, subjectB, subjectC,calcTotal,admissionScore) {
//     if (subjectA === 0 || subjectB === 0 || subjectC === 0) {
//         document.getElementById("showMess").style.display = "block"; 
//         document.getElementById("showInfo").innerHTML = `You failed`; 
//     } else if (calcTotal >= admissionScore) {
//         document.getElementById("showMess").style.display = "block"; 
//         document.getElementById("showInfo").style.display = `Congratulations !!! You passed with ${calcTotal} score` ; 
//     } else {
//         document.getElementById("showMess").style.display = "block"; 
//         document.getElementById("showInfo").innerHTML = `You failed`; 
//     }
// }
function calcTotalScore (targetScore,areaScore,subjectScore) {
    return targetScore + areaScore + subjectScore; 
}
// console.log(calcTotalScore(2,2,2)) worked


