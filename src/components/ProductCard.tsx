import {IonCard, IonCardContent, IonCol, IonGrid, IonImg, IonRow} from "@ionic/react";
import React from "react";
import './ProductCard.css';

export const ProductCard: React.FC = () => {
    return (
        <IonCard className="Card">
            <IonGrid>
                <IonRow>
                    <IonCol size="4">
                        <IonImg
                            src="https://www.houseofkids.ma/wp-content/uploads/2019/06/TABLE-D-ACTIVITES-GUCLU-2993-300x300.jpg"/>
                    </IonCol>
                    <IonCol size="8">
                        <IonCardContent>
                            <div className="ProductTypo">
                                TABLE D’ACTIVITES GUCLU 2993
                            </div>
                            <div>
                                <span style={{fontSize: 'large', color:'#eb445a'}}>  255 DH </span>
                            </div>
                        </IonCardContent>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    )
}

