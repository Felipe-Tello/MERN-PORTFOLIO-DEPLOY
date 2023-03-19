const Footer = () =>{
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", textAlign:"center", backgroundColor:"#303134", height:"auto", color:"white"}}>
            <h3 style={{padding:"1% 0"}}>Felipe Ignacio Tello Astudillo</h3>
            <div style={{display:"flex", justifyContent:"space-around", width:"30vw", padding:""}}>
                <div style={{backgroundColor:"white", borderRadius:"30px", border:"2px solid white"}}>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Felipe-Tello"><img style={{borderRadius:"30px"}} src="https://www.svgrepo.com/show/473620/github.svg" width={60} height={60} alt="" /></a>
                </div>
                <div style={{backgroundColor:"white", borderRadius:"30px", border:"2px solid white"}}>
                    <a target="_blank" rel="noreferrer" href="mailto: felipei9ta@gmail.com"><img src="https://www.svgrepo.com/show/488920/email.svg" width={60} height={60} alt="" /></a>
                </div>
                <div style={{backgroundColor:"white", borderRadius:"30px", border:"2px solid white"}}>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/felipe-tello-astudillo/"><img src="https://www.svgrepo.com/show/494278/linkedin-round.svg" width={60} height={60} alt="" /></a>
                </div>
            </div>
            <h4 style={{paddingTop:"1%"}}>ultima actualizacion: 17/03/23</h4>
        </div>
    )
}

export default Footer;