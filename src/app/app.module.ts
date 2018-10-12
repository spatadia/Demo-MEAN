import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatExpansionModule } from '@angular/material';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './New Post/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './New Post/post-information/post-information.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
