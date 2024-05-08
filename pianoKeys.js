let pianoKeysAction = [];

const pianoKeys=[
    {className:"white",name:"a"},
    {className:"black",name:"w"}, 
    {className:"white",name:"s"}, 
    {className:"black",name:"e"}, 
    {className:"white",name:"d"}, 
    {className:"white",name:"f"}, 
    {className:"black",name:"t"}, 
    {className:"white",name:"g"}, 
    {className:"black",name:"y"}, 
    {className:"white",name:"h"}, 
    {className:"black",name:"u"}, 
    {className:"white",name:"j"}, 
    {className:"white",name:"k"}, 
    {className:"black",name:"o"}, 
    {className:"white",name:"l"}, 
    {className:"black",name:"p"}, 
    {className:"white",name:";"}, 
];

const showKeys = ()=> {
    const ul = document.createElement('ul');
    ul.classList.add('piano-keys');

    pianoKeys.forEach(key => {
        const li = document.createElement('li');
        li.classList.add('key', key.className);
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

