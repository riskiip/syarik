import {SharedModule} from './../../shared/shared.module';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ArticleRoutingModule} from './article-routing.module';
import {ArticleComponent} from './article.component';
import {CreateArticleComponent} from './create-article/create-article.component';
import {DetailArticleComponent} from './detail-article/detail-article.component';
import {FormsModule} from '@angular/forms';
import {AngularEditorModule} from '@kolkov/angular-editor';

@NgModule({
  declarations: [
    ArticleComponent,
    CreateArticleComponent,
    DetailArticleComponent,
  ],
  imports: [ CommonModule, ArticleRoutingModule, SharedModule, FormsModule, AngularEditorModule ],
  exports: [ ArticleComponent ]
})
export class ArticleModule {
}
