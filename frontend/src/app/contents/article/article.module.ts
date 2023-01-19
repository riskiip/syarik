import { SharedModule } from './../../shared/shared.module';
import { DateFormatPipe } from './../../shared/pipe/date-format.pipe';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { DetailArticleComponent } from './detail-article/detail-article.component';
import { LatestArticleComponent } from './latest-article/latest-article.component';

@NgModule({
  declarations: [
    ArticleComponent,
    CreateArticleComponent,
    DetailArticleComponent,
    LatestArticleComponent,
  ],
  imports: [CommonModule, ArticleRoutingModule, SharedModule],
  exports: [LatestArticleComponent]
})
export class ArticleModule {}
