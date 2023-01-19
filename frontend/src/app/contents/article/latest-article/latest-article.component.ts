import { Router } from '@angular/router';
import { Article } from './../../../models/Article';
import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-latest-article',
  templateUrl: './latest-article.component.html',
  styleUrls: ['./latest-article.component.scss'],
})
export class LatestArticleComponent implements OnInit {
  destroySubject$ = new Subject();
  articles: Article[] | any = [];

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {
    this.getAllArticle();
  }

  getAllArticle() {
    this.articleService
      .getLatestArticle()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((res) => {
        this.articles = res;
        console.log(this.articles);
      });
  }

  goToDetailArticle(articleId: string) {

    this.router.navigate([`/article/detail/${articleId}`]);
  }
}
