import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
import { TaskPage } from '../modals/task/task.page';
const { Modals } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(public modalController: ModalController) { }

  async showTaskSetAddDialog() {
    let promptRet = await Modals.prompt({
      title: 'タスクセット追加',
      message: 'タスクセット名を入力'
    });
    console.log('Prompt ret', promptRet);
  }

  async showTaskAddDialog() {
    const modal = await this.modalController.create({
      component: TaskPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
