import {RouteComponentProps, withRouter} from "react-router";
import {IonItem, IonMenu, IonContent, IonMenuToggle, IonHeader, IonIcon, IonImg} from "@ionic/react";
import {pawSharp, homeSharp} from "ionicons/icons";
import React from "react";
import './Menu.css';
interface MenuProps extends RouteComponentProps {

}


const Menu: React.FC<MenuProps> = ({history}) => {

    return (
        <IonMenu contentId="main">

            <IonHeader className = "Header">
                 <IonImg style = {{height : 150}} src ={require('../../src/logo.png')} />
            </IonHeader>
            <IonContent>
                <IonMenuToggle>
                     <IonItem onClick={() => history.push('/')}>
                         <IonIcon icon={homeSharp} slot="start"/>
                         Accueil
                    </IonItem>
                    <IonItem onClick={() => history.push('/')}>
                        <IonIcon icon={pawSharp} slot="start"/>
                        Catégorie
                    </IonItem>
                </IonMenuToggle>

            </IonContent>
        </IonMenu>
    );


}

export default withRouter(Menu);