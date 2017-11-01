let input = $('div.form-group input');
let form = $('form.navbar-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let nome = input.value;
    $.GET(`http://paleobiodb.org/data1.2/taxa/single.json?name=${nome}&show=attr`);
});