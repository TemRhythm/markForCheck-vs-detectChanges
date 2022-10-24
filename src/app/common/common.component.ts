import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.marked-for-check]': 'markedForCheck'
  }
})
export class CommonComponent implements OnInit, DoCheck {

  markedForCheck = false;

  constructor(private elementRef: ElementRef, public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  flash(): string {
    let classList = (this.elementRef.nativeElement as HTMLElement).classList;
    classList.add('flash');
    setTimeout(() => {
      classList.remove('flash');
    }, 1000);
    return '';
  }

  markForCheck() {
    this.changeDetectorRef.markForCheck();
    this.markedForCheck = true;
  }

  ngDoCheck(): void {
    this.markedForCheck = false;
  }

  detectChanges() {
    this.changeDetectorRef.detectChanges();
  }
}
