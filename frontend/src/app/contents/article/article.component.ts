import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../models/Article';
import {ArticleService} from './article.service';
import {Subject, takeUntil} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: [ './article.component.scss' ]
})
export class ArticleComponent implements OnInit {
  destroySubject$ = new Subject();
  @Input() articles: Article[] | any = [];
  showAllArticle = false;

  constructor(private articleService: ArticleService,
              private router: Router) {
  }

  ngOnInit(): void {
    window.scroll(0,0);
    console.log(localStorage.getItem('loadAll'));
    if (localStorage.getItem('loadAll') !== null) {
      this.loadAllArticles();
      this.showAllArticle = true;
    }
  }

  loadAllArticles() {
    this.articleService.getAllArticles()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((res) => {
        this.articles = res;
      });
  }

  backToHome() {
    this.router.navigate(['']);
  }

  // ngOnDestroy() {
  //   localStorage.removeItem('loadAll')
  // }
}
