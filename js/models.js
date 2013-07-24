ToDo = Backbone.Model.extend({
  
    done: false,
    text: "Enter Text here"
    
});

var toDo = new ToDo();

ToDos = Backbone.Collection.extend({
  
    model: ToDo
    
});


var toDos = new ToDos();
