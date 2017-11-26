import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OpenweathermapService } from './services/openweathermap.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdButtonsRadio } from './components/buttons/buttons-radio';
import { ReversePipe } from './pipes/reverse.pipe';
import { OrderByPipe } from './pipes/orderby.pipe';
import { TemperatureConverterPipe } from './pipes/temperature.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    OrderByPipe,
    TemperatureConverterPipe,
    NgbdButtonsRadio
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [OpenweathermapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
