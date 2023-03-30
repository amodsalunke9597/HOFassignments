// Sample list of books
const books = [
    {
      title: "The Alchemist",
      author: "paulo coelho",
      year: 1988
    },
    {
      title: "The Hunger Games",
      author: "suzanne collins",
      year: 2008
    },
    {
      title: "To Kill a Mockingbird",
      author: "harper lee",
      year: 1960
    },
    {
      title: "The Great Gatsby",
      author: "f. scott fitzgerald",
      year: 1925
    },
    {
      title: "The Catcher in the Rye",
      author: "j.d. salinger",
      year: 1951
    }
  ];
  
  // Filter out books published before 2010 and capitalize author names
  const filteredBooks = books.filter(book => book.year >= 2010).map(book => {
    return {
      title: book.title,
      author: book.author.split(" ").map(name => name.charAt(0).toUpperCase() + name.slice(1)).join(" "),
      year: book.year
    };
  });
  
  // Output the filtered books
  console.log(filteredBooks);
  