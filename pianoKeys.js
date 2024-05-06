let pianoKeysAction = [];

const pianoKeys=[
    {className:"key",className2:"white",name:"a"},
    {className:"key",className2:"black",name:"w"}, 
    {className:"key",className2:"white",name:"s"}, 
    {className:"key",className2:"black",name:"e"}, 
    {className:"key",className2:"white",name:"d"}, 
    {className:"key",className2:"white",name:"f"}, 
    {className:"key",className2:"black",name:"t"}, 
    {className:"key",className2:"white",name:"g"}, 
    {className:"key",className2:"black",name:"y"}, 
    {className:"key",className2:"white",name:"h"}, 
    {className:"key",className2:"black",name:"u"}, 
    {className:"key",className2:"white",name:"j"}, 
    {className:"key",className2:"white",name:"k"}, 
    {className:"key",className2:"black",name:"o"}, 
    {className:"key",className2:"white",name:"l"}, 
    {className:"key",className2:"black",name:"p"}, 
    {className:"key",className2:"white",name:";"}, 
];

const showKeys = ()=> {
    const ul = document.createElement('ul');
    ul.classList.add('piano-keys');

    pianoKeys.forEach(key => {
        const li = document.createElement('li');
        li.classList.add(key.className, key.className2);
        li.dataset.key = key.name;
        li.innerHTML = `<span>${key.name}</span>`;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);

    pianoKeysAction = document.querySelectorAll(".piano-keys .key");
    pianoKeysAction.forEach(key => {
        allKeys.push(key.dataset.key);
        key.addEventListener("click", () => playTune(key.dataset.key));
    });
};

