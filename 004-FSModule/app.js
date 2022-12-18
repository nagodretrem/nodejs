import * as fs from 'node:fs';

//File create
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000} ', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log('Dosya yazma işlemi tamamlandı.');
});

/* 
 //File read
fs.readFile('employees.json', 'utf8', (err, data) =>{
    if (err) console.log(err); 
    //console.log(data);
    console.log('Dosya okuma işlemi tamamlandı.');
}); 
 */
/* 
//File update
fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 3000} ', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log('Dosya ekleme işlemi tamamlandı.');
});

 */
/* 
//File delete
fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
    console.log('Dosya silme işlemi tamamlandı.');
});

 */
