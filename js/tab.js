// 탭 메뉴 관련 JavaScript 코드
document.addEventListener('DOMContentLoaded', function() {
  // 메뉴 탭 기능 구현
  const menuItems = document.querySelectorAll('.menu-item-top');
  
  // 메가 드롭다운 초기화
  function initMegaDropdowns() {
    const megaDropdowns = document.querySelectorAll('.mega-dropdown');
    const megaContents = document.querySelectorAll('.mega-content');
    const megaColumns = document.querySelectorAll('.mega-column');
    
    // 스타일 강제 적용
    megaDropdowns.forEach(dropdown => {
      dropdown.style.position = 'absolute';
      dropdown.style.display = 'none';
      dropdown.style.width = '100vw';
      dropdown.style.zIndex = '999';
    });
    
    megaContents.forEach(content => {
      content.style.display = 'table';
      content.style.tableLayout = 'fixed';
      content.style.width = '100%';
      content.style.maxWidth = '1200px';
      content.style.margin = '0 auto';
    });
    
    megaColumns.forEach(column => {
      column.style.display = 'table-cell';
      column.style.width = '25%';
      column.style.verticalAlign = 'top';
    });
  }
  
  // 페이지 로드 시 초기화
  initMegaDropdowns();
  
  // 창 크기 변경 시 초기화
  window.addEventListener('resize', initMegaDropdowns);
  
  menuItems.forEach(function(item) {
    // 마우스 오버 시 드롭다운 표시
    item.addEventListener('mouseenter', function() {
      const dropdown = this.querySelector('.mega-dropdown');
      if (dropdown) {
        dropdown.style.display = 'block';
      }
    });
    
    // 마우스 벗어날 시 드롭다운 숨김
    item.addEventListener('mouseleave', function() {
      const dropdown = this.querySelector('.mega-dropdown');
      if (dropdown) {
        dropdown.style.display = 'none';
      }
    });
    
    // 클릭 시 드롭다운 토글 (모바일)
    item.addEventListener('click', function(event) {
      if (window.innerWidth <= 768) {
        const dropdown = this.querySelector('.mega-dropdown');
        if (dropdown) {
          const currentDisplay = dropdown.style.display;
          dropdown.style.display = currentDisplay === 'block' ? 'none' : 'block';
          event.preventDefault();
        }
      }
    });
  });
  
  // 다른 영역 클릭시 메뉴 닫기
  document.addEventListener('click', function(event) {
    let clickedInside = false;
    menuItems.forEach(function(item) {
      if (item.contains(event.target)) {
        clickedInside = true;
      }
    });
    
    if (!clickedInside) {
      menuItems.forEach(function(item) {
        const dropdown = item.querySelector('.mega-dropdown');
        if (dropdown) {
          dropdown.style.display = 'none';
        }
      });
    }
  });
});