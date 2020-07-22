import { Component, OnInit, Input } from "@angular/core";
import {Transaction} from "src/app/models/transaction'

@Component({
  selector: 'transactionslist',
  templateUrl: './transactionslist.component.html',
  styleUrls: ['./transactionslist.component.css']
})
export class TransactionslistComponent implements OnInit {
  @Input() transaction: Transaction;
  @Input() index: number;

  constructor() { }

  ngOnInit() {

  }

}
