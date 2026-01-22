import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appCountdown]',
  standalone: true
})
export class CountdownDirective implements OnInit, OnDestroy {

  @Input() time!: number;

  private intervalId: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.innerText = this.time;

    this.intervalId = setInterval(() => {
      this.time--;
      this.el.nativeElement.innerText = this.time;

      if (this.time === 0) {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
