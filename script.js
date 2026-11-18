//your JS code here. If required.

const form = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

form.addEventListener("submit", function(e) {

    e.preventDefault();
    
        const title = document.getElementById("title").value.trim();
            const author = document.getElementById("author").value.trim();
                const isbn = document.getElementById("isbn").value.trim();
                
                    if (title === "" || author === "" || isbn === "") {
                            return;
                                }
                                
const row = document.createElement("tr");

const titleCell = document.createElement("td");
titleCell.textContent = title;
                                            
const authorCell = document.createElement("td");
authorCell.textContent = author;
                                                    
const isbnCell = document.createElement("td");
isbnCell.textContent = isbn;
                                                            
const deleteCell = document.createElement("td");
const deleteBtn = document.createElement("button");
                                                                    
deleteBtn.textContent = "X";
deleteBtn.className = "delete";
                                                                            
deleteCell.appendChild(deleteBtn);
                                                                                
row.appendChild(titleCell);
row.appendChild(authorCell);
row.appendChild(isbnCell);
row.appendChild(deleteCell);
                                                                                                
bookList.appendChild(row);
                                                                                                    

	form.reset();
                                                                                                        
});
                                                                                                        
                                                                                                        // Delete book
bookList.addEventListener("click", function(e) {
                                                                                                        
if (e.target.classList.contains("delete")) {
e.target.parentElement.parentElement.remove();
}
                                                                                                                        
});


