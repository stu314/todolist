ToDo = Backbone.Model.extend({
  
    done: false,
    text: "Enter Text here"
    
});

var toDo = new ToDo();

ToDos = Backbone.Collection.extend({
  
    model: toDo
    
});


var toDos = new ToDos();
