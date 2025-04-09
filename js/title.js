const SEC = 0.5;

function clipText(dom) {
    dom.classList.remove('on'); // 애니메이션 클래스 제거
    void dom.offsetWidth; // 리플로우 강제
    dom.classList.add('on'); // 애니메이션 클래스 추가
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.animationInProgress) {
            entry.target.animationInProgress = true;
            const h3Tag = entry.target;

            // index를 이용하여 딜레이를 설정합니다.
            setTimeout(() => {
                clipText(h3Tag);
                setTimeout(() => {
                    entry.target.animationInProgress = false;
                }, SEC * 1000);
            }, h3Tag.index * SEC * 1000);
        }
    });
});

const targets = document.querySelectorAll('.introduction h3');
targets.forEach((target, index) => {
    target.index = index; // 각 태그에 인덱스를 저장합니다.
    observer.observe(target);
});
