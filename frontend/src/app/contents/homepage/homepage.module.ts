import {ArticleModule} from './../article/article.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageRoutingModule} from './homepage-routing.module';
import {HomepageComponent} from './homepage.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ArticleModule,
    SharedModule
  ]
})
export class HomepageModule {
}
