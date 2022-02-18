class Book{
    constructor(title,author,isbn)
    {
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

class UI{
    
    static displayBooks()
    {
       
        const books=[
            {
                title:'book1',
                author:'John Doe',
                isbn : '12345'
            },
            {
                title:'book2',
                author:'Jane Doe',
                isbn : '15378'
            }
        ];

        books.forEach((book)=>UI.addBooks(book));
    }

    

    static addBooks(book)
    {
        
        const tr=document.createElement('tr');
        tr.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href=# class="badge rounded-pill bg-danger">X</a></td>
        `;
        console.log(tr);
        document.querySelector('.t-body').appendChild(tr);
        
    }
    static deleteBook()
    {

    }
}

document.addEventListener('DOMContentLoaded',UI.displayBooks);