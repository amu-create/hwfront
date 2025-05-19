// 탭 메뉴 관련 JavaScript 코드
document.addEventListener('DOMContentLoaded', function() {
  // 메뉴 탭 기능 구현
  const menuItems = document.querySelectorAll('.menu-item-top');
  
  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // 현재 선택된 메뉴 항목 토글
      this.classList.toggle('active');
    });
    
    // 다른 영역 클릭시 메뉴 닫기
    document.addEventListener('click', function(event) {
      if (!item.contains(event.target)) {
        item.classList.remove('active');
      }
    });
  });
});