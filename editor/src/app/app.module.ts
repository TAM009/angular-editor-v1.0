
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { EditorComponent } from './helpers/editor/editor.component';
import { BlogComponent } from './blog/blog/blog.component';
import { CategoryViewComponent } from './blog/category-view/category-view.component';
import { PostDetailComponent } from './blog/post-detail/post-detail.component';
import { PostFormComponent } from './blog/post-form/post-form.component';
import { CommentFormComponent } from './blog/comment/comment-form/comment-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { UserPostsComponent } from './user/user-posts/user-posts.component';
import { RegisterComponent } from './user/register/register.component';

import {AuthService} from "./user/auth.service";
import {UserService} from "./user/user.service";


const appRoutes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:id', component: PostDetailComponent},
  {path: 'blog/:id/edit', component: PostFormComponent},
  {path: 'blog-add', component: PostFormComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/my-account', component: ProfileComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/:id/blog', component: UserPostsComponent},
  {path: 'category/:id', component: CategoryViewComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    BlogComponent,
    CategoryViewComponent,
    PostDetailComponent,
    PostFormComponent,
    CommentFormComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
