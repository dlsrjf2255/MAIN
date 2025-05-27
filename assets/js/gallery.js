document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery .image-wrapper img");

    // 이미지별 링크 배열
    const links = [
        "https://dlsrjf2255.github.io/drowing/", // 첫 번째 이미지 링크
        "https://dlsrjf2255.github.io/music/", // 두 번째 이미지 링크
        "https://dlsrjf2255.github.io/promotion/", // 세 번째 이미지 링크
        "https://dlsrjf2255.github.io/video/"  // 네 번째 이미지 링크
    ];

    // 각 이미지를 클릭하면 해당 링크로 이동
    galleryImages.forEach((image, index) => {
        image.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.1)";
            image.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
        });

        image.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
            image.style.boxShadow = "none";
        });

        image.addEventListener("click", () => {
            if (links[index]) {
                window.open(links[index], "_blank"); // 새 탭에서 링크 열기
            }
        });
    });
});
