import { Component, OnInit, } from '@angular/core';
import { Observable } from 'rxjs';
import { FileService } from 'src/app/Apis/file.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  selectedFile: File | undefined;

  files$: Observable<any[]> | undefined

  constructor(private api: FileService) {
  }

  ngOnInit(): void {
    this.loadFiles();
  }

  loadFiles() {
    this.files$ = this.api.getFiles();
  }

  deleteFiles(filename: string) {
    this.api.deletefile(filename).subscribe(() => {
      this.loadFiles();
    })
  }

  onFileSelected(event: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0] as File;
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      this.api.upload(this.selectedFile).subscribe(
        () => {
          console.log('File uploaded successfully');
          swal.fire({
            icon: 'success',
            title: 'succefull',
            text: 'Archivo correcto'
          });
        },
        error => {
          if (error.status === 413) {
            console.error('Error: El archivo excede el límite de tamaño permitido');
            // Mostrar mensaje con SweetAlert
            swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'El archivo excede el límite de tamaño permitido',
            });
          } else {
            console.error('Error al cargar el archivo', error);
            // Manejar otros errores de carga de archivos si es necesario
            swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Error al cargar el archivo',
            });
          }
        }
      );
    }
  }

}
