import {FC, useState} from "react";
import MoscowMap from "../../components/moscowMap/moscowMap";
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/header/header";

const HomePage: FC = () => {
    const [region, setRegion] = useState(''); 
    return (
        <>
            <Header/>
            <Sidebar region={region}/>
            <MoscowMap region={region} setRegion={setRegion}/>
       </>
    )
}

export default HomePage;