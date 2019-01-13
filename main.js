let mainDiv = document.getElementsByClassName('main');
let url = 'http://jsonplaceholder.typicode.com';
let userId;

function getRequest() {
    /* Função que trata a requisição de GET para ambos os casos (ID fornecida ou não). */
    if (userId) {
        axios.get(url + '/posts?userId=' + userId)
            .then((response) => successResponse(response))
            .catch((error) => alert(error));
    } else {
        axios.get(url + '/posts')
            .then((response) => successResponse(response))
            .catch((error) => alert(error));
    }
}

function postRequest() {
    axios.post(url + '/posts', {
            title: document.getElementById("title").value,
            body: document.getElementById("text").value,
            userId: userId
        })
        .then((response) => {
            alert("Posted!\nStatus: " + response.status +
                "\nTitle: " + response.data.title +
                "\nBody: " + response.data.body +
                "\nPostID: " + response.data.id +
                "\nUserID: " + response.data.userId);
        })
        .catch((error) => alert(error));

    document.getElementById("title").value = '';
    document.getElementById("text").value = '';
}

function successResponse(response) {

    /* Função responsável por criar as divs de cada um dos posts retornados na requisição. */

    Object.values(response.data).forEach((element) => {
        mainDiv[0].insertAdjacentHTML('beforeend',
            '<div class="post-box"> <h1 id="postHeader">' + element.title +
            '</h1> <p id="postId">PostID: ' + element.id +
            '<p id="postId">UserID: ' + element.userId +
            '</p> <p>' + element.body + '<p> </div>');
    });
}

function deleteRequest() {
    let postId = document.getElementById("delete-post").value;
    axios.delete(url + '/posts/' + postId)
        .then((response) => {
            alert("Post removed!\nStatus: " + response.status);
            console.log(response);
        })
        .catch((error) => alert(error));
}

function firstRequest() {

    /* Função chamada após o usuário realizar a primeira ação (fornecer ou não seu ID) /
    /  Caso a ID seja fornecida são mostrados os botões de interação com posts         /
    /  (campos de inserção de novo post, botões de delete e postagem).                */

    let startScreen = document.getElementsByClassName("start-screen");
    let postInput = document.getElementsByClassName("post-input");
    let buttons = document.getElementsByClassName("post-btn");
    let deleteForm = document.getElementById("delete-post");

    userId = document.getElementById("id").value;
    startScreen[0].style.display = "none";

    if (userId) {
        postInput[0].style.display = "block";
        buttons[0].style.display = "inline";
        buttons[1].style.display = "inline";
        deleteForm.style.display = "inline";
    }

    getRequest();
}