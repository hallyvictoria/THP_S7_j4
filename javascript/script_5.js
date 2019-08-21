const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

function question1(){
  console.log('Est-ce que tous les livres ont été au moins empruntés une fois ?')
  let allRented = true;
  books.forEach(book => {
    if (book.rented < 1){
      allRented = false;
    }
  })
  console.log(allRented)
}
function question2(){
  console.log("Quel est livre le plus emprunté ?")
  mostRented=books[0]
  books.forEach(function(book) {
    if (book.rented > mostRented.rented) {
      mostRented = book
    }
  })
  console.log(mostRented)
}
function question3(){
  console.log("Quel est le livre le moins emprunté ?") 
  lessRented=books[0]
  books.forEach(function(book) {
    if (book.rented < lessRented.rented) {
      lessRented = book
    }
  })
  console.log(lessRented)
}
function question4(){
  console.log("Trouve le livre avec l'ID: 873495 ;")
  theBook = books.find(function(book){
    return book.id === 873495;
  })
  console.log(theBook)
}
function question5(){
  console.log("Supprime le livre avec l'ID: 133712 ;")
  theBook = books.find(function(book){
    return book.id === 133712;
  })
  books.splice(books.indexOf(theBook), 1);
  console.log(books);
}
function question6(){
  console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")
  books.sort(function(a, b){
    return a.title.localeCompare(b.title);
  })
  console.log(books)
}

// question1()
// question2()
// question3()
// question4()
// question5()
// question6()
