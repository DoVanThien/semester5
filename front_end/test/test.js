// const ACCESS_KEY = wt3siU2g9HdgFOKnCWn5WBIBWjkZC6e5BHu6zY78zbM;
const searchBtn = document.getElementById('search-btn');
const searchBtnn = document.getElementById('search-btnn');
const hotel = document.getElementById('hotel')

searchBtn.addEventListener('click', getImages);
searchBtnn.addEventListener('click', getImages);
searchBtnn.addEventListener('click', otherPage);


function otherPage(){
    window.location.href='test1.html';
}

function getImages(){
    let inputTxt = document.getElementById('inputt').value.trim();
    fetch(`https://api.unsplash.com/search/photos?client_id=wt3siU2g9HdgFOKnCWn5WBIBWjkZC6e5BHu6zY78zbM&per_page=20&query=${inputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.results){
            data.results.forEach(hotel => {
                html += `
                    <div class="hotel-item" id = ${hotel.id}>
                        <img  src="${hotel.urls.thumb}" alt="hotel">
                    </div>
                `
            });
        }
        hotel.innerHTML = html;
    });
    console.log("clicked");
}

// export default getImages;