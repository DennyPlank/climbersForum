import './App.css';
import { Header, Segment, } from "semantic-ui-react"
import styled from "styled-components"
import Home from './Home';
import { Route, Routes } from 'react-router';
import Navbar from './Navbar';
import Members from './Members';

function App() {
  return (
    <AppContainer>
      <Header as={HeaderText}>
        <Navbar />
        <Routes>
        <Route path = "/members" element = {<Members />}/>
        <Route path = "/home" element = {<Home />}/>
        </Routes>
      </Header>
    </AppContainer>
  );
}

const HeaderText = styled.h1`
color:  !important;
text-align: center;
`
const AppContainer = styled.div`
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,0.7586206896551724) 0%, rgba(121,9,63,0.40919540229885054) 50%, rgba(0,95,255,0.4275862068965517) 100%);
  min-height: 100vh;
  padding: 5vh;
`

export default App;
