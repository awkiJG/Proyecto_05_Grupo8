import Layout from './assets/pages/Layout.jsx';
import Home from './assets/pages/Home.jsx';
import Error from './assets/pages/Error.jsx';
import Games from './assets/pages/Games.jsx';
import AboutUs from './assets/pages/AboutUs.jsx';
import { Container} from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Container fluid="md">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/games" element={<Games/>}/>
            <Route path="/aboutUs" element={<AboutUs/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
    </Container>
  );
}

export default App;
