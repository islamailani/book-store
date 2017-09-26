import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-add-review',
    template: `
    <textarea mdInput placeholder="Add review..." [(ngModel)]="reviewContent" ></textarea>
      <button md-raised-button color="primary" [disabled]="!reviewContent" (click)="addReviewClicked()"> Add Review </button>
    `,
    styles: [`
      :host{
          display:block;
      }
      textarea,button{
          display: block;
          text-align: center;
      }
      textarea {
        width: 500px;
        height: 70px;
      }

      
      
    `]
})

export class AddReviewComponent implements OnInit {

    @Output() reviewAdded: EventEmitter<string> = new EventEmitter();
    reviewContent: string = '';

    constructor() { }

    ngOnInit() { }

    addReviewClicked() {
        this.reviewAdded.emit(this.reviewContent);
        this.reviewContent = '';
    }
}