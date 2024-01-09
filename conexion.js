import mysql from 'mysql2/promise'


    let conexion = await mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '',
        database: 'estudiantes',
    });

    await conexion.connect();
    const [resutado] =  await conexion.query("SELECT * FROM estudiantes.estudiante"); //Muestra los datos de la tabla estudiante que se encuentran en la base de datos estudiantes
    console.log(resutado[0]);

    await conexion.query("INSERT INTO estudiantes.estudiante (student_Nombre,  student_Apellido, student_Grado) VALUES ('Carmen', 'Perez', 10)"); //Insertar datos en la tabla estudiante. 
    console.log(resutado);


    await conexion.end();
    


    