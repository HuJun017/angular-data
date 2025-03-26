import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit {
  @Input() ciao: string; // <-- aggiunta la proprietà name
  constructor() { 
  }
  ngOnInit() {
  }
}