export function onDarkTheme() {
  document.getElementById("Left").style.backgroundColor = '#20232A';
  document.getElementById("Text-left").style.color = '#ECECEC';
  document.getElementById("Text-right").style.color = '#ECECEC';
  document.getElementById("Left").style.transitionDuration = '1s';
  document.getElementById("Dark-on").style.display = 'none';
  document.getElementById("Dark-off").style.display = 'block'; 
  document.getElementById("Linkedin-icon").style.display = 'none'; 
  document.getElementById("Linkedin-icon-dark").style.display = 'block';
  document.getElementById("More-left").style.display = 'none'; 
  document.getElementById("More-left-dark").style.display = 'block';
}

export function offDarkTheme() {
  document.getElementById("Left").style.backgroundColor = '#FFFFFF';
  document.getElementById("Text-left").style.color = '#282c34';
  document.getElementById("Left").style.transitionDuration = '1s';
  document.getElementById("Dark-on").style.display = 'block';
  document.getElementById("Dark-off").style.display = 'none';
  document.getElementById("Linkedin-icon").style.display = 'block'; 
  document.getElementById("Linkedin-icon-dark").style.display = 'none';
  document.getElementById("More-left").style.display = 'block'; 
  document.getElementById("More-left-dark").style.display = 'none';
}