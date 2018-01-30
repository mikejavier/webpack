import _ from 'lodash';
import './style.css';
import image from './stevejobs.jpg';
import data from './data.xml';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myImage = new Image();
  myImage.src = image;
  element.appendChild(myImage);

  console.log(data);

  return element;
}

document.body.appendChild(component());