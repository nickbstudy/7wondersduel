let p1score = 0;
let p2score = 0;
const p1total = document.getElementById("p1sum");
const p2total = document.getElementById("p2sum");

document.querySelectorAll(".input-here").forEach((item) => {
  item.addEventListener("input", (event) => {
    let str = event.target.id;

    if (str.includes("p1")) {
      getScoresP1();
    } else {
      getScoresP2();
    }
  });
});

document.getElementById("clear").onclick = function() {
  document.querySelectorAll("input").forEach(function(thing){
    thing.value = ""
  })
  getScoresP1();
  getScoresP2();
  
}

const getScoresP1 = function () {
  p1score = 0;
  for (let i = 2; i <= 11; i++) {
    if (document.getElementById(`l${i}p1`).value) {
      p1score += Number(document.getElementById(`l${i}p1`).value);
    }
  }
  p1total.innerText = p1score;
};

const getScoresP2 = function () {
  p2score = 0;
  for (let i = 2; i <= 11; i++) {
    if (document.getElementById(`l${i}p2`).value) {
      p2score += Number(document.getElementById(`l${i}p2`).value);
    }
  }
  p2total.innerText = p2score;
};
