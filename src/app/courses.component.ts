import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        {{ course.title | uppercase }} <br/>
        {{ course.rating | number:'2.1-1'}} <br/>
        {{ course.students | number}} <br/>
        {{ course.price | currency:'AUD':true:'3.2-2'}} <br/>
        {{ course.releaseDate | date:'shortDate'}} <br/>
        `
})
export class CoursesComponent{
    course={
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price:190.95,
        releaseDate: new Date(2016, 3, 1)
    }
    }

  
