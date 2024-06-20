import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { ButtonComponent } from './ui/button/button.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, ButtonComponent, FilterPipe, FormsModule]
})
export class AppComponent {
  title = 'frontend';
  toFilter: string = ''

  sorted_data: any = []

  ngOnInit() {
    this.getData()
  }

  async getData() {
    try {
      let data = await fetch('https://dummyjson.com/products')
      let formatted_value = await data.json();
      this.sorted_data = formatted_value.products
      console.log(this.sorted_data)

    } catch (error) {
      console.log(error)
    }
  }

  clickMe(name: string) {
    console.log('Click me to', name)
  }



}
