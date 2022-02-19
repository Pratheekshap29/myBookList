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
        <td><a href=# class="badge rounded-pill bg-danger delete">X</a></td>
        `;
        console.log(tr);
        document.querySelector('#t-body').appendChild(tr);
        
    }
    static deleteBook(el)
    {
        if(confirm('Are you sure you want to delete?'))
        {
            el.remove();
            UI.addMessage('The book details got deleted!','danger');
        }   
    }
    static removeAll()
    {
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value='';

    }
    static addMessage(msg,type){
        const div=document.createElement('div');
        div.className=`bg-${type} text-white p-3 mb-4`;
        div.appendChild(document.createTextNode(msg));
        const container=document.querySelector('.container');
        const form=document.getElementById('my-form');
        container.insertBefore(div,form);

        setTimeout(()=>{
            div.remove();
        },3000)
    }
}

//display
document.addEventListener('DOMContentLoaded',UI.displayBooks);

//add book
document.querySelector('#my-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const isbn=document.getElementById('isbn').value;
    if(title==='' || author==='' || isbn==='')
    {
        UI.addMessage('Enter all the details!','info')
    }
    else
    {
        const book=new Book(title,author,isbn);
        UI.addBooks(book);
        UI.addMessage('The book was successfully added!','info');
        UI.removeAll();
    }
});

document.getElementById('t-body').addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete'))
    {
        UI.deleteBook(e.target.parentElement.parentElement);
    }

})

