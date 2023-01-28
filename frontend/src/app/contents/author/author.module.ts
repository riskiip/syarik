import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorComponent } from './author.component';
import {ArticleModule} from '../article/article.module';


@NgModule({
  declarations: [
    AuthorComponent
  ],
	imports: [
		CommonModule,
		AuthorRoutingModule,
		ArticleModule
	]
})
export class AuthorModule { }
