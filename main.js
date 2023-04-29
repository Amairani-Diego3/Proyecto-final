let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Me llama la atención las tecnologías y cada día aprendo algo nuevo.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
