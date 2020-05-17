import {IonCard, IonCardContent, IonCol, IonGrid, IonImg, IonRow} from "@ionic/react";
import React from "react";
import './ProductCard.css';
interface Props {
    price : number;
    name : string;
    image ? : string;
}
export const ProductCard: React.FC<Props> = (props:Props) => {
    const {price,name,image}=props;
    return (
        <IonCard className="Card">
            <IonGrid>
                <IonRow>
                    <IonCol size="4">
                        <IonImg
                            src= { require(`../../${image}`)}/>
                    </IonCol>
                    <IonCol size="8">
                        <IonCardContent>
                            <div className="ProductTypo">
                                {name}
                            </div>
                            <div>
                                <span style={{fontSize: 'large', color:'#eb445a'}}> {price} DH </span>
                            </div>
                        </IonCardContent>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
    )
}

