import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TestcaseDirectiveDirective } from './Directive/test';
import { TestcaseDirectiveDirective1 } from './Directive/test1';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule,TestcaseDirectiveDirective,TestcaseDirectiveDirective1],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'directives';
}
