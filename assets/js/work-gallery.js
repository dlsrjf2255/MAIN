document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/성장배경.jpg",
        "images/학창시절.jpg",
        "images/경력력.jpg",
        "images/지원동기.jpg",
        "images/포부.jpg",
    ];

    let currentIndex = 0;
    const galleryContainer = document.getElementById("gallery-container");

    
    // 이미지 요소 생성
    const imgElements = images.map((src, index) => {
        const img = document.createElement("img");
        img.classList.add("gallery-image");
        img.src = src;
        img.style.zIndex = images.length - index; // 뒤쪽 이미지가 더 낮은 z-index
        if (index !== 0) img.style.opacity = 0; // 첫 이미지만 보이게
        galleryContainer.appendChild(img);
        return img;
    });

    // 클릭 시 다음 이미지로 전환
    galleryContainer.addEventListener("click", function () {
        const currentImage = imgElements[currentIndex];
        currentImage.style.opacity = 0; // 현재 이미지를 투명하게
        currentImage.style.zIndex = 1; // 뒤로 이동

        currentIndex = (currentIndex + 1) % images.length; // 다음 이미지 인덱스

        const nextImage = imgElements[currentIndex];
        nextImage.style.opacity = 1; // 다음 이미지를 보이게
        nextImage.style.zIndex = images.length; // 앞으로 이동
    });

    // 마우스 오버 시 즉시 호버 처리
    imgElements.forEach((img, index) => {
        img.addEventListener("mouseover", function () {
            imgElements.forEach((otherImg, otherIndex) => {
                if (otherIndex !== index) {
                    otherImg.style.opacity = 0; // 다른 이미지는 투명하게
                    otherImg.style.zIndex = 1; // 뒤로 이동
                }
            });
            img.style.opacity = 1; // 현재 이미지를 보이게
            img.style.zIndex = images.length; // 앞으로 이동
        });
    });

    // 마우스가 벗어나면 기존 상태로 복귀
    galleryContainer.addEventListener("mouseleave", function () {
        imgElements.forEach((img, index) => {
            img.style.opacity = index === currentIndex ? 1 : 0; // 현재 이미지만 보이게
            img.style.zIndex = index === currentIndex ? images.length : 1; // 현재 이미지를 앞으로
        });
    });
});


