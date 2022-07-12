import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://pedrolazari.notion.site/Pedro-Lazari-ace041e9eb374fd699c2f1a516655829"> @pedrolazari</a>
                </p>
            </div>
        </header>
    )
}

export default Header