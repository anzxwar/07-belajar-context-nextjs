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

> Soal 3  
![Screenshot](assets/Screenshot_3.png)  
- Menggunakan useContext untuk Membaca Context. useContext adalah sebuah Hook yang memungkinkan Anda menggunakan nilai dari Context tanpa perlu menulis Consumer. useContext akan membaca nilai dari Context yang Anda berikan (dalam kasus ini, LevelContext).

- Menggunakan Context untuk Menentukan Ukuran Heading. Section menerima children dan menambahkan 1 ke level sebelumnya. Dengan demikian, semua Heading yang berada di dalam Section akan memiliki ukuran yang lebih besar dari Heading yang berada di luar Section.

> Soal 4   
![Screenshot](assets/Screenshot_31.png) 



