        //배경 색 변경
        const content = document.querySelector('body');

        window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 700) {
            content.style.backgroundColor = '#F2F2F2'; // 스크롤이 일정 위치를 넘어가면 배경색 변경
        } else {
            content.style.backgroundColor = '#101010'; // 스크롤이 일정 위치 미만일 때 초기 배경색으로 변경
        }
        });

        //헤더 색 변경
        const content2 = document.querySelector('header');

        window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 700) {
            content2.style.backgroundColor = '#101010'; // 스크롤이 일정 위치를 넘어가면 배경색 변경
        } else {
            content2.style.backgroundColor = '#D3FA09'; // 스크롤이 일정 위치 미만일 때 초기 배경색으로 변경
        }
        });

        //글씨 색 변경
        const content3 = document.querySelector('.ulcolor');

        window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (scrollY > 700) {
            content3.style.color = '#D3FA09'; // 스크롤이 일정 위치를 넘어가면 배경색 변경
        } else {
            content3.style.color = '#101010'; // 스크롤이 일정 위치 미만일 때 초기 배경색으로 변경
        }
        });

        // // 스크롤 값을 업데이트하고 표시하는 함수
        // function updateScrollValue() {
        // const scrollValue = window.scrollY; // 현재 스크롤 위치
        // const scrollValueElement = document.getElementById("scroll-value");
        // scrollValueElement.textContent = `스크롤 값: ${scrollValue}px`;
        // }

        // // 스크롤 이벤트를 감지하여 스크롤 값을 업데이트
        // window.addEventListener("scroll", updateScrollValue);

        // // 초기 스크롤 값을 표시
        // window.addEventListener("load", updateScrollValue);

