var names=["The Book","Naresh Mittal", "Saroj Mittal", "Rohini Mittal","Nitin Mittal","Anika Mittal","Kiyaan Mittal"];

  var pics=[
    "https://images-na.ssl-images-amazon.com/images/I/91zbi9M+mKL.jpg",
    "https://i.pinimg.com/originals/d4/1f/09/d41f094d518ebe9738f8eb1392ce31a5.jpg",
    "https://cdn2.vectorstock.com/i/1000x1000/32/86/cartoon-old-woman-with-a-cane-vector-25043286.jpg",
    "https://i.pinimg.com/736x/cd/b4/52/cdb4523a56c9e94deaeb76c4be0e0025.jpg",
    "https://previews.123rf.com/images/vectorkif/vectorkif1709/vectorkif170900013/85709526-business-man-cartoon-character-in-smart-clothes-office-style-young-handsome-businessman-in-suit-stan.jpg",
    "https://i.pinimg.com/originals/63/dd/3f/63dd3fc6f01b3c7b66cde23d4714498d.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMnIO0wiQ4fMuD47YHmFvrQYEAtxiRMENCCQ&usqp=CAU",
    "https://image.shutterstock.com/image-vector/cute-kid-welcomevector-illustration-260nw-514865776.jpg"]
  
  var i= 0;
  
var p = 0;

  function slide()
{
 
  document.getElementById("album").src = pics[i];
  i++;
  
  if(i == 7) {
      i=0;    
   }
  
  lableToUpdate = document.getElementById("label_name");
  lableToUpdate.innerHTML  = names[p];
  p++;
  
  if(p == 7) {
    p=0;
  }
  }