

  // for Event

  var evt = {

      addListener: function(obj, type, fn, fn1) 
        {
          if (obj.addEventListener) 
          {
            obj.addEventListener(type, fn);
          } 
          else 
          {
            obj.attachEvent("on" + type, fn1);
          }
      }
  };

  evt.addListener(window, "load", calcule, calcule);

    

  var allQuestions = [
                      {question: ["What is the King of Animals?"], choices:["Lion", "Tiger", "Elephant", "Hiena"], correctAnswer: "choices1"}, 
                      {question: ["What is the fastest land animal in the world?"], choices: ["Bear", "Moose", "Noye", "Gepard"], correctAnswer: "choices4"}, 
                      {question: ["For which animal honey is a true desert?"], choices: ["Apes", "Eagle", "Bear", "Fox"], correctAnswer: "choices3"}, 
                      {question: ["How many legs does the spyder have?"], choices: [3, 10, 6, 8 ], correctAnswer: "choices4"},
                      {question: ["What is the tallest animal in the world?"], choices: ["Elephant", "Giraffe", "Shark", "Rhyno"], correctAnswer: "choices2"},
                      {question: ["A 'doe' is what kind of animal?"], choices: ["Cow", "Bird", "A female deer", "Bamboo"], correctAnswer: "choices3"},
                      {question: ["How many pairs of wings does a bee have?"], choices: [2,4,3,1], correctAnswer: "choices1"},
                      {question: ["What is the largest type of ‘big cat’ in the world?"], choices: ["Tiger", "Lion", "Leopard", "American Lion"], correctAnswer: "choices1"},
                      {question: ["The crocodile species is believed to have been around for how long?"], choices: ["20 million years", "A billion years", "200 million years", "20 billion years"], correctAnswer: "choices3"},
                      {question: ["Groups of lions are known as what?"], choices: ["Gangs", "Colonies", "Prides", "Hordes" ], correctAnswer: "choices3"},
                      {question: [], choices: [ ], correctAnswer:""}
                      ];

  var answers = [];

  var i =0;
  var total = 0;

    var pageMain = document.getElementById("pageA");
    var firstApperance = document.createElement("div");
    firstApperance.innerHTML = "<h1 style='color:#ffcc00'>Hello World!</h1>";
    firstApperance.innerHTML += "<h4>This is an easy quiz about animals!</h4>";
    firstApperance.innerHTML += "<h4>Are you ready?</h4>";
    firstApperance.innerHTML += "<form name='formA'>";
    firstApperance.innerHTML += "<input type='radio' name='radio1' value='Yes'/>Yes "  
    firstApperance.innerHTML += " <input type='radio' name='radio1' value='No'/>No"
    firstApperance.innerHTML += "<p>";
    firstApperance.innerHTML += "<input type='button' class='conf' name='btn1' value='Confirm' id='next0' onclick='page1()'/>" 
    firstApperance.innerHTML += "</p>";
    firstApperance.innerHTML += "</form>";
    
    pageMain.appendChild(firstApperance);
    pageMain.style.color = "#fff";

    var cl = document.getElementById("close_button");
    cl.innerHTML = "<input type='button' name='btn1' id='close' value='X' />"
    var close = document.getElementById("close");

    var styleObj = document.getElementsByName("btn1");
    var j;
    for (j = 0; j < styleObj.length; j++) 
    {
        evt.addListener(styleObj[j], "mouseover", function(e) {e.target.style.backgroundColor = 'rgba(255,204,0,0.7)'}, function(e) {e.target.style.backgroundColor = '#E37222'});
         evt.addListener(styleObj[j], "mouseout", function(e) {e.target.style.backgroundColor = 'rgba(31, 31, 20, 0.7)'}, function(e) {e.target.style.backgroundColor = '#000'});
         evt.addListener(styleObj[j], "click", function(e) 
          { if (e.target === close) {if(confirm("You want to close this application?")) {window.close()} }});
    }


  //background images

  function calcule() 
  {
    var bgImages1 = new Array();
    bgImages1[0] = "http://i.imgur.com/QXSRaRM.jpg";
    bgImages1[1] = "http://i.imgur.com/wlvAJYj.jpg";
    bgImages1[2] = "http://i.imgur.com/tkVytTB.jpg";
    bgImages1[3] = "http://i.imgur.com/Hetk0PJ.jpg";
    bgImages1[4] = "http://i.imgur.com/Z5WUYdd.jpg";

    var bgImages2 = new Array();
    bgImages2[0] = "http://i.imgur.com/hvHEyVq.jpg";
    bgImages2[1] = "http://i.imgur.com/Bldn06P.jpg";
    bgImages2[2] = "http://i.imgur.com/xBwR1KB.jpg";
    bgImages2[3] = "http://i.imgur.com/2GDYarb.jpg";
    bgImages2[4] = "http://i.imgur.com/gT8YkV3.jpg";
 

    function getRandomNumber(min, max) 
    {
      return Math.floor((Math.random() * max) + min);
    } 

    var lastAdNumber = localStorage.getItem("lastAdNumber");
    var nextNumber = getRandomNumber(0, bgImages1.length);
    if (lastAdNumber == null) 
    {
      lastAdNumber = nextNumber;
    } 
    else 
    {
      lastAdNumber = parseInt(lastAdNumber, 10);
      while (lastAdNumber == nextNumber) 
      {
        nextNumber = getRandomNumber(0, bgImages1.length);
      }
    }
    localStorage.setItem("lastAdNumber", nextNumber);

    if (window.innerWidth > 776)
    {
          document.body.style.backgroundImage = "url(" + bgImages1[nextNumber] + ")";
          
    }
    else 
    {
          document.body.style.backgroundImage = "url(" + bgImages2[nextNumber] + ")";
    }
     document.body.style.backgroundRepeat = "no-repeat";
     document.body.style.backgroundSize = "cover";
  }

  setInterval("calcule()", 10000);

  var textQuiz;
  var quizRect;

  function page1()
  {
    var choicet = document.getElementsByName("radio1");
    if(choicet[0].checked == false && choicet[1].checked == false)
    {
      alert("Please answer question!");
            return false;
    }
    else if (choicet[1].checked == true) 
    {
      pageMain.removeChild(firstApperance);
      var quizBody = document.getElementById("quiz1");
      var closeQuiz = document.createElement("div");
      fading(closeQuiz);
      closeQuiz.innerHTML = "<h3>You want to close this quiz?<h3>";
      closeQuiz.innerHTML += "<input type='button' name='eventStyle' value='Yes' id='next1'/>  ";
      closeQuiz.innerHTML += " <input type='button' name='eventStyle' value='No' id='next2'/>";
      closeQuiz.style.color = "#fff";
      closeQuiz.style.textAlign = "center";
      closeQuiz.style.opacity = 0;
      quizBody.appendChild(closeQuiz);


       var styleObj = document.getElementsByName("eventStyle");
       var j;
       for (j = 0; j < styleObj.length; j++) 
       {
          evt.addListener(styleObj[j], "mouseover", function(e) {e.target.style.backgroundColor = 'rgba(255,204,0,0.7)'}, function(e) {e.target.style.backgroundColor = '#E37222'});
          evt.addListener(styleObj[j], "mouseout", function(e) {e.target.style.backgroundColor = 'rgba(31, 31, 20, 0.7)'}, function(e) {e.target.style.backgroundColor = '#000'});
          evt.addListener(styleObj[j], "click", function(e) {
                                              if (e.target === document.getElementById("next1")) 
                                                { if (confirm ("By clicking ok the quiz application will close!")) {window.close()} } 
                                              else if (e.target === document.getElementById("next2")) 
                                                { if (confirm ("By clicking ok you will come back to the main page!")) { quizBody.removeChild(closeQuiz); pageMain.appendChild(firstApperance)} } } );
       }
    }
    else {
      pageMain.removeChild(firstApperance);
      fading(quiz);

      var title = document.getElementById("pageA");
      title.innerHTML = "<h1 style='color:#ffcc00'>Quiz</h1>";

      quizRect = document.getElementById("quiz1");
      quizRect.className = "designQuiz";

      textQuiz = document.createElement("div");
      textQuiz.style.textAlign = "center";
      textQuiz.innerHTML = "<p id='demo'></p>";
      textQuiz1 = document.createElement("form")
      textQuiz1.setAttribute("name", "form0");
      textQuiz1.innerHTML = "<p> Welcome! Please, before you start the quiz write your name and save it. Thank you! </p>";
      textQuiz2 = document.createElement("div");
      textQuiz2.innerHTML = "<input type='text' style='text-align:center; font-size:16px' id='name' name='txt1' value='Type your name and save!'/>" 
      
      textQuiz.appendChild(textQuiz1);
      textQuiz.appendChild(textQuiz2);
      textQuiz3 = document.createElement("div");
      textQuiz3.innerHTML += "<input type='button' name='next' value='Quiz' id='next' onclick='main()'/>  ";
      textQuiz3.innerHTML += " <input type='button' name ='next' value='Save name' id='next' onclick='storeName()'/>";
      textQuiz.appendChild(textQuiz3);
      quizRect.appendChild(textQuiz);

     
      if (document.getElementById("name").addEventListener)
      {
        document.getElementById("name").addEventListener("blur", function() {if (document.getElementById("name").value == '') {document.getElementById("name").value = 'Type your name and save!'}});
        document.getElementById("name").addEventListener("focus", function() {if (document.getElementById("name").value == 'Type your name and save!') {document.getElementById("name").value = ''}});
      }
      else
      {
        document.getElementById("name").attachEvent("onblur",function() {if (document.getElementById("name").value == '') {document.getElementById("name").value = 'Type your name and save!'}});
        document.getElementById("name").attachEvent("onfocus", function() {if (document.getElementById("name").value == 'Type your name and save!') {document.getElementById("name").value = ''}});
      };

      
      /*evt.addListener(document.getElementById("name"), "blur", function() {if (document.getElementById("name").value == '') {document.getElementById("name").value = 'Type your name and save!'}}, function() {if (document.getElementById("name").value == '') {document.getElementById("name").value = 'Type your name and save!'}} );
      evt.addListener(styleObj, "focus", function() {if (document.getElementById("name").value = 'Type your name and save!') {document.getElementById("name").value == ''}}, function() {if (document.getElementById("name").value = 'Type your name and save!') {document.getElementById("name").value == ''}});*/
      
      

      var styleObj1 = document.getElementsByName("next");
      var n;
      for (n = 0; n < styleObj1.length; n++) 
      {
          evt.addListener(styleObj1[n], "mouseover", function(e) {e.target.style.backgroundColor = 'rgba(255,204,0,0.7)'}, function(e) {e.target.style.backgroundColor = '#E37222'});
          evt.addListener(styleObj1[n], "mouseout", function(e) {e.target.style.backgroundColor = 'rgba(31, 31, 20, 0.7)'}, function(e) {e.target.style.backgroundColor = '#000'});
      };

      
      //if localStorage is defined show stored name
      if (typeof(Storage !== "undefined")) 
      {
          var welcomename = "";
          if (localStorage.getItem("name")) 
          {
              name = localStorage.getItem("name");
              var welcomename = ", " + name;
              document.getElementById("demo").innerHTML = "Welcome back" + welcomename + "!";
              textQuiz.removeChild(textQuiz1);
              textQuiz.removeChild(textQuiz2);
              textQuiz.removeChild(textQuiz3);
              textQuiz2 = document.createElement("input");
              textQuiz2.setAttribute("type", "text");
              textQuiz2.setAttribute("style", "text-align:center; font-size: 16px")
              textQuiz2.setAttribute("id", "name");
              textQuiz2.setAttribute("name", "txt1");
              textQuiz2.setAttribute("value", "Type new name and save!");
              textQuiz.appendChild(textQuiz2);

              if (textQuiz2.addEventListener)
              {
                  textQuiz2.addEventListener("blur",function() {if (textQuiz2.value == '') {textQuiz2.value = 'Type new name and save!'}});
                  textQuiz2.addEventListener("focus", function() {if (textQuiz2.value == 'Type new name and save!') {textQuiz2.value = ''}});
              }
              else
              {
                  textQuiz2.attachEvent("onblur",function() {if (textQuiz2.value == '') {textQuiz2.value = 'Type new name and save!'}});
                  textQuiz2.attachEvent("onfocus", function() {if (textQuiz2.value == 'Type new name and save!') {textQuiz2.value = ''}});
              } 

              /*var styleObj = document.getElementById("name");
              evt.addListener(styleObj, "blur", function(e) {if (e.target.value == '') {e.target.value = 'Type new name and save!'}} );
              evt.addListener(styleObj, "focus", function(e) {if (e.target.value = 'Type new name and save!') {e.target.value == ''}} ); */

              textQuiz3 = document.createElement("div");
              textQuiz3.innerHTML += "<input type='button' name='next' value='Quiz' id='next' onclick='main()'/>  ";
              textQuiz3.innerHTML += " <input type='button' name='next' value='Save name' id='next' onclick='submitChange()'/>";
             
              textQuiz.appendChild(textQuiz3);

              for (n = 0; n < styleObj1.length; n++) 
              {
                evt.addListener(styleObj1[n], "mouseover", function(e) {e.target.style.backgroundColor = 'rgba(255,204,0,0.7)'}, function(e) {e.target.style.backgroundColor = '#E37222'});
                evt.addListener(styleObj1[n], "mouseout", function(e) {e.target.style.backgroundColor = 'rgba(31, 31, 20, 0.7)'}, function(e) {e.target.style.backgroundColor = '#000'});
              }
   
          }
      
      }
      else
      {
        document.getElementById("demo").innerHTML = "Sorry, your browser does not support web storage...";
      }
    }
  }
  
  //fun to store user name for the first time
  function storeName()
  {
    if (isNaN(document.getElementById("name").value) === false || document.getElementById("name").value === "Type your name and save!" || document.getElementById("name").value === "" || document.getElementById("name").value === null)
    {
       alert("Please, write correct name!");
    }
    else if (confirm("Your name is " + document.getElementById("name").value + "?"))
    {
       localStorage.setItem("name", name);
       alert(document.getElementById("name").value + ", your name is saved, reload the page to get your updated welcome!");
    }
  } 
 
 
  //fun to store user name if he wants to type other name

  function submitChange()
  {
      newname = document.getElementById("name").value;
      if (isNaN(newname) === false || newname==="Type new name and save!")
      {
        alert("Please, your new name must be correct!");
      }

      else if (newname == null || newname == "")
      { 
          alert("Name must be filled out");
          return false;
      }
      else
      {
            if (localStorage.getItem("name")) 
            {
                //if the name is already stored, ask the user to confirm they wish to update it
                var name = localStorage.getItem("name");
                if (confirm("Your name is already stored as " + name + ". Are you sure you want to change it to " + newname + "?")) 
                {
                    localStorage.setItem("name", newname);
                    alert("Your name was updated, reload the page to get your updated welcome!");
                }    
                else 
                {
                    alert("OK, I'll keep calling you " + name);
                }
            } 
            else 
            {
                localStorage.setItem("name", newname);
                alert("Your name has been stored as: " + newname + ". Reload the page to receive your new welcome!");
            }
      }
  }


  function main() 
  { 
    //If you have not already stored your name or your name is in the correct form.
    if (localStorage.getItem("name") === false)
    {
        if (document.getElementById("name").value === "" ||  document.getElementById("name").value === null || isNaN(document.getElementById("name").value) === false || document.getElementById("name").value === "Type your name and save!" || document.getElementById("name").value === "Type new name and save!")
          {
              alert("Please write your name in the field above and click Save name. Thank you!");
              return false;
          }
    }
    
    //the start of the questions
    else 
    {
      if(textQuiz)
      {
        quizRect.removeChild(textQuiz);  //remove var textQuiz from display list
        textQuiz = null //remove reference to the textQuiz, mark it for garbage collection
      };

      question = allQuestions[i]["question"];
      chA = allQuestions[i]["choices"][0];
      chB = allQuestions[i]["choices"][1]; 
      chC = allQuestions[i]["choices"][2];
      chD = allQuestions[i]["choices"][3];
      y = document.createElement("div");


      fading(y);
    
      y.innerHTML = "<h3>" + question + "</h3>";
      y.innerHTML += "<input type='radio' name='choices' value='choices1' id='btn1' /> " + chA + "<br/>";
      y.innerHTML += "<input type='radio' name='choices' value='choices2' id='btn2' /> " + chB + "<br/>";
      y.innerHTML += "<input type='radio' name='choices' value='choices3' id='btn3' /> " + chC + "<br/>";
      y.innerHTML += "<input type='radio' name='choices' value='choices4' id='btn4' /> " + chD + "<br/>";
      quizRect.appendChild(y);

      //for the first quetion
      if (i==0)
      {
        y.innerHTML += "<input type='button' name ='next_previous' value='Next >>' id='next' onclick='next()' /> ";
        var styleObj2 = document.getElementsByName('next_previous');
        for (j = 0; j < styleObj2.length; j++) 
              {
                evt.addListener(styleObj2[j], "mouseover", function(e) {e.target.style.backgroundColor = 'rgba(255,204,0,0.7)'}, function(e) {e.target.style.backgroundColor = '#E37222'});
                evt.addListener(styleObj2[j], "mouseout", function(e) {e.target.style.backgroundColor = 'rgba(31, 31, 20, 0.7)'}, function(e) {e.target.style.backgroundColor = '#000'});
              }

      }
    
      // after the last question appearce the result
      else if (i == 10)
      {
        z = document.createElement("p");
        fading(z);

        z.style.textAlign = "center";

        z1 = "<span style='color: #000; font-weight:bold'>" + total + "</span>" + " ! ";
               
        if (total >= 9)
        {
          z.innerHTML = "Congratulations! Your total result is " + z1;
        }
        else if (total >= 6)
        {
          z.innerHTML = "Not bad. Your total result is " + z1;
        }
        else
        {
          z.innerHTML = "Your total result is " + z1;
        }



      //All user scores, including the last one.

        function all_Scores ()
        {
          var scores = [];
            
          /*if (scores != []) {
          scores = JSON.parse(localStorage.getItem("scores"));
          }
          */
          if (JSON.parse(localStorage.getItem("scores"))) {
              
              scores = JSON.parse(localStorage.getItem("scores"));
              scores.push(total);
          };

          //scores.push(total);
          
          localStorage.setItem("scores", JSON.stringify(scores));
          var stored_datas = JSON.parse(localStorage.getItem("scores"));
          console.log(scores);

          if (stored_datas.length > 10)
          {
            var allScores = "<span style='color: #000; font-weight:bold'>" + stored_datas.slice(stored_datas.length-5, stored_datas.length) + "</span>";
          }

          else {
                  allScores = "<span style='color: #000; font-weight:bold'>" + stored_datas + "</span>";
          }

          z.removeChild(document.getElementById("allScores"));
          
          z.innerHTML += "Your scores are: " + allScores + " !";
          
        };


        
        z.innerHTML += "<br /><input type='button' id='allScores' value='Scores'/>";
        quizRect.appendChild(z);
        var styleObj3 = document.getElementById("allScores");
        evt.addListener(styleObj3, "mouseover", function(e) {e.target.style.backgroundColor = 'rgba(255,204,0,0.7)'}, function(e) {e.target.style.backgroundColor = '#E37222'});
        evt.addListener(styleObj3, "mouseout", function(e) {e.target.style.backgroundColor = 'rgba(31, 31, 20, 0.7)'}, function(e) {e.target.style.backgroundColor = '#000'});
        evt.addListener(styleObj3, "click", all_Scores, all_Scores);
        
        quizRect.removeChild(y);
      }  

      //from the 2nd question 2 buttons: next and previous
      else if (i>=1)
      {
         y.innerHTML += " <input type='button' name ='next_previous' name ='next_previous' value='<< Previous' id='next' onclick='previous()'/>";
         y.innerHTML += "<input type='button' name ='next_previous' value='Next >>' id ='next' onclick='next()' />";
         var styleObj2 = document.getElementsByName('next_previous');
         for (j = 0; j < styleObj2.length; j++) 
              {
                evt.addListener(styleObj2[j], "mouseover", function(e) {e.target.style.backgroundColor = 'rgba(255,204,0,0.7)'}, function(e) {e.target.style.backgroundColor = '#E37222'});
                evt.addListener(styleObj2[j], "mouseout", function(e) {e.target.style.backgroundColor = 'rgba(31, 31, 20, 0.7)'}, function(e) {e.target.style.backgroundColor = '#000'});
              }

      }

   
      //previous given answers will stay checked if you return to them
      if (typeof answers[i] !== undefined) 
      {  
        var radios = document.getElementsByName('choices');
        var rLen = radios.length, j;
        for (j = 0; j < rLen; j++) 
        {
            if (answers[i] === radios[j].value) 
            {
                radios[j].checked = true;   
            };
        };
      };        
  }
}

  var choice;
  choice = document.getElementsByName("choices");
  var checkedAnswer = null;

  //next button
  function next()
  {
    
      fading(y);

      if ((choice[0].checked == false) && (choice[1].checked == false) && (choice[2].checked == false) && (choice[3].checked == false))
      {
          alert("Please answer question");
          return false;
      }

      
      else
      { 
           choice = document.getElementsByName("choices");
           var checkedAnswer = null;
           for (var j = 0; j < choice.length; j++) 
           {
              if(choice[j].checked) 
              {
                answers[i] = choice[j].value;
              }
            }
        
           if (answers[i] === allQuestions[i].correctAnswer) 
           {
             ++total;
           };
        i = i + 1;
        quizRect.removeChild(y);
        main();   
      }     
  }

  //previous button
  function previous()
  {
    if(i==0)
    {
      alert("It is the first question");
      return false;
    };
    
    choice = document.getElementsByName("choices");
    var checkedAnswer = null;
    for (var j = 0; j < choice.length; j++) 
    {
       if(choice[j].checked) 
       {
          answers[i] = choice[j].value;
        }; 
    };

    i=i-1;
    quizRect.removeChild(y);
    main();
  };



 //appereance animation 
 function fading (r)
 {
  function prva (s) {
    //s.style.opacity=0.1;
    return function (f) {
         var setInt = setInterval(function() {
            s.style.opacity = f/10;
            f++; if (f==10) {clearInterval(setInt)}; 
          } , 30);
    };
  }
  var fade = prva(r);
  fade(-10);
}



