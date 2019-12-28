import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";

@Component({
  selector: "app-increment",
  templateUrl: "./increment.component.html",
  styles: []
})
export class IncrementComponent implements OnInit {
  @ViewChild("progre", { static: false }) progre: ElementRef;
  @Input() leyenda: string = "Leyenda";
  @Input() progreso: number = 5;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}
  cambiar_valor(valor: number) {
    if (this.progreso === 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso === 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso += valor;
    this.cambioValor.emit(this.progreso);
  }
  onchange(valorNuevo: number) {
    if (valorNuevo >= 100) {
      this.progreso = 100;
    } else if (valorNuevo <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = valorNuevo;
    }
    this.renderer.selectRootElement(
      this.progre.nativeElement
    ).value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }
}
