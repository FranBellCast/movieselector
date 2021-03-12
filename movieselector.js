class Movie {
    constructor(name) {
     this.name = name;
     this.rating = 0;
    }
   }
   
   var movie1 = new Movie("The Room");
   
   var movie2 = new Movie("Rocky");
   movie2.rating = 5;
   
   var movie3 = new Movie("Creed");
   movie3.rating = 4.5;
   
   console.log(movie1);
   console.log(movie2);
   console.log(movie3);