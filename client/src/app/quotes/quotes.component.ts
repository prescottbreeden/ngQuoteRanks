import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  addQuote = false;
  quote = '';
  errors = '';
  button = 'Add a Quote';

  quotes = [
    {
      content: 'rubber baby buggy bumpers',
      votes: 5
    },
    {
      content: 'I was born a poor black child',
      votes: 2
    },
    {
      content: 'who is your daddy and what does he do',
      votes: 1
    },
    {
      content: 'it\'s not a tumor',
      votes: 20
    },
];
  constructor() { }

  ngOnInit() {
  }

  toggleAddQuote() {
    this.addQuote = !this.addQuote;
    this.addQuote ? this.button = 'Return to Quotes' : this.button = 'Add a Quote';
  }

  deleteQuoteService(id) {
    console.log('clicked delete quote');
  }
  voteUpService(id) {
    console.log('clicked up-vote');
  }
  voteDownService(id) {
    console.log('clicked down-vote');
  }
  addQuoteService() {
    console.log('clicked add quote');
  }
}
