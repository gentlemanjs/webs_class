//결과보기 버튼을 클릭하면 경고창을 띄워주세요~

document.querySelectorAll(".result").forEach(function(el){
    addEventListener("click", function(){
        el.children[1].classList.toggle("display");
    });
})