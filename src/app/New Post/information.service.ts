// import { Information } from './post.model';
import { Injectable } from '@angular/core';
import { Subject, zip } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/render3/util';
import { Post } from './post.model';
import { EmailValidator } from '@angular/forms';
import { Capability } from 'protractor';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class InformationService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http
      .get<{ message: string; posts: any }>(
        'http://localhost:3000/api/posts'
      )
      .pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
            id: post._id,
            first: post.first,
            last: post.last,
            email: post.email,
            address: post.address,
            zipc: post.zipc,
            city: post.city,
            state: post.state
          };
        });
      }))
      .subscribe(transformedData => {
        this.posts = transformedData;
        this.postsUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(
    first: string,
    last: string,
    email: string,
    address: string,
    city: string,
    zipc: string,
    state: string,
    ) {
    const post: Post = {first: first, last: last, email: email, address: address, city: city, state: state, zipc: zipc };
    this.http
      .post<{ message: string }>('http://localhost:3000/api/posts', post)
      .subscribe(responseData => {
        console.log(responseData.message);
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }
}
