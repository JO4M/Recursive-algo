// If-else-switch méthodes
// Prix du billet en fonction de l'âge

function prixBillet(age) {
    if (age <= 12) {
      return "Prix du billet : $10";
    } else if (age >= 13 && age <= 17) {
      return "Prix du billet : $15";
    } else if (age >= 18) {
      return "Prix du billet : $20";
    } else {
      return "Age invalide.";
    }
  }


// Conseils basés sur la température et la pluie
  function weatherClothingAdviser(temp, raining) {
    
    if (temp <= 10) {
      return raining 
        ? "Il fait froid. Portez un manteau chaud et prenez un parapluie."
        : "Il fait froid. Portez un manteau chaud.";
    } else if (temp > 10 && temp <= 20) {
      return raining
        ? "Il fait frais. Portez une veste et prenez un parapluie."
        : "Il fait frais. Portez une veste.";
    } else {
      return raining
        ? "Il fait chaud. Portez des vêtements légers et prenez un parapluie."
        : "Il fait chaud. Portez des vêtements légers.";
    }
  }
  
  // Méthode récursive
  // Calcul de la suite de Fibonacci
  function fibonacci(n) { // n est le nombre de termes de la suite
    if (n <= 1) { // Cas de base
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2); 
  }
  

  // Méthode récursive du calcul de la puissance d'un nombre
  function puissance(nombre, exposant) {
    // Cas de base : si l'exposant est 0, le résultat est 1
    if (exposant === 0) {
        return 1;
    }
    // Cas récursif : multiplier le nombre par lui-même (exposant - 1) fois
    return nombre * puissance(nombre, exposant - 1);
}

