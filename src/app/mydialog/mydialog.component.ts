import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-mydialog',
  templateUrl: './mydialog.component.html',
  styleUrls: ['./mydialog.component.css']
})
export class MydialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MydialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: string
  ) {}

  ngOnInit() {}

  onConfirm() {
    this.dialogRef.close('Confirm');
  }

  onCancel() {
    this.dialogRef.close('Cancel');
  }
}
