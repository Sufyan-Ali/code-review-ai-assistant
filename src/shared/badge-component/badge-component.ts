import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge-component',
  imports: [],
  templateUrl: './badge-component.html',
  styleUrl: './badge-component.css',
})
export class BadgeComponent {
  displayText = input.required<string> ()
  badgeColor = input.required<string>()
}
