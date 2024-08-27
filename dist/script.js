/* The design was taken from https://uidesigndaily.com/posts/sketch-modal-discount-day-1061 */

const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const backs = document.getElementById("back");
const setIp = document.getElementById("setIp");
const Edit = document.getElementById("Edit");
var ip = document.getElementById("ip");

var qwertyLayout = [
  "1234567890-" + $.keypad.CLEAR,
  $.keypad.HALF_SPACE + "QWERTYUIOP" + $.keypad.SPACE + $.keypad.BACK,
  $.keypad.SPACE + "ASDFGHJKL",
  $.keypad.HALF_SPACE +
    $.keypad.SPACE +
    $.keypad.SPACE +
    "ZXCVBNM" +
    $.keypad.HALF_SPACE +
    $.keypad.SPACE +
    $.keypad.SPACE +
    $.keypad.SPACE +
    $.keypad.ENTER,
];

$("#inlineKeypadChar").keypad({
  target: $("#defaultKeypadChar"),
  layout: qwertyLayout,
  onKeypress: function (key, value, inst) {
    if (key == "\r") {
      // Enter key
      alert($(this).val());
    }
  },
});

var customNumberKeys = [
  ["ZERO", "zero", 0],
  ["ONE", "one", 1],
  ["TWO", "two", 2],
  ["THREE", "three", 3],
  ["FOUR", "four", 4],
  ["FIVE", "five", 5],
  ["SIX", "six", 6],
  ["SEVEN", "seven", 7],
  ["EIGHT", "eight", 8],
  ["NINE", "nine", 9],
];

customNumberKeys.forEach((customNumberKey) => {
  $.keypad.addKeyDef(customNumberKey[0], customNumberKey[1], function (inst) {
    this.val(this.val() + String(customNumberKey[2])).focus();
  });
});

$.keypad.addKeyDef("MINUS", "minus", function (inst) {
  let val = Number(this.val());
  if (val != 0 && !isNaN(val)) this.val(val * -1).focus();
  else if (this.val().length == 0) this.val("-").focus();
});

$("#inlineKeypadNum").keypad({
  target: $("#defaultKeypadNum"),
  keypadOnly: false,
  zeroText: "0",
  zeroStatus: "",
  oneText: "1",
  oneStatus: "",
  twoText: "2",
  twoStatus: "",
  threeText: "3",
  threeStatus: "",
  fourText: "4",
  fourStatus: "",
  fiveText: "5",
  fiveStatus: "",
  sixText: "6",
  sixStatus: "",
  sevenText: "7",
  sevenStatus: "",
  eightText: "8",
  eightStatus: "",
  nineText: "9",
  nineStatus: "",
  minusText: "+ / -",
  minusStatus: "",
  plusText: "+",
  plusStatus: "",
  layout: [
    $.keypad.SEVEN + $.keypad.EIGHT + $.keypad.NINE + $.keypad.CLEAR,
    $.keypad.FOUR + $.keypad.FIVE + $.keypad.SIX + $.keypad.BACK,
    $.keypad.ONE + $.keypad.TWO + $.keypad.THREE,
    "." + $.keypad.ZERO + $.keypad.MINUS + $.keypad.ENTER,
  ],
  onKeypress: function (key, value, inst) {
    if (key == "\r") {
      // Enter key
      // alert($(this).val());
      if(ip.value == ""){
        alert(ip.value);
        return ;
      }

      var apiUrl = "https://" + ip.value + "/CallFloor?params=" + $(this).val();
      fetch(apiUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // Work with JSON data here
          console.log(data);
        })
        .catch((err) => {
          // Do something for an error here
        });
    }
  },
});

// Event listeners
btn.addEventListener("click", () => {
  modal.style.display = "inline-block";
  modal.className = "modal animate__animated animate__bounceIn";
});

// btn2.addEventListener("click", () => {
//   modal.className = "is-clicked";
// });

close.addEventListener("click", () => {
  modal.style.display = "none";
});

setIp.addEventListener("click", () => {
    // modal.style.display = "none";
//   alert(ip.value);
  document.getElementById("ip").disabled = true;
  document.getElementById("setIp").hidden = true;
  document.getElementById("Edit").hidden = false;
});

Edit.addEventListener("click", () => {
    // modal.style.display = "none";
//   alert(ip.value);
  document.getElementById("ip").disabled = false;
  document.getElementById("setIp").hidden = false;
  document.getElementById("Edit").hidden = true;
});


$(function() {
    $('.btn2').click(function() {
        // console.log("sdfsdfd");
      $(this).toggleClass('is-clicked');


      var apiUrl = "https://" + ip.value + "/Tagcode?params=1";
      fetch(apiUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // Work with JSON data here
          console.log(data);
        })
        .catch((err) => {
          // Do something for an error here
        });




    });
  });
// var triggerEl = document.querySelector('#myTab a[href="#profile"]');
// bootstrap.Tab.getInstance(triggerEl).show(); 
// window.addEventListener('click', e => {
//     if (e.target === modal) {
//         modal.style.display = 'none';
//     }

// })
