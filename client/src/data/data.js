export const content = [
    { value: 'Home', section:{}},
    { value: 'Javascript Fundamentals', section:{
        "Fundamentals":["Hoist de JavaScript", "Predecir la desestructuración", "Convertir a flecha", "Cuánto tiempo tomó", "Ordenamiento Rápido"],
        "OOP":["Ninja", "Super Ninja", "Es Hora de Duelo"],
        "Functional Programming":["Object Master"]}},
    { value: 'ReactJS', section:{
        "Intro to react":["Primer React","Primer React con JXS"],
        "Class components":["Apoyalo", "Poniendo todo junto", "React Blocks"],
        "Functional components":["Gran inversión", "Formulario con Hooks", "Más formularios", "Validación de formulario", "Generador de caja", "Pestañas", "Lista de quehaceres", "Contexto Navbar"], 
        "APIs":["Lanzar Monedas", "Pokemon API", "Axios Pokemon API"],
        "React routing":["Práctica de enrutamiento", "Luke APIwalker"]}},
    { value: 'ExpressJS', section:{
        "Express":["Postman + Pokemon", "API falsa"]}},
    { value: 'MongoDB', section:{
        "MongoDB":["Usando MongoDB"],
        "Mongoose":["API de bromas"]}},
    { value: 'Full-Stack MERN', section:{
        "Full Stack MERN":["Administrador de Producto Parte 1", "Administrador de Producto Parte 2", "Administrador de Producto Parte 3"],
        "Advanced MERN":["Refactorizar, reutilizar, reciclar","Autores", "Administrador de equipo"]}},
    { value: 'MERN Auth', section:{
        "Authentication":["Autenticación simple","Autores con Bcrypt JWT"]}},
    { value: 'SocketIO', section:{
        "SocketIO":["Creando el Handshake", "Chat App"]}},
    { value: 'MERN Deployment', section:{
        "Deployment":["Amazon Web Services", "Microsoft Azure", "Google Cloud Plataform", "Oracle Cloud"]}}
];

export const priority = [
    { value: 'mandatory', section:["Predecir la desestructuración","Convertir a flecha","Super Ninja","Primer React con JXS","Poniendo todo junto","Más formularios","Lista de quehaceres","Axios Pokemon API","Luke APIwalker","API falsa","API de bromas","Administrador de Producto Parte 2","Administrador de Producto Parte 3","Autores"]},
    { value: 'practice', section:["Hoist de JavaScript","Ninja","Primer React","Apoyalo","Gran inversión","Formulario con Hooks","Generador de caja","Pestañas","Pokemon API","Práctica de enrutamiento","Postman + Pokemon","Usando MongoDB","Administrador de Producto Parte 1","Administrador de equipo","Creando el Handshake","Chat App"]},
    { value: 'optional', section:["Cuánto tiempo tomó","Ordenamiento Rápido","Es Hora de Duelo","Object Master","React Blocks","Validación de formulario","Contexto Navbar","Lanzar Monedas","Refactorizar, reutilizar, reciclar"]},
    { value: 'original', section:["Autenticación simple","Autores con Bcrypt JWT","Amazon Web Services", "Microsoft Azure", "Google Cloud Plataform", "Oracle Cloud"]}
];

export const mandatory = ["Predecir la desestructuración","Convertir a flecha","Super Ninja","Primer React con JXS","Poniendo todo junto","Más formularios","Lista de quehaceres","Axios Pokemon API","Luke APIwalker","API falsa","API de bromas","Administrador de Producto Parte 2","Administrador de Producto Parte 3","Autores"];
export const practice =["Hoist de JavaScript","Ninja","Primer React","Apoyalo","Gran inversión","Formulario con Hooks","Generador de caja","Pestañas","Pokemon API","Práctica de enrutamiento","Postman + Pokemon","Usando MongoDB","Administrador de Producto Parte 1","Administrador de equipo","Creando el Handshake","Chat App"];
export const optional = ["Cuánto tiempo tomó","Ordenamiento Rápido","Es Hora de Duelo","Object Master","React Blocks","Validación de formulario","Contexto Navbar","Lanzar Monedas","Refactorizar, reutilizar, reciclar"];
export const original = ["Autenticación simple","Autores con Bcrypt JWT","Amazon Web Services", "Microsoft Azure", "Google Cloud Plataform", "Oracle Cloud"];





















