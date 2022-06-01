/// Footer Kasa ///

import LOGOWhite from '../medias/LOGOWhite.svg'

function Footer() {
    return (<footer className='kasa-footer'>
            <figure>
                <img src={LOGOWhite} className='kasa-logo-footer' />
            </figure>
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>)
}

export default Footer