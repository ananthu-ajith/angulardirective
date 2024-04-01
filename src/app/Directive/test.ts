import { Directive, ElementRef, HostListener, Input,} from '@angular/core';

@Directive({
  selector: '[appTestcaseDirective]',
  standalone: true
})
export class TestcaseDirectiveDirective {
  @Input() customColor!:string;
  
  constructor(private _elemet: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter()
  {
    this.highlight('blue')
  }
  
  @HostListener('mouseleave') onMouseLeave()
  {
    this.highlight('')
    this._elemet.nativeElement.style.scale= ''

  }
  private highlight (color : string) {
    this._elemet.nativeElement.style.scale= '1.1'
    this._elemet.nativeElement.style.color= color
  }
}
