export function leftOnAnimation() {
  document.getElementById("Text-left").style.marginLeft = '150px';
  document.getElementById("Text-left").style.transitionDuration = '1s';
  document.getElementById("Left").style.width = '60%';
  document.getElementById("Left").style.transitionDuration = '1s';
  document.getElementById("Right").style.width = '40%';
  document.getElementById("Right").style.transitionDuration = '1s';
  document.getElementById("Linkedin").style.transitionDuration = '1s';
  document.getElementById("Linkedin").style.width = '58%';
  document.getElementById("Left").style.zIndex = '3';
  document.getElementById("Right").style.zIndex = '1';
  document.getElementById("Github").style.marginLeft = '-100px';
  document.getElementById("Github").style.transitionDuration = '1s';
  document.getElementById("Github").style.opacity = '0';
  document.getElementById("Linkedin").style.opacity = '0';
}
export function leftOffAnimation() {
  document.getElementById("Text-left").style.marginLeft = '60px';
  document.getElementById("Text-left").style.transitionDuration = '1s';
  document.getElementById("Left").style.width = '50%';
  document.getElementById("Left").style.transitionDuration = '1s';
  document.getElementById("Right").style.width = '50%';
  document.getElementById("Right").style.transitionDuration = '1s';
  document.getElementById("Linkedin").style.transitionDuration = '1s';
  document.getElementById("Linkedin").style.width = '50%';
  document.getElementById("Github").style.marginLeft = '0px';
  document.getElementById("Github").style.transitionDuration = '1s';
  document.getElementById("Left").style.zIndex = '1';
  document.getElementById("Right").style.zIndex = '1';
  document.getElementById("Github").style.opacity = '1';
  document.getElementById("Linkedin").style.opacity = '1';
}

export function rightOnAnimation() {
  document.getElementById("Text-right").style.marginLeft = '80px';
  document.getElementById("Text-right").style.transitionDuration = '1s';
  document.getElementById("Right").style.width = '60%';
  document.getElementById("Right").style.transitionDuration = '1s';
  document.getElementById("Left").style.width = '40%';
  document.getElementById("Left").style.transitionDuration = '1s';
  document.getElementById("Left").style.zIndex = '1';
  document.getElementById("Right").style.zIndex = '3';
  document.getElementById("Github").style.opacity = '0';
  document.getElementById("Github").style.transitionDuration = '1s';
  document.getElementById("Linkedin").style.opacity = '0';
  document.getElementById("Linkedin").style.transitionDuration = '1s';
}
export function rightOffAnimation() {
  document.getElementById("Text-right").style.marginLeft = '60px';
  document.getElementById("Text-right").style.transitionDuration = '1s';
  document.getElementById("Right").style.width = '50%';
  document.getElementById("Right").style.transitionDuration = '1s';
  document.getElementById("Left").style.width = '50%';
  document.getElementById("Left").style.transitionDuration = '1s';
  document.getElementById("Left").style.zIndex = '1';
  document.getElementById("Right").style.zIndex = '1';
  document.getElementById("Github").style.opacity = '1';
  document.getElementById("Linkedin").style.opacity = '1';
}