import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      Login
    </Container>
  )
}

export default Login

const Container = styled.div`
    position:relative;
    height: calc(100vh - 70px);

    &:before{
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        content:"";
        background-image: url("/images/login-background.jpg");
        background-position:top;
        background-size:cover;
    }

`