

const now = new Date();

const options = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

const currentHour = now.getHours();
const currentMinute = now.getMinutes();
const currentTime = new Intl.DateTimeFormat('en-US', options).format(now);
const gradients = [
    //this means that the gradients will change depending on the time of day
    //for example, start: '20:30', end: '06:00' means that from 8:30pm to 6am the gradient will be linear-gradient(to bottom, #00000c, #150800)
  { start: '20:30', end: '06:00', gradient: 'linear-gradient(to bottom, #00000c, #150800)' },
  { start: '06:00', end: '06:30', gradient: 'linear-gradient(to bottom, #020111 85%,#191621 100%)' },
  { start: '06:30', end: '07:00', gradient: 'linear-gradient(to bottom, #020111 60%,#20202c 100%)' },
  { start: '07:00', end: '07:30', gradient: 'linear-gradient(to bottom, #020111 10%,#3a3a52 100%)' },
  { start: '07:30', end: '08:00', gradient: 'linear-gradient(to bottom, #20202c 0%,#515175 100%)' },
  { start: '08:00', end: '08:30', gradient: 'linear-gradient(to bottom, #40405c 0%,#6f71aa 80%,#8a76ab 100%)' },
  { start: '08:30', end: '09:00', gradient: 'linear-gradient(to bottom, #4a4969 0%,#7072ab 50%,#cd82a0 100%)' },
  { start: '09:00', end: '09:30', gradient: 'linear-gradient(to bottom, #757abf 0%,#8583be 60%,#eab0d1 100%)' },
  { start: '09:30', end: '10:00', gradient: 'linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%)' },
  { start: '10:00', end: '10:30', gradient: 'linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)' },
  { start: '10:30', end: '12:30', gradient: 'linear-gradient(to bottom, #b7eaff 0%,#94dfff 100%)' },
  { start: '12:30', end: '13:30', gradient: 'linear-gradient(to bottom, #9be2fe 0%,#67d1fb 100%)' },
  { start: '13:30', end: '14:30', gradient: 'linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%)' },
  { start: '14:30', end: '15:00', gradient: 'linear-gradient(to bottom, #57c1eb 0%,#246fa8 100%)' },
  { start: '15:00', end: '15:30', gradient: 'linear-gradient(to bottom, #2d91c2 0%,#1e528e 100%)' },
  { start: '15:30', end: '16:00', gradient: 'linear-gradient(to bottom, #2473ab 0%,#1e528e 70%,#5b7983 100%)' },
  { start: '16:00', end: '16:30', gradient: 'linear-gradient(to bottom, #1e528e 0%,#265889 50%,#9da671 100%)' },
  { start: '16:30', end: '17:00', gradient: 'linear-gradient(to bottom, #1e528e 0%,#728a7c 50%,#e9ce5d 100%)' },
  { start: '17:00', end: '17:30', gradient: 'linear-gradient(to bottom, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)' },
  { start: '17:30', end: '18:00', gradient: 'linear-gradient(to bottom, #163C52 0%,#4F4F47 30%,#C5752D 60%,#B7490F 80%, #2F1107 100%)' },
  { start: '18:00', end: '18:30', gradient: 'linear-gradient(to bottom, #071B26 0%,#071B26 30%,#8A3B12 80%,#240E03 100%)' },
  { start: '18:30', end: '19:00', gradient: 'linear-gradient(to bottom, #010A10 30%,#59230B 80%,#2F1107 100%)' },
  { start: '19:00', end: '19:30', gradient: 'linear-gradient(to bottom, #090401 50%,#4B1D06 100%)' },
  { start: '19:30', end: '20:00', gradient: 'linear-gradient(to bottom, #00000c 80%,#150800 100%)' },
  { start: '20:00', end: '20:30', gradient: 'linear-gradient(to bottom, #00000c 80%,#150800 100%)' }
];

function getCurrentSaying() {
  const greetings = [
    //this measn that the greeting will change depending on the time of day
    //for example, start: 12, end: 16, greeting: 'Good afternoon' means that from 12pm to 4pm the greeting will be 'Good afternoon'
    { start: 12, end: 16, greeting: 'Good afternoon' },
    { start: 17, end: 23, greeting: 'Good evening' },
    { start: 0, end: 12, greeting: 'Good morning' }
  ];

  for (const greeting of greetings) {
    if (currentHour >= greeting.start && currentHour <= greeting.end) {
      return greeting.greeting;
    }
  }
  return 'Hello';
}

function getCurrentBackground() {
  const currentTime = `${currentHour}:${currentMinute}`;
  for (const gradient of gradients) {
    if (currentTime >= gradient.start && currentTime <= gradient.end) {
      return gradient.gradient;
    }
  }
  return gradients[0].gradient;
}

function updateContent() {
  const indexElement = document.querySelector('#index');
  if (indexElement) {
    indexElement.innerHTML = getCurrentSaying();
  }
  document.querySelector('body').style.background = getCurrentBackground();
}

  updateContent();