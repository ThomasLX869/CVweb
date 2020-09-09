/* FIRST ONE */

// Wrap every letter in a span
var textWrapper = document.querySelector('.anim-name-text .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 1})

/* La barre apparait */
  .add({
    targets: '.anim-name-text .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo", 
    duration: 600                     // vitesse apparation barre
  })

  /* Le texte apparait */
  .add({
    targets: '.anim-name-text .line',
    translateX: [0, document.querySelector('.anim-name-text .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 800,
    delay: 50

    /* Le tout disparait */
  }).add({
    targets: '.anim-name-text .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 50,                  // Temps de disparation de la barre après apparation du texte
    offset: '-=850',          
    delay: (el, i) => 69 * (i+1)  //vitesse ecriture texte


    /* Effacement  */
  }).add({
    targets: '.line',
    opacity: 0,
    duration: 80,                //Durée d'effacement
    easing: "easeOutExpo",
    delay: 30                   //Délai avant effacement
  });




/* SECOND TRY */


// Wrap every letter in a span
var textWrapper = document.querySelector('.anim-presentation-text .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 1})

/* La barre apparait */



  .add({
    targets: '.anim-presentation-text .line2',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 600,            // vitesse apparation barre
    delay:1600
  })

  /* Le texte apparait */
  .add({
    targets: '.anim-presentation-text .line2',
    translateX: [0, document.querySelector('.anim-presentation-text .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,           // délai avant apparition du texte
    delay: 50

    /* Le tout disparait */
  }).add({
    targets: '.anim-presentation-text .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 50,                       // Temps de disparation de la barre après apparation du texte
    offset: '-=820',
    delay: (el, i) => 35 * (i+1)        //vitesse ecriture texte


    /* Effacement  */
  }).add({
    targets: '.line2',
    opacity: 0,
    duration: 80,                //Durée d'effacement
    easing: "easeOutExpo",
    delay: 30                   //Délai avant effacement
  });



  /* THIRD TRY */


// Wrap every letter in a span
var textWrapper = document.querySelector('.anim-presentation-text2 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: 1})

/* La barre apparait */



  .add({
    targets: '.anim-presentation-text2 .line3',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 600,            // vitesse apparation barre
    delay:3200
  })

  /* Le texte apparait */
  .add({
    targets: '.anim-presentation-text2 .line3',
    translateX: [0, document.querySelector('.anim-presentation-text2 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,           // délai avant apparition du texte
    delay: 50

    /* Le tout disparait */
  }).add({
    targets: '.anim-presentation-text2 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 50,                        // Temps de disparation de la barre après apparation du texte
    offset: '-=820',
    delay: (el, i) => 35 * (i+1)        //vitesse ecriture texte


    /* Effacement  */
  }).add({
    targets: '.line3',
    opacity: 0,
    duration: 80,                //Durée d'effacement
    easing: "easeOutExpo",
    delay: 30                   //Délai avant effacement
  });