import { MydialogComponent } from './../mydialog/mydialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  dialogOutput = '';
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  opendialog() {
    const dialogRef = this.dialog.open(MydialogComponent, {
      width: '500px',
      data: 'This message is passed to dialog popup'
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(`Dialog closed: ${res}`);
      this.dialogOutput = res;
    });
  }
}
