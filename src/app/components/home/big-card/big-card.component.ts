import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
})
export class BigCardComponent {
  @Input() imgUrl!: string;
  @Input() theme!: string;
  @Input() title!: string;
  @Input() creation!: string;
  @Input() description!: string;
}
