document.addEventListener('DOMContentLoaded', function() {
  // 기본 요소 선택
  const mainHeader = document.querySelector('.main-header');
  const menuItems = document.querySelectorAll('.nav-menu .menu-item');
  const topMenuItems = document.querySelectorAll('.menu-item-top');
  const sections = document.querySelectorAll('.content-section');
  const images = document.querySelectorAll('.sticky-image');
  const headerHeight = document.querySelector('.header-image').offsetHeight;
  const topMenuHeight = document.querySelector('.top-menu').offsetHeight;

  // 첫 번째 이미지 활성화
  images[0].classList.add('active');
  menuItems[0].classList.add('active');

  // 윈도우 크기에 따라 메가 드롭다운 위치 조정
  function adjustMegaDropdowns() {
    const megaDropdowns = document.querySelectorAll('.mega-dropdown');
    megaDropdowns.forEach(dropdown => {
      if (window.innerWidth <= 768) {
        dropdown.style.transform = 'none';
        dropdown.style.left = '0';
      } else {
        dropdown.style.transform = 'translateX(-50%)';
        dropdown.style.left = '50%';
      }
    });
  }

  // 초기 및 리사이즈 시 메가 드롭다운 조정
  window.addEventListener('resize', adjustMegaDropdowns);
  adjustMegaDropdowns();

  // 메뉴 클릭 처리
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      const targetId = this.getAttribute('data-section');
      
      // 해당 섹션으로 스크롤
      const targetSection = document.getElementById(targetId);
      const offsetTop = targetSection.offsetTop - (topMenuHeight + 60); // 상단 여백 고려
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });

  // 스크롤 이벤트 처리
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // 헤더 이미지를 지나면 메뉴 표시
    if (scrollPosition >= headerHeight * 0.8) {
      mainHeader.classList.add('visible');
    } else {
      mainHeader.classList.remove('visible');
    }
    
    // 현재 스크롤 위치 + 화면 중간 지점 계산
    const currentPos = scrollPosition + window.innerHeight/2;
    
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
  
  // 페이지 로드 시 스크롤 이벤트 발생시켜 초기 상태 설정
  window.dispatchEvent(new Event('scroll'));
});