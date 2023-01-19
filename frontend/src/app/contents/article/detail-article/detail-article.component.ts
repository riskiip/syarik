import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../article.service';
import {ActivatedRoute} from '@angular/router';
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: [ './detail-article.component.scss' ]
})
export class DetailArticleComponent implements OnInit {
  destroySubject$ = new Subject();
  detailArticle: any;
  articleDate!: Date;
  idArticle!: string;

  constructor(private articleService: ArticleService,
              private activatedRouter: ActivatedRoute) {
    this.idArticle = this.activatedRouter.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(this.idArticle);
    this.getArticleById(this.idArticle);
  }

  getArticleById(idArticle: string) {
    this.articleService.getArticleById(idArticle)
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((res) => {
        this.detailArticle = res;
        console.log(this.detailArticle);
        this.articleDate = new Date(this.detailArticle.date);
      });
  }

}
