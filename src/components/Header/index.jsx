import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { Container, Li, Menu } from './styles'
import { useState } from 'react'

function Header() {
    const [changeBackground, setChangeBackground] = useState(false)
    const { pathname } = useLocation()

    window.onscroll = () => {
        if (window.pageYOffset >= 150) {
            setChangeBackground(true)
        } else {
            setChangeBackground(false)
        }
    }

    return (
        <Container $changeBackground={changeBackground}>
            <div>
                <Link to='/'>
                    <img src={Logo} alt='logo-dev-movies' />
                </Link>
            </div>
            <Menu>
                <Li $isActive={pathname === '/'}>
                    <Link to='/'>Home</Link>
                </Li>
                <Li $isActive={pathname.includes('filmes')}>
                    <Link to='/filmes'>Filmes</Link>
                </Li>
                <Li $isActive={pathname.includes('series')}>
                    <Link to='/series'>Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header