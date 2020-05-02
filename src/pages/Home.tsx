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
import { ProductCard} from "../components/ProductCard";

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
                 <ProductCard/>
                <ProductCard/>
            </IonContent>
        </IonPage>
    );
};

export default Home;
