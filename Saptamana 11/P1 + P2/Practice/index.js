//1.


function capitalizeNames(arr1){

    console.log(arr1.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()));
    
    }
    
    capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);
    // ["John", "Jacob", "Jingleheimer", "Schmidt"] - result
    
    
    // 2. Scrieti codul corespunzator functiei care dubleaza fiecare element de tip valoare numerica dintr-un array specificat ca
    // argument
    
    
    function doubleEachNumber(arr2){
     doubledNum = arr2.map(item => {
         if(typeof item !== "number") {
             return item;
         }
         return item * 2;
     });
     return doubledNum;
    }
    
    console.log(doubleEachNumber([2, "5", 100, "100", "blablabla"]));
    
    // [4, “5”, 200, “100”, “blalblala”] - result
    
    
    
     
    
    // 3.
    
    function getPersonsNames(arr3){
        let namesReturn = arr3.map(item => `${item.name} ${item.surname}`);
        return namesReturn;
       }
       
       console.log(getPersonsNames([
        {
        name: "Angelina",
        surname: "Jolie",
        age: 80
        },
        {
        name: "Eric",
        surname: "Jones",
        age: 27
        },
       ]));
    
    // ["Angelina Jolie", "Eric Jones"] - result
    
    
    // 4.
    
    const computeExamPass = (arr4) => arr4.map(mark => {
        if (mark.grade > 5) {
            return mark.name + " has passed the exam";
        }
        return mark.name + " has not passed the exam";
    }
    );
    
    
    
       console.log(computeExamPass([
        {
        name: "Angelina",
        surname: "Jolie",
        grade: 7
        },
        {
        name: "Eric",
        surname: "Jones",
        grade: 3
        },
       ]));
    
    //    [
    //     "Angelina Jolie has passed the exam",
    //     "Eric Jones has not passed the exam"
    //     ]
    
       

//  5.  Implementati functia de mai jos si utilizati rezultatul pentru a afisa elementele intr-o pagina

function getPersonsDomElements(arr5){
    arr5.forEach(person => {
        let name = document.createElement("h1");
        name.textContent = person.name + " " + person.surname;
        document.querySelector("body").appendChild(name);

        let age = document.createElement("h2");
        age.textContent = person.age;
        document.querySelector("body").appendChild(age);
    });
   }


   console.log(getPersonsDomElements([
    {
    name: "Angelina",
    surname: "Jolie",
    age: 80
    },
    {
    name: "Eric",
    surname: "Jones",
    age: 27
    },
   ]));
   

   /* Ex.1
Loop through the Array and remove all non-active users from the initial Array */

const myData = [{
    name: 'Iggy Turskis',
    active: false
}, {
    name: 'Geoff Newell',
    active: true
}, {
    name: 'Peter Newnham',
    active: true
}, {
    name: 'James Walker',
    active: false
}];


const truth = myData.filter(user => user.active === true);
console.log(truth)


/*Ex 2
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati toate itemele cu distanta mai mica de 10000  - folosind filter
Returnati distanta totala - folosind reduce
*/

const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654 },
    { from: 'Sydney', to: 'chittagong', distance: 8858 },
    { from: 'Kolkata', to: 'Sylhet', distance: 670 }
]

const calcDistance = array => array.map(road => `${road.distance * 0.621371} miles`)
console.log(calcDistance(distances))


const calcSmallDistance = array => array.filter(road => road.distance < 10000)
console.log(calcSmallDistance(distances))


const totalDistance = array => array.reduce((acc, road) => {
    return acc + road.distance;
}, 0)
console.log(totalDistance(distances))



// Returnati un array de obiecte care sa contina doar id si titlul fiecarui item de mai jos 

const releases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

const just = releases.map(elem => (
    {
        ids: elem.id,
        title: elem.title
    }
))
console.log(just)

let movies = releases.reduce((acc, movie) => {
    acc.push({ id: movie.id, title: movie.title });
    return acc;
}, []);
console.log(movies);



// Returnati id-urile videourilor care au rating 5.0

const newReleases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];


let ratings = newReleases
    .filter((movie => movie.rating === 5.0))
    .map((movie) => movie.id);

console.log(ratings)



// Vreau la final sa am o lista de video ids

const movieLists = [
    {
        name: "New Releases",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "Dramas",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];


const moviesTwo = movieLists.map(elem => elem.videos)
    .flat()
    .map(video => video.id)

console.log(moviesTwo)




//Returnati id, title, si 150x200 box art url pentru fiecare video
//hint aveti de folosit map,filter

let movieLists2 = [
    {
        name: "Instant Queue",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "New Releases",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];

let myList = movieLists2.map(film => film.videos)
    .flat();
let finalList = myList.map(item => {
    let img150 = item.boxarts.find(boxart => boxart.width === 150);
    return {
        id: item.id,
        title: item.title,
        img: img150,
        url: item.url
    }

});
console.log(finalList)


