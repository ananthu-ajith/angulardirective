import { Directive, ElementRef, HostListener, Input,} from '@angular/core';

@Directive({
  selector: '[appTestcaseDirective1]',
  standalone: true
})
export class TestcaseDirectiveDirective1 {
  @Input() customColor!:string;
  
  constructor(private _elemet: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.highlight('normal')
  }
  
  @HostListener('mouseleave') onMouseLeave()
  {
    this.highlight('overlay')

  }
  private highlight (color : string) {
    this._elemet.nativeElement.style.mixBlendMode= color
  }
}
