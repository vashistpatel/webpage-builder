<template>
  <!-- https://bulma.io/documentation/components/navbar/ -->
  <!-- show nav bar if in builderpage or Displaycode -->
  <div v-show="navType">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <!-- Burger menu -->
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <!-- Element bar -->
      <div id="navbarLinks" class="navbar-menu">
        <div class="navbar-start">

          <!--add new drop down-->
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Add New... </a>
            <div id="new" class="navbar-dropdown">
              <a id="h1" value="header" class="navbar-item"> Header </a>
              <hr class="navbar-divider" />
              <a id="p" value="paragraph" class="navbar-item"> Paragraph </a>
              <hr class="navbar-divider" />
              <a id="a" value="link" class="navbar-item"> Link </a>
            </div>
          </div>
          <!-- Image element drop down -->
          <div class="navbar-item has-dropdown is-hoverable">
            <a id="new-image-link" class="navbar-link"> New Image... </a>
            <div id="image" class="navbar-dropdown">
              <a id="small-image" class="navbar-item"> Small </a>
              <hr class="navbar-divider" />
              <a id="medium-image" class="navbar-item"> Medium </a>
              <hr class="navbar-divider" />
              <a id="large-image" class="navbar-item"> Large </a>
            </div>
          </div>

          <!-- Text Align drop down -->
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Alignment </a>
            <div id="align" class="navbar-dropdown">
              <a id="align-left" class="navbar-item"> Left </a>
              <hr class="navbar-divider" />
              <a id="align-centre" class="navbar-item"> Centre </a>
              <hr class="navbar-divider" />
              <a id="align-right" class="navbar-item"> Right </a>
              <hr class="navbar-divider" />
              <a id="SBS" class="navbar-item"> Side by Side </a>
            </div>
          </div>

          <!-- Font Drop down -->
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Font... </a>
            <div id="apply-font" class="navbar-dropdown">
              <a id="bold-font" class="navbar-item"> Bold </a>
              <hr class="navbar-divider" />
              <a id="italic-font" class="navbar-item"> Italic </a>
              <hr class="navbar-divider" />
              <a id="underline-font" class="navbar-item"> Underline </a>
            </div>
          </div>

          <!-- chart drop down -->
          <div class="navbar-item has-dropdown is-hoverable">
            <a id="new-chart-link" class="navbar-link"> Charts... </a>
            <div id="charts" class="navbar-dropdown">
              <a id="scatter-plot-2d" class="navbar-item">
                Scatter Plot (2D)
              </a>
              <hr class="navbar-divider" />
              <a id="bar-chart" class="navbar-item"> Bar Chart </a>
              <hr class="navbar-divider" />
              <a id="scatter-plot-3d" class="navbar-item">
                Scatter Plot (3D)
              </a>
            </div>
          </div>

          <!-- color selector drop down -->
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Color Selector </a>
            <div id="new" class="navbar-dropdown">
              <input type="color" id="Colorchanger" class="input" />
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Text Colour </a>
            <div id="new" class="navbar-dropdown">
              <input type="color" id="ColourText" class="input" />
            </div>
          </div>
          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Side By Side </a>
            <div id="new" class="navbar-dropdown">
              <input type="color" id="SBS" class="input" />
            </div>
          </div> -->
        </div>

        <!-- File option drop down -->
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> File </a>

            <!-- https://bulma.io/documentation/form/file/ -->
            <!-- create New File button -->
            <div id="new" class="navbar-dropdown">
              <div class="navbar-item">
                <div id="NewFile" class="file is-white" type="file">
                  <label class="file-label">
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-file"></i>
                      </span>
                      <span class="file-label">New File</span>
                    </span>
                  </label>
                </div>
              </div>
             
              <!-- export button -->
              <div class="navbar-item">
                <div id="Exporting" class="file is-white" type="file">
                  <label class="file-label">
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-download"></i>
                      </span>
                      <span class="file-label">Export</span>
                    </span>
                  </label>
                </div>
              </div>
 
              <!-- Import a file button -->
              <div class="navbar-item">
                <div id="file-import" class="file is-white" type="file">
                  <label class="file-label">
                    <!-- https://bulma.io/documentation/form/file/ -->
                    <input class="file-input" type="file" name="resume" />
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload"></i>
                      </span>
                      <span class="file-label">Choose a file…</span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--Display code view button router-->
        <div class="button is-dark">
          <router-link to="/display" class="has-text-white" v-on:click="updateSave()">Display Code</router-link>
        </div>

        <!-- https://bulma.io/documentation/components/modal/ -->
        <!-- modal for exporting file -->
        <div id="exportModal" class="modal">
          <div class="modalPosition">
            <div class="modal-content" id="content">

              <!--file name input box-->
              <input class="input" type="text" id="usergiven_filename" placeholder="File Name" />
              <div id="exportButtons">

                <!--save and cancle buttons-->
                <button class="button is-success" type="save" id="save">Save</button>
                <button class="button" id="cancel">Cancel</button>
              </div>
            </div>
          </div>
        </div>

        <!-- modal for new file warning -->
        <div id="NewModal" class="modal">
          <div class="modalPosition">
            <div class="modal-content" id="content">
              <p class="title">Warning!</p>
              <!-- warning message -->
              <p class="subtitle" id="newFileMessage"> By accepting this all work that has not been exported will be erased!</p>
              <!-- accept and cancel buttons -->
              <button class="button is-danger" id="acceptNewFile">Accept</button>
              <button class="button" id="cancelNewFile">Cancel</button>
            </div>
          </div>
        </div>

        

      </div>
    </nav>
  </div>
