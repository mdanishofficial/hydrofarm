import { Component } from '@angular/core';
// slides.component.ts
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ModalpageComponent } from '../modalpage/modalpage.component';
// install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  
})
export class Tab3Page {

  constructor(public alertController: AlertController,public modalController: ModalController) {}
  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
    }
    async presentAlertParts() {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
         header: 'Select the item you want to provide',
        
        inputs: [
          {
            name: 'checkbox1',
            type: 'checkbox',
            label: 'Door Card',
            value: 'value1',
            handler: () => {
              console.log('Radio 1 selected');
              
            },
            checked: true
          },
          {
            name: 'checkbox2',
            type: 'checkbox',
            label: 'Gallon',
            value: 'value2',
            handler: () => {
              console.log('Radio 2 selected');
            }
          },
          {
            name: 'checkbox3',
            type: 'checkbox',
            label: 'Door Fork',
            value: 'value3',
            handler: () => {
              console.log('Radio 3 selected');
            }
          },
         
          
        ],
        buttons: [
          {
            text: 'Provided',
            handler: () => {
              console.log('Confirm Ok');
            }
          },
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          },
        ]
      });
  
      await alert.present();
    }
    async presentModal() {
      const modal = await this.modalController.create({
        component: ModalpageComponent ,
        cssClass: 'my-custom-class'
      });
      return await modal.present();
    }
    }
