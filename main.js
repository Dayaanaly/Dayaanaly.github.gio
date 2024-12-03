var app = document.getElementById('app');
// Traer por su elemento por "app"

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Estudiante de ingeniería biomédica')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora de Fronted Jr.')
    .pauseFor(2500)
    // Numero de caracteres que se borrarán
    .deleteChars(11)
    .typeString('<strong>bio-proyectos!</strong>')
    .pauseFor(2500)
    .start();