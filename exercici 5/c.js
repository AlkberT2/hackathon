window.onstorage = () => {
    // When local storage changes, dump the list to
    // the console.
    alert("Hay cambios en el storage");
    console.log(JSON.parse(window.localStorage.getItem('sampleList')));    
  };


 let addButton = document.getElementById('addButton');
 
addButton.addEventListener('click', function() {
  localStorage.setItem(keywordElement.value, valElement.value);
});
  