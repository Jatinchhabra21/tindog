import { dogs } from './data.js';

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  dogProfileHtml = function () {
    return `
		<img src="./images/badge-like.png" alt="like badge" class="badge" id="like-badge" />
		<img src="./images/badge-nope.png" alt="dislike badge" class="badge" id="dislike-badge" />
		<h3>${this.name}, ${this.age}</h3>
		<p>${this.bio}</p>
	`;
  };

  getDogProfileHtml = function () {
    const dogDetails = document.getElementById('dog-detail');
    dogDetails.style.background = `url("./${this.avatar}")`;
    dogDetails.style.backgroundSize = 'cover';
    return this.dogProfileHtml();
  };
}

export { Dog };
