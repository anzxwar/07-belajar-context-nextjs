|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2341728026|
| Nama |  Anwar Alif Katresna |
| Kelas | TI - 3A |

## Laporan Pratikum 1:  Membuat Variasi Ukuran Teks Heading dengan Context
> Soal 1  
![Screenshot](assets/Screenshot_1.png)

> Soal 2  
![Screenshot](assets/Screenshot_2.png)  
Error terjadi karena komponen yang diimpor membutuhkan createContext yang hanya bekerja pada komponen klien, namun belum ada parents yang menggunakan use client, sehingga dianggap komponen server secara default. Oleh karena itu, perlu ditambahkan 'use client'; pada file yang mengimpor komponen tersebut.
![Screenshot](assets/Screenshot_22.png)  
![Screenshot](assets/Screenshot_21.png)  

