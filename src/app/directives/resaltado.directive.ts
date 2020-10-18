import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elementRef: ElementRef) {
    console.log('directiva llamada');
  }
  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter') mouseEntro(){
    console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor || 'yellow');
  }

  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);

  }

  private resaltar(color: string){
    this.elementRef.nativeElement.style.backgroundColor = color;
  }

}
