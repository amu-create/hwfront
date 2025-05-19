document.addEventListener('DOMContentLoaded', function() {
  // 기본 요소 선택
  const menuItems = document.querySelectorAll('.menu-item');
  const sections = document.querySelectorAll('.content-section');
  const images = document.querySelectorAll('.sticky-image');

  // 첫 번째 콘텐츠 활성화
  images[0].classList.add('active');
  menuItems[0].classList.add('active');

  // 메뉴 클릭 처리
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      const targetId = this.getAttribute('data-section');
      
      // 해당 섹션으로 스크롤
      document.getElementById(targetId).scrollIntoView({behavior: 'smooth', block: 'start'});
    });
  });

  // 스크롤 이벤트 처리
  window.addEventListener('scroll', function() {
    // 현재 스크롤 위치 + 화면 중간 지점 계산
    const currentPos = window.scrollY + window.innerHeight/2;
    
    // 각 섹션 확인
    sections.forEach((section, index) => {
      // 섹션의 위치 범위 계산
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      // 현재 위치가 섹션 안에 있는지 확인
      if (currentPos >= sectionTop && currentPos < sectionBottom) {
        // 모든 액티브 클래스 제거
        menuItems.forEach(item => item.classList.remove('active'));
        images.forEach(img => img.classList.remove('active'));
        
        // 현재 섹션에 맞는 요소 활성화
        menuItems[index].classList.add('active');
        images[index].classList.add('active');
      }
    });
  });
});