function search_Data() {
    var outdiv = document.createElement('div');
    let input = document.getElementById('searchbar');
    let searchBtn = document.getElementById("search-btn");
    //input = input.toLowerCase();

    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        outdiv.innerHTML = "";
        console.log('entered');
        var inputValue = document.getElementById('searchbar').value;
        var res = fetch('https://api.tvmaze.com/search/shows?q=' + inputValue)
            .then(result => result.json())
            .then(data => {
                console.log(data);
                for (i = 0; i < data.length; i++) {
                    var div = document.createElement('div');
                    div.style.width = "100px";
                    div.style.backgroundColor = "aqua";
                    var img = document.createElement('img');
                    if (data[i].show.image.medium !== null) {
                        img.setAttribute('src', data[i].show.image.medium)
                    } else {
                        img.setAttribute('src', "https://picsum.photos/200/300")
                    }
                    div.appendChild(img);
                    var name = data[i].show.name;
                    var Name = document.createElement('div');
                    Name.innerHTML = name;
                    div.appendChild(Name);

                    var genres = data[i].show.genres;
                    var Genres = document.createElement('div');
                    Genres.innerHTML = genres;
                    div.appendChild(Genres);

                    var premired = data[i].show.premiered;
                    var Premired = document.createElement('div');
                    Premired.innerHTML = premired;
                    div.appendChild(Premired);

                    var scheduled = data[i].show.schedule.time;
                    var Scheduled = document.createElement('div');
                    Scheduled.innerHTML = scheduled;
                    div.appendChild(Scheduled);

                    outdiv.appendChild(div);
                    document.body.appendChild(outdiv);


                }
            })
    })

}
search_Data();