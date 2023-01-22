import {Component, Input, OnInit} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {Article} from '../../../models/Article';
import {ArticleService} from '../../../contents/article/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  destroySubject$ = new Subject();
  @Input() articles: Article[] | any = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  goToDetailArticle(articleId: string) {
    this.router.navigate([`/article/detail/${articleId}`]);
  }
}
