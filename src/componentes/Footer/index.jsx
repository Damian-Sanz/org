import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.facebook.com/damian.sanz.144">
                <img src="/img/facebook.png" alt="Facebokk" />
            </a>
            <a href="https://www.tiktok.com/@deviancodes">
                <img src="/img/twitter.png" alt="Tiktok" />
            </a>
            <a href="https://www.instagram.com/damian.snz/?hl=es-es">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <img src="/img/logo.png" alt="org" />
        <strong>Desarrollado por Damian.</strong>
    </footer>
}

export default Footer