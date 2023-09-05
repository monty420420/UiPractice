function collapse(element) {
    let before = document.getElementsByClassName("active")[0]               // 기존에 활성화된 버튼
    if (before && document.getElementsByClassName("active")[0] != element) {  // 자신 이외에 이미 활성화된 버튼이 있으면
        before.nextElementSibling.style.maxHeight = null;   // 이전에 있던 높이 null
        // console.log(before.nextElementSibling);
        before.classList.remove("active");                  // 버튼 비활성화
    }
    element.classList.toggle("active");         // 활성화 여부 toggle

    let content = element.nextElementSibling;
    if (content.style.maxHeight != 0) {         // 버튼 다음 요소가 펼쳐져 있으면
        content.style.maxHeight = null;         // 접기
    } else {
        content.style.maxHeight = content.scrollHeight + "px";  // 접혀있는 경우 펼치기
    }
}

function modalOpen(){
    const modal = document.querySelector(".modal");
    const modalBtn = document.querySelector(".modal-btn");
    modal.style.display= "block";
    
    document.addEventListener('click', function(event) {
        if (event.target !== modalBtn && event.target !== modal) {
          modal.style.display = "none";
        }
      });
    
    //데이터 버블링 방지  
    //   변수.addEventListener('click', function(event) {
    //     event.stopPropagation();
    //   });
}



