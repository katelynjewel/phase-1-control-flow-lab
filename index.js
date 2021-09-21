function scuberGreetingForFeet(x){
  if (x <= 400){
    return(`This one is on me!`);
   }  else if (x > 2500){
    return(`No can do.`);
   } else if (x >= 2000){
    return(`I will gladly take your thirty bucks.`);
  }
}

function ternaryCheckCity(city){
  city === 'NYC' ? (`Ok, sounds good.`) : (`No go.`);
  return city === 'NYC' ? (`Ok, sounds good.`) : (`No go.`);
}

function switchOnCharmFromTip(money){
  switch(money){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    case 'thanks for everything':
      return 'Bye.'
  }
}

  