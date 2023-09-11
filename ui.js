//러디언
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

//modal
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

//캐러셀
const container = document.querySelector(".container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

(function addEvent(){
  prevBtn.addEventListener('click', translateContainer.bind(this, 1));
  nextBtn.addEventListener('click', translateContainer.bind(this, -1));
})();

function translateContainer(direction){
  const selectBtn = (direction === 1) ? 'prev' : 'next';
  container.style.transitionDuration = '500ms';
  container.style.transform = `translateX(${direction * (100 / 5)}%)`;
  container.ontransitionend = () => reorganizeEl(selectBtn);
}

function reorganizeEl(selectBtn) {
  container.removeAttribute('style');
  (selectBtn === 'prev') ? container.insertBefore(container.lastElementChild, container.firstElementChild): container.appendChild(container.firstElementChild);
}

function forPractice(){
  const forP = document.querySelector('.for');
  let forArr = ["2" ,"3", "4"]
  for(i=0; i<1; i++){
    forArr.push("5"); // 배열에 5추가
    // console.log(forArr);
  }
  forP.innerHTML = forArr;

     // for 문을 이용한 구구단 출력
for(let m = 1; m <= 9; m++) {
  // console.log('===' + m + '단 ===');
   for(let n = 1; n<=9; n++){
    // console.log(m + "X" + n + "=" + m*n)
   }
}
}
forPractice();


function forEach(){
  const forEachP = document.querySelector('.forEach');
  let EachArr = 1
  EachArr++
  EachArr++
  // console.log(EachArr);
  forEachP.innerHTML = EachArr;
}
forEach();


//map
const a = [1, 2, 3]
const b = a.map((item) => item)
console.log(b)

//filter





