import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ModuleStore from "../../components/MobileStore/ModuleStore";
import Preview from "../../components/Preview/Preview";

function LandingPage() {
    return (
        <>
            <Header></Header>
            <Preview ></Preview>
            <Category></Category>
            <ModuleStore></ModuleStore>
            <Footer></Footer>
        </>

    )


}

export default LandingPage;