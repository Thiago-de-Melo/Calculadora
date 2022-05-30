import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cont: number = 0;
  valor_a: string = "";
  valor_b: string = "";
  valor_c: string = "";
  valor: string = "";
  valor1: number = 0;
  calculo: string = "";
  resultado: number = 0;

 recebe_valor(event: any) {
    if (this.cont < 8) {
      this.cont++;
      this.valor = this.valor + event.path[0].id;
    }
  }

  somar() {
    this.calculo = "+";
    this.valor1 += Number(this.valor);      
    this.valor = "";  
  }

  subtracao() {
    this.calculo = "-";
    this.valor1 = Number(this.valor);
    this.valor = "";
  }

  porcentagem() {
    this.calculo = "%";
    this.valor1 = Number(this.valor);
    this.valor = "";
  }

  raiz() {
    this.valor1 = (Number(this.valor))**0.5;
    this.valor = this.valor1.toString();
  }

  mutiplicar() {
    this.calculo = "*";
    this.valor1 = Number(this.valor);
    this.valor = "";
  }

  dividir() {
    this.calculo = "/";
    this.valor1 = Number(this.valor);
    this.valor = "";
  }

  igual() {
    if (this.calculo === "+") {
      this.resultado = this.valor1 + Number(this.valor);
      this.valor = this.resultado.toString();
    }
    if (this.calculo === "-") {
      this.resultado = this.valor1 - Number(this.valor);
      this.valor = this.resultado.toString();
    }
    if (this.calculo === "*") {
      this.resultado = this.valor1 * Number(this.valor);
      this.valor = this.resultado.toString();
    }
    if (this.calculo === "/") {
      this.resultado = this.valor1 / Number(this.valor);
      this.valor = this.resultado.toString();
    }
    if (this.calculo === "%") {
      this.resultado = Number(this.valor) - (Number(this.valor) * (this.valor1 / 100));
      this.valor = this.resultado.toString();
    }
  }

  limpa_campos() {
    this.valor = "";
    this.valor1 = 0;
    this.cont = 0;
    this.resultado;
  }

}
