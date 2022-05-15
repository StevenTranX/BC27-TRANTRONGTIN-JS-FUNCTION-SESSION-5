// Sơ đồ 3 khối : 
// INPUT : user sẽ nhập vào họ và tên, số kw điện đã sử dụng 
// PROCESS : nên dùng hàm để tính toán giống bài grab car 
// !IMPORTANT, bị lỗi vì quên để giá trị value sau khi DOM 
// Kiến thức cần nhớ trong bài tập này : gọi hàm , cách sử dụng của return
// OUTPUT ; user có thể nhận được họ tên của họ và bill điện 



function getBill () {
    const userName = document.getElementById("name").value ; 
    const kw = +document.getElementById("kw").value;
    let price = 0;
    price = electricProcessor (kw,500,650,850,1100,1300);
    document.getElementById("showMess").style.display = "block";
    document.getElementById("showInfo").innerHTML = `Hello ${userName}, your electric bill is ${price.toLocaleString()}`

}

function electricProcessor (kw, cost_50,cost_50_100, cost_100_200, cost_200_350,cost_rest) {
    let price = 0 ;
    if (kw <= 50) {
        price = price + cost_50 * kw
        //worked
    } else if (kw > 50 && kw <= 100) {
        price += ( 50 * cost_50 ) + (kw - 50) * cost_50_100 ;
        // worked
    } else if (kw > 100 && kw <= 200 ) {
        price += ( 50 * cost_50 ) + ( 50 * cost_50_100 ) + (kw-100) * cost_100_200 ; 
        // worked
    } else if (kw > 200 && kw <= 350 ) {
        price += ( 50 * cost_50 ) + ( 50 * cost_50_100 ) + ( 100 * cost_100_200 ) + (kw-200) * cost_200_350 ;
        //worked
    } else {
        price += ( 50 * cost_50 ) + ( 50 * cost_50_100 ) + ( 100 * cost_100_200 ) +  (150 * cost_200_350 )+ (kw-350) * cost_rest;
        //worked
    }
    return price 
}

console.log(electricProcessor (600, 500,650, 850,1100,1300))
