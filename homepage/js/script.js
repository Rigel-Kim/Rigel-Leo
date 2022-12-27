window.onload = function () {
  const topBtn = document.getElementById("top-btn");
  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
