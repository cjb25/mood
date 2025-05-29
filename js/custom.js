//waiting for the page to load beforestarting to run the code
document.addEventListener("DOMContentLoaded", function () {
  //finding and storing the form element using its ID so action can be taken once its submitted, this is where someone will choose their mood and write a note
  //the code is waiting for the submission
  const form = document.getElementById("moodForm");
  //get and store the section where results like messages and images will be displayed to the user
  const resultSection = document.getElementById("result");
  //locate then store the area where the mood messages (user input) will be shown
  const message = document.getElementById("message");
  //get and store the element where the users written note will appear after submitted
  const userNote = document.getElementById("userNote");
  //find and store the image element that will visually reflect the users selected mood and show on the page
  const moodImage = document.getElementById("moodImage");

  //adding an event listener for when the form submits, so code can run a function to process the input.
  form.addEventListener("submit", function (event) {
    //stops the page from refreshing or reloading after pressing submit
    event.preventDefault();
    //grabbing the form data to store it (answers from the form like the mood and what they wrote about it)
    const formData = new FormData(form);
    //turning the form data into an object so I can work with it (like a container collecting answers to use later)
    const data = Object.fromEntries(formData.entries());

    //grabbing the mood and note from the form object and storing into variables
    //get the value the user picked for their mood
    const mood = data.mood;
    //get the note the user typed
    const note = data.note;

    //these are empty variables to hold what will be shown to the user
    let output; //the message that will display to user
    let imgAlt; //what the image means (screen reader)
    let imgSrc; //the image that displays on screen

    //depending on the selected mood, choose a message and an image

    //if the user chooses "happy"
    if (mood === "happy") {
      output = "Yay! Keep shining!😊"; //the user will see this message
      imgAlt = "Smiling happy face emoji"; //sr will read the description
      imgSrc = "images/happy.png"; //the image will show to user
      document.body.className = "happy"; //using classList to change the background color to match the mood
      //if the user picked "sad"
    } else if (mood === "sad") {
      output = "It's okay to feel sad. Sending hugs 💙";
      imgAlt = "Sad face emoji";
      imgSrc = "images/sad.png";
      document.body.className = "sad"; //changes background color
      //if the user picks "calm"
    } else if (mood === "calm") {
      output = "Breathe into the calmness.";
      imgAlt = "Peaceful calm face emoji";
      imgSrc = "images/calm.png";
      document.body.className = "calm"; //background color changes
    }
    //if the user forgets to pick an option
    else {
      output = "Please select an item in the list";
      imgSrc = ""; //no image
      imgAlt = ""; //no description
    }

    //updating the page with the new content based on the users mood and note
    //the mood message
    message.textContent = output;
    //the user's note
    userNote.textContent = note;
    //the maching image
    moodImage.src = imgSrc;
    moodImage.alt = imgAlt;
    //making sure the result section is visible
    resultSection.hidden = false;
    //moving screen reader focus to the result
    resultSection.focus();
    //clearing the form so the user can enter something new
    form.reset();
  });
});