</template>
<script>
// Importing Plotly -> https://plotly.com/nodejs/getting-started/
import Plotly from "plotly.js/dist/plotly";
// Importing jQuery -> https://stackoverflow.com/questions/53355086/add-jquery-to-vue-cli-3
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;
// A count variable to keep track of all the elements added to the builder page
var count = 0;
// A variable to keep track of the currently selected element
var currentElement;
// A function that will append a new element to the building space, depending on
// the currently selected element and the type of element to be added
function addElement(tag, name, newID, currentElement) {
  // Creating the new element based on the tag that was passed to the function
  let element = document.createElement(tag);
  if (tag != "div") {
    element.innerHTML = `[New ${name} element created]`;
  }
  element.id = `${name}${newID}`;
  // If there is an element currently selected, append the new element after
  // the currently selected element. Otherwise, append the element to the
  // bottom of the page
  if (currentElement) {
    // https://www.w3schools.com/jquery/html_insertafter.asp
    $(element).insertAfter(`#${currentElement}`);
  } else {
    document.querySelector("#import_box").appendChild(element);
  }
}
// A function that will append a new image to the building space, depending on
// the currently selected element
function addImage(size, url, newID, currentElement) {
  // Creating the new image based on the size that was passed to the function
  let image = document.createElement("img");
  image.src = url;
  image.id = `image${newID}`;
  image.className = `image ${size}`;
  
  
  // If there is an element currently selected, append the image after the
  // currently selected element. Otherwise, append the image to the bottom
  // of the page
  if (currentElement) {
    // https://www.w3schools.com/jquery/html_insertafter.asp
    $(image).insertAfter(`#${currentElement}`);
  } else {
    document.querySelector("#import_box").appendChild(image);
  }
}

// A function that will append a 2D scatter plot to the building space through
// the use of Plotly -> https://plotly.com/javascript/
function add2DPlot(newTitle, xVals, yVals, newID, currentElement) {
  // Adding a new div for the chart
  addElement("div", "div", newID, currentElement);

  // https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers
  // Converting the x and y input values to arrays
  var xArray = xVals.split(",").map((x) => +x);
  var yArray = yVals.split(",").map((x) => +x);

  // Using the new x and y arrays to map the data points
  var datapoints = {
    x: xArray,
    y: yArray,
    mode: "markers",
    type: "scatter",
  };

  // Setting the chart title
  var layout = {
    title: {
      text: newTitle,
    },
  };

  // Setting a data variable which contains the data points, which will be used in the
  // new plot generation -> https://plotly.com/javascript/
  var data = [datapoints];

  // Generating the new plot and adding it to the building space
  Plotly.newPlot(document.querySelector(`#div${count}`), data, layout);
}

// A function that will append a 2D scatter plot to the building space through
// the use of Plotly
function addBarChart(newTitle, xVals, yVals, newID, currentElement) {
  // Adding a new div for the chart
  addElement("div", "div", newID, currentElement);

  // https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers
  // Converting the x and y input values to arrays
  var xArray = xVals.split(",");
  var yArray = yVals.split(",").map((x) => +x);

  // Using the new x and y arrays to create the data
  var data = [
    {
      x: xArray,
      y: yArray,
      type: "bar",
    },
  ];

  // Setting the chart title
  var layout = {
    title: {
      text: newTitle,
    },
  };

  // Generating the new plot and adding it to the building space
  Plotly.newPlot(document.querySelector(`#div${count}`), data, layout);
}

