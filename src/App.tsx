import Wrapper from "./components/wrapper";
import Header from "./components/Header/Header.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import MobileHeader from "./components/MobileHeaer/MobileHeader.tsx";
import {FloatingButton} from "./components/Buttons/FloatingButton.tsx";
import ProductsPage from "./pages/ProductsPage";
import ProductInfo from "./pages/ProductInfo";

function App() {
    return (
        <Wrapper>
            <MobileHeader/>
            <FloatingButton/>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<ProductsPage/>}/>
                <Route path='/product/:id' element={<ProductInfo/>}/>
            </Routes>
        </Wrapper>
    )
}

export default App
