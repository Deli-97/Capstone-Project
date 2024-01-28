// prenota.component.ts

import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

type Reservation = {
  name: string;
  date: string;
  time: string;
  guests: number;
};

@Component({
  selector: 'app-prenota',
  templateUrl: './prenota.component.html',
  styleUrls: ['./prenota.component.scss'],
})
export class PrenotaComponent {
  @ViewChild('reservationForm', { static: true }) form!: NgForm;

  reservation: Reservation = {
    name: '',
    date: '',
    time: '',
    guests: 1,
  };

  bookingSuccess = false;

  bookingSummary: any = {};

  minDate = new Date();
  minDateString: string;

  maxDate = new Date(new Date().getFullYear(), 11, 31);
  maxDateString: string;

  times = this.generateTimes();

  constructor() {
    this.minDateString = this.formatDate(this.minDate);
    this.maxDateString = this.formatDate(this.maxDate);
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  generateTimes(): string[] {
    const times: string[] = [];

    // Genera orari tra le 12:00 e le 14:45
    for (let hour = 12; hour <= 14; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        times.push(`${formattedHour}:${formattedMinute}`);
      }
    }

    // Genera orari tra le 19:00 e le 22:45
    for (let hour = 19; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        times.push(`${formattedHour}:${formattedMinute}`);
      }
    }

    return times;
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('Prenotazione inviata:', this.reservation);
      this.bookingSummary = { ...this.reservation };
      this.bookingSuccess = true;
      form.resetForm();
    } else {
      console.log('Il form non è valido. Controlla i campi.');
    }
  }
}
