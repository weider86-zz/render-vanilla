// Data scope
const channels = [
  {name: 'DevSoltinho', likes: 0},
  {name: 'Alura', likes: 0},
  {name: 'FrontInSampa', likes: 0},
];

//
function handleLike(channelName) {
  channels.forEach((currentChannel) => {
    if (channelName === currentChannel.name) {
      currentChannel.likes = currentChannel.likes + 1;
    }
  });

  render();
}

//render logic scope
const buttonTemplate = function (channel) {
  return `
    <button class="like-button" onclick="handleLike('${channel.name}')">
      <span class="owner">${channel.name}</span>
      <span class="like-icon">♥</span>
      <span class="like-counter">${channel.likes}</span>
    </button>
  `;

  render();
};

function render() {
  const $view = document.querySelector('.view');
  $view.innerHTML = channels
    .map((channel) => {
      return buttonTemplate(channel);
    })
    .join('');
}

render();
