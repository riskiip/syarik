import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    loadChildren: () =>
      import('./contents/homepage/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  {
    path: 'author',
    loadChildren: () =>
      import('./contents/author/author.module').then((m) => m.AuthorModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./contents/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./contents/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./contents/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'article',
    loadChildren: () =>
      import('./contents/article/article.module').then((m) => m.ArticleModule),
  },
  {
    path: '**',
    redirectTo: '404'
  },
  {
    path: '404',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
