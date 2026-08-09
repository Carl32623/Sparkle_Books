import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // Hamburger menu button action to collapse sidebar
  @Output() menuToggle = new EventEmitter<void>();

  toggleMenu() {
    this.menuToggle.emit();
  }

}
