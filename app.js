$(document).on("ready", function () {

  $(".js-character-ajax").on("click", function () {

    $.ajax({
      url: "https://ironhack-characters.herokuapp.com/characters",

      success: function (theData) {
        console.log("It worked!");
        console.log(theData);

        displayCharacters(theData);
      },

      error: function (theError) {
        console.log("It failed. :( ");
        console.log(theError.responseJSON);
      }
    });

  });

 $(".js-add-new").on("click", function (saveCharacter) {
    
    var newCharacter = {
      name: $('#name').val(),
      occupation: $('#occupation').val(),
      weapon: $('#weapon').val()
    };
    console.log(newCharacter);
    saveCharacter.preventDefault();

    $.ajax({
      type: "post",
      url: "https://ironhack-characters.herokuapp.com/characters",
      data: newCharacter,

      success: function () {
        alert("The new character has been added successfully.")
        displayCharacters([ newCharacter ]);

      },
      error: function (error) {
        console.log("FAIL");
        console.log(error.responseJSON);
      }
    });
 });

  $(".js-stop-link").on("click", function (event) {
    event.preventDefault();

    alert("Did you you want to visit Wookiepedia? Nope.");
  });

});

function displayCharacters (characters) {
  characters.forEach(function (oneCharacter) {
    var html = `
      <li>
        <p>Name: ${oneCharacter.name}</p>
        <p>Occupation: ${oneCharacter.occupation}</p>
        <p>Weapon: ${oneCharacter.weapon}</p>
      </li>`;

    $(".js-character-list").append(html);
  });
}