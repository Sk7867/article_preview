const popUp = document.querySelector('.pop_up');
const shareButton = document.querySelector('.share_button');
const userInfo = document.querySelector('.user_info');
const svg = document.querySelector('.svg-grey');

console.log('Hi');

const popUpDisplay = () => {
  // if (popUp.style.display == 'flex') {
  //   popUp.style.display = 'none';
  //   shareButton.classList.remove('select-back');
  //   svg.classList.remove('svg-white');
  // } else {
  //   popUp.style.display = 'flex';
  //   shareButton.classList.add('select-back');
  //   svg.classList.add('svg-white');
  // }

  popUp.classList.toggle('show');
  shareButton.classList.toggle('active');
  svg.classList.toggle('svg-white');
};

shareButton.addEventListener('click', popUpDisplay);

shareButton.addEventListener('mouseover', () => {
  svg.classList.add('svg-hover');
});

shareButton.addEventListener('mouseout', () => {
  svg.classList.remove('svg-hover');
});
