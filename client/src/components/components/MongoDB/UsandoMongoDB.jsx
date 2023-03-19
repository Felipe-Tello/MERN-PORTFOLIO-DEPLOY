const UsandoMongoDB = () => {
    return (
        <div>
            <div className="Title">
                <h2>Usando MongoDB <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/blob/main/4-%20MongoDB/1-%20MongoDB/1-%20Using%20MongoDB/UsingMongoDB.txt"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Aprender a crear bases de datos, crear colecciones y hacer consultas a traves del shell de MongoDB</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code">
                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/tJYF-z9IR-s" title="Usando MongoDB" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Cree una base de datos llamada 'my_first_db'.</label><br />
                        <p><strong>Comando: </strong>use my_first_db</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crear colección de estudiantes.</label>
                        <p><span style={{color: "green"}}>Al llamar la base de datos punto coleccion que quiero crear(my_first_db.students+query) se creara de manera automatica la coleccion</span></p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Cada documento que inserte en esta colección debe tener el siguiente formato:(&#123;name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: &#123;month: NUMBER, day: NUMBER, year: NUMBER&#125;&#125;)</label><br />
                        <p><span style={{color: "green"}}>dice que tipo de formato debes utilizar para crear al estudiante</span></p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Crea 5 estudiantes con la información adecuada.</label>
                        <p><strong>Comando: </strong>db.student.insert(&#123;name: "Ada Lovelace", home_state:"California", lucky_number: 205 birthday: &#123;month: 12, day: 10, year: 1815&#125;&#125;)</p>
                        <p><strong>Comando: </strong>db.student.insert(&#123;name: "Adam Smith", home_state:"Washington", lucky_number: 35 birthday: &#123;month: 01, day: 24, year: 2001&#125;&#125;)</p>
                        <p><strong>Comando: </strong>db.student.insert(&#123;name: "Florence White", home_state:"Texas", lucky_number: 7 birthday: &#123;month: 07, day: 07, year: 1997&#125;&#125;)</p>
                        <p><strong>Comando: </strong>db.student.insert(&#123;name: "Michael Yong", home_state:"Ohio", lucky_number: 2 birthday: &#123;month: 11, day: 02, year: 1985&#125;&#125;)</p>
                        <p><strong>Comando: </strong>db.student.insert(&#123;name: "Rachel Clark", home_state:"Alaska", lucky_number: 5 birthday: &#123;month: 05, day: 27, year: 1995&#125;&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Consigue todos los estudiantes.</label>
                        <p><strong>Comando: </strong>db.student.find()</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Recupera a todos los estudiantes que son de California (San Jose Dojo) o Washington (Seattle Dojo).</label>
                        <p><strong>Comando: </strong>db.student.find(&#123;$or:[&#123;home_state:"California"&#125;,&#123;home_state:"Washington"&#125;]&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Obten todos los estudiantes cuyo número de la suerte sea mayor que 3</label>
                        <p><strong>Comando: </strong>db.student.find(&#123;lucky_number: &#123;$gt: 3&#125;&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Obten todos los estudiantes cuyo número de la suerte sea menor o igual a 10</label>
                        <p><strong>Comando: </strong>db.student.find(&#123;lucky_number: &#123;$lte: 10&#125;&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Obten todos los estudiantes cuyo número de la suerte esté entre 1 y 9 (inclusivo)</label>
                        <p><strong>Comando: </strong>db.student.find(&#123; lucky_number: &#123; $gt: 1, $lte: 9 &#125;&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Agrega un campo a cada colección de estudiantes llamado 'intereses' que es un ARRAY. Debe contener las siguientes entradas: 'codificación', 'brunch', 'MongoDB'. Haz esto en UNA operación.</label>
                        <p><strong>Comando: </strong>db.student.updateMany(&#123;&#125;,&#123;$set: &#123;interests: ["codificación", "brunch", "MongoDB"]&#125;&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Agrega algunos intereses únicos para cada estudiante en particular en cada una de sus matrices de intereses.</label>
                        <p><strong>Comando: </strong>db.student.updateMany(&#123;&#125;,&#123;$push: &#123;interests: &#123;$each: ["Java", "React"]&#125;&#125;&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Agrega los 'impuestos' de intereses a la matriz de intereses de alguien.</label>
                        <p><strong>Comando: </strong>db.student.updateOne(&#123; name: "Adam Smith" &#125;,&#123; $set: &#123; interests: ["Coding", "Brunch", "MongoDB", "Java", "React", "Taxes"] &#125;&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Elimina los intereses de 'impuestos' que acaba de agregar.</label>
                        <p><strong>Comando: </strong>db.student.updateOne(&#123; name: "Adam Smith" &#125;,&#123; $pull: &#123; interests: "Taxes" &#125;&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Eliminar a todos los estudiantes que son de California.</label>
                        <p><strong>Comando: </strong>db.student.deleteMany(&#123;home_state: "California"&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Eliminar a un alumno por su nombre.</label>
                        <p><strong>Comando: </strong>db.student.deleteOne(&#123;name: "Michael Yong"&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Retira a un estudiante cuyo número de la suerte sea mayor que 5 (SOLO UNO)</label>
                        <p><strong>Comando: </strong>db.student.deleteOne(&#123;lucky_number: &#123;$gt: 5&#125;&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Agrega un campo a cada colección de estudiantes llamado 'number_of_belts' y configúralo en 0.</label>
                        <p><strong>Comando: </strong>db.student.updateMany(&#123;&#125;, &#123;$set: &#123; number_of_belts: 0 &#125;&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Incrementa este campo en 1 para todos los estudiantes en Washington (Seattle Dojo).</label>
                        <p><strong>Comando: </strong>db.student.updateMany(&#123;home_state:"Washington"&#125;, &#123;$inc:&#123; number_of_belts: 1 &#125;&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Cambia el nombre del campo 'number_of_belts' a 'belts_earned'</label>
                        <p><strong>Comando: </strong>db.student.updateMany(&#123; $rename: &#123; "number_of_belts":"belts_earned" &#125;&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Elimina el campo 'lucky_number'.</label>
                        <p><strong>Comando: </strong>db.student.updateMany(&#123;&#125;, &#123;$unset: &#123; lucky_number: "" &#125;&#125;)</p>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Agrega un campo 'updated_on' y establece el valor como la fecha actual.</label>
                        <p><strong>Comando: </strong>db.students.updateMany(&#123;&#125;, &#123;$set: &#123;updated_on: new Date()&#125;&#125;)</p>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
};
 
export default UsandoMongoDB;