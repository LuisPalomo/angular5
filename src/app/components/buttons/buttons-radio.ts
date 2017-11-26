import {Component} from '@angular/core';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'ngbd-buttons-radio',
  templateUrl: './buttons-radio.html'
})
export class NgbdButtonsRadio {
  public temp = 'c';
  constructor( private appComponent: AppComponent ) {}

  sendToParent(temp: string) {
    this.appComponent.updateTemp(temp);
  }

}
