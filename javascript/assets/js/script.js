// 결과보기

//제목을 클릭했을 때 ~~~를 실행해라!
// document.querySelector(".result1t h4").addEventListener("click", function(){
//     document.querySelector(".result1").style.display = "block";
// })


//for문을 이용해서 1~12까지 출력!!

for (let i = 1; i <= 15; i++) {
    document.querySelector(".result" + i + "t h4").addEventListener("click", function () {
        //alert("클릭했음");
        document.querySelector(".result" + i).style.display = "block";
    });
}

//forEach문을 이용해서 1~12까지 출력!

document.querySelectorAll(".result h4").forEach(function(el){
    //console.log(el)
    el.addEventListener("click", function(){
        // alert("클릭");
    })
});
