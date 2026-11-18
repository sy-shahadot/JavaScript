document.getElementById('click').onclick = function(){
    document.getElementById('click').innerHTML = "Clicked !";
    document.getElementById('click').style.backgroundColor ="green";
}
ok
document.getElementById('sub').addEventListener( 'click', function(){
    document.getElementById('click').style.display = "none";
} ) 