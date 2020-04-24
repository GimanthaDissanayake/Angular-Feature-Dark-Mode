import { Component } from '@angular/core';
import { ColorSchemeService } from "./services/color-scheme.service";

// IMPORT ColorSchemeService WHICH WE CREATED

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private colorSchemeService: ColorSchemeService) {
    // Load Color Scheme
    this.colorSchemeService.load();
  }
}
