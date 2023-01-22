import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article/article.service';
import {Article} from '../../models/Article';
import {Subject, takeUntil} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [ './homepage.component.scss' ]
})
export class HomepageComponent implements OnInit {
  destroySubject$ = new Subject();
  articleData: Article[] | any = [];
  dataLoaded = false;

  constructor(private articleService: ArticleService,
              private router: Router) {
  }

  ngOnInit(): void {
    localStorage.removeItem('loadAll');
    this.getLatestArticle();
  }

  getLatestArticle() {
    this.articleService.getLatestArticle()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((res) => {
        if (res) {
          setTimeout(() => {
            this.articleData = res;
            this.dataLoaded = true;
          }, 1000);
        }
      });
  }

  goToArticles() {
    localStorage.setItem('loadAll', 'test');
    this.router.navigate([ '/article' ]);
  }
}
