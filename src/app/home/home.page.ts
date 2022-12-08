import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number = 0
  height: number = 0
  imc: number = 0
  classificao: string = ""

  constructor(private toastCtrl: ToastController) { }

  onCalculate() {
    if (this.height <= 0 || this.weight <= 0) {
      return
    }

    this.imc = this.weight / (this.height * this.height)
    this.onSetClassificacao()
    this.showIMC()
  }

  onSetClassificacao() {
    if (this.imc < 18.5) {
      this.classificao = "Magreza"
    } else if (this.imc >= 18.5 && this.imc < 25.0) {
      this.classificao = "Normal"
    } else if (this.imc >= 25.0 && this.imc < 30.0) {
      this.classificao = "Sobrepeso"
    } else if (this.imc >= 30 && this.imc < 40) {
      this.classificao = "Obesidade"
    } else {
      this.classificao = "Obesidade Grave"
    }
  }

  async showIMC() {
    const toast = await this.toastCtrl.create({
      message: `IMC = ${this.imc.toFixed(2)} | Classificação = ${this.classificao}`,
      duration: 3000,
      color: 'secondary'
    })

    toast.present()

  }


}