// A function that will append a 2D scatter plot to the building space through
// the use of Plotly -> https://plotly.com/javascript/
function add3DPlot(newTitle, xVals, yVals, zVals, newID, currentElement) {
  // Adding a new div for the chart
  addElement("div", "div", newID, currentElement);

  // https://stackoverflow.com/questions/15677869/how-to-convert-a-string-of-numbers-to-an-array-of-numbers
  // Converting the x, y and z input values to arrays
  var xArray = xVals.split(",").map((x) => +x);
  var yArray = yVals.split(",").map((x) => +x);
  var zArray = zVals.split(",").map((x) => +x);

  // Using the new x and y arrays to map the data points
  var datapoints = {
    x: xArray,
    y: yArray,
    z: zArray,
    mode: "markers",
    marker: {
      size: 12,
      line: {
        color: "rgb(204, 204, 204)",
        width: 1,
      },
      opacity: 0.8,
    },
    type: "scatter3d",
  };

  // Setting the chart title
  var layout = {
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
    },
  };

  // Setting a data variable which contains the data points, which will be used in the
  // new plot generation
  var data = [datapoints];

  // Generating the new plot and adding it to the building space
  Plotly.newPlot(document.querySelector(`#div${count}`), data, layout);
}

export default {
  //load functions
  mounted: function () {
    this.importFile();
    this.exportFile();
    this.features();
    this.mobilejs();
    this.newFile();
    this.reloadWarning();
  },
  computed: {
    navType() {
      
      return this.$store.state.navType;
    },
  },
  methods: {
    //import file
    importFile() {
      const fileInput = document.querySelector("#file-import input[type=file]");
      //when file input gets a new value

      fileInput.onchange = () => {
        // https://www.digitalocean.com/community/tutorials/vuejs-file-reader-component
        const reader = new FileReader();
        var workspace = document.querySelector("#import_box");

        //puts code from file on to the workspace
        reader.onload = (reading) => {
          workspace.innerHTML = reading.target.result;
        };

        //reads texts from file 
        reader.readAsText(fileInput.files[0]);
      };
    },


    //export File
  exportFile() {
      const exportingButton = document.querySelector("#Exporting");
      
      //export button action
      exportingButton.onclick = () => {
    
        //set variables to ids  
        var modal = document.getElementById("exportModal");
        var save = document.getElementById("save");
        var cancel = document.getElementById("cancel");
        
        //activate the modal
        modal.setAttribute("class", "modal is-active");
        modal.style.display = "block";
        
        //close modal button
        cancel.onclick = function () {
          modal.style.display = "none";
        };

        //save button function
        save.onclick = function () {
            
          //string of css that needs to be exported 
          var styleSheet = `#import_box h1 {
                                        font-size: 2em;
                                        font-weight: bold;
                                    }
                                    #import_box *:hover {
                                        border: 1px solid black;
                                        border-radius: 5px;
                                    }
                                    #import_box * {
                                        border: 1px solid transparent;
                                        margin-top: 0.5rem;
                                        margin-bottom: 0.5rem;
                                        word-wrap: break-word;
                                    }

                                    /* This class hides an element when it is being edited*/
                                    .hidden {
                                        display: none;
                                    }
                                    /* These classes are used to align text */
                                    .align-left {
                                        text-align: left;
                                    }
                                    .align-centre {
                                        text-align: center;
                                    }
                                    .align-right {
                                        text-align: right;
                                    }
                                    /* This class is used to expand the navbar section when the user inputs a link */
                                    .expand-link {
                                        width: 35rem;
                                    }
                                    /* These classes are used to size different images */
                                    .Small {
                                        width: 33.33%;
                                        height: auto;
                                    }
                                    .Medium {
                                        width: 66.66%;
                                        height: auto;
                                    }
                                    .Large {
                                        width: 100%;
                                        height: auto;
                                    }
                                    /* These classes are used to change the font of an element */
                                    .bold-font {
                                        font-weight: bold;
                                    }
                                    .italic-font {
                                        font-style: italic;
                                    }
                                    .underline-font {
                                        text-decoration: underline;
                                    }
                                    `;
          //work space id
          const workspace = document.querySelector("#import_box");
          var temp = "https://cdn.plot.ly/plotly-latest.min.js"
          
          //https://stackoverflow.com/questions/1659749/script-tag-in-javascript-string
          var header = "<html><head><script src="+ temp + "></"+"script></head><body>";
          //chosen file name
          var fileName = document.getElementById("usergiven_filename");
          
         //create an export file
         //https://www.geeksforgeeks.org/how-to-trigger-a-file-download-when-clicking-an-html-button-or-javascript/
          var exporter = document.createElement("a");
         //set export attributes
          exporter.setAttribute(
            "href",
            "data:text/plain;charset=utf-8," +
              encodeURIComponent( header+
                workspace.innerHTML + "</body>" +"<style>" + styleSheet + "</style>" + "</html>"
              )
          );
          //make exporter file downloadable
          exporter.setAttribute("download", fileName.value + ".html");
          exporter.click();
          
          //close modal
          modal.style.display = "none";
        };
      };
    },

    //Create new File
    newFile() {
      
      const newFileButton = document.querySelector("#NewFile");
      
      //newfile button function
      newFileButton.onclick = () => {
       //set variables to ids 
        var modal = document.getElementById("NewModal");
        var accept = document.getElementById("acceptNewFile");
        var cancel = document.getElementById("cancelNewFile");

       //make modal active
        modal.setAttribute("class", "modal is-active");
        modal.style.display = "block";

       //close modal button function
        cancel.onclick = function () {
          modal.style.display = "none";
        };

       //accept button function
        accept.onclick = () => {
          const workspace = document.querySelector("#import_box");
          //set workspace to empty
          workspace.innerHTML = " ";

          //clear save data
          this.updateSave();
          
          //close modal
          modal.style.display = "none";
        };
      };
    },

    //save file
    updateSave() {
      //save workspace data
      const fileInput = document.querySelector("#import_box");
      this.$store.commit("setCode", fileInput.innerHTML);
    },

    features() {
      // Adding the new element that was clicked from the bulma navbar menu. If there
      // is a current element selected, append the new element underneath the current
      // element
      $("#new a").click(function () {
        count++;
        addElement(
          $(this).attr("id"),
          $(this).attr("value"),
          count,
          currentElement
        );
      });
      // When an element is clicked, set it to the current element
      $(document).on("click", "#import_box *", function () {
        
        $("#import_box *").removeClass("current");
        currentElement = $(this).attr("id");
        $(this).addClass("current");
      });
      // If the delete key (del) is pressed, delete the current element and
      // set the current element to undefined
      $(document).on("keyup", function (key) {
        let keyPressed = key.which;
        if (keyPressed == 46) {
          $(`#${currentElement}`).remove();
          currentElement = "";
        }
      });
      $("#Colorchanger").change(function () {
        
        var color = $("#Colorchanger").val();
        $(`#${currentElement}`).removeClass("current");
        $(`#${currentElement}`).css("background", color);
      });

      $("#ColourText").change(function () {
     
        var color = $("#ColourText").val();
        $(`#${currentElement}`).removeClass("current");
        $(`#${currentElement}`).css("color", color);
      });
      // $("#SBS").change(function () {
      //   $(`#${currentElement}`).removeClass("current");
      //   $(`#${currentElement}`).css("display:inline-block");
      // });
      // Align the selected element's text when one of the options under align is
      // selected in the builder navbar
      $("#align a").click(function () {

        //check if current element is an image
        if(($(`#${currentElement}`)).hasClass("image") == true){
          
          //if align left
          if($(this).attr("id")=="align-left"){
            //translate to the left
            ($(`#${currentElement}`)).css("margin-left", "0%");
            
          //if centered  
          }else if($(this).attr("id")=="align-centre"){
            //check if it's a small image
            if(($(`#${currentElement}`).attr("class")) == "image Small current"){
              //translate to the left
              ($(`#${currentElement}`)).css("margin-left", "45%");
              
            //check if its a medium image
            }else if (($(`#${currentElement}`).attr("class")) == "image Medium current"){
              //translate to the left
              ($(`#${currentElement}`)).css("margin-left", "40%");
           
            //check if its a large image
            }else if (($(`#${currentElement}`).attr("class")) == "image Large current"){
              //translate to the left
              ($(`#${currentElement}`)).css("margin-left", "35%");
            }
          
          //if align-right
          }else if($(this).attr("id")=="align-right"){
            //check if it's a small image
            if(($(`#${currentElement}`).attr("class")) == "image Small current"){
              //translate to the left
              ($(`#${currentElement}`)).css("margin-left", "90%");
              
            //check if its a medium image
            }else if (($(`#${currentElement}`).attr("class")) == "image Medium current"){
              //translate to the left
              ($(`#${currentElement}`)).css("margin-left", "80%");
           
            //check if its a large image
            }else if (($(`#${currentElement}`).attr("class")) == "image Large current"){
              //translate to the left
              ($(`#${currentElement}`)).css("margin-left", "70%");
            }
          }

        //align any other element
        }else{
        $(`#${currentElement}`).removeClass(
          "align-left align-centre align-right SBS"
        );
        $(`#${currentElement}`).addClass($(this).attr("id"));
        }

        


      });
      // Apply the specified font to the selected element
      $("#apply-font a").click(function () {
        if ($(`#${currentElement}`).hasClass($(this).attr("id"))) {
          $(`#${currentElement}`).removeClass($(this).attr("id"));
        } else {
          $(`#${currentElement}`).addClass($(this).attr("id"));
        }
      });
      // When an element in the builder is double-clicked, add a text field where the
      // user can edit the inner-html of that element
      $(document).on("dblclick", "#import_box *", function () {
        // Checking to see if we already have a text area to prevent duplicate
        // textareas from appearing
        if (
          $(this).attr("id") != "tempArea" &&
          $(this).hasClass("image") == false &&
          $(this).hasClass("plotly") == false &&
          $(this).is("svg") == false &&
          $(this).is("rect") == false
        ) {
          // Hidding the current element
          let currentElement = $(this);
          currentElement.addClass("hidden");
          // Adding a temporary textarea for editing
          let tempTextArea = document.createElement("textarea");
          tempTextArea.innerHTML = $(this).html();
          tempTextArea.id = "tempArea";
          tempTextArea.className = "textarea has-fixed-size";
          // Insert the temporary textarea for editing
          // https://www.w3schools.com/jquery/html_insertafter.asp
          $(tempTextArea).insertAfter($(this));
          // If enter is pressed, display the current element with the value from
          // the textarea, and remove the temporary textarea used for editing
          $(tempTextArea).keypress(function (key) {
            let keyPressed = key.which;
            if (keyPressed == 13) {
              currentElement.html($(this).val());
              $(this).remove();
              currentElement.removeClass("hidden");
            }
          });
        }
      });
      // Adding a new image from the bulma navbar menu based on the selected size
      $("#image a").click(function () {
        // Checking to see if the element has already been clicked. If the element
        // has been clicked, wait until the new photo is added to the builder page
        if ($(this).hasClass("clicked") == false) {
          // Adding a class to show that the element has been clicked
          $(this).addClass("clicked");
          // A variable to keep track of the original html in the bulma navbar menu
          let currentHTML = $(this).html();
          // Expanding the bulma navbar "New Image..." link so the user can see the
          // image url that they are entering
          $("#new-image-link").addClass("expand-link");
          // Adding a new input field inside the navbar item for the user to enter
          // their image url
          $(this).html(
            '<input id="tempImgInput" class="input is-small" type="text" placeholder="Enter Image URL">'
          );
          // When enter is pressed, create the new image based on the selected size
          $(this).keypress(function (key) {
            let keyPressed = key.which;
            if (
              keyPressed == 13 &&
              typeof $(this).children().val() !== "undefined"
            ) {
              
              let url = $(this).children().val();
              count++;
              addImage(currentHTML, url, count, currentElement);
              $("#new-image-link").removeClass("expand-link");
              $(this).html(currentHTML);
              $(this).removeClass("clicked");
            } else if (keyPressed == 13) {
              $("#new-image-link").removeClass("expand-link");
              $(this).html(currentHTML);
              $(this).removeClass("clicked");
            }
          });
          // Focusing on the input field
          $("#tempImgInput").focus();
        }
      });

      // Adding a new chart from the bulma navbar menu based on the selected chart
      $("#charts a").click(function () {
        // Checking to see if the element has already been clicked. If the element
        // has been clicked, wait until the new photo is added to the builder page
        if ($(this).hasClass("clicked") == false) {
          // Adding a class to show that the element has been clicked
          $(this).addClass("clicked wrap-text");

          // A variable to keep track of the original html in the bulma navbar menu
          let parentID = $(this).attr("id");
          let currentHTML = $(this).html();

          // Expanding the bulma navbar "New Image..." link so the user can see the
          // image url that they are entering
          $("#new-chart-link").addClass("expand-link");

          // Adding a new input field inside the navbar item for the user to enter
          // their datapoints when they implement a chart
          $(this).html("");

          // Appending the title input field
          if (parentID != "scatter-plot-3d") {
            $(this).append(
              'Title: <input id="tempTitleInput" class="input is-small" type="text" placeholder="Enter Title">'
            );
          }

          // Appending the x and y input fields
          $(this).append(
            'x-values: <input id="tempXInput" class="input is-small" type="text" placeholder="Usage: 1,2,3,4,...">'
          );
          $(this).append(
            'y-values: <input id="tempYInput" class="input is-small" type="text" placeholder="Usage: 1,2,3,4,...">'
          );

          // Appending the z input field if the user selects the 3D scatter plot
          if (parentID == "scatter-plot-3d") {
            $(this).append(
              'z-values: <input id="tempZInput" class="input is-small" type="text" placeholder="Usage: 1,2,3,4,...">'
            );
          }

          // Appending the button that when clicked, will dynamically generate the chart
          $(this).append(
            '<button id="tempChartButton" class="button is-small">Generate</button>'
          );

          // When the dynamic button is clicked, call the function that will generate the corresponding chart
          $(document).on("click", "#tempChartButton", function () {
            let title = $("#tempTitleInput").val();
            let x = $("#tempXInput").val();
            let y = $("#tempYInput").val();

            if (parentID == "scatter-plot-2d") {
              count++;
              add2DPlot(title, x, y, count, currentElement);
            } else if (parentID == "bar-chart") {
              count++;
              addBarChart(title, x, y, count, currentElement);
            } else if (parentID == "scatter-plot-3d") {
              let z = $("#tempZInput").val();
              count++;
              add3DPlot(title, x, y, z, count, currentElement);
            }

            // Setting the navbar back to normal
            $("#new-chart-link").removeClass("expand-link");
            $(`#${parentID}`).html(currentHTML);
            $(`#${parentID}`).removeClass("clicked wrap-text");
          });
        }
      });
    },
    mobilejs() {
      $(".navbar-burger").click(function () {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
      });
    },
    // https://www.w3schools.com/jsref/event_onbeforeunload.asp
    //this gives a refresh warning so you dont loose progress by acciendtly reloading
    reloadWarning(){
      window.onbeforeunload = function() {
        return "Reloading this page will lead to loosing work that has not been exported";
    };
    },
  },
};
</script>

