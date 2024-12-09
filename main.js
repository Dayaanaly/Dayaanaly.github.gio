var app = document.getElementById('app');
// Traer por su elemento por "app"

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Estudiante de ingeniería biomédica')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Desarrolladora de Frontend Jr.')
    .pauseFor(2500)
    // Numero de caracteres que se borrarán
    .deleteChars(12)
    .typeString('<strong>bio-proyectos!</strong>')
    .pauseFor(2500)
    .start();