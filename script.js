// 음식 추천 리스트
var foods = [
    "피자",
    "짜장면",
    "초밥",
    "파스타",
    "햄버거",
    "떡볶이",
    "치킨",
    "삼겹살",
    "훠궈",
    "라면",
    "샐러드",
    "카레",
    "스테이크",
    "마라탕",
    "타코",
    "갈비",
    "초코렛",
    "아이스크림",
    "파이",
    "커피",
    "차",
    "밀크티",
    "스무디"
];

document.getElementById('recommend-btn').addEventListener('click', function() {
    var randomIndex = Math.floor(Math.random() * foods.length);
    var recommendedFood = foods[randomIndex];
    displayFood(recommendedFood);
    showSuccessAlert(recommendedFood);
});

function displayFood(food) {
    var foodDisplay = document.getElementById('food-recommendation');
    foodDisplay.textContent = `오늘은 ${food} 어떠세요?`;
}

function showSuccessAlert(food) {
    Swal.fire({
        icon: 'success',
        title: '음식 추천 완료!',
        text: `${food}을(를) 추천합니다.`,
        confirmButtonColor: '#4CAF50',
        confirmButtonText: '확인'
    });
}
