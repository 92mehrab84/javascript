 fetch('https://jsonplaceholder.typicode.com/comments')
     .then(response => response.json())
     .then((json ) => display(json)) ;

//selection 
 const items = document.getElementById('items');
     function display(json){

        // console.log(json);
        for (let i = 0; i < json.length; i++) {
            const element = json[i];
            console.log(element);


          //creat elements  
        
        const h1 = document.createElement('h1');
        const h5 = document.createElement('h5');
        const p = document.createElement('p');
        const list = document.createElement('div');
        //set innertext 
               h1.innerText = element.name;
               h5.innerText = element.body;
               p.innerText = element.email;
              
               //css added
               h1.setAttribute('class' , 'text-primary');
               h5.setAttribute('class','text-info');
               p.setAttribute('class','text-body-tertiary');
               list.setAttribute('class','border mt-5 p-3 rounded shadow ');
               //show to browser and where
                list.appendChild(h1);
                list.appendChild(h5);
                list.appendChild(p);
                items.appendChild(list);
      
            
        }

     }






// const mypractis =('https://jsonplaceholder.typicode.com/posts');
// fetch(mypractis).then((response) => response.json()).then((mydata) => displaydata(mydata));



// //selection tag
// const ul= document.getElementById('items');
// // const li = document.createElement('li');
// // ul.appendChild(li);
// //console.log(ul);
// function displaydata(mydata) {
//     // console.dir(mydata);
//     // // console.log(mydata[0]);
//     for (let i = 0; i < mydata.length; i++) {
//         const element = mydata[i];
//         // console.log(element);
//         // console.log(element);
//         // console.log(element.phone);
           

//         const li = document.createElement('li');
//         li.innerText = element.title;
//         ul.appendChild(li);
//     }
// }




// 1st way 
// function display(){
//     return 4+6;
// }
// const result = display()
// console.log(result);
//or
//console.log(display());


// 2nd way
// function display(a,b){
//     const sum = a + b;
//     return sum ;
// }
//  const result = display(6,4);
// console.log(result);

// 3rd way
// function display(a,b) {
//     const sum = a + b;
//     return sum;

// }
// console.log( display(4,6));




// const bike = 
//     {
//         type :'Suzuki',
//         model : '2023',
//         color : 'gray',
//     };

// console.log(bike.model);


// const numbers =[3,6,1,6,8,2,9]

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element);
// }



const car = {
type :'lemborgini',
model : '2023',
color : 'gray'
}
// console.log(car.color);
