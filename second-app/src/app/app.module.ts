import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsListComponent } from './post/posts-list/posts-list.component';
import {PostsService} from './posts.service';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
