let result = 0, count = 0, note;
while (true)
{
note = +prompt ("entrez une note (0-20) ou -1 POUR arrêté :" );
if ( note == -1)
    break;
if (note>= 0 && note <= 20) 
 break;
if( note == -1)
break;
if(note>= 0 && note <= 20)
{result += note;
    count++;
}
else{
    alert("note non valider !");

}
}
if (count > 0)
{
    alert("nombre de notes = " + count +" , moyenne = " + (result / count))
}
else {
    alert("aucune note valide !");
}

    
