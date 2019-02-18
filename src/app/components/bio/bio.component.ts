import { BioService } from './../../services/bio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  Title: String;
  Tanggal: any;
  Hobbies: any[];
  Nama: String;
  Alamat: String;

  constructor(private bioServ:BioService) {
    this.Title = "INI Tugas Pertama Biodata";
    this.Tanggal = Date.now();
    this.Nama = "Muhammad Iqbal Kharis Firismanda";
    this.Alamat = "Jln. Janti Barat C/B.25";
    this.Hobbies = this.bioServ.getMIqbal();
   }

  ngOnInit() {
    }



}
