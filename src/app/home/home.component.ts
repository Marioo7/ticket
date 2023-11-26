import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchQuery: string = '';

  value: string | undefined;
  data: any;
  options: any;
  filteredData: any[] = [];
  isRightToLeft: boolean = true;
  inputText: string = 'تذكرة رقم #2342';
  first1: number = 0;

  rows1: number = 10;

  first2: number = 0;

  rows2: number = 10;

  first3: number = 0;

  rows3: number = 10;

  statusOptions: SelectItem[] = [
    {label: "20", value:"20"}
  ];
  selected: string = '20';
  totalRecords: number = 120;
  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.loadData();
    const documentStyle = getComputedStyle(document.documentElement);


    this.data = {
        labels: ['ديسمبر','نوفمبر','اكتوبر', 'سبتمبر', 'أغسطس', 'يوليو', 'يونيو', 'مايو', 'ابريل', 'مارس', 'فبراير', 'يناير'],
        datasets: [
            {
              label: 'Dataset',
                data: [35, 40, 18, 55, 70, 50, 57, 45, 33, 30, 20, 65],
                fill: true,
                borderColor: 'rgba(138, 116, 249, 1)',
                tension: 0.4,
                background: 'linear-gradient(180deg, #8A74F9 0%, rgba(138, 116, 249, 0.263733) 84.28%, rgba(138, 116, 249, 0) 175.89%)'

            },
        ]
    };


    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 1,

    };
}
loadData() {
  this.dataService.getData().subscribe((data) => {
    this.filteredData = data;
  });
}
onPageChange(event: any) {
  this.first1 = event.first;
  this.rows1 = event.rows;
}
onPageChange2(event: any) {
  this.first2 = event.first;
  this.rows2 = event.rows;
}

}