<style lang ="css">
#import_box h1 {
  font-size: 2em;
  font-weight: bold;
}
#import_box h1:hover,
#import_box p:hover,
#import_box a:hover,
#import_box img:hover {
  border: 1px solid black;
  border-radius: 5px;
}
#import_box h1,
#import_box p,
#import_box a,
#import_box img {
  border: 1px solid transparent;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  word-wrap: break-word;
}
/* The currently selected element */
.current {
  background: rgb(206, 206, 206);
  border-radius: 5px;
}
/* This class hides an element when it is being edited*/
.hidden {
  display: none;
}
/* These classes are used to align text */
.align-left {
  text-align: left;
}
.align-centre {
  text-align: center;

}
.align-right {
  text-align: right;
}
.SBS{
  float:left

}
/* This class is used to expand the navbar section when the user inputs a link */
.expand-link {
  width: 35rem;
}
/* These classes are used to size different images */
.Small {
  width: 10.0%;
  height: auto;
}
.Medium {
  width: 20.0%;
  height: auto;
}
.Large {
  width: 30.0%;
  height: auto;
}
/* These classes are used to change the font of an element */
.bold-font {
  font-weight: bold;
}
.italic-font {
  font-style: italic;
}
.underline-font {
  text-decoration: underline;
}

/* This class is used to allow multiple lines in a navbar item */
.wrap-text {
  flex-wrap: wrap;
}

.modal {
  background-color: rgba(0, 0, 0, 0.4);
}

/* Theses classes are used to change the look of save and new page modals */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  width: 80%;
  border-radius: 10px;
}

.modalPosition {
  margin-top: -14%;
}

#content {
  margin-top: 30%;
}

/* used to format the import, export, cancel buttons */
#file-import {
  margin: 0;
  margin-right: 7px;
}
#Exporting,
#file-import {
  margin-top: auto;
  margin-bottom: auto;
}

#exportButtons {
  margin-top: 10px;
}

/* these classes formats the cancel and save button within the new file modal */
#cancelNewFile {
  margin-left: 15px;
}
#cancel {
  margin-left: 15px;
}

/* formats the "Display Code" button */
.button {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
