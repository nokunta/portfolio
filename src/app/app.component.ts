import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as _ from 'lodash';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

export class Things {
  name: string = '';
  like: boolean = false;
}

export class Book {
  name: string = '';
  image: string = '';
  title: string = '';
  subtitle: string = '';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0, marginLeft: -40 }),
        animate(600),
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', animate(600, style({ opacity: 0 }))),
    ]),
    trigger('simpleFadeAnimation', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0, marginLeft: -40 }),
        animate(600),
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', animate(600, style({ opacity: 0 }))),
    ]),
  ],
})
export class AppComponent {
  title = 'portfolio';

  formGroup!: FormGroup;
  things: Things[] = [];
  books: Book[] = [];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();

    this.things = [
      { name: '/assets/good1.png', like: true },
      { name: '/assets/bad1.png', like: false },
      { name: '/assets/good2.png', like: true },
      { name: '/assets/bad2.png', like: false },
    ];

    this.books = [
      {
        name: 'good1',
        image: '/assets/clean-code.jpeg',
        title: 'Clean Code',
        subtitle: '',
      },
      {
        name: 'goodsof',
        image: '/assets/goodsof.png',
        title: 'Seriously good software',
        subtitle: '',
      },
      {
        name: 'refactoringsql',
        image: '/assets/refactoringsql.jpeg',
        title: 'Refactoring Legacy T-SQL for Improved Performance',
        subtitle: '',
      },
      {
        name: 'refactoring',
        image: '/assets/refactoring.jpg',
        title: 'Refactoring: Improving the Design of Existing Code',
        subtitle:
          '',
      },
    ];
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      message: [null, Validators.required],
    });
  }

  getErrorMessage() {
    if (!_.isNull(this.formGroup.errors)) {
      return JSON.stringify(this.formGroup.errors);
    }

    return '';
  }

  onSubmit(value: any) {}

  get email() {
    return this.formGroup.get('email');
  }
  get name() {
    return this.formGroup.get('name');
  }
}
