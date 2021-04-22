import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: []
})
export class Pagina1Component
  implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  nombre: string = 'Marco'
  segundos: number = 0
  timerSubscription!: Subscription;

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    this.timerSubscription = interval(1000).subscribe(numero => this.segundos = numero)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
    this.timerSubscription.unsubscribe()
    console.log('Timer Limpiado')
  }

  guardar() {

  }
}
