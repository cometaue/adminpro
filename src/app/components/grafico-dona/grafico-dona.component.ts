import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-grafico-dona",
  templateUrl: "./grafico-dona.component.html",
  styleUrls: ["./grafico-dona.component.css"]
})
export class GraficoDonaComponent implements OnInit {
  @Input() Leyenda: string = "Leyenda";
  @Input() donutLabel: string[] = [
    "Download Sales",
    "In-Store Sales",
    "Mail-Order Sales"
  ];
  @Input() donutData: number[] = [350, 450, 100];
  donutType: string = "doughnut";
  constructor() {}

  ngOnInit() {}
}
