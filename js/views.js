var View = Backbone.View.extend({
    initialize: function(){
        this.listenTo(this.model, 'change', this.render, this);
        this.$el.appendTo($('#wrapper'));
        this.render();
    },
    
    tagName:'div',
    className:'toDo',
    
    events:{
        'dblclick .text':   'markComplete',
        'click .text' : 'popUp'
    },
    
    markComplete: function() {
        var done = this.model.get('done');
        this.model.set({done: !done});
    },
    
    popUp: function() {
        new PopUpView({model:this.model})
    },
    
    render: function() {
            var source   = $("#todo-template").html();
            var template = Handlebars.compile(source);
        var html = template(this.model.toJSON());
        this.$el.html(html);
    },
        
})
        
var PopUpView = Backbone.View.extend({
        tagName:'div',
        className:'popUp',
    
    events:{
        'click .button.edit': 'saveTask',
        'click .button.delete': 'deleteTask',
        'click .button.close': 'close'
    },
    
   
  
                                     
    saveTask: function(){ 
        var edittedText = $('input').val();
        this.model.set({text:edittedText})
    },
    
    deleteTask: function(){
        toDos.remove(this.model);
    },
    close: function(){
       
    }
                        
                       
                       
})

var AppView = Backbone.View.extend({
    el:"#wrapper",
    
    initialize:function(){
        console.log('appview created');
    },
    
    events: {
          'click button.add': 'addTask'
    },
    
     addTask: function () { 
         var todoText = $('#text').val()
         console.log(todoText);
        toDos.add({
            text: todoText
        
        })
    console.log("Add task");
     }

})
$(function(){
    var app = new AppView()
})