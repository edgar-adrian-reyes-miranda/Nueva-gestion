import { Injectable } from '@angular/core';
import *as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class GenerarPDFService {
  generarPDF(data: any[]):void{
  // @ts-ignore
  const doc = new jsPDF();
  const tablaHeader= Object.keys(data[0]);
  const tablaData= data.map(item=> Object.values(item));

  doc.autoTable({
    head:[tablaHeader],
    body:tablaData
  });
}
  generatePdfFromHtml(html: string):void{
    // @ts-ignore
    const doc = new jsPDF();
    // @ts-ignore
    html2canvas(document.getElementById('lista-tabla')).then((canvas)=>{
      const imgData = canvas.toDataURL('/asset/ING/Infotec.png');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      doc.addImage(imgData, 'PNG', 0,0, imgWidth, imgHeight);
      doc.save('lista.pdf');
    });
  }
}
