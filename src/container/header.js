import React from 'react'
import Header from '../component'

export default function HeaderContainer() {
  return (
    <Header>
        <Header.Frame>
            <Header.Logo>Vidya Sadan</Header.Logo>
            <Header.ButtonLink>Home</Header.ButtonLink>
            <Header.ButtonLink>Gallery</Header.ButtonLink>
            <Header.ButtonLink>About</Header.ButtonLink>
            <Header.ButtonLink>Contact</Header.ButtonLink>
            <Header.Login>Login</Header.Login>
            <Header.JoinUs>Join Us</Header.JoinUs>
        </Header.Frame>
    </Header>
  )
}
