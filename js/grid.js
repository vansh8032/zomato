let url1 = "https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-banner-template_120329-5177.jpg?semt=ais_hybrid&w=740&q=80";
let url2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augart25/pc/3._CB804568059_.png";
let url3 = 'https://i.ytimg.com/vi/kf3HNy2VClM/maxresdefault.jpg';
let image = [url1, url2, url3];
let a = 1;
let x = document.querySelector("#left");
let y = document.querySelector("#right");
x.addEventListener("click", () => {
    a = a - 1;
    if (a < 0) {
        a = image.length - 1;
    }
    document.querySelector(".slider-main").style.backgroundImage = `url('${image[a]}')`;
});
y.addEventListener("click", () => {
    a = a + 1;
    if (a >= image.length) {
        a = 0;
    }
    document.querySelector(".slider-main").style.backgroundImage = `url('${image[a]}')`;
});

// clock craousel
let x1 = document.querySelector("#left");
        let y1 = document.querySelector("#right");
        let z = document.querySelector(".section-2")
        let scrollAmount = 0;
        const scrollPerClick = 200;
        x1.addEventListener("click", () => {
            z.scrollBy({
                left: -scrollPerClick,
                behavior: "smooth"
            });
        });
        y1.addEventListener("click", () => {
            z.scrollBy({
                left: scrollPerClick,
                behavior: "smooth"
            });
        });

        // form 
    setTimeout(() => {
      document.querySelector(".form").style.display = "block";
    }, 3000);

    document.querySelector("#close").addEventListener("click", () => {
    document.querySelector(".form").style.display = "none";
    clearTimeout(popupTimeout);
});