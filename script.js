const charactor = document.getElementById('charactor');
function jump() {
  charactor.classList.add('jump');
  setTimeout(function () {
    charactor.classList.remove('jump');
  }, 300);
}
let isAlive = setInterval(function () {
  console.log('check');
  let charactorTop = parseInt(
    window.getComputedStyle(charactor).getPropertyValue('top')
  );
}, 10);
document.addEventListener('keydown', function (event) {
  jump();
});
