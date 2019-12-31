import { Component, OnInit } from "@angular/core";
import { Router, ActivationEnd } from "@angular/router";
import { map, filter } from "rxjs/operators";
import { Title, Meta, MetaDefinition } from "@angular/platform-browser";

@Component({
  selector: "app-breadcrumbs",
  templateUrl: "./breadcrumbs.component.html",
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;
  constructor(public ruta: Router, private title: Title, private meta: Meta) {
    ruta.events
      .pipe(
        filter(evento => evento instanceof ActivationEnd),
        filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
        map((evento: ActivationEnd) => evento.snapshot.data.titulo)
      )
      .subscribe(event => {
        this.titulo = event;
        title.setTitle(event);
        const metaTag: MetaDefinition = {
          name: "description",
          content: this.titulo
        };
        this.meta.updateTag(metaTag);
      });
  }

  ngOnInit() {}
}
