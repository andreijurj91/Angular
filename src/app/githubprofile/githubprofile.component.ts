import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.css']
})
export class GithubProfileComponent  {

  constructor(private router: Router) { }
   
  submit(){
      this.router.navigate(['/followers'], {
        queryParams: {page:1 , order:'newest'}
      })
    }

  }


