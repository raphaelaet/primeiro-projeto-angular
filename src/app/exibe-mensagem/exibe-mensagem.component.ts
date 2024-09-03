import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibe-mensagem',
  templateUrl: './exibe-mensagem.component.html',
  styleUrl: './exibe-mensagem.component.css'
})
export class ExibeMensagemComponent implements OnInit {

  mensagem: string
  constructor() {
    this.mensagem = ''
  }

  ngOnInit() {}

  alterarMensagem(n: string) {
    this.mensagem = `Seja bem-vindo, ${n}!`
  }
}
