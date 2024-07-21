import Wrapper from "./components/wrapper";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import MobileHeader from "./components/MobileHeaer/MobileHeader.tsx";
import Cookies from "./components/Cookies/Cookies.tsx";
import {FloatingButton} from "./components/Buttons/FloatingButton.tsx";
import ContactsPage from "./components/Contacts/ContactsPage.tsx";
import PoliciesPage from "./components/Policies/PoliciesPage.tsx";

function App() {
    return (
        <Wrapper>
            <Cookies/>
            <MobileHeader/>
            <FloatingButton/>
            <Header/>
            <Routes>
                <Route path='/vite-gh-pages/' element={<Home/>}/>
                <Route path='/vite-gh-pages/contacts' element={<ContactsPage/>}/>
                <Route path='/vite-gh-pages/policies' element={<PoliciesPage/>}/>
            </Routes>
            <Footer/>
        </Wrapper>
    )
}

export default App
