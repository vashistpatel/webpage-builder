<template>
  <div>
    <section class="hero has-background-link-light is-fullheight">
      <div class="box my-6 mx-5">
        <section class="section is-large my-6" id="faq_box">
  
          <button class="question">How to add new text feilds?</button>
          <div class="answer">
            <p>Click on "Add New..." drop down menu and here you can select the type of text feild you want to add.</p>
            <img class ="instruction" src="../Instructionalgifs/howtoaddtextfield.gif" />
          </div>

          <button class="question">How to add new images?</button>
          <div class="answer">
            <p>Click on "New Image..." drop down menu, then select on the size you would like your image to be, paste the url of the image and press enter.</p>
            <img class ="instruction" src="../Instructionalgifs/howtoaddimage.gif" />
          </div>

          <button class="question">How to align text?</button>
          <div class="answer">
            <p>Click on "Alignment" drop down menu and select your desired option.</p>
            <img class ="instruction" src="../Instructionalgifs/howtoalign.gif" />
          </div>

          <button class="question">How to change font?</button>
          <div class="answer">
            <p>First select the text feild of which you want to change the font. Then click on "Font..." drop down mene and select you desired option.</p>
            <img class ="instruction" src="../Instructionalgifs/howtochangefont.gif" />
          </div>

          <button class="question">How to add charts?</button>
          <div class="answer">
            <p>Click on "Charts..." dropdown menu and select the type of chart you want. Then input the chart title and data.</p>
            <img class ="instruction" src="../Instructionalgifs/howtoaddchart.gif" />
          </div>

          <button class="question">How to change the background colour for text feild?</button>
          <div class="answer">
            <p>Click on the text you want of which you want to change the backgroud of, then click "Color Selector" and pick your desired color.</p>
            <img class ="instruction" src="../Instructionalgifs/howtochangebgtext.gif" />
          </div>

          <button class="question">How to change the text colour?</button>
          <div class="answer">
            <p>Click on the text you want to set the color of, then click "Text Colour" and pick your desired color.</p>
            <img class ="instruction" src="../Instructionalgifs/howtochangefontcolor.gif" />
          </div>



          <button class="question">How to import a HTML template?</button>
          <div class="answer">
            <p>Click "File" then "Choose a File" and select your desired file.</p>
            <img class ="instruction" src="../Instructionalgifs/howtoimport.gif" />
          </div>

          <button class="question">How to save your file?</button>
          <div class="answer">
            <p>Click "File" then "Export", give your file a name and click "save".</p>
            <img class ="instruction" src="../Instructionalgifs/howtosave.gif" />
          </div>

          <button class="question">How can I check the code for my website?</button>
          <div class="answer">
            <p>Click on "Display Code" button.</p>
            <img class ="instruction" src="../Instructionalgifs/howtoshowcode.gif" />
          </div>

        </section>

      </div>
    </section>
  </div>
</template>


<script>
export default {
  mounted() {
    // removes the second navbar
    console.log("remving");
    sessionStorage.setItem("type", false);
    this.$store.commit("setNavFalse", false);

    //https://www.w3schools.com/howto/howto_js_accordion.asp
    var ques = document.getElementsByClassName("question");
    for (var i = 0; i < ques.length; i++) {
      ques[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var ans = this.nextElementSibling;
        if (ans.style.display ==="block") {
          ans.style.display="none";
        } else {
          ans.style.display = "block";
        }
      });
    }

  },
};
</script>

<style >
.instruction{
  height:45rem;
  width:auto;
  /* margin-left:10%; */
  text-align: center;
}
.box {
  width: 98%;
}
#faq_box {
  position: relative;
  padding: 0;
}

.question {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 15px;
  width: 100%;
  text-align: middle;
  border: none;
  outline-color: rgb(87, 145, 216);
  font-size: 20px;
}
/* change backgorund colours when the question is clicked on by or hover uponed */
.active, .question:hover {
  background-color: rgb(238,243,252);
}
/* styling for the answer */
.answer {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
  margin-top:10px;
  margin-bottom:10px;
  text-align: center;
  font-weight:bold;
  font-size: 20px;
}

</style>