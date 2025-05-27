
document.addEventListener('DOMContentLoaded', () => {
    // 특정 페이지에서만 동작하도록 제한
    if (document.body.classList.contains('custom-page')) {
        function handleScroll() {
            const blocks = document.querySelectorAll('.custom-text-block');
            blocks.forEach(block => {
                const rect = block.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0) {
                    block.classList.add('visible');
                } else {
                    block.classList.remove('visible');
                }
            });
        }

        document.addEventListener('scroll', handleScroll);
        handleScroll(); // 초기 실행
    }
});
