import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from './article.component';
import {CreateArticleComponent} from './create-article/create-article.component';
import {DetailArticleComponent} from './detail-article/detail-article.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ArticleComponent
      },
      {
        path: 'create',
        component: CreateArticleComponent,
      },
      {
        path: 'detail/:id',
        component: DetailArticleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class ArticleRoutingModule {
}
