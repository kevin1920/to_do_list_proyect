Hola Nico, este es mi proyecto de to do list colaborativa.

## Persistencia de los datos
En este proyecto utilice el local storage para tener persistencia de los datos ya que no he construido un API
que se conecte con alguna base de datos. Cuando inicia la aplicacion se abre la pagina de login y automaticamente
se carga en el local storage una lista de usuarios que estan quemados en el archivo config.js, ahi podras ver el
username y la contraseña de los usuarios que en total hay 3 quemados, puedes agregar mas si quieres en config.js
y cargar de nuevo la pagina de login para que estos se carguen en el local storage. Por cuestiones de tiempo no 
pude agregar alerts para cuando se escriba una contraseña y/o username incorrecto mostrar el mensaje de error. :c

## Creacion de proyectos
Cuando un usuario hace login este es redirigido a la pagina de projects donde puede crear los proyectos que quiera,
cuando el usuario va a crear un nuevo proyecto se abre un modal en el cual se debe poner el nombre del proyecto, una
descripcion y agregar si quiere otros usuarios a su proyecto formando asi un grupo de trabajo, se agregan uno por uno
y se debe de poner el username de la persona que se quiere agregar (este usuario debe de existir en la lista de usuarios
que se creo en el login). Por ultimo cuando se crea el proyecto se creara una card con el nombre del proyecto y su descripcion,
cuando un usuario entre a ver sus proyectos ahi apareceran los que ha creado o a los que lo han agregado.

## Tablero de tareas
Cuando un usuario entra a alguno de los proyecto que ha creado o lo han agregado este sera redirigido a la pagina de board donde
hay una lista con las tareas que el usuario o sus compañeros de grupo han creado, el grupo de usuarios puede crear nuevas tareas,
modificar estas tareas, asignar tareas a un compañero del grupo, marcarlas como completadas y eliminar tareas. Cuando se quiera 
asignar una tarea a un compañero se abrira una lista con los participantes del grupo y se podra escoger el usuario al cual se la
asignara la tarea. Por ultimo cuando se quiera cerrar sesion esta el boton Sign out para salir e ir al login de nuevo, si se quiere navegar entre projects y board estan las rutas definidas las cuales son /projects y /board.