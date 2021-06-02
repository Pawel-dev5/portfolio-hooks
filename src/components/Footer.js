import { ContactForm } from './ContactForm';
import Scroll from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'

export const Footer = (data) => {
    const ScrollLink = Scroll.Link;

    const footerData = data.data;
    if (footerData) {
        return (
            <div className="container">
                <footer>
                    <div>
                        <ContactForm data={footerData} />
                        <ul>
                            {footerData.main.social.map(s => {
                                return (
                                    <li>
                                        <a href={s.url}>
                                            {/* <FontAwesomeIcon className="fab fa-github"/> */}

                                            {s.name}
                                            {/* </i> */}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div id="go-top">
                        <ScrollLink
                            className="smoothscroll"
                            smooth={true}
                            duration={500}
                            to="home"
                        >
                            <FontAwesomeIcon className="icon-up-open" icon={faChevronUp} />
                            <FontAwesomeIcon className="icon-up-open" icon={faGithub} />
                        </ScrollLink>
                    </div>
                </footer>
            </div>
        )
    } else return (
        <div className="container">
          <div className="loader"></div>
        </div>
      );
}