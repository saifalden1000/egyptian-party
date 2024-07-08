//=============== aside menu control
$(".side-open").on("click", function () {
  let offsets = $("aside").offset();
  let left = offsets.left;
  if (left == 0) {
    closeSide();
  } else {
    openSide();
  }
});
$(".side-close").on("click", function () {
  closeSide();
});
function openSide() {
  $("aside").animate({ left: "0" }, 1000);
  $(".test").animate({ width: "90%", marginLeft: "250px" }, 1000);
}
function closeSide() {
  $("aside").animate({ left: "-250px" }, 1000);
  $(".test").animate({ width: "100%", marginLeft: "0" }, 1000);
}
// ================== collaps singers
$(".singer").on("click", function () {
  $(".collap div").not($(this).next()).slideUp(1000);
  $(this).next().slideToggle(1000);
});

// ========= count down
let countDownDate = new Date("Jan 12, 2030 22:00:00").getTime();
function counting() {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mins = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  $(".days").text(`${days} D`);
  $(".hours").text(`${hours} H`);
  $(".minutes").text(`${mins} M`);
  $(".seconds").text(`${seconds} S`);
  setTimeout(counting, 1000);
}
counting();
console.log(countDownDate);

//============ remaining char counting

$("#message").on("input", function () {
  let charCount = $(this).val().length;
  let remainingCount = 100 - charCount;
  $(".count").text(remainingCount);
});
