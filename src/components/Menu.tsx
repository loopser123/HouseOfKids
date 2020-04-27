import {RouteComponentProps, withRouter} from "react-router";
import {IonItem, IonMenu, IonContent, IonMenuToggle} from "@ionic/react";
import React from "react";

interface MenuProps extends RouteComponentProps {

}


const Menu:React.FC<MenuProps> = ({history})=>{

    return (
        <IonMenu contentId="main">
            <IonContent>
                <IonMenuToggle>
                    <IonItem onClick = {()=>history.push('/')}>
                        Accueil
                    </IonItem>
                </IonMenuToggle>

            </IonContent>
        </IonMenu>


    );


}

export default withRouter(Menu);