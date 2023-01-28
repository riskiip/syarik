import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ArticleService} from '../article.service';
import {AuthorService} from '../../author/author.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: [ './create-article.component.scss' ]
})
export class CreateArticleComponent implements OnInit {
  article: any = {
    title: '',
    content: '',
    tags: [],
    description: ''
  };

  tag: any = '';

  image: any;

  select(e: any) {
    this.image = e.target.files[0];
  }

  constructor(private router: Router,
              private _auth: AuthorService,
              private data: ArticleService) {
  }

  ngOnInit(): void {
  }

  create(){
    let fd = new FormData()
    fd.append('title',this.article.title)
    fd.append('content',this.article.content)
    fd.append('tags',this.article.tags.toString())
    fd.append('description',this.article.description)
    fd.append('image',this.image)
    fd.append('idAuthor',this._auth.getAuthorDataFromToken()._id)

    this.data.create(fd)
      .subscribe(
        res=>{
          this.router.navigate(['/homepage'])
        },
        err=>{
          console.log(err);
        }
      );
  }
}
