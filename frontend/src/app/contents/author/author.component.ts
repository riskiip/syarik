import {Component, OnInit} from '@angular/core';
import {AuthorService} from './author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: [ './author.component.scss' ]
})
export class AuthorComponent implements OnInit {
  authorId!: string | null;
  authorData: any;

  constructor(private authorService: AuthorService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.authorId = localStorage.getItem('authId').replace(/['"]+/g, '');
    this.getAuthorDetail(this.authorId);
  }

  getAuthorDetail(authorId: any) {
    this.authorService.getAuthorById(authorId)
      .subscribe((val) => {
        this.authorData = val;
      });
  }
}