// export const sections = [
//     { value: 'Javascript Fundamentals', section:["Hoist de JavaScript", "Predecir la desestructuración", "Convertir a flecha", "Cuánto tiempo tomó (Opcional)", "Ordenamiento Rápido (Opcional)", "Ninja", "Super Ninja", "Es Hora de Duelo", "Object Master"]},
//     { value: 'ReactJS', section:["Primer React","Primer React con JXS", "Apoyalo", "Poniendo todo junto", "React Blocks", "Gran inversión", "Formulario con Hooks", "Más formularios", "Validación de formulario", "Generador de caja", "Pestañas", "Lista de quehaceres", "Contexto Navbar", "Lanzar Monedas", "Pokemon API", "Axios Pokemon API", "Práctica de enrutamiento", "Luke APIwalker"]},
//     { value: 'ExpressJS', section:["Postman + Pokemon", "API falsa"]},
//     { value: 'MongoDB', section:["Usando MongoDB", "API de bromas"]},
//     { value: 'Full-Stack MERN', section:["Administrador de Producto (Parte I)", "Administrador de Producto (Parte II)", "Administrador de Producto (Parte III)","Refactorizar, reutilizar, reciclar","Autores", "Administrador de equipo"]},
//     { value: 'MERN Auth', section:[]},
//     { value: 'Socket.io', section:["Creando el Handshake", "Chat App"]},
//     { value: 'MERN Deployment', section:[]}
// ];
// export const sectionsNav = [
//     { value: 'Javascript Fundamentals', section:["Fundamentals", "OOP", "Functional programming"]},
//     { value: 'ReactJS', section:["Intro to React","Class components","Functional components","APIs","React routing"]},
//     { value: 'ExpressJS', section:["Express"]},
//     { value: 'MongoDB', section:["MongoDB","Mongoose"]},
//     { value: 'Full-Stack MERN', section:["Full stack MERN","Advanced MERN"]},
//     { value: 'MERN Auth', section:[]},
//     { value: 'Socketio', section:[]},
//     { value: 'MERN Deployment', section:[]}
// ];
// export const sectionsSideNav = [
//     { value: 'Fundamentals', core:["Hoist de JavaScript", "Predecir la desestructuracion", "Convertir a flecha", "Cuanto tiempo tomo", "Ordenamiento Rapido"]},
//     { value: 'OOP', core:["Ninja", "Super Ninja", "Es Hora de Duelo"]},
//     { value: 'Functional programming', core:["Object Master"]},

//     { value: 'Intro to React', core:["Primer React","Primer React con JXS"]},
//     { value: 'Class components', core:["Apoyalo", "Poniendo todo junto", "React Blocks"]},
//     { value: 'Functional components', core:["Gran inversion", "Formulario con Hooks", "Mas formularios", "Validacion de formulario", "Generador de caja", "Pestañas", "Lista de quehaceres", "Contexto Navbar"]},
//     { value: 'APIs', core:["Lanzar Monedas", "Pokemon API", "Axios Pokemon API"]},
//     { value: 'React routing', core:["Practica de enrutamiento", "Luke APIwalker"]},

//     { value: 'Express', core:["Postman + Pokemon", "API falsa"]},

//     { value: 'MongoDB', core:["Usando MongoDB"]},
//     { value: 'Mongoose', core:["API de bromas"]},

//     { value: 'Full stack MERN', core:["Administrador de Producto Parte 1", "Administrador de Producto Parte 2", "Administrador de Producto Parte 3"]},
//     { value: 'Advanced MERN', core:["Refactorizar-reutilizar-reciclar","Autores", "Administrador de equipo"]},
//     { value: 'MERN Auth', core:[]},
//     { value: 'Socketio', core:["Creando el Handshake", "Chat App"]},
//     { value: 'MERN Deployment', core:[]}
    
// ];

// export const sections5 = [
//     { value: 'Javascript Fundamentals', section:{
//         Fundamentals:["Hoist de JavaScript", "Predecir la desestructuración", "Convertir a flecha", "Cuánto tiempo tomó (Opcional)", "Ordenamiento Rápido (Opcional)"],
//         OOP:["Ninja", "Super Ninja", "Es Hora de Duelo"],
//         Functional_Programming:["Object Master"]}}
// ]
// export const sections6 = [
//     { value: 'Javascript Fundamentals', section:{
//         Fundamentals:["Hoist de JavaScript", "Predecir la desestructuración", "Convertir a flecha", "Cuánto tiempo tomó (Opcional)", "Ordenamiento Rápido (Opcional)"],
//         OOP:["Ninja", "Super Ninja", "Es Hora de Duelo"],
//         Functional_Programming:["Object Master"]}}
// ]