const PostmanPokemon = () => {
    return (
        <div>
            <div className="Title">
                <h2>Postman + Pokemon <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello/Coding-Dojo-MERN/blob/main/3-%20ExpressJS/1-%20Express/1-%20Postman%20%2B%20Pokemon/PostmanPokemon.txt"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={50} height={50} alt="GitHub logo"/></a></h2>
                <p>Usar Postman con la API de Pokémon para realizar 5 solicitudes GET diferentes para recuperar 5 Pokémon diferentes de tu elección.</p>
            </div>
            <div className="Disclaimer">
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className="Core no-code" style={{flexDirection:"column", alignItems:"center"}}>
                    <div style={{width:"100%", height:"40vh"}}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lOT6Ph8NDbg" title="Postman + Pokemon" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div style={{marginTop:"5%"}}>
                        <h4>Routes Used</h4>
                        <ul>
                            <li>GET: <a rel="noreferrer" target="_blank" href="https://pokeapi.co/api/v2/pokemon/1/">https://pokeapi.co/api/v2/pokemon/1/</a></li>
                            <li>GET: <a rel="noreferrer" target="_blank" href="https://pokeapi.co/api/v2/pokemon/2/">https://pokeapi.co/api/v2/pokemon/2/</a></li>
                            <li>GET: <a rel="noreferrer" target="_blank" href="https://pokeapi.co/api/v2/pokemon/3/">https://pokeapi.co/api/v2/pokemon/3/</a></li>
                            <li>GET: <a rel="noreferrer" target="_blank" href="https://pokeapi.co/api/v2/pokemon/4/">https://pokeapi.co/api/v2/pokemon/4/</a></li>
                            <li>GET: <a rel="noreferrer" target="_blank" href="https://pokeapi.co/api/v2/pokemon/5/">https://pokeapi.co/api/v2/pokemon/5/</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Objectives">
                <h3>Lista de Objetivos</h3>
                <ul>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Haz 5 solicitudes GET diferentes para recuperar 5 Pokémon diferentes</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={true} className="Check" readOnly={true} name="" id="" />
                        <label htmlFor="">Carga un archivo de texto con las solicitudes que realizaste o capturas de pantalla de los resultados</label>
                    </li>
                </ul>
            </div>
            <div className="Github">
            </div>
        </div>
    );
}
 
export default PostmanPokemon;