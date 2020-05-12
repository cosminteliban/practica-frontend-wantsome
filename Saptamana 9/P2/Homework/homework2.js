const books = [
    {title: 'The Power of Habit',
     author: 'Charles Duhigg',
     read: true,
     url: "https://static.okian.ro/media/catalog/product/cache/0ee050c3ffc3555709b9bb6062f4d7e9/import/9780812981605.jpg"
    },
    {title: 'Mindset: The New Psychology of Success',
    author: 'Carol S. Dweck',
    read: false,
    url: "https://cdn7.avanticart.ro/librex.ro/pictures/mindset-8959-2.jpeg"
    }];
  
  // Creati o pagina web care are un h1 cu "Book List"
  // adugati un tag style unde sa tinem css-ul
  //Iterati fiecare carte si pentru fiecare creati un p care sa contina titlul si autorul si faceti append in pagina noastra
  //BONUS: folositi ul si li pentru a face display la carti
  //BONUS: adaugati o proprietate pentru fiecare carte cu URL de la coverul cartii si adaugati un element img pentru fiecare (nu uitati sa adaugati img-ul
  // si pe obiectul cartii - acolo va fi si poza)
  //BONUS: schimbati style-ul pentru fiecare carte in functie daca a fost citita sau nu.



  const head = document.querySelector("head");
  const tag = document.createElement("style");
  head.appendChild(tag);


  let list = document.createElement("ul")


    for (let i = 0; i < books.length; i++) {
      let book  = document.createElement("li");
      let p = document.createElement("p");
      p.textContent =`Titlul cartii este "${books[i].title}" si este scrisa de catre ${books[i].author}`;
      book.appendChild(p);
      list.appendChild(book);
      let cover = document.createElement("img");
      cover.setAttribute("src", books[i].url);
      book.appendChild(cover);
       if (books[i].read) {
         book.classList.add("read");
       }
    }

const body = document.querySelector("body");
body.appendChild(list);

tag.textContent = `
.read {
  color: red;
}
`;









