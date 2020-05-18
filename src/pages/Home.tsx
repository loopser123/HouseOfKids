import {
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React from 'react';
import './Home.css';
import AdSlider from "../components/AdSlider";
import ConnectedProductList from "../components/ConnectedProductList";



const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="danger">
                    <IonMenuButton slot="start"/>
                    <IonTitle className="Title"> House of Kids </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <AdSlider/>
                <ConnectedProductList products={[]}/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
