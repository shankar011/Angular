import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styles: [`
    .posts-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: #007bff;
}

.error {
  text-align: center;
  color: red;
  font-size: 1.2rem;
}

.posts-list {
  list-style-type: none;
  padding: 0;
}

.post-item {
  background-color: #18b999;
  color:#ffffff;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-item h3 {
  margin: 0 0 10px 0;
  font-size: 1.5rem;
}

.post-item p {
  margin: 0;
  color: #555;
}

  `]
})
export class PostsListComponent implements OnInit {
  posts: any[] = [];
  isLoading = true;  
  error: string | null = null;  

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  
  fetchPosts() {
    this.postsService.getPosts().subscribe(
      (data) => {
        this.posts = data;
        this.isLoading = false;
      },
      (error) => {
        this.error = error;
        this.isLoading = false;
      }
    );
  }
}
