import './footer.scss'

export const Footer = () => {
    return (
        <footer className='footer container'>
            <div className='footer_box'>
                <p className='footer_rights'>© 2024 Dmytro Ivanenko</p>
                <div className='footer_links'>
                    <a href='#' className='footer_tg'></a>
                    <a href='#' className='footer_insta'></a>
                    <a href='#' className='footer_github'></a>
                </div>
            </div>
        </footer>
    )
}