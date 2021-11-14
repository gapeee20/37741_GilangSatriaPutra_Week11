import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { collection, addDoc } from "firebase/firestore";
import '../firebaseConfig'
import {getFirestore, getDocs} from "firebase/firestore";
import React, { useEffect, useRef, useState } from 'react';

const Home: React.FC = () => {
    //firebase
    const db = getFirestore();
    useEffect( () => {
        const addData = async() => {
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    first: "Ada",
                    last: "Lovelace",
                    born: 1815
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    addData().then(r => console.log ("Data Berhasil"));
    })


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;

function addData() {
    throw new Error('Function not implemented.');
}

