    function buscar(){
        const id= document.getElementById("postId").value;
        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
        .then(res => res.json())
        .then(dados =>{
            document.getElementById("saida").textContent =
            JSON.stringify(dados, null, 2);
        });
    };