import { Component } from '@angular/core';
import { InformeService } from 'src/app/servicios/informe.service'; 

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.scss']
})
export class InformeComponent {

  informe: any;

  constructor(private sinforme:InformeService){}

  ngOnInit(): void{
    this.consulta();

  }

  consulta(){
    this.sinforme.consultar().subscribe((resultado:any) => { 
      this.informe = resultado;    
    })
  }
}

