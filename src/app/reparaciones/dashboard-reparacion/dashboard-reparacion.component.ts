import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-reparacion',
  templateUrl: './dashboard-reparacion.component.html',
  styleUrls: ['./dashboard-reparacion.component.scss']
})
export class DashboardReparacionComponent implements OnInit {

  @Input() resguardos;

  constructor() { }

  ngOnInit() {}

}
