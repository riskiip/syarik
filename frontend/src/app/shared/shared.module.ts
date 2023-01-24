import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {DateFormatPipe} from './pipe/date-format.pipe';
import {CardComponent} from './components/card/card.component';
import {LoaderComponent} from './components/loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    DateFormatPipe,
    CardComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DateFormatPipe,
    CardComponent,
    LoaderComponent
  ]
})
export class SharedModule {
}
