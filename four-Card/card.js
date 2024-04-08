// const reviews = [
//     {
//       id: 1,
//       name: 'susan smith',
//       job: 'web developer',
//       img: 'https://www.course-api.com/images/people/person-1.jpeg',
//       text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
//     },
//     {
//       id: 2,
//       name: 'anna johnson',
//       job: 'web designer',
//       img: 'https://www.course-api.com/images/people/person-2.jpeg',
//       text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
//     },
//     {
//       id: 3,
//       name: 'peter jones',
//       job: 'intern',
//       img: 'https://www.course-api.com/images/people/person-4.jpeg',
//       text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
//     },
//     {
//       id: 4,
//       name: 'bill anderson',
//       job: 'the boss',
//       img: 'https://www.course-api.com/images/people/person-3.jpeg',
//       text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
//     },
//   ];

//   const card = document.querySelector('card')
//   console.log('card');
//    function getreviews(arr,container){
//     let newReviews = arr.map(item)=>{
//         const {
//             id,
//             name,
//             job,
//             img,
//             text
//         }
//     }
//    }

  //  let array =reviews.map((item)=>{
  //   return`
  //   <div class="card">
  //           <p>${item.name}</p>
  //           <p>${item.job}</p>
  //           <img src="${item.img}" alt="">
  //           <p>${item.text}</p>
              
  //   </div>
    
  //   `
  //  })
  //  console.log(array)

  //  let section = document.querySelector('.main')
  //  section.innerHTML = array.join(' ')

   const books =[
    {
      name:'The History of Tom Jones, a Foundling by Henry F'
    },
    {
      name:'Pride and Prejudice by Jane Austen '
    },
    {
      name:'The Red and the Black by Stendhal '
    },
    {
      name:'Le Père Goriot by Honoré de Balzac '
    },
    {
      name:' David Copperfield by Charles Dickens '
    },
    {
      name:'// Madame Bovary by Gustave Flaubert '
    },
    {
      name:'// Moby-Dick by Herman Melville '
    },
    {
      name:'// Wuthering Heights by Emily Brontë '
    },
    {
      name:'// The Brothers Karamazov by Dostoevsky (1880)'
    },
    {
      name:' War and Peace by Tolstoy '
    }
   ]
   let bookname = book.map((item)=>{
    return`
    <li> ${item.name}</li>
    `
   })

   let ul = document.querySelector('.orderlist')
   ul.innerHTML = books.join('  ')