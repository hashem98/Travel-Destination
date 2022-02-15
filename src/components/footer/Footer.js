
import "./Footer.css"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
function Footer(props) {
    return (

        <>
        <div className="footer">
                       <nav className="nav">
            <ul>
                <li> <a  href={"www.fb.com"}>fb</a> </li>
                <li><a  href="www.instagram.com">instagram</a></li>
                <li><a  href="www.whatsapp.com">whatsapp</a></li>

            </ul>
        </nav>
        <h2 className="author">Hashem</h2>

        </div>

        </>

    );
}

export default Footer;