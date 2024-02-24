import { Component, OnInit } from '@angular/core';
import { IntegracoesService } from './integracoes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-integracoes',
  templateUrl: './integracoes.component.html',
  styleUrls: ['./integracoes.component.css'],
})

export class IntegracoesComponent implements OnInit {

 /*  constructor(private http: HttpClient, private service: IntegracoesService) { }
  loginSiga: string;
  senhaSiga: string; */
  hide = true;

  ngOnInit() {
  }

}
