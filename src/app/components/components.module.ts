import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";

import { IncrementComponent } from "./increment/increment.component";
import { GraficoDonaComponent } from "./grafico-dona/grafico-dona.component";

@NgModule({
  declarations: [IncrementComponent, GraficoDonaComponent],
  imports: [CommonModule, FormsModule, ChartsModule],
  exports: [IncrementComponent, GraficoDonaComponent]
})
export class ComponentsModule {}
