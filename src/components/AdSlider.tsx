import React from 'react';
import {IonSlides, IonSlide, IonContent, IonImg} from '@ionic/react';

// Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
    initialSlide: 1,
    speed: 400
};

export const AdSlider: React.FC = () => (
    <IonContent>
        <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
                <IonImg  src = {'https://www.w3schools.com/howto/img_nature_wide.jpg'} />
            </IonSlide>
            <IonSlide>
                <IonImg  src = {'https://www.w3schools.com/howto/img_snow_wide.jpg'} />
            </IonSlide>
            <IonSlide>
                <IonImg  src = {'https://www.w3schools.com/howto/img_lights_wide.jpg'} />
            </IonSlide>
        </IonSlides>
    </IonContent>
);

export default AdSlider;