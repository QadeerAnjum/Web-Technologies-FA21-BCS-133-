$(document).ready(function(){
    
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts', 
        method: 'GET',
        success: function(data) {
           
            for (let i = 0; i < data.length; i++) {
                $('#apiData').append(`
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">${data[i].title}</h5>
                                <p class="card-text">${data[i].body}</p>
                            </div>
                        </div>
                    </div>
                `);
            }
        },
        error: function(xhr, status, error) {
           
            console.error(xhr, status, error);
        }
    });
});
