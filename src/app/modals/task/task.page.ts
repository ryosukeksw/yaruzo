import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-task',
  templateUrl: 'task.page.html',
  styleUrls: ['task.page.scss']
})
export class TaskPage {
  constructor(public modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss();
  }
}
