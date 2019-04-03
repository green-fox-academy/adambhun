'use strict';

//FIXME:ADAMMAN48 KÓDJA

/* Here is an image inspector, but the buttons are not implemented yet, that will
be your task!
  - the nav buttons (up, down, left, right) move the background by 10px
  - the zoom buttons increase/decrease the image by 20%
  - attach only two event listeners to the nav element
  - one for navigation
  - one for zooming */
var navBar = document.querySelector('nav');
var currentSize = 100;
var horizontalPos = 0;
var verticalPos = 0;
navBar.addEventListener('click', function (event) {
    var currentAction = event.target.dataset.action;
    var currentDirection = event.target.dataset.direction;
    var imgViewer = document.querySelector('.img-inspector');
    currentAction === 'zoom' && currentDirection === 'in' ?
        imgViewer.style.backgroundSize = (currentSize /= 0.8) + "%" :
        currentAction === 'zoom' && currentDirection === 'out' && currentSize > 100 ?
            imgViewer.style.backgroundSize = (currentSize *= 0.8) + "%" :
            null;
});
navBar.addEventListener('click', function (event) {
    var currentAction = event.target.dataset.action;
    var currentDirection = event.target.dataset.direction;
    var imgViewer = document.querySelector('.img-inspector');
    currentAction === 'move' && currentDirection === 'up' ?
        imgViewer.style.backgroundPosition = horizontalPos + "px " + (verticalPos -= 30) + "px" :
        currentAction === 'move' && currentDirection === 'down' ?
            imgViewer.style.backgroundPosition = horizontalPos + "px " + (verticalPos += 30) + "px" :
            currentAction === 'move' && currentDirection === 'left' ?
                imgViewer.style.backgroundPosition = (horizontalPos -= 30) + "px " + verticalPos + "px" :
                currentAction === 'move' && currentDirection === 'right' ?
                    imgViewer.style.backgroundPosition = (horizontalPos += 30) + "px " + verticalPos + "px" :
                    null;
});